<?php

declare(strict_types=1);

use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Directive;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Mutation;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\MutationCollection;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\MutationMode;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Scope;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\SourceKeyword;
use TYPO3\CMS\Core\Type\Map;

/*
 * Agentation ships a React component that injects its own <style> tags
 * at runtime via `document.head.appendChild(styleEl)`. Strict CSP blocks
 * those, so we extend style-src with 'unsafe-inline' while the toolbar
 * is active. Scripts stay strict — the AssetCollector hashes our inline
 * script and the bundle is self-hosted, so we don't need to relax
 * script-src.
 */
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\UriValue;

$mutations = new MutationCollection(
    new Mutation(
        MutationMode::Extend,
        Directive::StyleSrc,
        SourceKeyword::unsafeInline,
    ),
    // Allow the widget (and our same-origin proxy fallback) to reach
    // the agentation-mcp server. Both localhost variants plus the
    // Docker / Podman bridges used by DDEV + the cloud fallback.
    new Mutation(
        MutationMode::Extend,
        Directive::ConnectSrc,
        new UriValue('http://localhost:4747'),
        new UriValue('http://127.0.0.1:4747'),
        new UriValue('http://host.docker.internal:4747'),
        new UriValue('http://host.containers.internal:4747'),
        new UriValue('https://agentation-mcp-cloud.vercel.app'),
    ),
);

return Map::fromEntries([
    Scope::backend(),
    $mutations,
    Scope::frontend(),
    $mutations,
]);
