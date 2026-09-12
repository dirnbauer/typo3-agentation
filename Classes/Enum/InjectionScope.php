<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Enum;

/**
 * Which TYPO3 application the toolbar bundle is being injected into.
 *
 * The backing value is exposed to the browser bundle as `scope`.
 */
enum InjectionScope: string
{
    case Frontend = 'frontend';
    case Backend = 'backend';
}
