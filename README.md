# Agentation for TYPO3

Visual UI annotations for AI coding agents, inside TYPO3. Logged-in backend
users mark up frontend pages or backend module screens with the upstream
[Agentation](https://www.agentation.com) toolbar and hand the structured
context (selectors, comments, computed styles, page id, user) to Claude Code,
Cursor, Windsurf, Zed, Continue or any other MCP-capable agent.

## What it is

- Frontend toolbar, gated by a backend session, the per-user switch in
  *User Settings* and an Admin Panel section (toggle, position, scope).
- Backend toolbar inside module content frames (`/typo3/module/*`).
- `System > Agentation` module: MCP configuration as JSON, Cursor deep link
  or `claude mcp add` command, status overview, stored-annotation cleanup.
- Same-origin AJAX proxy so an HTTPS backend can reach a local
  `agentation-mcp` server on `http://localhost:4747` (DDEV/Docker aware).
- Application-context gate (`Development` by default) so the toolbar never
  ships to production by accident.
- The React toolbar is bundled with Vite; the host page needs no React.

## Requirements

- TYPO3 14.3+ with `typo3/cms-adminpanel`
- PHP 8.4+
- Node.js 22.12+ only when rebuilding the bundled assets

## Install

Three names, one extension: the extension key and directory are
`agentation`, the Composer package is `webconsulting/agentation`, and the
source lives at [github.com/dirnbauer/typo3-agentation](https://github.com/dirnbauer/typo3-agentation).
The package is distributed via Composer only.

```sh
composer require webconsulting/agentation
```

The built toolbar bundle is committed in `Resources/Public/Vite/`, so no
Node.js toolchain is needed at install time.

## Configure

*Admin Tools > Settings > Extension Configuration > agentation*

| Setting | Default | Purpose |
| --- | --- | --- |
| `apiKey` | empty | Agentation API key; enables the cloud sync endpoint and webhooks |
| `workspaceId` | empty | Workspace/project id placed into the generated MCP config |
| `syncEndpoint` | auto | Explicit sync URL; auto = cloud with API key, else `http://localhost:4747` |
| `frontendEnabled` / `backendEnabled` | `1` | Global switches per application |
| `contextGate` | `Development` | `Development`, `Development and Testing` or `All contexts` |
| `defaultOptIn` | `0` | Preselects the per-user switches for users who never saved them |
| `toolbarPosition` | `bottom-right` | `bottom-right`, `bottom-left`, `top-right`, `top-left` |
| `webhookUrl` | empty | Annotations are POSTed here on submit |
| `additionalOptions` | empty | JSON object merged into the toolbar props |

## Use

1. *User Settings > Agentation*: switch the frontend and/or backend toolbar on
   for your account.
2. Frontend: open the Admin Panel; the *Agentation* section appears as soon
   as your frontend switch is on. Tick *Show Agentation toolbar on this page*
   and pick position and annotation scope.
3. Backend: the toolbar mounts in every module content frame except
   `System > Agentation` itself.
4. `System > Agentation`: copy the MCP configuration into your agent, e.g.
   `claude mcp add agentation -- npx -y agentation-mcp server`, and run
   `npx -y agentation-mcp server` locally (or use the cloud endpoint with an
   API key).

## Develop

```sh
composer install
composer test              # lint, cgl, phpstan (level 8), unit, functional (SQLite)
composer cgl:fix           # apply the TYPO3 coding guidelines
Build/Scripts/runTests.sh -s functional
npm ci && npm run build    # rebuild Resources/Public/Vite and commit the result
```

Functional tests run on SQLite by default; set `typo3DatabaseDriver=mysqli`
plus `typo3DatabaseHost/Port/Username/Password/Name` for MariaDB, as the CI
workflow does. CI runs lint, cgl, PHPStan, unit (PHP 8.4, 8.5 allowed to
fail), functional (MariaDB 10.11) and verifies the committed asset build.

## Docs

The manual lives in [Documentation/](Documentation/Index.rst) (installation,
configuration, usage, security, developer notes). Render it locally with the
TYPO3 documentation renderer:

```sh
docker run --rm -v "$(pwd)":/project ghcr.io/typo3-documentation/render-guides:latest --config=Documentation
```

Release history: [CHANGELOG.md](CHANGELOG.md).

## License

GPL-2.0-or-later
