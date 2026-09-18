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

..  _security-proxy:

Backend proxy
=============

The AJAX routes forward browser-originated calls to the configured sync
endpoint and inject the API key server-side, so it never reaches the browser.

* ``proxy`` (used by the toolbar widget) is denied when the current user
  disabled the backend toolbar, and accepts API paths only.
* ``list``, ``delete`` and ``delete-all`` (used by :guilabel:`System >
  Agentation`) are restricted to administrators.
* Errors are returned as codes, never as upstream error bodies.

..  important::

    Do not enable `All contexts` unless the team intentionally wants the
    toolbar available outside development or testing systems.
