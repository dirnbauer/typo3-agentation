..  include:: /Includes.rst.txt

..  _installation:

============
Installation
============

The extension key and directory are ``agentation``, the Composer package is
``webconsulting/agentation`` and the source repository is
`dirnbauer/typo3-agentation <https://github.com/dirnbauer/typo3-agentation>`__.
The package is distributed via Composer only:

..  code-block:: bash
    :caption: Composer installation

    composer require webconsulting/agentation

The package contains the built toolbar bundle in
:file:`Resources/Public/Vite/`. A normal Composer installation does not need
Node.js.

..  _installation-build-assets:

Rebuild assets
==============

Rebuild the toolbar bundle only when changing :file:`Build/Sources/agentation.js`,
the shared :file:`Resources/Public/JavaScript/storage.js`, or when updating
the upstream npm package. The backend module scripts in
:file:`Resources/Public/JavaScript/` are served as they are.

..  code-block:: bash
    :caption: Rebuild the bundled Agentation asset

    npm ci
    npm run build

Commit the generated files below :file:`Resources/Public/Vite/` before
tagging a release.

..  _installation-setup:

TYPO3 setup
===========

After installation, open :guilabel:`System > Settings > Extension
Configuration > agentation` and review the context gate before enabling the
toolbar for users.
