/**
 * Agentation toolbar entrypoint for TYPO3.
 *
 * Framework-agnostic from the host page's perspective: the TYPO3 site (FE or
 * BE) needs no React. This bundle ships its own React + React DOM and mounts
 * the <Agentation /> component into a detached container, so it never touches
 * the host's DOM tree or framework.
 *
 * Config is read from <script type="application/json" id="typo3-agentation-config">,
 * a JSON data island the strict v14 backend CSP does not touch (browsers never
 * execute it). The server writes that node via AssetCollector; it carries no
 * secret.
 */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';
import {
  BROADCAST_CHANNEL,
  STORAGE_PREFIXES,
  clearLocalAnnotations,
  removeLocalAnnotation,
} from '../../Resources/Public/JavaScript/storage.js';

const ROOT_ID = 'typo3-agentation-root';

function readConfig() {
  const node = document.getElementById('typo3-agentation-config');
  if (!node) {
    return null;
  }
  try {
    return JSON.parse(node.textContent || '{}');
  } catch (err) {
    console.warn('[agentation] config parse failed', err);
    return null;
  }
}

/* ------------------------------------------------------------------ *
 * Keyboard: keep Agentation's single-letter shortcuts away from host  *
 * inputs (FormEngine fields, CKEditor, ...).                           *
 * ------------------------------------------------------------------ */

