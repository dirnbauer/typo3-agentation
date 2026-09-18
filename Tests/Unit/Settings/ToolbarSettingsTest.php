<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Settings;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class ToolbarSettingsTest extends AgentationTestCase
{
    #[Test]
    public function savedSwitchesWinOverTheDefaultOptIn(): void
    {
        $optIn = $this->toolbarSettings(['defaultOptIn' => '1']);
        self::assertFalse($optIn->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => 0])));
        self::assertFalse($optIn->isFrontendToolbarEnabled($this->backendUser(['agentation_frontend_enabled' => '0'])));

        $optOut = $this->toolbarSettings(['defaultOptIn' => '0']);
        self::assertTrue($optOut->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => '1'])));
        self::assertTrue($optOut->isFrontendToolbarEnabled($this->backendUser(['agentation_frontend_enabled' => 1])));
    }

    #[Test]
    public function unsavedSwitchesInheritTheDefaultOptIn(): void
    {
        $optIn = $this->toolbarSettings(['defaultOptIn' => '1']);
        self::assertTrue($optIn->isBackendToolbarEnabled($this->backendUser()));
        self::assertTrue($optIn->isFrontendToolbarEnabled($this->backendUser()));

        $optOut = $this->toolbarSettings(['defaultOptIn' => '0']);
        self::assertFalse($optOut->isBackendToolbarEnabled($this->backendUser()));
        self::assertFalse($optOut->isFrontendToolbarEnabled($this->backendUser()));
    }

    /**
     * @return iterable<string, array{mixed, bool}>
     */
    public static function switchValues(): iterable
    {
        yield 'bool true' => [true, true];
        yield 'bool false' => [false, false];
        yield 'int one' => [1, true];
        yield 'int zero' => [0, false];
        yield 'string one' => ['1', true];
        yield 'string zero' => ['0', false];
        yield 'string false' => ['false', false];
        yield 'string off' => ['off', false];
        yield 'string no' => ['no', false];
        yield 'empty string' => ['', false];
        yield 'string on' => ['on', true];
        yield 'null is not a stored value' => [null, false];
    }

    #[Test]
    #[DataProvider('switchValues')]
    public function switchValuesAreInterpretedLikeCheckboxes(mixed $value, bool $expected): void
    {
        $settings = $this->toolbarSettings(['defaultOptIn' => '0']);

        self::assertSame($expected, $settings->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => $value])));
    }

    #[Test]
    public function frontendSwitchOffMakesTheToolbarInactiveEvenWhenTheAdminPanelHasItOn(): void
    {
        $settings = $this->toolbarSettings(['defaultOptIn' => '1'], ['enabled' => '1']);

        self::assertFalse($settings->isFrontendToolbarActive($this->backendUser(['agentation_frontend_enabled' => 0])));
    }

    /**
     * @return iterable<string, array{string, bool}>
     */
    public static function defaultOptIns(): iterable
    {
        yield 'opt-in default' => ['1', true];
        yield 'opt-out default' => ['0', false];
    }

    #[Test]
    #[DataProvider('defaultOptIns')]
    public function untouchedAdminPanelCheckboxFallsBackToTheDefaultOptIn(string $defaultOptIn, bool $expected): void
    {
        $settings = $this->toolbarSettings(['defaultOptIn' => $defaultOptIn], ['enabled' => '']);

        self::assertSame($expected, $settings->isFrontendToolbarActive($this->backendUser(['agentation_frontend_enabled' => 1])));
    }

    /**
     * @return iterable<string, array{string, bool}>
     */
    public static function storedToggles(): iterable
    {
        yield 'checked' => ['1', true];
        yield 'unchecked' => ['0', false];
        yield 'false' => ['false', false];
        yield 'on' => ['on', true];
    }

    #[Test]
    #[DataProvider('storedToggles')]
    public function storedAdminPanelCheckboxTogglesTheToolbar(string $stored, bool $expected): void
    {
        $settings = $this->toolbarSettings(['defaultOptIn' => '0'], ['enabled' => $stored]);

        self::assertSame($expected, $settings->isFrontendToolbarActive($this->backendUser(['agentation_frontend_enabled' => 1])));
    }

    #[Test]
    public function frontendPositionFallsBackToTheExtensionConfiguration(): void
    {
        self::assertSame(ToolbarPosition::TopLeft, $this->toolbarSettings(['toolbarPosition' => 'top-left'], ['position' => ''])->getFrontendPosition());
        self::assertSame(ToolbarPosition::BottomLeft, $this->toolbarSettings(['toolbarPosition' => 'top-left'], ['position' => 'bottom-left'])->getFrontendPosition());
        self::assertSame(ToolbarPosition::BottomRight, $this->toolbarSettings(['toolbarPosition' => 'top-left'], ['position' => 'somewhere'])->getFrontendPosition());
    }

    #[Test]
    public function frontendScopeDefaultsToTheFrontendPage(): void
    {
        self::assertSame(AnnotationScope::Frontend, $this->toolbarSettings([], ['scope' => ''])->getFrontendScope());
        self::assertSame(AnnotationScope::Frontend, $this->toolbarSettings([], ['scope' => 'everything'])->getFrontendScope());
        self::assertSame(AnnotationScope::FrontendAndAdminPanel, $this->toolbarSettings([], ['scope' => 'frontend+adminpanel'])->getFrontendScope());
    }
}
