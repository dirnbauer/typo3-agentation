# Changelog

All notable changes to this project are documented in this file.

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
