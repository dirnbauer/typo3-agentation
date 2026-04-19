/**
 * Agentation entrypoint for TYPO3.
 *
 * Framework-agnostic from the *host* page's perspective: the TYPO3 site
 * (FE or BE) doesn't need React. This bundle ships its own React + React
 * DOM and mounts the <Agentation /> component into a detached container,
 * so it never touches the host's DOM tree or framework (Vue, Angular,
 * vanilla, anything).
 *
 * Config is read from `window.TYPO3Agentation`, written by the server
 * via an inline <script> immediately before this bundle loads.
 */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

(function bootAgentation() {
  const cfg = window.TYPO3Agentation || {};
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
      window.TYPO3Agentation.__root = root;
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
