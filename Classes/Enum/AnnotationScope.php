<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Enum;

/**
 * What a frontend annotation session may target: the rendered page only,
 * or the page plus the Admin Panel chrome around it.
 */
enum AnnotationScope: string
{
    case Frontend = 'frontend';
    case FrontendAndAdminPanel = 'frontend+adminpanel';

    public static function fromSetting(string $value): self
    {
        return self::tryFrom(trim($value)) ?? self::Frontend;
    }

    public function includesAdminPanelChrome(): bool
    {
        return $this === self::FrontendAndAdminPanel;
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_map(static fn(self $case): string => $case->value, self::cases());
    }
}
