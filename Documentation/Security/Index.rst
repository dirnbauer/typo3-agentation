..  include:: /Includes.rst.txt

..  _security:

========
Security
========

Agentation is intended for development and review contexts.

..  _security-gates:

Runtime gates
=============

Toolbar assets are injected only when these checks pass:

* Application context is allowed by `contextGate`.
* The current request is handled for an authenticated backend user.
* The global frontend or backend toggle is enabled.
* The current user's matching toolbar setting is enabled.
* Frontend requests are explicitly enabled through the Admin Panel section.

The default `Development` context gate prevents accidental production exposure
when the extension is installed with default configuration.

..  _security-proxy:

Backend proxy
=============

The backend AJAX proxy forwards browser-originated Agentation sync calls to
the configured endpoint. It injects the configured API key server-side and
denies widget proxy calls when the current user disabled the backend toolbar.

..  important::

    Do not enable `All contexts` unless the team intentionally wants the
    toolbar available outside development or testing systems.
