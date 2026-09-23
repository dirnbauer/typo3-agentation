# Changelog

All notable changes to this project are documented in this file.

## [1.5.0] - 2026-09-23

### Added

- A frontend sync proxy. The frontend toolbar could not sync with
  agentation-mcp's default `http://localhost:4747` from an HTTPS page: the
  browser blocks the request as mixed content. `Middleware\FrontendSyncProxy`
  answers `/_agentation/api/proxy` below the site path, after the frontend
  authenticated the backend user and before page resolution, and forwards the
  toolbar's calls on the server, like the backend's `ajax_agentation_api_proxy`
  route. The toolbar's frontend `proxyUrl` points at it.
- It answers only a logged-in backend user for whom the frontend toolbar is on
  (context gate, global switch, User Settings, Admin Panel) and only with the
  token of that user's backend session: an HMAC of the session id
  (`Service\ProxyToken`) carried in the proxy URL. Answers are `no-store`.
- Documentation: inside DDEV the endpoint is typically
  `http://host.docker.internal:4747`, because the proxy runs in the web
  container; a configured `localhost` is tried under both container aliases
  automatically.

### Changed

- Both proxies forward through one class, `Service\SyncProxy`, which makes
  them no open proxies: the target is always the configured endpoint (and the
  container aliases of a `localhost` one), the caller chooses only an API path
  naming one of the API's resources, without dot or empty segments, schemes,
  hosts or control characters; redirects are not followed; only `GET`, `POST`,
  `PATCH` and `DELETE` and only the `Content-Type` header travel upstream;
  request bodies are limited to 1 MiB, answers to 4 MiB, every call to 4
  seconds. The API key is still added on the server and never reaches the
  browser.
- `ApiProxyController::endpointsToTry()` moved to `SyncProxy::endpointsToTry()`.

### Fixed

- The manual renders without errors: the MCP example is shown inline (the
  renderer refuses includes from outside `Documentation/`), and the extension
  name is spelled out where its substitution was not resolved.

## [1.4.1] - 2026-09-23

### Fixed

- The backend toolbar asked the router for `agentation_api_proxy`, but TYPO3
  registers AJAX routes under an `ajax_` prefix, so every backend request that
  carried the toolbar ended in a `RouteNotFoundException`. It now builds the
  URI of `ajax_agentation_api_proxy`, and the unit test's URI builder only
  answers that name, so a wrong route name fails the test instead of passing.

## [1.4.0] - 2026-09-23

### Added

- `Service\ToolbarGate`: one decision whether a response gets the toolbar, and
  in which scope, shared by the asset listener and the two new listeners below.
- `EventListener\RenderToolbarPagesUncached`: a frontend page that carries the
  toolbar is neither read from nor written to the page cache. Before, a page
  first rendered for a backend user with the toolbar could be cached with it —
  toolbar, configuration and user name included — and a page already in the
  cache came without the toolbar.
- `EventListener\AllowToolbarInContentSecurityPolicy`: `connect-src` for the
  sync endpoint and webhook origins and, in the frontend, `style-src
  'unsafe-inline'`, for exactly the responses that carry the toolbar.
- Unit tests for both listeners; the functional test asserts the new module
  markup and the Admin Panel's own markup.

### Changed

- `System > Agentation` is rebuilt from TYPO3 v14 backend components: the
  `Module` layout with DocHeader (reload, bookmark), an `<h1>`, a card grid
  (connection, status with `<typo3-backend-status-indicator>`, how it works),
  the stored annotations as a table with status badges, an empty state and an
  error callout, `<typo3-copy-to-clipboard>` for the snippets, the core modal
  to confirm "delete all" and core notifications. Light and dark mode follow
  the backend; the extension CSS only lays the components out.
- The module JavaScript is a native ES module in `Resources/Public/JavaScript/`
  served by the import map — no Vite build — and imports its labels from the
  `agentation.mod` domain (`~labels/agentation.mod`) with ICU plurals instead
  of concatenated `TYPO3.lang` strings. The module labels are rewritten for
  that, in English and German, and the module registers its title and
  descriptions through the `agentation.mod` domain.
- The Admin Panel section uses the Admin Panel's own checkbox partial, form
  and table markup and the backend user's language; its stylesheet is gone.
- Frontend annotations and backend module detection read the backend route's
  module instead of matching `/typo3/module/` paths.
- The generated MCP configuration only sets `AGENTATION_API_KEY`;
  `agentation-mcp` reads no workspace variable. The `workspaceId` setting is
  now described as the project identifier it is, sent with webhook
  submissions.
