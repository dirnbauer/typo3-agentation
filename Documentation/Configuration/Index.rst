..  include:: /Includes.rst.txt

..  _configuration:

=============
Configuration
=============

Open :guilabel:`System > Settings > Extension Configuration > agentation`.

..  _configuration-extension-settings:

Extension settings
==================

..  confval:: apiKey
    :name: agentation-api-key
    :type: string
    :default: empty

    Agentation API key. With a key, annotations are stored in the Agentation
    cloud; without one they sync through a local ``agentation-mcp`` server
    on ``http://localhost:4747``. The key stays on the server: the backend
    proxy adds it to its requests and the generated MCP configuration
    passes it to ``agentation-mcp``; the browser never receives it.

..  confval:: workspaceId
    :name: agentation-workspace-id
    :type: string
    :default: empty

    Optional project identifier. It travels with webhook submissions
    (``typo3.workspaceId``), so a receiver can tell installations apart.
    ``agentation-mcp`` has no such setting.

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
    :type: options
    :default: bottom-right

    Default toolbar position. Supported values are `bottom-right`,
    `bottom-left`, `top-right`, and `top-left`.

..  confval:: webhookUrl
    :name: agentation-webhook-url
    :type: string
    :default: empty

    Optional webhook URL. When set, the toolbar shows its :guilabel:`Send`
    action and posts each submission here — see :ref:`usage-webhook`.

..  confval:: additionalOptions
    :name: agentation-additional-options
    :type: JSON string
    :default: empty

    JSON object merged into the Agentation toolbar options.
