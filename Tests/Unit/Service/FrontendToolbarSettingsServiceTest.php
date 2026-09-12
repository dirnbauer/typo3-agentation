<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfigurationService;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Authentication\UserSettings;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\FrontendToolbarSettingsService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;

final class FrontendToolbarSettingsServiceTest extends TestCase
{
    protected function tearDown(): void
    {
        unset($GLOBALS['BE_USER']);
        parent::tearDown();
    }

    #[Test]
    public function userSettingOffMakesTheToolbarInactiveEvenWhenTheAdminPanelHasItOn(): void
    {
        $service = $this->service(['defaultOptIn' => '1'], ['enabled' => '1']);

        self::assertFalse($service->isToolbarActive($this->backendUser(['agentation_frontend_enabled' => 0])));
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
        $service = $this->service(['defaultOptIn' => $defaultOptIn], ['enabled' => '']);

        self::assertSame($expected, $service->isToolbarActive($this->backendUser(['agentation_frontend_enabled' => 1])));
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
        $service = $this->service(['defaultOptIn' => '0'], ['enabled' => $stored]);

        self::assertSame($expected, $service->isToolbarActive($this->backendUser(['agentation_frontend_enabled' => 1])));
    }

    #[Test]
    public function globalBackendUserIsUsedWhenNoneIsPassed(): void
    {
        $service = $this->service(['defaultOptIn' => '0'], ['enabled' => '1']);

        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_frontend_enabled' => 1]);
        self::assertTrue($service->isToolbarActive());

        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_frontend_enabled' => 0]);
        self::assertFalse($service->isToolbarActive());
    }

    #[Test]
    public function positionFallsBackToTheExtensionConfiguration(): void
    {
        self::assertSame(ToolbarPosition::TopLeft, $this->service(['toolbarPosition' => 'top-left'], ['position' => ''])->getPosition());
        self::assertSame(ToolbarPosition::BottomLeft, $this->service(['toolbarPosition' => 'top-left'], ['position' => 'bottom-left'])->getPosition());
        self::assertSame(ToolbarPosition::BottomRight, $this->service(['toolbarPosition' => 'top-left'], ['position' => 'somewhere'])->getPosition());
    }

    #[Test]
    public function scopeDefaultsToTheFrontendPage(): void
    {
        self::assertSame(AnnotationScope::Frontend, $this->service([], ['scope' => ''])->getScope());
        self::assertSame(AnnotationScope::Frontend, $this->service([], ['scope' => 'everything'])->getScope());
        self::assertSame(AnnotationScope::FrontendAndAdminPanel, $this->service([], ['scope' => 'frontend+adminpanel'])->getScope());
    }

    /**
     * @param array<string, mixed> $extensionConfiguration
     * @param array<string, string> $storedOptions
     */
    private function service(array $extensionConfiguration, array $storedOptions): FrontendToolbarSettingsService
    {
        $extensionConfigurationApi = $this->createMock(ExtensionConfiguration::class);
        $extensionConfigurationApi->method('get')->with('agentation')->willReturn($extensionConfiguration);
        $configuration = new ConfigurationService($extensionConfigurationApi);

        $adminPanelConfiguration = $this->createMock(AdminPanelConfigurationService::class);
        $adminPanelConfiguration->method('getConfigurationOption')->willReturnCallback(
            static fn(string $identifier, string $option): string => $identifier === 'agentation' ? ($storedOptions[$option] ?? '') : ''
        );

        return new FrontendToolbarSettingsService(
            $configuration,
            new UserToolbarSettingsService($configuration),
            $adminPanelConfiguration,
        );
    }

    /**
     * @param array<string, mixed> $settings
     */
    private function backendUser(array $settings): BackendUserAuthentication
    {
        $backendUser = $this->createMock(BackendUserAuthentication::class);
        $backendUser->user = ['uid' => 1, 'username' => 'tester'];
        $backendUser->method('getUserSettings')->willReturn(new UserSettings($settings));
        return $backendUser;
    }
}
