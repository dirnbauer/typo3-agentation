/**
 * Agentation entrypoint for TYPO3.
 *
 * Framework-agnostic from the *host* page's perspective: the TYPO3 site
 * (FE or BE) doesn't need React. This bundle ships its own React + React
 * DOM and mounts the <Agentation /> component into a detached container,
 * so it never touches the host's DOM tree or framework (Vue, Angular,
 * vanilla, anything).
 *
 * Config is read from <script type="application/json" id="typo3-agentation-config">
 * — a JSON data island that the strict v14 backend CSP does not touch
 * (browsers never execute it). The server writes this node via
 * AssetCollector::addInlineJavaScript with type="application/json".
 */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

function readConfig() {
  const node = document.getElementById('typo3-agentation-config');
  if (!node) {
    return null;
  }
  try {
    return JSON.parse(node.textContent || '{}');
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.warn('[agentation] config parse failed', err);
    return null;
  }
}

/**
 * Agentation keys its annotation storage by window.location.pathname,
 * but TYPO3 BE modules share one pathname across many records (e.g.
 * /typo3/module/web/layout for every page). Without scoping, markers
 * from page A show up on page B.
 *
 * Shim localStorage so every agentation-owned key gets silently
 * namespaced with the module name + the record id from the query
 * string. Agentation stays unaware; our shim transparently rewrites
 * the key on every get/set/remove.
 */
function scopeAgentationStorage() {
  if (typeof localStorage === 'undefined') return;
  const AGENTATION_PREFIXES = [
    'feedback-annotations-',
    'agentation-design-',
    'agentation-rearrange-',
    'agentation-wireframe-',
    'agentation-session-',
  ];
  const params = new URLSearchParams(window.location.search);
  const pageId = params.get('id') || params.get('uid') || '';
  const modulePath = window.location.pathname; // already unique per BE module
  const scope = ':' + modulePath + ':id=' + pageId;

  const rewrite = (key) => {
    if (typeof key !== 'string') return key;
    for (const p of AGENTATION_PREFIXES) {
      if (key.startsWith(p)) {
        return p + scope + '/' + key.slice(p.length);
      }
    }
    return key;
  };

  const origGetItem = localStorage.getItem.bind(localStorage);
  const origSetItem = localStorage.setItem.bind(localStorage);
  const origRemoveItem = localStorage.removeItem.bind(localStorage);

  localStorage.getItem = (k) => origGetItem(rewrite(k));
  localStorage.setItem = (k, v) => origSetItem(rewrite(k), v);
  localStorage.removeItem = (k) => origRemoveItem(rewrite(k));
}

/**
 * Same-origin broadcast channel used by the Agentation BE module
 * (System → Agentation) to tell every open tab/iframe that an
 * annotation (or all) was deleted server-side. Without this, a widget
 * instance on another page keeps the deleted annotation in its
 * localStorage and re-pushes it the next time it syncs.
 *
 * Message shapes:
 *   { type: "annotation:delete", id: "…" }
 *   { type: "annotations:delete-all" }
 */
