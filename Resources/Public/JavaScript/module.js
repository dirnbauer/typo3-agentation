/**
 * Agentation backend module glue.
 *
 * Handles:
 *   - "copy MCP JSON to clipboard" button
 *   - "delete all stored annotations" button — sweeps both the local
 *     browser storage (legacy annotations) and the server-side storage
 *     exposed by agentation-mcp at the configured syncEndpoint.
 *   - live annotation counter (server + local combined)
 */
import Notification from '@typo3/backend/notification.js';

const AGENTATION_KEY_RE = /^(feedback-annotations-|agentation-(design|rearrange|wireframe|session)-)/;

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

function getAnnotationsCard() {
  return document.querySelector('[data-agentation-annotations]');
}

function getEndpoint() {
  return getAnnotationsCard()?.getAttribute('data-sync-endpoint') || '';
}

function getApiKey() {
  return getAnnotationsCard()?.getAttribute('data-api-key') || '';
}

function apiHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const key = getApiKey();
  if (key) headers['x-api-key'] = key;
  return headers;
}

function countLocal() {
  let total = 0;
  for (const key of Object.keys(localStorage)) {
    if (!key.startsWith('feedback-annotations-')) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(arr)) total += arr.length;
    } catch { /* ignore */ }
  }
  return total;
}

async function countServer() {
  const endpoint = getEndpoint();
  if (!endpoint) return 0;
  try {
    const res = await fetch(`${endpoint.replace(/\/$/, '')}/pending`, {
      headers: apiHeaders(),
      credentials: 'omit',
    });
    if (!res.ok) return 0;
    const data = await res.json();
    if (Array.isArray(data)) return data.length;
    if (Array.isArray(data?.annotations)) return data.annotations.length;
    return 0;
  } catch {
    return 0;
  }
}

async function listServerAnnotations() {
  const endpoint = getEndpoint();
  if (!endpoint) return [];
  try {
    const res = await fetch(`${endpoint.replace(/\/$/, '')}/pending`, {
      headers: apiHeaders(),
      credentials: 'omit',
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.annotations)) return data.annotations;
    return [];
  } catch {
    return [];
  }
}

async function deleteServerAnnotation(id) {
  const endpoint = getEndpoint();
  if (!endpoint || !id) return false;
  try {
    const res = await fetch(`${endpoint.replace(/\/$/, '')}/annotations/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: apiHeaders(),
      credentials: 'omit',
    });
    return res.ok;
  } catch {
    return false;
  }
}

function clearLocal() {
  const keys = Object.keys(localStorage).filter((k) => AGENTATION_KEY_RE.test(k));
  keys.forEach((k) => localStorage.removeItem(k));
  return keys.length;
}

async function refreshCounter() {
  const target = document.querySelector('[data-agentation-counter]');
  if (!target) return;
  const local = countLocal();
  target.textContent = '…';
  const server = await countServer();
  const total = local + server;
  if (total === 0) {
    target.textContent = 'No annotations';
  } else {
    const parts = [];
    if (server > 0) parts.push(`${server} on server`);
    if (local > 0) parts.push(`${local} local`);
    target.textContent = `${total} annotation${total === 1 ? '' : 's'} (${parts.join(' + ')})`;
  }
  const btn = document.querySelector('[data-agentation-delete-all]');
  if (btn) btn.disabled = total === 0;
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

  const del = event.target.closest('[data-agentation-delete-all]');
  if (del) {
    event.preventDefault();
    del.disabled = true;
    const local = countLocal();
    const serverList = await listServerAnnotations();
    const total = local + serverList.length;
    if (total === 0) {
      Notification.info('Agentation', 'No stored annotations to delete.');
      del.disabled = false;
      return;
    }
    const confirmed = window.confirm(
      `Delete ALL ${total} annotations`
      + (serverList.length > 0 ? ` (${serverList.length} on server, ${local} local)` : '')
      + '?\n\nThis cannot be undone.'
    );
    if (!confirmed) {
      del.disabled = false;
      return;
    }
    const localKeys = clearLocal();
    let deleted = 0;
    let failed = 0;
    for (const a of serverList) {
      const ok = await deleteServerAnnotation(a.id);
      if (ok) deleted += 1; else failed += 1;
    }
    if (failed === 0) {
      Notification.success(
        'Agentation',
        `Deleted ${deleted} server annotations and ${localKeys} local storage keys.`
      );
    } else {
      Notification.warning(
        'Agentation',
        `Deleted ${deleted} on server, ${failed} failed. Local cleared (${localKeys} keys).`
      );
    }
    await refreshCounter();
  }
});

document.addEventListener('DOMContentLoaded', refreshCounter, { once: true });
queueMicrotask(refreshCounter);
