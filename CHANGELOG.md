# Changelog

All notable changes to this project are documented in this file.

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
