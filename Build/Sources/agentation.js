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

(function bootAgentation() {
  const cfg = readConfig() || {};
  window.TYPO3Agentation = cfg;
  if (cfg.enabled === false) {
    return;
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
