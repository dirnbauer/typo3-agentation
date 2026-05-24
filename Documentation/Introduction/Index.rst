..  include:: /Includes.rst.txt

..  _introduction:

============
Introduction
============

|extension_name| integrates the upstream Agentation toolbar into TYPO3 14.3+.
It is built for development and review workflows where a logged-in backend
user wants to point an AI coding agent at visual UI feedback with selectors,
page context, comments, and computed styles.

..  _introduction-features:

Features
========

* Frontend toolbar gated by backend session, user settings, and Admin Panel
  opt-in.
* Backend toolbar injection for TYPO3 module content frames.
* Admin-only :guilabel:`System > Agentation` module for MCP setup and status.
* Per-user toolbar settings for frontend and backend usage.
* Application context gate with a safe default for development systems.
* Same-origin backend proxy for local and cloud Agentation sync endpoints.
* Built Vite assets committed for Composer/VCS installations.

..  _introduction-requirements:

Requirements
============

* TYPO3 14.3 or later
* PHP 8.2 or later
* `typo3/cms-adminpanel`
* Node.js 20 or later only when rebuilding the bundled Vite assets

The toolbar is never injected for anonymous frontend visitors.
