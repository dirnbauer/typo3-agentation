/**
 * Agentation backend module glue.
 *
 * Single responsibility: handle the "copy MCP JSON to clipboard" button.
 * Delegates to the TYPO3 Notification component if available.
 */
import Notification from '@typo3/backend/notification.js';

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

document.addEventListener('click', async (event) => {
  const trigger = event.target.closest('[data-agentation-copy]');
  if (!trigger) {
    return;
  }
  event.preventDefault();
  const selector = trigger.getAttribute('data-agentation-copy');
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
});
