..  include:: /Includes.rst.txt

..  _introduction:

============
Introduction
============

Agentation integrates the upstream Agentation toolbar into TYPO3 14.3+.
It is built for development and review workflows where a logged-in backend
user wants to point an AI coding agent at visual UI feedback with selectors,
page context, comments, and computed styles.

..  _introduction-features:

Features
========

* Frontend toolbar gated by backend session, user settings, and Admin Panel
  opt-in. Pages that carry it are rendered for the backend user alone and
  never stored in the page cache.
* Backend toolbar injection for TYPO3 module content frames.
* Admin-only :guilabel:`System > Agentation` module: MCP setup, status and
  the stored annotations, built from the TYPO3 backend components.
* Per-user toolbar settings for frontend and backend usage.
* Application context gate with a safe default for development systems.
* Same-origin proxies in the backend and the frontend for local and cloud
  Agentation sync endpoints, so HTTPS pages can sync with an HTTP
  ``agentation-mcp`` server; the API key stays on the server.
* The Content-Security-Policy is widened only for responses that carry the
  toolbar.
* The built toolbar bundle is committed for Composer installations.

..  _introduction-requirements:

Requirements
============

* TYPO3 14.3 or later
* PHP 8.4 or later
* `typo3/cms-adminpanel`
* Node.js 22.12 or later only when rebuilding the bundled Vite assets

The toolbar is never injected for anonymous frontend visitors.
