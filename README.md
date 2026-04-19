# EXT:agentation — Agentation for TYPO3 v14

Visual UI annotations for AI coding agents — right inside your TYPO3 frontend **and** backend.
Wraps the [`agentation`](https://www.agentation.com/) npm package so users can click elements,
annotate, and share structured context (CSS selectors, file paths, computed styles, user
feedback) with Claude Code, Cursor, or any MCP-capable agent.

## Features mapped from agentation.com

| Agentation feature | How this extension surfaces it |
| --- | --- |
| Element annotation toolbar | Loaded in FE + BE when enabled; position configurable |
| Hover previews / frame pausing / text selection | Provided by upstream `agentation@^3` bundle |
| Markdown export | Native upstream feature |
| MCP (Model Context Protocol) server | BE module renders pre-filled `.mcp.json` snippet, one-click copy |
| Webhooks | Configurable webhook URL in extension config, forwarded to toolbar init |
| API key / workspace ID | Extension configuration (install tool) |
| Framework-agnostic | Vanilla Vite bundle, zero React/Vue/Angular assumptions |

## Requirements

- TYPO3 ^14.0
- PHP ^8.2
- `typo3/cms-adminpanel` (bundled with v14)
- Node 20+ for the build step (only needed at install time / when updating)
- `praetorius/vite-asset-collector` (optional — the manifest reader falls back gracefully)

## Install

```sh
composer require webconsulting/agentation
cd vendor/webconsulting/agentation   # or your extension path
npm install
npm run build
```

`npm run build` writes hashed assets + `manifest.json` into
`Resources/Public/Vite/`. The PHP side reads the manifest at request time, so
you only need to rebuild when upgrading `agentation` on npm.

## Configuration

Open **Admin Tools → Settings → Extension Configuration → agentation**:

| Key | Purpose |
| --- | --- |
| `apiKey` | Agentation API key. Leave empty for free local-only mode (copy-paste markdown). |
| `workspaceId` | Workspace / project ID shown in the MCP snippet and sent to the toolbar. |
| `frontendEnabled` | Global on/off for the FE toolbar. |
| `backendEnabled` | Global on/off for the BE toolbar. |
| `contextGate` | `Development` (default), `Development and Testing`, or `All contexts`. Prevents production leaks. |
| `defaultOptIn` | Whether new BE users see the toolbar on by default. |
| `toolbarPosition` | `bottom-right` / `bottom-left` / `top-right` / `top-left`. |
| `webhookUrl` | Forwarded to the toolbar; annotations POST here. |
| `additionalOptions` | Raw JSON merged into the toolbar's `init()` call. Escape hatch for upstream features. |

## Frontend: Admin Panel section

When a BE user is authenticated in the frontend and the application context matches
the gate, a new **Agentation** section appears in the TYPO3 Admin Panel. It exposes:

- **Show toolbar on this page** — per-session opt-in
- **Toolbar position** — override extension default
- **Annotation scope** — `frontend` (ignore the admin panel chrome) or `frontend+adminpanel`

No toolbar ever ships to anonymous visitors. The gate is:

```
contextGate passes  AND  BE user session  AND  admin panel section toggled on
```

## Backend: User Settings switch

Each BE user gets an **Agentation** tab under **User Settings → Personal data** with:

- Enable toolbar in backend
- Enable toolbar in frontend (used alongside the Admin Panel opt-in)

Stored in `be_users.uc`, so admins can't force it globally — respect by design.

## Backend module

A module under **System → Agentation** (admin-only) shows:

- Pre-filled `.mcp.json` snippet with one-click copy
- Status: API key set, bundle built, context allowed, FE/BE toggles
- Link to agentation.com

## MCP — yes, and here's how

The `agentation` npm package ships an MCP server. Any agent that supports MCP
(Claude Code, Cursor, Windsurf, Zed, Continue, Cline…) can connect to it and
receive annotations in real time instead of copy-paste.

1. Open the **Agentation** backend module.
2. Copy the shown JSON into your agent's MCP config:
   - **Claude Code** — `~/.claude/mcp.json` (or project `.mcp.json`)
   - **Cursor** — Settings → Features → MCP
   - **Windsurf / Zed / Continue** — equivalent MCP servers section
3. Reload your agent. It now has a tool like `agentation__get_annotation`.
4. Click annotate in the toolbar, add a note — your agent can ask clarifying
   questions and resolve the feedback against the codebase directly.

Example (also at `.mcp.json.example`):

```json
{
  "mcpServers": {
    "agentation": {
      "command": "npx",
      "args": ["-y", "agentation", "mcp"],
      "env": {
        "AGENTATION_API_KEY": "your-api-key",
        "AGENTATION_WORKSPACE": "your-workspace-id"
      }
    }
  }
}
```

API key and workspace are only needed when you want multi-device sync or team
sharing. The toolbar itself works locally without them.

## Framework-agnostic (from the host page)

The `agentation` npm package is a React component under the hood. To keep
the integration framework-agnostic **from the TYPO3 site's perspective**,
Vite bundles agentation's React runtime + React DOM + our glue into a
single self-contained ES module (~540 KB, ~136 KB gzipped).

- Your TYPO3 site does **not** need React, Vue, or Angular.
- If it already ships React for something else, our bundle runs its own
  isolated instance via `createRoot` into a detached `#typo3-agentation-root`
  container — no version conflicts, no hydration issues.
- Toolbar config is passed via a single inline `<script>` tag writing
  `window.TYPO3Agentation` — no custom elements, no shadow DOM, no coupling
  to host frameworks.

## Security notes

- Toolbar never loads for anonymous FE visitors. It requires a valid BE session.
- `contextGate` blocks production by default.
- API key is rendered into the BE module only — never exposed to the FE unless
  the FE user is the same BE user (which they are, by design, since the
  toolbar only runs when BE session is active).

## License

GPL-2.0-or-later
