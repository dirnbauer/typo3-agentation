# EXT:agentation - Agentation for TYPO3

Agentation adds visual UI annotations for AI coding agents directly to TYPO3.
Authenticated backend users can annotate frontend pages through the Admin Panel
or TYPO3 backend module frames, then pass structured context to Claude Code,
Cursor, Windsurf, Zed, Continue, or any MCP-capable agent.

## Requirements

- TYPO3 14.3+
- PHP 8.2+
- Node.js 20+ only when rebuilding the bundled `agentation` assets
- A backend user session for frontend or backend toolbar injection

## Installation

```sh
composer require webconsulting/agentation
```

The extension ships the built Vite assets in `Resources/Public/Vite/`, so a
Composer installation works without a Node.js build step. Rebuild the assets
only when updating the upstream npm package:

```sh
npm install
npm run build
```

## Quick Start

1. Open `Admin Tools > Settings > Extension Configuration > agentation`.
2. Keep the default `Development` context gate unless the toolbar must run in
   another application context.
3. Enable the toolbar for your backend user in `User Settings > Agentation`.
4. In the frontend, open the Admin Panel and enable the Agentation section for
   the current request.
5. Open `System > Agentation` to copy the MCP configuration for your coding
   agent.

## Key Features

- Frontend toolbar through TYPO3 Admin Panel opt-in
- Backend toolbar injection in module content frames
- Admin-only `System > Agentation` module with MCP setup and status checks
- Per-user frontend and backend toolbar settings
- Context gate to prevent accidental production exposure
- Local and server-side annotation listing and deletion
- Same-origin backend proxy for local `agentation-mcp` servers

## Documentation

Detailed installation, configuration, usage, security, and developer notes live
in [Documentation/](Documentation/Index.rst).

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

GPL-2.0-or-later
