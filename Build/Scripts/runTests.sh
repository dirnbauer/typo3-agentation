#!/usr/bin/env bash
set -euo pipefail

suite="all"

while getopts "s:" option; do
    case "${option}" in
        s)
            suite="${OPTARG}"
            ;;
        *)
            echo "Usage: $0 [-s all|phpstan|unit|assets]" >&2
            exit 2
            ;;
    esac
done

case "${suite}" in
    all)
        composer test
        npm run build
        git diff --exit-code -- Resources/Public/Vite
        ;;
    phpstan)
        composer phpstan
        ;;
    unit)
        composer test:unit
        ;;
    assets)
        npm run build
        git diff --exit-code -- Resources/Public/Vite
        ;;
    *)
        echo "Unknown test suite: ${suite}" >&2
        echo "Usage: $0 [-s all|phpstan|unit|assets]" >&2
        exit 2
        ;;
esac