const NON_TEXT_INPUT_TYPES = ['button', 'checkbox', 'color', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
const SHORTCUT_KEYS = ['p', 'l', 'h', 'c', 'x', 's', 'escape'];

function isInsideAgentationRoot(node) {
  return node instanceof Element && node.closest(`#${ROOT_ID}, [data-feedback-toolbar]`);
}

function isEditableTarget(event) {
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
  const candidates = path.length > 0 ? [...path] : [event.target];
  if (document.activeElement && !candidates.includes(document.activeElement)) {
    candidates.push(document.activeElement);
  }
  return candidates.some((node) => {
    if (!(node instanceof Element) || isInsideAgentationRoot(node)) {
      return false;
    }
    if (node instanceof HTMLInputElement) {
      return !NON_TEXT_INPUT_TYPES.includes(node.type);
    }
    if (node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
      return true;
    }
    if (node instanceof HTMLElement && node.isContentEditable) {
      return true;
    }
    return Boolean(node.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]'));
  });
}

function isAgentationShortcut(event) {
  const key = event.key.toLowerCase();
  if ((event.metaKey || event.ctrlKey) && event.shiftKey && key === 'f') {
    return true;
  }
  if (event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  return SHORTCUT_KEYS.includes(key);
}

function protectHostTypingFromAgentationShortcuts() {
  document.addEventListener('keydown', (event) => {
    if (isAgentationShortcut(event) && isEditableTarget(event)) {
      event.stopImmediatePropagation();
    }
  });
}

/* ------------------------------------------------------------------ *
 * Storage                                                              *
 * ------------------------------------------------------------------ */

/**
 * Agentation keys its annotation storage by window.location.pathname, but
 * TYPO3 BE modules share one pathname across many records (for example
 * /typo3/module/web/layout for every page). Without scoping, markers from
 * page A would show up on page B.
 *
 * The localStorage instance is patched so every Agentation-owned key is
 * silently namespaced with the module path and the record id from the query
 * string. Agentation stays unaware. storage.js bypasses the patch through
 * the Storage prototype, so enumerated (already scoped) keys are not
 * rewritten twice.
 */
function scopeAgentationStorage() {
  const params = new URLSearchParams(window.location.search);
  const recordId = params.get('id') || params.get('uid') || '';
  const scope = `:${window.location.pathname}:id=${recordId}`;

  const rewrite = (key) => {
    if (typeof key !== 'string') {
      return key;
    }
    const prefix = STORAGE_PREFIXES.find((candidate) => key.startsWith(candidate));
    return prefix ? `${prefix}${scope}/${key.slice(prefix.length)}` : key;
  };

  const original = {
    getItem: localStorage.getItem.bind(localStorage),
    setItem: localStorage.setItem.bind(localStorage),
    removeItem: localStorage.removeItem.bind(localStorage),
  };
  localStorage.getItem = (key) => original.getItem(rewrite(key));
  localStorage.setItem = (key, value) => original.setItem(rewrite(key), value);
  localStorage.removeItem = (key) => original.removeItem(rewrite(key));
}

/**
 * System > Agentation announces server-side deletions on a same-origin
 * broadcast channel. Without this, a widget on another page would keep the
 * deleted annotation in its localStorage and re-push it on the next sync.
 *
 * Message shapes:
 *   { type: "annotation:delete", id: "…" }
 *   { type: "annotations:delete-all" }
 */
function followDeletionBroadcasts() {
  if (typeof BroadcastChannel === 'undefined') {
    return;
  }
  new BroadcastChannel(BROADCAST_CHANNEL).addEventListener('message', (event) => {
    const payload = event?.data || {};
    if (payload.type === 'annotation:delete' && payload.id) {
      removeLocalAnnotation(payload.id);
    } else if (payload.type === 'annotations:delete-all') {
      clearLocalAnnotations();
    }
  });
}

/* ------------------------------------------------------------------ *
 * Networking                                                           *
 * ------------------------------------------------------------------ */

/**
 * Same-origin proxy: when PHP provided a proxyUrl, every fetch() to the
 * configured sync endpoint is rerouted through /typo3/ajax/agentation/api/proxy?path=...
 * on the backend's own (HTTPS) origin. This defeats mixed-content blocking
 * without moving the backend off HTTPS or needing a cloud account.
 */
function routeSyncCallsThroughProxy(endpoint, proxyUrl) {
  const originalFetch = window.fetch.bind(window);
  const base = endpoint.replace(/\/$/, '');
  window.fetch = function proxiedFetch(input, init) {
    const url = typeof input === 'string' ? input : input?.url || '';
    if (!url.startsWith(base)) {
      return originalFetch(input, init);
    }
    try {
      const proxied = new URL(proxyUrl, window.location.origin);
      proxied.searchParams.set('path', url.slice(base.length) || '/');
      return typeof input === 'string'
        ? originalFetch(proxied.toString(), init)
        : originalFetch(new Request(proxied.toString(), input), init);
    } catch {
      return originalFetch(input, init);
    }
  };
}

function warnAboutMixedContent(cfg) {
  if (cfg.endpoint && window.location.protocol === 'https:' && cfg.endpoint.startsWith('http://') && !cfg.proxyUrl) {
    console.warn(
      '[agentation] Sync endpoint is HTTP but the page is HTTPS; the browser will block all sync requests (mixed content). '
      + 'Open the page over HTTP or set an API key in the extension configuration.',
    );
  }
}

/* ------------------------------------------------------------------ *
 * Mounting                                                             *
 * ------------------------------------------------------------------ */

function injectTypo3StyleOverrides() {
  if (document.getElementById('typo3-agentation-style-overrides')) {
    return;
  }
  const style = document.createElement('style');
  style.id = 'typo3-agentation-style-overrides';
  style.textContent = `
    [data-agentation-theme="dark"] [data-agentation-toolbar] [role="button"] {
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.26),
        0 0 0 4px rgba(255, 255, 255, 0.08);
    }
    [data-agentation-theme="dark"] [data-agentation-toolbar] [role="button"]:hover {
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.24),
        0 4px 16px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.34),
        0 0 0 4px rgba(255, 255, 255, 0.12);
    }
  `;
  document.head.appendChild(style);
}

/**
 * "Send" posts to the configured webhook: Agentation's own submit payload
 * (event, timestamp, url, output, annotations) plus where it came from in
 * TYPO3. Handled here rather than through the component's webhookUrl prop,
 * which would post a second time without the TYPO3 context.
 */
async function postToWebhook(cfg, output, annotations) {
  const response = await fetch(cfg.webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: 'submit',
      timestamp: Date.now(),
      url: window.location.href,
      output,
      annotations,
      typo3: {
        context: cfg.context,
        pageId: cfg.pageId,
        beUser: cfg.beUser,
        workspaceId: cfg.workspaceId,
        metadata: cfg.metadata,
      },
    }),
    keepalive: true,
  });
  if (!response.ok) {
    throw new Error(`Webhook answered ${response.status}`);
  }
}

function mount(cfg) {
  if (document.getElementById(ROOT_ID)) {
    return;
  }
  const container = document.createElement('div');
  container.id = ROOT_ID;
  container.setAttribute('data-agentation-scope', cfg.scope || 'frontend');
  document.body.appendChild(container);

  const props = {
    endpoint: cfg.endpoint || undefined,
    onSubmit: cfg.webhookUrl ? (output, annotations) => postToWebhook(cfg, output, annotations) : undefined,
    ...(cfg.additionalOptions || {}),
  };

  try {
    createRoot(container).render(createElement(Agentation, props));
  } catch (err) {
    console.warn('[agentation] mount failed', err);
  }
}

(function bootAgentation() {
  const cfg = readConfig() || {};
  window.TYPO3Agentation = cfg;
  if (cfg.enabled === false) {
    return;
  }
  if (cfg.scope === 'backend') {
    scopeAgentationStorage();
  }
  protectHostTypingFromAgentationShortcuts();
  followDeletionBroadcasts();
  injectTypo3StyleOverrides();
  warnAboutMixedContent(cfg);
  if (cfg.endpoint && cfg.proxyUrl) {
    routeSyncCallsThroughProxy(cfg.endpoint, cfg.proxyUrl);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => mount(cfg), { once: true });
  } else {
    mount(cfg);
  }
})();
