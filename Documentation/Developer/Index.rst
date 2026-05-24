..  include:: /Includes.rst.txt

..  _developer:

=========
Developer
=========

..  _developer-assets:

Asset flow
==========

The browser entrypoint lives in :file:`Build/Sources/agentation.js`. The Vite
build writes a manifest and hashed assets to :file:`Resources/Public/Vite/`.

:php:`WebConsulting\\Agentation\\Service\\ViteAssetResolver` reads the
manifest at runtime and returns the entrypoint and CSS URLs for TYPO3's
:php:`AssetCollector`.

..  _developer-entrypoints:

TYPO3 entrypoints
=================

* :file:`ext_localconf.php` registers the Admin Panel module.
* :file:`Configuration/Backend/Modules.php` registers the backend module.
* :file:`Configuration/Backend/AjaxRoutes.php` registers annotation proxy
  routes.
* :file:`Configuration/TCA/Overrides/be_users.php` registers per-user toolbar
  settings.
* :file:`Configuration/ContentSecurityPolicies.php` extends CSP for the
  runtime style and connection requirements of the upstream toolbar.

..  _developer-localization:

Localization
============

All labels are stored as XLIFF 2.0 files below
:file:`Resources/Private/Language/`. English source labels and German targets
are provided for backend module, Admin Panel, and JavaScript notification
strings.
