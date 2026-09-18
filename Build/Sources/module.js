/**
 * System > Agentation backend module.
 *
 * Talks to the same-origin AJAX proxy (Configuration/Backend/AjaxRoutes.php
 * -> ApiProxyController) so the browser never calls http://localhost:4747
 * directly, which the HTTPS backend would block as mixed content.
 *
 *   - copy the MCP JSON / Claude CLI snippet to the clipboard
 *   - list stored annotations (sync server + this browser's localStorage)
 *   - delete one annotation, or every stored annotation in both stores
 *
 * Labels come from TYPO3.lang (module.* units of locallang_mod.xlf, exposed
 * by ModuleController); the proxy returns error codes that are translated
 * here (module.errors.*).
 */
import Notification from '@typo3/backend/notification.js';
import AjaxRequest from '@typo3/core/ajax/ajax-request.js';
import { lll } from '@typo3/core/lit-helper.js';
import { copyToClipboard } from './clipboard.js';
import {
  BROADCAST_CHANNEL,
  clearLocalAnnotations,
  collectLocalAnnotations,
  removeLocalAnnotation,
} from './storage.js';

const ROUTES = TYPO3.settings.ajaxUrls;
const MAX_COMMENT_PREVIEW = 140;
const STATUS_BADGES = { pending: 'bg-warning', resolved: 'bg-success', dismissed: 'bg-secondary' };

const label = (key) => lll(`module.${key}`) || key;
const plural = (count, singular, pluralKey) => label(count === 1 ? singular : pluralKey);
const errorMessage = (code) => (code ? lll(`module.errors.${code}`) || code : label('annotations.requestFailed'));

const elements = {
  list: () => document.querySelector('[data-agentation-list]'),
  counter: () => document.querySelector('[data-agentation-counter]'),
  deleteAll: () => document.querySelector('[data-agentation-action="delete-all"]'),
};

/* ------------------------------------------------------------------ *
 * Sync server (through the PHP proxy)                                  *
 * ------------------------------------------------------------------ */

