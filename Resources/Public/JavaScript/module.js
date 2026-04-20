/**
 * Agentation backend module glue.
 *
 * Handles:
 *   - "copy MCP JSON to clipboard" button
 *   - "delete all stored annotations" button (sweeps every agentation-
 *     owned localStorage key across every BE module/page scope)
 *   - live annotation count badge
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

function collectAgentationKeys() {
  return Object.keys(localStorage).filter((k) => AGENTATION_KEY_RE.test(k));
}

function countAnnotations() {
  let total = 0;
  let scopes = 0;
  for (const key of Object.keys(localStorage)) {
    if (!key.startsWith('feedback-annotations-')) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(arr) && arr.length > 0) {
        total += arr.length;
        scopes += 1;
      }
    } catch {
      /* ignore malformed entries */
    }
  }
  return { total, scopes };
}

function refreshCounter() {
  const target = document.querySelector('[data-agentation-counter]');
  if (!target) return;
  const { total, scopes } = countAnnotations();
  target.textContent = total === 0
    ? 'No stored annotations'
    : `${total} annotation${total === 1 ? '' : 's'} across ${scopes} scope${scopes === 1 ? '' : 's'}`;
  const btn = document.querySelector('[data-agentation-delete-all]');
  if (btn) {
    btn.disabled = total === 0;
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

  const del = event.target.closest('[data-agentation-delete-all]');
  if (del) {
    event.preventDefault();
    const { total } = countAnnotations();
    if (total === 0) {
      Notification.info('Agentation', 'No stored annotations to delete.');
      return;
    }
    const confirmed = window.confirm(
      `Delete ALL ${total} stored annotations across every BE page and module?\n\nThis cannot be undone.`
    );
    if (!confirmed) return;
    const keys = collectAgentationKeys();
    keys.forEach((k) => localStorage.removeItem(k));
    Notification.success('Agentation', `Deleted ${total} annotations (${keys.length} storage keys cleared).`);
    refreshCounter();
  }
});

document.addEventListener('DOMContentLoaded', refreshCounter, { once: true });
// If the module is loaded after DOMContentLoaded (ES module defer),
// refresh on next microtask so the counter is always populated.
queueMicrotask(refreshCounter);
