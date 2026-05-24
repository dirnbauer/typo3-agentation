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
* The :guilabel:`Agentation` Admin Panel section is enabled for the request.

Use the Admin Panel section to choose the toolbar position and annotation
scope for the current frontend request.

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

The backend module lists annotations from the configured sync endpoint and
browser-local Agentation storage. Administrators can reload, delete individual
annotations, or clear all stored annotations from the module.
