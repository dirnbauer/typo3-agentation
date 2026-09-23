..  include:: /Includes.rst.txt

..  _developer:

=========
Developer
=========

..  _developer-assets:

Asset flow
==========

Two kinds of browser code:

* :file:`Build/Sources/agentation.js` - the toolbar: React, the upstream
  Agentation component and the TYPO3 glue (config data island, storage
  scoping, same-origin proxy, deletion broadcasts, webhook submissions).
  Vite bundles it into one hashed file in :file:`Resources/Public/Vite/`,
  found through :file:`manifest.json`
  (:php:`Webconsulting\\Agentation\\Service\\ViteAssetResolver`). Run
  :bash:`npm ci && npm run build` and commit the result; CI fails when the
  committed build does not match the sources.
* :file:`Resources/Public/JavaScript/module.js` and :file:`storage.js` - the
  :guilabel:`System > Agentation` module as native ES modules, served by the
  import map (:file:`Configuration/JavaScriptModules.php` maps
  ``@webconsulting/agentation/``). No build step; the toolbar bundle compiles
  in the same :file:`storage.js`.

The module imports its labels from the ``agentation.mod`` translation domain
(``import labels from '~labels/agentation.mod'``), formats plurals with ICU
messages, confirms "delete all" with the core modal and reports through core
notifications. Copy buttons are the core ``<typo3-copy-to-clipboard>``
element, status dots the core ``<typo3-backend-status-indicator>``.

..  _developer-entrypoints:

TYPO3 entrypoints
=================

* :file:`ext_localconf.php` registers the Admin Panel module.
* :file:`Configuration/Backend/Modules.php` registers the backend module.
* :file:`Configuration/Backend/AjaxRoutes.php` registers the proxy routes:
  ``list``, ``delete`` and ``delete-all`` for the module (administrators
  only) and ``proxy`` for the toolbar widget.
* :file:`Configuration/TCA/Overrides/be_users.php` registers the per-user
  toolbar switches on their own :guilabel:`Agentation` tab.
* :file:`Configuration/Services.yaml` autowires :file:`Classes/`; the backend
  controllers and the Admin Panel module are made public with
  :php:`#[Autoconfigure(public: true)]` on the classes.

..  _developer-services:

Classes
=======

* :php:`Settings\\ExtensionSettings` - the extension configuration as a
  readonly record with public typed properties; the sync endpoint, the
  :php:`Enum\\ContextGate` and whether the current application context is
  allowed are resolved once.
* :php:`Settings\\ToolbarSettings` - the per-user switches from
  :guilabel:`User Settings > Agentation` and the Admin Panel values (toggle,
  :php:`Enum\\ToolbarPosition`, :php:`Enum\\AnnotationScope`). Every method
  takes the backend user explicitly.
* :php:`Mcp\\McpServerConfiguration` - the ``agentation-mcp`` server entry as
  MCP JSON, Cursor deep link and ``claude mcp add`` command.
* :php:`Service\\ToolbarGate` - decides for a request whether the toolbar
  belongs on it and in which :php:`Enum\\InjectionScope`: context gate,
  logged-in backend user (``backend.user`` Context aspect), global and
  per-user switches, frontend pages outside backend preview frames, backend
  routes of any module but its own.
* :php:`EventListener\\InjectToolbarAssets` - listens to
  :php:`BeforeJavaScriptsRenderingEvent` and ships the toolbar bundle and its
  config (a JSON data island without secrets) when the gate lets the
  request through.
* :php:`EventListener\\RenderToolbarPagesUncached` - listens to
  :php:`ShouldUseCachedPageDataIfAvailableEvent` and keeps frontend pages
  with the toolbar out of the page cache in both directions.
* :php:`EventListener\\AllowToolbarInContentSecurityPolicy` - listens to
  :php:`PolicyMutatedEvent` and widens the policy of exactly the responses
  that carry the toolbar.
* :php:`Controller\\Backend\\ApiProxyController` - one forwarding path with
  container-aware endpoint candidates (``host.docker.internal``,
  ``host.containers.internal`` for a configured ``localhost``).
* :php:`Controller\\Backend\\ModuleController`, :php:`AdminPanel\\AgentationModule`
  - thin view assembly.

..  _developer-testing:

Testing and quality
===================

..  code-block:: bash
    :caption: Local quality checks

    composer install           # into .Build/
    composer test              # lint, cgl, phpstan, unit, functional
    composer cgl:fix
    Build/Scripts/runTests.sh -s functional

PHPStan runs at level 8 with phpstan-typo3, phpstan-phpunit, strict and
deprecation rules and reports missing ``#[\Override]`` attributes;
php-cs-fixer uses the TYPO3 coding standards. Unit tests
(:file:`Tests/Unit/`, built on :php:`Tests\\Unit\\AgentationTestCase`) and
functional tests (:file:`Tests/Functional/`) run with PHPUnit 12/13 through
:file:`Build/phpunit/`; functional tests use SQLite by default and the
``typo3Database*`` environment variables for MariaDB as the GitHub workflow
does.

..  _developer-localization:

Localization
============

Labels are XLIFF 2.0 files below :file:`Resources/Private/Language/` with
English sources and German targets: :file:`locallang.xlf` (domain
``agentation.messages``: user settings, Admin Panel) and
:file:`locallang_mod.xlf` (domain ``agentation.mod``: module title and
descriptions, the module, its JavaScript, proxy error codes).
