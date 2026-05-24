..  include:: /Includes.rst.txt

..  _installation:

============
Installation
============

Install the extension with Composer:

..  code-block:: bash
    :caption: Composer installation

    composer require webconsulting/agentation

The package contains the built Vite assets in
:file:`Resources/Public/Vite/`. A normal Composer installation does not need
Node.js.

..  _installation-build-assets:

Rebuild assets
==============

Rebuild the frontend bundle only when changing
:file:`Build/Sources/agentation.js` or updating the upstream npm package:

..  code-block:: bash
    :caption: Rebuild the bundled Agentation asset

    npm install
    npm run build

Commit the generated files below :file:`Resources/Public/Vite/` before
tagging a release.

..  _installation-setup:

TYPO3 setup
===========

After installation, open :guilabel:`Admin Tools > Settings > Extension
Configuration > agentation` and review the context gate before enabling the
toolbar for users.
