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

:php:`Webconsulting\\Agentation\\Service\\ViteAssetResolver` reads the
manifest at runtime (resolving the extension path through the
:php:`PackageManager`) and returns the entrypoint and CSS URLs for TYPO3's
:php:`AssetCollector`. The bundle is built with Vite 8; run
:bash:`npm ci && npm run build` and commit the result below
:file:`Resources/Public/Vite/` - CI fails when the committed build does not
match the sources.

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
* :file:`Configuration/Services.yaml` autowires :file:`Classes/`; the backend
  controllers and the Admin Panel module are made public with
  :php:`#[Autoconfigure(public: true)]` on the classes.

..  _developer-services:

Services and enums
==================

* :php:`Service\\ConfigurationService` normalises the extension configuration
  once into typed values and the enums :php:`Enum\\ToolbarPosition` and
  :php:`Enum\\ContextGate`.
* :php:`Service\\UserToolbarSettingsService` evaluates the per-user switches
  from :guilabel:`User Settings > Agentation`.
* :php:`Service\\FrontendToolbarSettingsService` combines the user switch with
  the Admin Panel values (toggle, :php:`ToolbarPosition`,
  :php:`Enum\\AnnotationScope`) and is shared by the Admin Panel module and
  the asset listener.
* :php:`EventListener\\InjectToolbarAssets` listens to
  :php:`BeforeJavaScriptsRenderingEvent`, decides the
  :php:`Enum\\InjectionScope` (frontend or backend module frame) and reads the
  page id from the ``frontend.page.information`` request attribute.

..  _developer-testing:

Testing and quality
===================

..  code-block:: bash
    :caption: Local quality checks

    composer test              # lint, cgl, phpstan, unit, functional
    composer cgl:fix
    Build/Scripts/runTests.sh -s functional

PHPStan runs at level 8 with phpstan-typo3 and phpstan-phpunit, php-cs-fixer
uses the TYPO3 coding standards. Unit tests live in :file:`Tests/Unit/`,
functional tests in :file:`Tests/Functional/` and boot the extension through
:file:`Build/phpunit/FunctionalTests.xml` (SQLite by default; set the
``typo3Database*`` environment variables for MariaDB as the GitHub workflow
does).

..  _developer-localization:

Localization
============

All labels are stored as XLIFF 2.0 files below
:file:`Resources/Private/Language/`. English source labels and German targets
are provided for backend module, Admin Panel, and JavaScript notification
strings.