- `agentation` 3.0.2 → 3.1.2, `react`/`react-dom` 18.3.1 → 19.3.0; the toolbar
  bundle is rebuilt (target ES2022).
- PHP 8.5 gates CI next to 8.4; `actions/checkout` v7, `actions/setup-node` v7.
- PHPStan reports missing `#[\Override]` attributes; the Admin Panel module
  and the test cases carry them.

### Fixed

- The API key was part of the configuration shipped to the browser (and sent
  as a bearer token to the webhook), although the proxy exists so that it
  never leaves the server. It is gone from both.
- Webhook submissions were posted twice — once by the upstream component
  through `webhookUrl`, once by the TYPO3 `onSubmit` — and the TYPO3 one sent
  the Markdown output in a field called `annotation`. The toolbar now posts
  once: Agentation's `event`, `timestamp`, `url`, `output` and `annotations`
  plus a `typo3` block with context, page, user and project identifier.
- The toolbar received a clipboard function as its `copyToClipboard` prop,
  which upstream reads as a boolean; the prop is gone (upstream has its own
  fallback for insecure contexts).
- The toolbar config is encoded with `JSON_HEX_TAG`, so a `</script>` in any
  value cannot end the data island early.
- The Admin Panel section always showed "local-only": it tested a template
  variable that was never assigned.

### Removed

- `Configuration/ContentSecurityPolicies.php`, which widened the policy of
  every backend and frontend response, toolbar or not.
- The Vite build of the backend module, `Build/Sources/clipboard.js`,
  `Resources/Public/Css/AdminPanel.css` and the outdated extension
  configuration screenshot in the manual.

## [1.3.0] - 2026-09-18

### Added

- `Mcp\McpServerConfiguration`: the `agentation-mcp` server entry in the three
  formats the module offers (MCP JSON, Cursor deep link, `claude mcp add`),
  extracted from the controller and unit-tested.
- Unit tests for `ApiProxyController` (container-aware endpoint candidates,
  admin gate, widget proxy mirroring, delete-all aggregation) and for the
  committed Vite output; functional tests for the admin gate and the Admin
  Panel content.
- `module.*` labels are exposed to the backend module JavaScript as
  `TYPO3.lang`; the proxy returns error codes (`module.errors.*`) that the
  module translates.

### Changed

- `Settings\ExtensionSettings` (typed readonly record with public properties)
  replaces `Service\ConfigurationService` and its getters; the sync endpoint
  and the context gate are resolved once at construction.
- `Settings\ToolbarSettings` merges `UserToolbarSettingsService` and
  `FrontendToolbarSettingsService`; every method takes the backend user
  explicitly, the listener resolves it through the Context aspect.
- `ApiProxyController` forwards through one code path (transport failures
  move on to the next endpoint candidate, HTTP errors are mirrored) and no
  longer needs a language service.
- `ModuleController` and `AgentationModule` use the middleware-provided
  language service and the backend user of the Admin Panel base class.
- `InjectToolbarAssets` is stateless (`readonly`); the AssetCollector already
  deduplicates by identifier.
- The backend module JavaScript moved to `Build/Sources/module.js` and is
  built by Vite next to the toolbar bundle (stable name `module.js`); the
  localStorage helpers both bundles need live once in
  `Build/Sources/storage.js`. Dependencies updated, bundle rebuilt.
- `toolbarPosition` is an options field in the extension configuration.
- Development sandbox moved to `.Build/` (vendor, bin, public); PHPUnit
  `^12.4 || ^13.0`, tests use stubs instead of expectation-less mocks.
- `Configuration/TCA/Overrides/be_users.php` sets the two user-settings
  columns and the tab divider directly instead of regex-rewriting `showitem`.

### Fixed

- Toolbar widgets in backend frames now actually drop annotations deleted from
  `System > Agentation`: the broadcast handler read the scoped localStorage
  through its own key-rewriting patch and never found the entries.
- The "local only" badge in the stored-annotation list showed the literal
  label key.
- The Admin Panel link to the backend module is built by the backend router
  instead of a hard-coded `/typo3/` path.

### Removed

- The unused `agentation_api_sessions` AJAX route, `Resources/Public/JavaScript/`,
  the empty `onSubmit()` hook (the module never implemented
  `OnSubmitActorInterface`), the `stepCount` plural labels and three unused
  translation units.

### Security

- The annotation management routes (`list`, `delete`, `delete-all`) are
  restricted to administrators, matching the admin-only module that uses them.

## [1.2.0] - 2026-09-12

### Added

