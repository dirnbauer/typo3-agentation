<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Enum;

use TYPO3\CMS\Core\Core\ApplicationContext;

/**
 * Which TYPO3 application contexts may load the toolbar at all.
 *
 * The backing values are the option labels from ext_conf_template.txt.
 */
enum ContextGate: string
{
    case Development = 'Development';
    case DevelopmentAndTesting = 'Development and Testing';
    case AllContexts = 'All contexts';

    /**
     * Unknown or empty settings resolve to the safest gate.
     */
    public static function fromSetting(string $value): self
    {
        return self::tryFrom(trim($value)) ?? self::Development;
    }

    public function allows(ApplicationContext $context): bool
    {
        return match ($this) {
            self::AllContexts => true,
            self::DevelopmentAndTesting => $context->isDevelopment() || $context->isTesting(),
            self::Development => $context->isDevelopment(),
        };
    }
}
