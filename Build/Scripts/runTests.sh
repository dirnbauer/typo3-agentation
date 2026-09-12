#!/usr/bin/env bash
# Local runner mirroring the CI jobs. Usage: Build/Scripts/runTests.sh [-s suite]
#   suites: all (default) | lint | cgl | phpstan | unit | functional | assets
# Functional tests use SQLite unless typo3Database* env vars point elsewhere.
set -euo pipefail
cd "$(dirname "$0")/../.."

suite="all"
while getopts "s:" option; do
    case "${option}" in
        s) suite="${OPTARG}" ;;
        *) echo "Usage: $0 [-s all|lint|cgl|phpstan|unit|functional|assets]" >&2; exit 2 ;;
    esac
done

run_assets() {
    npm ci --no-audit --no-fund
    npm run build
    git diff --exit-code -- Resources/Public/Vite
    npm audit --audit-level=high
}

case "${suite}" in
    all)
        composer validate --strict
        composer lint
        composer cgl
        composer phpstan
        composer test:unit
        composer test:functional
        run_assets
        ;;
    lint) composer lint ;;
    cgl) composer cgl ;;
    phpstan) composer phpstan ;;
    unit) composer test:unit ;;
    functional) composer test:functional ;;
    assets) run_assets ;;
    *)
        echo "Unknown test suite: ${suite}" >&2
        echo "Usage: $0 [-s all|lint|cgl|phpstan|unit|functional|assets]" >&2
        exit 2
        ;;
esac
