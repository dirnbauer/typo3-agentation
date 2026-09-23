..  include:: /Includes.rst.txt

..  _usage:

=====
Usage
=====

..  _usage-frontend:

Frontend annotations
====================

Frontend annotation requires all gates to pass:

* TYPO3 application context matches the configured context gate.
* A backend user session is active.
* The user's frontend toolbar setting is enabled.
* The toolbar checkbox in the :guilabel:`Agentation` Admin Panel section is
  ticked (or :confval:`defaultOptIn <agentation-default-opt-in>` is set and
  the checkbox was never touched).

The Admin Panel section is listed as soon as the user's frontend toolbar
setting is on. Inside the section, switch the toolbar on or off and choose
the toolbar position and annotation scope; the Admin Panel stores the values
per backend user.

While the toolbar is on, pages are rendered freshly for that user and are
never written to the page cache, so no visitor ever receives a page that
was rendered with the toolbar.

..  _usage-backend:

Backend annotations
===================

Backend annotation is available in TYPO3 module content frames when the global
backend toggle and the current user's backend toolbar setting are enabled. The
toolbar is not injected into Agentation's own administration module.

..  _usage-mcp:

MCP setup
=========

Open :guilabel:`System > Agentation` and copy the generated MCP JSON or the
``claude mcp add`` command into your coding agent, or add the server to
Cursor with one click.

The example below is the same shape the backend module generates:

..  code-block:: json
    :caption: .mcp.json.example

    {
      "mcpServers": {
        "agentation": {
          "command": "npx",
          "args": ["-y", "agentation-mcp", "server"],
          "env": {
            "AGENTATION_API_KEY": "your-api-key"
          }
        }
      }
    }

Without an API key the ``env`` block is left out: the agent starts
``agentation-mcp`` locally and the toolbar syncs with it on
``http://localhost:4747``. The toolbar reaches that server through a
same-origin proxy on the web server — the backend AJAX route in module
frames, ``/_agentation/api/proxy`` on frontend pages — so HTTPS pages can
use the HTTP server. Inside DDEV the proxy runs in the web container and
reaches your machine as ``http://host.docker.internal:4747``
(see :confval:`syncEndpoint <agentation-sync-endpoint>`).

..  _usage-webhook:

Webhook submissions
===================

With :confval:`webhookUrl <agentation-webhook-url>` set, the toolbar's
:guilabel:`Send` action posts one JSON document per submission: the fields
Agentation itself sends, plus where the annotations were made in TYPO3.

..  code-block:: json
    :caption: Webhook payload

    {
        "event": "submit",
        "timestamp": 1790152848000,
        "url": "https://example.org/about/",
        "output": "## Page feedback …",
        "annotations": [{"id": "…", "comment": "…", "element": "h1"}],
        "typo3": {
            "context": "typo3-frontend",
            "pageId": 42,
            "beUser": "editor",
            "workspaceId": "my-project",
            "metadata": {"applicationContext": "Development", "includeAdminPanelChrome": false}
        }
    }

The request carries no credentials; protect the receiver with a secret in
its URL or a network restriction.

..  _usage-annotations:

Manage stored annotations
=========================

:guilabel:`System > Agentation` (administrators only) lists the annotations
of the configured sync endpoint and of this browser's Agentation storage in
one table, with their status (pending, acknowledged, resolved, dismissed, or
*this browser only*). Reload the list, delete single annotations or clear
everything after a confirmation; open toolbar widgets in other tabs and
frames are told about deletions so they do not re-push the removed
annotations. When the sync server cannot be reached, the card says so and
still lists the annotations stored in this browser.
