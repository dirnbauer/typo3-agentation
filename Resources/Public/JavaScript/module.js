/**
 * Agentation backend module glue.
 *
 * Talks to a same-origin TYPO3 AJAX proxy (Configuration/Backend/
 * AjaxRoutes.php → ApiProxyController) so the browser never has to
 * call http://localhost:4747 directly — that would be blocked as
 * mixed content from the HTTPS backend.
 *
 * Responsibilities:
 *   - Copy MCP JSON / Claude CLI snippet to clipboard.
 *   - List stored annotations (server side + browser localStorage).
 *   - Delete a single annotation (server side, per row).
 *   - Delete every stored annotation across both stores.
 */
import Notification from '@typo3/backend/notification.js';
import AjaxRequest from '@typo3/core/ajax/ajax-request.js';

const AGENTATION_KEY_RE = /^(feedback-annotations-|agentation-(design|rearrange|wireframe|session)-)/;

const ROUTE_LIST = TYPO3.settings.ajaxUrls.agentation_api_list;
const ROUTE_DELETE = TYPO3.settings.ajaxUrls.agentation_api_delete;
const ROUTE_DELETE_ALL = TYPO3.settings.ajaxUrls.agentation_api_delete_all;

const MAX_COMMENT_PREVIEW = 140;

const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

function getCard() {
  return document.querySelector('[data-agentation-annotations]');
}

function getCounter() {
  return document.querySelector('[data-agentation-counter]');
}

function getList() {
  return document.querySelector('[data-agentation-list]');
}

function getDeleteAllButton() {
  return document.querySelector('[data-agentation-delete-all]');
}

function readLabel(name, fallback) {
  return getCard()?.dataset?.[name] || fallback;
}

function countLocal() {
  let total = 0;
  for (const key of Object.keys(localStorage)) {
    if (!key.startsWith('feedback-annotations-')) {
      continue;
    }
    try {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(arr)) {
        total += arr.length;
      }
    } catch {
      // ignore bad JSON
    }
  }
  return total;
}

function clearLocal() {
  const keys = Object.keys(localStorage).filter((k) => AGENTATION_KEY_RE.test(k));
  keys.forEach((k) => localStorage.removeItem(k));
  return keys.length;
}

async function fetchServerAnnotations() {
  if (!ROUTE_LIST) {
    return { ok: false, annotations: [], error: 'Route not registered' };
  }
  try {
    const response = await new AjaxRequest(ROUTE_LIST).get();
    const data = await response.resolve();
    if (Array.isArray(data)) {
      return { ok: true, annotations: data };
    }
    if (Array.isArray(data?.annotations)) {
      return { ok: true, annotations: data.annotations };
    }
    if (data?.error) {
      return { ok: false, annotations: [], error: data.error };
    }
    return { ok: true, annotations: [] };
  } catch (err) {
    return { ok: false, annotations: [], error: err?.message || 'Request failed' };
  }
}

async function deleteServerAnnotation(id) {
  if (!ROUTE_DELETE || !id) {
    return false;
  }
  try {
    const response = await new AjaxRequest(ROUTE_DELETE).post({ id });
    const data = await response.resolve();
    return data?.ok !== false;
  } catch {
    return false;
  }
}

async function deleteAllServerAnnotations() {
  if (!ROUTE_DELETE_ALL) {
    return { deleted: 0, failed: 0, total: 0 };
  }
  try {
    const response = await new AjaxRequest(ROUTE_DELETE_ALL).post({});
    const data = await response.resolve();
    return {
      deleted: Number(data?.deleted ?? 0),
      failed: Number(data?.failed ?? 0),
      total: Number(data?.total ?? 0),
    };
  } catch {
    return { deleted: 0, failed: 0, total: 0 };
  }
}

function renderEmpty(container, message) {
  container.innerHTML = '';
  const li = document.createElement('li');
  li.className = 'list-group-item text-body-secondary';
  li.textContent = message;
  container.appendChild(li);
}