- Enums `ToolbarPosition`, `ContextGate`, `AnnotationScope` and `InjectionScope`
  replace loose string handling of extension and Admin Panel settings.
- `FrontendToolbarSettingsService` as the single source of truth for the Admin
  Panel toggle, position and scope, shared by the module and the asset listener.
- Unit tests for `ConfigurationService`, `ViteAssetResolver`,
  `UserToolbarSettingsService`, `FrontendToolbarSettingsService`,
  `InjectToolbarAssets` and the enums; a functional test that boots the
  extension and asserts the Admin Panel module, backend module and AJAX
  routes, the rendered `System > Agentation` module, icons, user settings TCA
  and the public DI services (`Build/phpunit/FunctionalTests.xml`, SQLite
  locally, MariaDB in CI).
- Composer scripts `lint`, `cgl`, `cgl:fix`, `test:functional`;
  `Build/Scripts/runTests.sh` mirrors the CI jobs.

### Changed

- PHPStan level 8 with phpstan-typo3, phpstan-phpunit, strict and deprecation
  rules; php-cs-fixer with the TYPO3 coding standards; a single GitHub
  Actions workflow (lint, cgl, phpstan, unit on PHP 8.4/8.5, functional on
  MariaDB 10.11, committed-asset check).
- Services are `readonly` with constructor promotion and typed constants;
  controllers and the Admin Panel module are published via
  `#[Autoconfigure(public: true)]` instead of `Services.yaml` overrides.
- `UriBuilder`, the Admin Panel `ConfigurationService`, `LanguageServiceFactory`
  and `PackageManager` are injected instead of `GeneralUtility::makeInstance()`
  and `$GLOBALS['LANG']`.
- `ConfigurationService::getToolbarPosition()` returns `ToolbarPosition`,
  `getContextGate()` was added and `toArray()` removed;
  `UserToolbarSettingsService` expects a `BackendUserAuthentication`.
- Toolbar bundle rebuilt with Vite 8 (Rolldown); npm dependencies updated,
  `npm audit --audit-level=high` is clean. Upstream `agentation` stays at 3.0.2
  (latest).
- README restructured; documentation updated for the new services, tests and
  the naming of directory, Composer package and GitHub repository.

### Fixed

- The frontend payload carries the page id again: TYPO3 v14 has no
  `$GLOBALS['TSFE']`, the id is read from the `frontend.page.information`
  request attribute.
- The Admin Panel section is listed whenever the user's frontend toolbar
  setting is on. Previously its own checkbox gated the visibility, so with the
  shipped default `defaultOptIn = 0` the section could never appear.

### Removed

- Empty `ext_tables.php` and the unused `Configuration/TypoScript` files
  (never included; nothing read `plugin.tx_agentation`).

## [1.1.5] - 2026-08-06

### Fixed

- Respect explicit per-user toolbar toggles while retaining the configured opt-in default.
- Ship the toolbar-toggle integration tests upstream so installations no longer need a local Composer patch.

## [1.1.4] - 2026-08-06

### Changed

- Require PHP 8.4 for the TYPO3 14 runtime.
- Normalize the PHP namespace to `Webconsulting\\Agentation` across runtime code, configuration, tests and documentation.

## [1.1.3] - 2026-08-06

### Changed

- Improve the TYPO3 14 extension and backend module icons.

## [1.1.2] - 2026-08-06

### Fixed

- Restore the canonical `dirnbauer` GitHub repository metadata.

## [1.1.1] - 2026-08-06

### Changed

- Normalize Composer and documentation links to the canonical GitHub repository.

## [1.1.0] - 2026-05-24

### Changed

- Adopt TYPO3 14 translation-domain syntax in Fluid templates and backend
  translation helpers.

## [1.0.0] - 2026-05-24

### Added

- Initial release for TYPO3 14.3+ and PHP 8.2+.
- Frontend Agentation toolbar integration through the TYPO3 Admin Panel.
- Backend toolbar integration for TYPO3 module content frames.
- Admin-only `System > Agentation` module with MCP configuration, status
  checks, and annotation management.
- Per-user backend and frontend toolbar settings.
- Extension configuration for API keys, workspace IDs, sync endpoints,
  context gating, toolbar position, webhooks, and additional toolbar options.
- Same-origin backend AJAX proxy for local and cloud Agentation sync endpoints.
- Built Vite assets for Composer/VCS installations without a Node.js build
  step.

### Security

- Toolbar injection is limited to authenticated backend users.
- The default application context gate allows toolbar usage only in
  `Development` contexts.
- Backend widget proxy calls are denied when the current user disabled the
  backend toolbar.