async function fetchServerAnnotations() {
  if (!ROUTES.agentation_api_list) {
    return { ok: false, annotations: [], error: label('annotations.routeNotRegistered') };
  }
  try {
    const data = await (await new AjaxRequest(ROUTES.agentation_api_list).get()).resolve();
    if (Array.isArray(data)) {
      return { ok: true, annotations: data };
    }
    if (Array.isArray(data?.annotations)) {
      return { ok: true, annotations: data.annotations };
    }
    return data?.error
      ? { ok: false, annotations: [], error: errorMessage(data.error) }
      : { ok: true, annotations: [] };
  } catch (err) {
    return { ok: false, annotations: [], error: err?.message || errorMessage() };
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
 * Tell every other tab/iframe (toolbar widgets included) about a deletion so
 * nobody re-pushes the annotation from its own localStorage.
 */
function broadcast(payload) {
  if (typeof BroadcastChannel === 'undefined') {
    return;
  }
  try {
    new BroadcastChannel(BROADCAST_CHANNEL).postMessage(payload);
  } catch {
    // Channel unavailable: the widgets pick the change up on their next sync.
  }
}

/**
 * Server and local annotations merged by id; the server wins. Each entry
 * carries __origin so the row knows which store a delete has to hit.
 */
function mergeAnnotations(server, local) {
  const byId = new Map();
  server.filter((a) => a?.id).forEach((a) => byId.set(a.id, { ...a, __origin: 'server' }));
  local.filter((a) => a?.id && !byId.has(a.id)).forEach((a) => byId.set(a.id, { ...a, __origin: 'local' }));
  return [...byId.values()];
}

/* ------------------------------------------------------------------ *
 * Rendering                                                            *
 * ------------------------------------------------------------------ */

const truncate = (value, max) => {
  const text = String(value ?? '').trim();
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
};

function shortUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return `${url.pathname}${url.search ? '?…' : ''}` || url.hostname;
  } catch {
    return String(rawUrl);
  }
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function renderMessage(container, message, { error = false } = {}) {
  container.replaceChildren();
  const item = element('li', error ? 'list-group-item' : 'list-group-item text-body-secondary');
  if (error) {
    const callout = element('div', 'callout callout-danger mb-0');
    callout.appendChild(element('div', 'callout-body', message));
    item.appendChild(callout);
  } else {
    item.textContent = message;
  }
  container.appendChild(item);
}

function renderStatusBadge(annotation) {
  if (annotation.__origin === 'local') {
    return element('span', 'badge bg-secondary', label('annotations.localOnly'));
  }
  if (!annotation.status) {
    return null;
  }
  return element('span', `badge ${STATUS_BADGES[annotation.status] || 'bg-info'}`, annotation.status);
}

function renderRow(annotation) {
  const row = element('li', 'list-group-item agentation-annotation');
  row.dataset.id = annotation.id;

  const main = element('div', 'agentation-annotation__main');
  main.appendChild(element('p', 'agentation-annotation__comment mb-1', truncate(annotation.comment || label('annotations.emptyComment'), MAX_COMMENT_PREVIEW)));
  const meta = element('div', 'agentation-annotation__meta text-body-secondary');
  if (annotation.element) {
    meta.appendChild(element('code', 'agentation-annotation__element', truncate(annotation.element, 60)));
  }
  if (annotation.url) {
    if (meta.childElementCount > 0) {
      meta.appendChild(document.createTextNode(' · '));
    }
    const link = element('a', 'agentation-annotation__url', shortUrl(annotation.url));
    link.href = annotation.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    meta.appendChild(link);
  }
  if (meta.childElementCount > 0) {
    main.appendChild(meta);
  }
  row.appendChild(main);

  const status = element('div', 'agentation-annotation__status');
  const badge = renderStatusBadge(annotation);
  if (badge) {
    status.appendChild(badge);
  }
  row.appendChild(status);

  const actions = element('div', 'agentation-annotation__actions');
  const button = element('button', 'btn btn-sm btn-outline-danger');
  button.type = 'button';
  button.title = label('annotations.deleteOne');
  button.dataset.agentationAction = 'delete';
  button.dataset.agentationId = annotation.id;
  button.dataset.agentationOrigin = annotation.__origin;
  button.innerHTML = '<typo3-backend-icon identifier="actions-delete" size="small"></typo3-backend-icon>';
  actions.appendChild(button);
  row.appendChild(actions);

  return row;
}

function renderCounter(serverCount, localCount, failed) {
  const counter = elements.counter();
  if (!counter) {
    return;
  }
  const total = serverCount + localCount;
  counter.classList.toggle('text-danger', failed && total === 0);
  if (failed && total === 0) {
    counter.textContent = label('annotations.errorPrefix');
    return;
  }
  if (total === 0) {
    counter.textContent = label('annotations.empty');
    return;
  }
  const parts = [];
  if (serverCount > 0) {
    parts.push(`${serverCount} ${label('annotations.onServer')}`);
  }
  if (localCount > 0) {
    parts.push(`${localCount} ${label('annotations.local')}`);
  }
  counter.textContent = `${total} ${plural(total, 'annotations.singular', 'annotations.plural')} (${parts.join(' + ')})`;
}

async function refresh() {
  const list = elements.list();
  if (list) {
    renderMessage(list, label('annotations.loading'));
  }

  const result = await fetchServerAnnotations();
  const merged = mergeAnnotations(result.annotations, collectLocalAnnotations());
  const serverCount = result.annotations.length;
  renderCounter(serverCount, merged.length - serverCount, !result.ok);

  if (list) {
    if (!result.ok && merged.length === 0) {
      renderMessage(list, `${label('annotations.errorPrefix')}: ${result.error}`, { error: true });
    } else if (merged.length === 0) {
      renderMessage(list, label('annotations.emptyLong'));
    } else {
      list.replaceChildren(...merged.map(renderRow));
    }
  }

  const deleteAll = elements.deleteAll();
  if (deleteAll) {
    deleteAll.disabled = merged.length === 0;
  }
}

/* ------------------------------------------------------------------ *
 * Actions (data-agentation-action="...")                               *
 * ------------------------------------------------------------------ */

async function copy(button) {
  const source = document.querySelector(button.dataset.agentationTarget || '');
  const text = source?.value ?? source?.textContent ?? '';
  if (!text) {
    Notification.warning('Agentation', label('notifications.nothingToCopy'));
    return;
  }
  try {
    await copyToClipboard(text);
    Notification.success('Agentation', label('notifications.copySuccess'));
  } catch (err) {
    Notification.error('Agentation', `${label('notifications.copyFailedPrefix')} ${err.message}`);
  }
}

async function reload(button) {
  button.disabled = true;
  button.classList.add('agentation-spinning');
  try {
    await refresh();
  } finally {
    button.classList.remove('agentation-spinning');
    button.disabled = false;
  }
}

async function deleteOne(button) {
  const { agentationId: id, agentationOrigin: origin } = button.dataset;
  if (!id) {
    return;
  }
  button.disabled = true;
  let ok;
  if (origin === 'local') {
    ok = removeLocalAnnotation(id);
  } else {
    ok = await deleteServerAnnotation(id);
    if (ok) {
      // Sweep a stale localStorage copy with the same id as well.
      removeLocalAnnotation(id);
    }
  }
  if (ok) {
    broadcast({ type: 'annotation:delete', id });
    Notification.success('Agentation', label('notifications.annotationDeleted'));
  } else {
    Notification.error('Agentation', label('notifications.deleteFailed'));
    button.disabled = false;
  }
  await refresh();
}

async function deleteAll(button) {
  button.disabled = true;
  const localCount = collectLocalAnnotations().length;
  const serverCount = (await fetchServerAnnotations()).annotations.length;
  const total = serverCount + localCount;
  if (total === 0) {
    Notification.info('Agentation', label('notifications.noneToDelete'));
    button.disabled = false;
    return;
  }
  const breakdown = serverCount > 0
    ? ` (${serverCount} ${label('annotations.onServer')}, ${localCount} ${label('annotations.local')})`
    : '';
  const confirmed = window.confirm(
    `${label('notifications.deleteAllConfirm')} ${total} ${plural(total, 'annotations.singular', 'annotations.plural')}${breakdown}?\n\n${label('notifications.deleteAllWarning')}`,
  );
  if (!confirmed) {
    button.disabled = false;
    return;
  }

  const localKeys = clearLocalAnnotations();
  const server = await deleteAllServerAnnotations();
  broadcast({ type: 'annotations:delete-all' });
  const serverNoun = plural(server.deleted, 'notifications.serverAnnotationSingular', 'notifications.serverAnnotationPlural');
  const localNoun = plural(localKeys, 'notifications.localStorageKeySingular', 'notifications.localStorageKeyPlural');
  if (server.failed === 0) {
    Notification.success('Agentation', `${label('notifications.deleted')} ${server.deleted} ${serverNoun} ${label('notifications.and')} ${localKeys} ${localNoun}.`);
  } else {
    Notification.warning('Agentation', `${label('notifications.deleted')} ${server.deleted} ${label('annotations.onServer')}, ${server.failed} ${label('notifications.failed')}. ${label('notifications.localCleared')} (${localKeys} ${localNoun}).`);
  }
  await refresh();
}

const ACTIONS = { copy, reload, delete: deleteOne, 'delete-all': deleteAll };

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-agentation-action]');
  const action = ACTIONS[trigger?.dataset.agentationAction];
  if (!action) {
    return;
  }
  event.preventDefault();
  action(trigger);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', refresh, { once: true });
} else {
  refresh();
}
