<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Enum;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Webconsulting\Agentation\Enum\ToolbarPosition;

final class ToolbarPositionTest extends TestCase
{
    /**
     * @return iterable<string, array{string, ToolbarPosition}>
     */
    public static function settings(): iterable
    {
        yield 'bottom-right' => ['bottom-right', ToolbarPosition::BottomRight];
        yield 'bottom-left' => ['bottom-left', ToolbarPosition::BottomLeft];
        yield 'top-right' => ['top-right', ToolbarPosition::TopRight];
        yield 'top-left' => ['top-left', ToolbarPosition::TopLeft];
        yield 'whitespace is trimmed' => [' top-left ', ToolbarPosition::TopLeft];
        yield 'empty falls back' => ['', ToolbarPosition::BottomRight];
        yield 'unknown falls back' => ['middle', ToolbarPosition::BottomRight];
    }

    #[Test]
    #[DataProvider('settings')]
    public function fromSettingFallsBackToBottomRight(string $setting, ToolbarPosition $expected): void
    {
        self::assertSame($expected, ToolbarPosition::fromSetting($setting));
    }

    #[Test]
    public function valuesListsEveryCornerForTheAdminPanelSelect(): void
    {
        self::assertSame(['bottom-right', 'bottom-left', 'top-right', 'top-left'], ToolbarPosition::values());
    }
}