function renderError(container, message) {
  container.innerHTML = '';
  const li = document.createElement('li');
  li.className = 'list-group-item';
  const wrap = document.createElement('div');
  wrap.className = 'callout callout-danger mb-0';
  const body = document.createElement('div');
  body.className = 'callout-body';
  body.textContent = message;
  wrap.appendChild(body);
  li.appendChild(wrap);
  container.appendChild(li);
}

function truncate(value, max) {
  const text = String(value ?? '').trim();
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max - 1)}…`;
}

function shortUrl(rawUrl) {
  if (!rawUrl) {
    return '';
  }
  try {
    const u = new URL(rawUrl);
    return `${u.pathname}${u.search ? '?…' : ''}` || u.hostname;
  } catch {
    return String(rawUrl);
  }
}

function renderRow(annotation) {
  const li = document.createElement('li');
  li.className = 'list-group-item agentation-annotation';
  li.dataset.id = annotation.id || '';

  // Column 1: comment + meta (element + url)
  const main = document.createElement('div');
  main.className = 'agentation-annotation__main';

  const comment = document.createElement('p');
  comment.className = 'agentation-annotation__comment mb-1';
  comment.textContent = truncate(
    annotation.comment || readLabel('emptyComment', '(no comment)'),
    MAX_COMMENT_PREVIEW,
  );
  main.appendChild(comment);

  const meta = document.createElement('div');
  meta.className = 'agentation-annotation__meta text-body-secondary';

  if (annotation.element) {
    const el = document.createElement('code');
    el.className = 'agentation-annotation__element';
    el.textContent = truncate(annotation.element, 60);
    meta.appendChild(el);
  }

  if (annotation.url) {
    if (meta.children.length > 0) {
      meta.appendChild(document.createTextNode(' · '));
    }
    const link = document.createElement('a');
    link.href = annotation.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = shortUrl(annotation.url);
    link.className = 'agentation-annotation__url';
    meta.appendChild(link);
  }

  if (meta.children.length > 0) {
    main.appendChild(meta);
  }

  li.appendChild(main);

  // Column 2: status badge (right-aligned, fixed column width)
  const statusSlot = document.createElement('div');
  statusSlot.className = 'agentation-annotation__status';
  if (annotation.status) {
    const badge = document.createElement('span');
    const variant = annotation.status === 'pending'
      ? 'bg-warning'
      : annotation.status === 'resolved'
        ? 'bg-success'
        : annotation.status === 'dismissed'
          ? 'bg-secondary'
          : 'bg-info';
    badge.className = `badge ${variant}`;
    badge.textContent = annotation.status;
    statusSlot.appendChild(badge);
  }
  li.appendChild(statusSlot);

  // Column 3: per-row delete button
  const actions = document.createElement('div');
  actions.className = 'agentation-annotation__actions';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-sm btn-outline-danger';
  button.dataset.agentationDeleteOne = annotation.id || '';
  button.title = readLabel('deleteOne', 'Delete annotation');
  button.innerHTML = '<typo3-backend-icon identifier="actions-delete" size="small"></typo3-backend-icon>';
  actions.appendChild(button);
  li.appendChild(actions);

  return li;
}

function renderList(container, annotations) {
  container.innerHTML = '';
  for (const annotation of annotations) {
    container.appendChild(renderRow(annotation));
  }
}

function updateCounter(serverCount, localCount, opts = {}) {
  const target = getCounter();
  if (!target) {
    return;
  }
  const total = serverCount + localCount;
  if (opts.error && serverCount === 0 && localCount === 0) {
    target.textContent = readLabel('errorShort', 'Sync endpoint unreachable');
    target.classList.add('text-danger');
    return;
  }
  target.classList.remove('text-danger');
  if (total === 0) {
    target.textContent = readLabel('empty', 'No annotations');
    return;
  }
  const parts = [];
  if (serverCount > 0) {
    parts.push(`${serverCount} ${readLabel('onServer', 'on server')}`);
  }
  if (localCount > 0) {
    parts.push(`${localCount} ${readLabel('local', 'local')}`);
  }
  const noun = total === 1
    ? readLabel('annotationSingular', 'annotation')
    : readLabel('annotationPlural', 'annotations');
  target.textContent = `${total} ${noun} (${parts.join(' + ')})`;
}

async function refresh() {
  const list = getList();
  const deleteAllBtn = getDeleteAllButton();
  if (list) {
    renderEmpty(list, readLabel('loading', 'Loading…'));
  }

  const local = countLocal();
  const result = await fetchServerAnnotations();

  updateCounter(result.annotations.length, local, { error: !result.ok });

  if (list) {
    if (!result.ok) {
      renderError(
        list,
        `${readLabel('errorPrefix', 'Sync endpoint unreachable')}: ${result.error || ''}`.trim(),
      );
    } else if (result.annotations.length === 0) {
      renderEmpty(
        list,
        local > 0
          ? readLabel('onlyLocal', 'No server-side annotations. Local annotations are stored only in this browser.')
          : readLabel('emptyLong', 'Nothing stored yet. Annotations created via the toolbar appear here.'),
      );
    } else {
      renderList(list, result.annotations);
    }
  }

  if (deleteAllBtn) {
    const total = result.annotations.length + local;
    deleteAllBtn.disabled = total === 0;
  }
}

document.addEventListener('click', async (event) => {
  const copy = event.target.closest('[data-agentation-copy]');
  if (copy) {
    event.preventDefault();
    const selector = copy.getAttribute('data-agentation-copy');
    const source = selector ? document.querySelector(selector) : null;
    const text = source?.value ?? source?.textContent ?? '';
    if (!text) {
      Notification.warning('Agentation', 'Nothing to copy.');
      return;
    }
    try {
      await copyToClipboard(text);
      Notification.success('Agentation', 'MCP config copied to clipboard.');
    } catch (err) {
      Notification.error('Agentation', `Copy failed: ${err.message}`);
    }
    return;
  }

  const deleteOneBtn = event.target.closest('[data-agentation-delete-one]');
  if (deleteOneBtn) {
    event.preventDefault();
    const id = deleteOneBtn.getAttribute('data-agentation-delete-one');
    if (!id) {
      return;
    }
    deleteOneBtn.disabled = true;
    const ok = await deleteServerAnnotation(id);
    if (ok) {
      Notification.success('Agentation', 'Annotation deleted.');
    } else {
      Notification.error('Agentation', 'Delete failed.');
      deleteOneBtn.disabled = false;
    }
    await refresh();
    return;
  }

  const reload = event.target.closest('[data-agentation-reload]');
  if (reload) {
    event.preventDefault();
    reload.disabled = true;
    reload.classList.add('agentation-spinning');
    try {
      await refresh();
    } finally {
      reload.classList.remove('agentation-spinning');
      reload.disabled = false;
    }
    return;
  }

  const deleteAll = event.target.closest('[data-agentation-delete-all]');
  if (deleteAll) {
    event.preventDefault();
    deleteAll.disabled = true;
    const local = countLocal();
    const result = await fetchServerAnnotations();
    const serverCount = result.annotations.length;
    const total = serverCount + local;
    if (total === 0) {
      Notification.info('Agentation', 'No stored annotations to delete.');
      deleteAll.disabled = false;
      return;
    }
    const breakdown = serverCount > 0 ? ` (${serverCount} on server, ${local} local)` : '';
    const confirmed = window.confirm(
      `Delete ALL ${total} annotations${breakdown}?\n\nThis cannot be undone.`,
    );
    if (!confirmed) {
      deleteAll.disabled = false;
      return;
    }
    const localKeys = clearLocal();
    const serverResult = await deleteAllServerAnnotations();
    if (serverResult.failed === 0) {
      Notification.success(
        'Agentation',
        `Deleted ${serverResult.deleted} server annotations and ${localKeys} local storage keys.`,
      );
    } else {
      Notification.warning(
        'Agentation',
        `Deleted ${serverResult.deleted} on server, ${serverResult.failed} failed. Local cleared (${localKeys} keys).`,
      );
    }
    await refresh();
  }
});

document.addEventListener('DOMContentLoaded', refresh, { once: true });
queueMicrotask(refresh);