function wireDeletionBroadcast() {
  if (typeof BroadcastChannel === 'undefined') {
    return;
  }
  const AGENTATION_PREFIXES = [
    'feedback-annotations-',
    'agentation-design-',
    'agentation-rearrange-',
    'agentation-wireframe-',
    'agentation-session-',
  ];
  const channel = new BroadcastChannel('typo3-agentation');
  channel.addEventListener('message', (event) => {
    const payload = event?.data || {};
    if (payload.type === 'annotation:delete' && payload.id) {
      // Walk every annotation list in localStorage and filter the id out.
      for (const key of Object.keys(localStorage)) {
        if (!key.startsWith('feedback-annotations-')) continue;
        try {
          const arr = JSON.parse(localStorage.getItem(key) || '[]');
          if (!Array.isArray(arr)) continue;
          const kept = arr.filter((a) => a?.id !== payload.id);
          if (kept.length !== arr.length) {
            if (kept.length === 0) {
              localStorage.removeItem(key);
            } else {
              localStorage.setItem(key, JSON.stringify(kept));
            }
          }
        } catch {
          // ignore malformed entries
        }
      }
    } else if (payload.type === 'annotations:delete-all') {
      for (const key of Object.keys(localStorage)) {
        if (AGENTATION_PREFIXES.some((p) => key.startsWith(p))) {
          localStorage.removeItem(key);
        }
      }
    }
  });
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
  wireDeletionBroadcast();

  // Detect mixed-content trap: HTTPS origin + HTTP sync endpoint.
  // Browsers block the XHR silently — the widget looks fine but
  // nothing reaches the MCP server. Warn the user in DevTools.
  if (cfg.endpoint
    && window.location.protocol === 'https:'
    && cfg.endpoint.startsWith('http://')
    && !cfg.proxyUrl
  ) {
    /* eslint-disable-next-line no-console */
    console.warn(
      '[agentation] Sync endpoint is HTTP but page is HTTPS — browser will block all sync requests (mixed content). '
      + 'Access the BE over HTTP or set Agentation.apiKey in Extension Configuration.'
    );
  }

  // Same-origin proxy: when the PHP side provided a proxyUrl, patch
  // window.fetch so every request to the configured endpoint goes
  // through /typo3/ajax/agentation/api/proxy?path=... on our own
  // (HTTPS) origin. Defeats mixed-content blocking without moving
  // the BE off HTTPS or needing a cloud account. Only patched when
  // both cfg.endpoint and cfg.proxyUrl are present; everything else
  // passes through unchanged.
  if (cfg.endpoint && cfg.proxyUrl) {
    const origFetch = window.fetch.bind(window);
    const endpoint = cfg.endpoint.replace(/\/$/, '');
    const proxyBase = cfg.proxyUrl;
    window.fetch = function patchedFetch(input, init) {
      const rawUrl = typeof input === 'string' ? input : (input && input.url) || '';
      if (rawUrl.startsWith(endpoint)) {
        const suffix = rawUrl.slice(endpoint.length) || '/';
        try {
          const u = new URL(proxyBase, window.location.origin);
          u.searchParams.set('path', suffix);
          const newUrl = u.toString();
          if (typeof input === 'string') {
            return origFetch(newUrl, init);
          }
          return origFetch(new Request(newUrl, input), init);
        } catch {
          // fall through to original fetch on URL parsing failure
        }
      }
      return origFetch(input, init);
    };
  }

  const start = () => {
    if (document.getElementById('typo3-agentation-root')) {
      return;
    }

    const container = document.createElement('div');
    container.id = 'typo3-agentation-root';
    container.setAttribute('data-agentation-scope', cfg.scope || 'frontend');
    document.body.appendChild(container);

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

    const onSubmit = async (annotation) => {
      const endpoint = cfg.webhookUrl;
      if (!endpoint) {
        return;
      }
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(cfg.apiKey ? { 'Authorization': `Bearer ${cfg.apiKey}` } : {}),
          },
          body: JSON.stringify({
            annotation,
            context: cfg.context,
            pageId: cfg.pageId,
            beUser: cfg.beUser,
            workspaceId: cfg.workspaceId,
            metadata: cfg.metadata,
          }),
          keepalive: true,
        });
      } catch (err) {
        /* eslint-disable-next-line no-console */
        console.warn('[agentation] webhook POST failed', err);
      }
    };

    const props = {
      endpoint: cfg.endpoint || undefined,
      webhookUrl: cfg.webhookUrl || undefined,
      sessionId: cfg.sessionId || undefined,
      copyToClipboard,
      onSubmit,
      ...(cfg.additionalOptions || {}),
    };

    try {
      const root = createRoot(container);
      root.render(createElement(Agentation, props));
      cfg.__root = root;
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.warn('[agentation] mount failed', err);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
