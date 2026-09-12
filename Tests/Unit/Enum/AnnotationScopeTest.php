<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Enum;

use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Webconsulting\Agentation\Enum\AnnotationScope;

final class AnnotationScopeTest extends TestCase
{
    #[Test]
    public function fromSettingFallsBackToTheFrontendPage(): void
    {
        self::assertSame(AnnotationScope::Frontend, AnnotationScope::fromSetting(''));
        self::assertSame(AnnotationScope::Frontend, AnnotationScope::fromSetting('frontend'));
        self::assertSame(AnnotationScope::Frontend, AnnotationScope::fromSetting('everything'));
        self::assertSame(AnnotationScope::FrontendAndAdminPanel, AnnotationScope::fromSetting('frontend+adminpanel'));
    }

    #[Test]
    public function onlyTheCombinedScopeIncludesTheAdminPanelChrome(): void
    {
        self::assertFalse(AnnotationScope::Frontend->includesAdminPanelChrome());
        self::assertTrue(AnnotationScope::FrontendAndAdminPanel->includesAdminPanelChrome());
    }

    #[Test]
    public function valuesMatchTheTranslationKeysUsedByTheSettingsTemplate(): void
    {
        self::assertSame(['frontend', 'frontend+adminpanel'], AnnotationScope::values());
    }
}
