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

Backend proxy
=============

The AJAX routes forward browser-originated calls to the configured sync
endpoint and inject the API key server-side. The key is not part of the
configuration the toolbar receives, so it never reaches the browser; webhook
submissions carry no credentials either.

* ``proxy`` (used by the toolbar widget) is denied when the current user
  disabled the backend toolbar, and accepts API paths only.
* ``list``, ``delete`` and ``delete-all`` (used by :guilabel:`System >
  Agentation`) are restricted to administrators.
* Errors are returned as codes, never as upstream error bodies.

..  important::

    Do not enable `All contexts` unless the team intentionally wants the
    toolbar available outside development or testing systems.
