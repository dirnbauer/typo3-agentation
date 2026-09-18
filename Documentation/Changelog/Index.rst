..  include:: /Includes.rst.txt

..  _changelog:

=========
Changelog
=========

The complete history with all details is kept in `CHANGELOG.md
<https://github.com/dirnbauer/typo3-agentation/blob/main/CHANGELOG.md>`__.

1.3.0
=====

* Typed settings records (`ExtensionSettings`, `ToolbarSettings`) replace
  three services; `McpServerConfiguration` builds the MCP snippets.
* One forwarding path in the proxy; the management routes are admin-only.
* Backend module JavaScript built by Vite next to the toolbar bundle, with
  labels from ``TYPO3.lang``; shared localStorage helpers fix the deletion
  broadcast in backend frames.
* PHPUnit 12/13, `.Build/` sandbox, new unit and functional tests.

1.2.0
=====

* Enums for positions, scopes and the context gate; PHPStan level 8, TYPO3
  coding standards, single CI workflow, first unit and functional tests.
* Page id restored in the frontend payload; Admin Panel section visible
  whenever the user's frontend switch is on.

1.1.x
=====

* PHP 8.4, `Webconsulting\\Agentation` namespace, TYPO3 14 icons and
  translation domains, repository metadata.

1.0.0
=====

* Initial release for TYPO3 14.3+.
