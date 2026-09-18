..  include:: /Includes.rst.txt

..  _developer:

=========
Developer
=========

..  _developer-assets:

Asset flow
==========

Browser sources live in :file:`Build/Sources/`:

* :file:`agentation.js` - the toolbar: React, the upstream Agentation
  component and the TYPO3 glue (config data island, storage scoping,
  same-origin proxy, deletion broadcasts).
* :file:`module.js` - the :guilabel:`System > Agentation` module.
* :file:`storage.js`, :file:`clipboard.js` - helpers both entries share.

Vite writes both entries to :file:`Resources/Public/Vite/`: the toolbar as a
hashed file found through :file:`manifest.json`
(:php:`Webconsulting\\Agentation\\Service\\ViteAssetResolver`), the module
under the stable name :file:`module.js`, which the import map in
:file:`Configuration/JavaScriptModules.php` exposes as
``@webconsulting/agentation/module.js``. TYPO3's own modules
(``@typo3/...``) stay external. Run :bash:`npm ci && npm run build` and commit
the result; CI fails when the committed build does not match the sources.

The module reads its labels from ``TYPO3.lang`` (the ``module.*`` units of
:file:`locallang_mod.xlf`, exposed by the controller) and translates the
error codes the proxy returns (``module.errors.*``).

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
* :file:`Configuration/ContentSecurityPolicies.php` extends CSP for the
  runtime style and connection requirements of the upstream toolbar.
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
* :php:`EventListener\\InjectToolbarAssets` - listens to
  :php:`BeforeJavaScriptsRenderingEvent`, resolves the backend user through
  the ``backend.user`` Context aspect, decides the
  :php:`Enum\\InjectionScope` (frontend page or backend module frame) and
  ships the config as a JSON data island.
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
deprecation rules; php-cs-fixer uses the TYPO3 coding standards. Unit tests
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
:file:`locallang_mod.xlf` (domain ``agentation.mod``: backend module,
JavaScript notifications, proxy error codes).
