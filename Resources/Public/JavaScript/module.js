/**
 * System > Agentation: the stored-annotations card.
 *
 * Talks to the same-origin AJAX proxy (Configuration/Backend/AjaxRoutes.php
 * -> ApiProxyController), so the browser never calls http://localhost:4747
 * directly, which an HTTPS backend would block as mixed content. Lists the
 * annotations of the sync server and of this browser's localStorage, and
 * deletes one or all of them.
 *
 * A native ES module from the import map; labels come from the
 * agentation.mod translation domain.
 */
import AjaxRequest from '@typo3/core/ajax/ajax-request.js';
import Modal from '@typo3/backend/modal.js';
import Notification from '@typo3/backend/notification.js';
import { SeverityEnum } from '@typo3/backend/enum/severity.js';
import labels from '~labels/agentation.mod';
import {
  BROADCAST_CHANNEL,
  clearLocalAnnotations,
  collectLocalAnnotations,
  removeLocalAnnotation,
} from '@webconsulting/agentation/storage.js';

const ROUTES = TYPO3.settings.ajaxUrls;
const MAX_COMMENT_LENGTH = 200;
const STATUS_BADGES = {
  pending: 'badge-warning',
  acknowledged: 'badge-info',
  resolved: 'badge-success',
  dismissed: 'badge-default',
};

const card = document.querySelector('[data-agentation-annotations]');

function part(name) {
  return card?.querySelector(`[data-agentation-${name}]`) ?? null;
}

function errorMessage(code) {
  const key = `errors.${code}`;
  try {
    return labels.get(key);
  } catch {
    return labels.get('errors.requestFailed');
  }
}

/* ------------------------------------------------------------------ *
 * Sync server (through the PHP proxy) and this browser's storage       *
 * ------------------------------------------------------------------ */

async function fetchServerAnnotations() {
  try {
    const data = await (await new AjaxRequest(ROUTES.agentation_api_list).get()).resolve();
    const annotations = Array.isArray(data) ? data : data?.annotations;
    return { ok: true, annotations: Array.isArray(annotations) ? annotations : [] };
  } catch (error) {
    return { ok: false, annotations: [], error: errorMessage(await errorCode(error)) };
  }
}

/**
 * The proxy answers failures with {"error": "<code>"}; AjaxRequest rejects
 * with the response of any non-2xx answer.
 */
async function errorCode(error) {
  try {
    const body = await error?.response?.json();
    return typeof body?.error === 'string' ? body.error : 'requestFailed';
  } catch {
    return 'requestFailed';
  }
}

async function deleteServerAnnotation(id) {
  try {
    const data = await (await new AjaxRequest(ROUTES.agentation_api_delete).post({ id })).resolve();
    return data?.ok !== false;
  } catch {
    return false;
  }
}

async function deleteAllServerAnnotations() {
  try {
    const data = await (await new AjaxRequest(ROUTES.agentation_api_delete_all).post({})).resolve();
    return { deleted: Number(data?.deleted ?? 0), failed: Number(data?.failed ?? 0) };
  } catch {
    return { deleted: 0, failed: 0 };
  }
}

/**
 * Server and local annotations merged by id; the server wins. Each entry
 * carries its origin so a delete knows which store to hit.
 */
function mergeAnnotations(server, local) {
  const byId = new Map();
  server.filter((annotation) => annotation?.id).forEach((annotation) => byId.set(annotation.id, { annotation, origin: 'server' }));
  local
    .filter((annotation) => annotation?.id && !byId.has(annotation.id))
    .forEach((annotation) => byId.set(annotation.id, { annotation, origin: 'local' }));
  return [...byId.values()];
}

/**
 * Tells every other tab and frame (toolbar widgets included) about a
 * deletion, so nobody re-pushes the annotation from its own localStorage.
 */
function broadcast(message) {
  if (typeof BroadcastChannel === 'undefined') {
    return;
  }
  const channel = new BroadcastChannel(BROADCAST_CHANNEL);
  channel.postMessage(message);
  channel.close();
}

/* ------------------------------------------------------------------ *
 * Rendering                                                            *
 * ------------------------------------------------------------------ */

function element(tag, className = '', text = undefined) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function truncate(value, max) {
  const text = String(value ?? '').trim();
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function pageLabel(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return `${url.pathname}${url.search}`;
  } catch {
    return String(rawUrl);
  }
}

function statusBadge({ annotation, origin }) {
  if (origin === 'local') {
    return element('span', 'badge badge-default', labels.get('annotations.status.localOnly'));
  }
  const status = STATUS_BADGES[annotation.status] ? annotation.status : 'pending';
  return element('span', `badge ${STATUS_BADGES[status]}`, labels.get(`annotations.status.${status}`));
}

