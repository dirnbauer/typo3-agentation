<?php

declare(strict_types=1);

use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Directive;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Mutation;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\MutationCollection;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\MutationMode;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Scope;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\SourceKeyword;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\UriValue;
use TYPO3\CMS\Core\Type\Map;

/*
 * Agentation ships a React component that injects its own <style> tags
 * at runtime via document.head.appendChild(styleEl). Strict CSP blocks
 * those, so we extend style-src with 'unsafe-inline' while the toolbar
 * is active.
 *
 * The widget talks to the local agentation-mcp HTTP API (or the cloud
 * variant). TYPO3 v14's default BE CSP has `connect-src 'self'`, which
 * would block every sync call — including the ones our same-origin
 * proxy redirects through. Whitelist the known MCP sync endpoints so
 * both the fetch-shim (primary) and direct connections (fallback,
 * e.g. EventSource for SSE) can reach them.
 */
$mutations = new MutationCollection(
    new Mutation(
        MutationMode::Extend,
        Directive::StyleSrc,
        SourceKeyword::unsafeInline,
    ),
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
