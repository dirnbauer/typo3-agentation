<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Enum;

/**
 * Corner of the viewport the Agentation toolbar is anchored to.
 */
enum ToolbarPosition: string
{
    case BottomRight = 'bottom-right';
    case BottomLeft = 'bottom-left';
    case TopRight = 'top-right';
    case TopLeft = 'top-left';

    /**
     * Maps a free-form setting (extension configuration, admin panel
     * option) to a case, falling back to the bottom-right default.
     */
    public static function fromSetting(string $value): self
    {
        return self::tryFrom(trim($value)) ?? self::BottomRight;
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_map(static fn(self $case): string => $case->value, self::cases());
    }
}
