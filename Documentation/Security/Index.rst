..  include:: /Includes.rst.txt

..  _security:

========
Security
========

Agentation is intended for development and review contexts.

..  _security-gates:

Runtime gates
=============

Toolbar assets are injected only when all of these hold:

* The application context is allowed by :confval:`contextGate <agentation-context-gate>`.
* A backend user is logged in (Context aspect ``backend.user``).
* The global frontend or backend toggle is enabled.
* The user's matching switch in :guilabel:`User Settings > Agentation` is on.
* Frontend: the toolbar is switched on in the Admin Panel section.

The default `Development` context gate prevents accidental production exposure
when the extension is installed with default configuration.

One class, :php:`Service\\ToolbarGate`, answers "does this response get the
toolbar?". The asset listener, the page-cache bypass and the
Content-Security-Policy listener all ask it, so they cannot disagree.

..  _security-cache:

Page cache
==========

A frontend page that carries the toolbar is rendered for the backend user
alone: it is not read from the page cache (a cached page would come without
the toolbar) and not written to it (every later visitor would receive the
toolbar and the configuration rendered for that user).

..  _security-csp:

Content-Security-Policy
=======================

Only responses that carry the toolbar get a wider policy: ``connect-src``
for the origins of the sync endpoint and the webhook, and — in the frontend —
``style-src 'unsafe-inline'`` for the styles the toolbar injects at runtime
(the backend policy already allows them). Every other response keeps the
policy of the installation.

..  _security-proxy:

Sync proxies
============

Browsers block calls from an HTTPS page to ``http://localhost:4747`` as
mixed content, so the toolbar never calls the sync endpoint itself. Two
same-origin proxies forward its calls on the server, through one class
(:php:`Service\\SyncProxy`), and inject the API key there. The key is not part
of the configuration the toolbar receives, so it never reaches the browser;
webhook submissions carry no credentials either.

Backend
    The AJAX routes, protected by the backend's route token. ``proxy`` (used
    by the toolbar widget) is denied when the current user disabled the
    backend toolbar. ``list``, ``delete`` and ``delete-all`` (used by
    :guilabel:`System > Agentation`) are restricted to administrators.

Frontend
    :php:`Middleware\\FrontendSyncProxy` answers ``/_agentation/api/proxy``
    below the site path of the installation. It runs after the frontend has
    authenticated the backend user and before page resolution, and answers
    only when the frontend toolbar would render for that user: allowed
    application context, global frontend switch, the user's switch in
    :guilabel:`User Settings` and the Admin Panel toggle. Every call must
    carry the token of the user's backend session (an HMAC of the session id,
    handed to the toolbar in its proxy URL), so another site cannot make the
    browser use it. Answers are never cached (``Cache-Control: no-store``).

Both proxies are no open proxies:

* The target is always the configured sync endpoint (and, for a
  ``localhost`` endpoint inside a container, its ``host.docker.internal`` and
  ``host.containers.internal`` aliases). The caller only chooses the API path
  below it, which must name one of the API's resources (``/health``,
  ``/sessions…``, ``/annotations…``, ``/pending``, ``/events``) and must not
  contain dot segments, empty segments, a scheme, a host or control
  characters. Redirects are not followed.
* Only ``GET``, ``POST``, ``PATCH`` and ``DELETE`` are forwarded, and of the
  request headers only ``Content-Type``; cookies and authorization headers
  stay behind.
* Request bodies are limited to 1 MiB, upstream answers to 4 MiB, and every
  call times out after 4 seconds.
* Errors are returned as codes, never as upstream error bodies.

..  important::

    Do not enable `All contexts` unless the team intentionally wants the
    toolbar available outside development or testing systems.
