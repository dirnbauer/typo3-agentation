..  include:: /Includes.rst.txt

..  _usage:

=====
Usage
=====

..  _usage-frontend:

Frontend annotations
====================

Frontend annotation requires all gates to pass:

* TYPO3 application context matches the configured context gate.
* A backend user session is active.
* The user's frontend toolbar setting is enabled.
* The toolbar checkbox in the :guilabel:`Agentation` Admin Panel section is
  ticked (or :confval:`defaultOptIn <agentation-default-opt-in>` is set and
  the checkbox was never touched).

The Admin Panel section is listed as soon as the user's frontend toolbar
setting is on. Inside the section, switch the toolbar on or off and choose
the toolbar position and annotation scope; the Admin Panel stores the values
per backend user.

..  _usage-backend:

Backend annotations
===================

Backend annotation is available in TYPO3 module content frames when the global
backend toggle and the current user's backend toolbar setting are enabled. The
toolbar is not injected into Agentation's own administration module.

..  _usage-mcp:

MCP setup
=========

Open :guilabel:`System > Agentation` and copy the generated MCP JSON or Claude
Code CLI command into your coding agent.

The example below is the same shape used by the backend module:

..  literalinclude:: ../../.mcp.json.example
    :language: json
    :caption: .mcp.json.example

API key and workspace values are optional for local copy-paste workflows and
required for authenticated sync.

..  _usage-annotations:

Manage stored annotations
=========================

:guilabel:`System > Agentation` (administrators only) lists annotations from
the configured sync endpoint and from this browser's Agentation storage.
Reload the list, delete single annotations or clear everything; open toolbar
widgets in other tabs and frames are told about deletions so they do not
re-push the removed annotations.