function renderRow(entry) {
  const { annotation, origin } = entry;
  const row = element('tr');

  row.append(element('td', 'agentation-annotation-comment', truncate(annotation.comment || labels.get('annotations.noComment'), MAX_COMMENT_LENGTH)));

  const elementCell = element('td');
  if (annotation.element) {
    elementCell.append(element('code', '', truncate(annotation.element, 60)));
  }
  row.append(elementCell);

  const pageCell = element('td');
  if (annotation.url) {
    const link = element('a', 'agentation-annotation-page', pageLabel(annotation.url));
    link.href = annotation.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = annotation.url;
    pageCell.append(link);
  }
  row.append(pageCell);

  const statusCell = element('td');
  statusCell.append(statusBadge(entry));
  row.append(statusCell);

  const actionsCell = element('td', 'col-control');
  const button = element('button', 'btn btn-default');
  button.type = 'button';
  button.title = labels.get('annotations.delete');
  button.setAttribute('aria-label', labels.get('annotations.delete'));
  button.dataset.agentationAction = 'delete';
  button.dataset.agentationId = annotation.id;
  button.dataset.agentationOrigin = origin;
  const icon = document.createElement('typo3-backend-icon');
  icon.setAttribute('identifier', 'actions-delete');
  icon.setAttribute('size', 'small');
  button.append(icon);
  actionsCell.append(button);
  row.append(actionsCell);

  return row;
}

function show(name, visible) {
  const node = part(name);
  if (node) {
    node.hidden = !visible;
  }
}

async function refresh() {
  if (!card) {
    return;
  }
  const summary = part('summary');
  summary.textContent = labels.get('annotations.loading');

  const result = await fetchServerAnnotations();
  const entries = mergeAnnotations(result.annotations, collectLocalAnnotations());
  const server = entries.filter((entry) => entry.origin === 'server').length;
  const local = entries.length - server;

  summary.textContent = entries.length > 0
    ? labels.get('annotations.summary', { total: entries.length, server, local })
    : '';
  part('error-message').textContent = result.ok ? '' : labels.get('annotations.error', { message: result.error });
  show('error', !result.ok);
  show('empty', result.ok && entries.length === 0);
  show('table', entries.length > 0);
  part('rows').replaceChildren(...entries.map(renderRow));

  const deleteAll = card.querySelector('[data-agentation-action="delete-all"]');
  deleteAll.disabled = entries.length === 0;
}

/* ------------------------------------------------------------------ *
 * Actions (data-agentation-action="...")                               *
 * ------------------------------------------------------------------ */

async function reload(button) {
  button.disabled = true;
  try {
    await refresh();
  } finally {
    button.disabled = false;
  }
}

async function deleteOne(button) {
  const { agentationId: id, agentationOrigin: origin } = button.dataset;
  button.disabled = true;
  let deleted;
  if (origin === 'local') {
    deleted = removeLocalAnnotation(id);
  } else {
    deleted = await deleteServerAnnotation(id);
    if (deleted) {
      // A stale localStorage copy with the same id goes as well.
      removeLocalAnnotation(id);
    }
  }
  if (deleted) {
    broadcast({ type: 'annotation:delete', id });
    Notification.success(labels.get('notification.deleted'));
  } else {
    Notification.error(labels.get('notification.deleteFailed'));
    button.disabled = false;
  }
  await refresh();
}

async function deleteAllConfirmed() {
  const local = clearLocalAnnotations();
  const server = await deleteAllServerAnnotations();
  broadcast({ type: 'annotations:delete-all' });
  if (server.failed === 0) {
    Notification.success(
      labels.get('notification.deletedAll'),
      labels.get('notification.deletedAll.message', { server: server.deleted, local }),
    );
  } else {
    Notification.warning(
      labels.get('notification.deletedAll'),
      labels.get('notification.deletedAll.partial', { failed: server.failed }),
    );
  }
  await refresh();
}

async function deleteAll(button) {
  const total = mergeAnnotations((await fetchServerAnnotations()).annotations, collectLocalAnnotations()).length;
  if (total === 0) {
    await refresh();
    return;
  }
  const modal = Modal.confirm(
    labels.get('deleteAll.title'),
    labels.get('deleteAll.message', { total }),
    SeverityEnum.warning,
    [
      { text: labels.get('deleteAll.cancel'), active: true, btnClass: 'btn-default', name: 'cancel' },
      { text: labels.get('deleteAll.confirm'), btnClass: 'btn-warning', name: 'ok' },
    ],
  );
  modal.addEventListener('confirm.button.cancel', () => modal.hideModal());
  modal.addEventListener('confirm.button.ok', async () => {
    modal.hideModal();
    button.disabled = true;
    await deleteAllConfirmed();
  });
}

const ACTIONS = { reload, delete: deleteOne, 'delete-all': deleteAll };

card?.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-agentation-action]');
  const action = ACTIONS[trigger?.dataset.agentationAction];
  if (action) {
    event.preventDefault();
    action(trigger);
  }
});

refresh();
