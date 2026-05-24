..  include:: /Includes.rst.txt

..  _configuration:

=============
Configuration
=============

Open :guilabel:`Admin Tools > Settings > Extension Configuration >
agentation`.

..  figure:: /Images/extension-configuration-basic.png
    :alt: TYPO3 extension configuration screen for Agentation basic settings
    :zoom: lightbox
    :class: with-border with-shadow

    Basic Agentation extension configuration in the TYPO3 backend.

..  _configuration-extension-settings:

Extension settings
==================

..  confval:: apiKey
    :name: agentation-api-key
    :type: string
    :default: empty

    Agentation API key. Leave empty for local copy-paste mode. Required for
    authenticated MCP and webhook usage.

..  confval:: workspaceId
    :name: agentation-workspace-id
    :type: string
    :default: empty

    Workspace or project ID shown in generated MCP configuration.

..  confval:: syncEndpoint
    :name: agentation-sync-endpoint
    :type: string
    :default: automatic

    Explicit Agentation sync endpoint. When empty, the extension uses the
    cloud endpoint if an API key exists, otherwise `http://localhost:4747`.

..  confval:: frontendEnabled
    :name: agentation-frontend-enabled
    :type: boolean
    :default: true

    Enables frontend toolbar injection globally. User settings and Admin Panel
    opt-in still apply.

..  confval:: backendEnabled
    :name: agentation-backend-enabled
    :type: boolean
    :default: true

    Enables backend toolbar injection globally. Per-user settings still apply.

..  confval:: contextGate
    :name: agentation-context-gate
    :type: options
    :default: Development

    Controls allowed TYPO3 application contexts. Available values are
    `Development`, `Development and Testing`, and `All contexts`.

..  confval:: defaultOptIn
    :name: agentation-default-opt-in
    :type: boolean
    :default: false

    Seeds the default frontend and backend toolbar setting for users who have
    not saved an explicit preference.

..  confval:: toolbarPosition
    :name: agentation-toolbar-position
    :type: string
    :default: bottom-right

    Default toolbar position. Supported values are `bottom-right`,
    `bottom-left`, `top-right`, and `top-left`.

..  confval:: webhookUrl
    :name: agentation-webhook-url
    :type: string
    :default: empty

    Optional webhook URL. Toolbar submissions are posted here when configured.

..  confval:: additionalOptions
    :name: agentation-additional-options
    :type: JSON string
    :default: empty

    JSON object merged into the Agentation toolbar options.
