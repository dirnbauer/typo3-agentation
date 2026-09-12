<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Authentication\UserSettings;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;

final class UserToolbarSettingsServiceTest extends TestCase
{
    protected function tearDown(): void
    {
        unset($GLOBALS['BE_USER']);
        parent::tearDown();
    }

    #[Test]
    public function backendSettingOffOverridesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));

        self::assertFalse($service->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => 0])));
    }

    #[Test]
    public function missingBackendSettingUsesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));

        self::assertTrue($service->isBackendToolbarEnabled($this->backendUser([])));
    }

    #[Test]
    public function frontendSettingOffOverridesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));

        self::assertFalse($service->isFrontendToolbarEnabled($this->backendUser(['agentation_frontend_enabled' => '0'])));
    }

    #[Test]
    public function missingSettingWithoutDefaultOptInIsOff(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(false));

        self::assertFalse($service->isFrontendToolbarEnabled($this->backendUser([])));
        self::assertFalse($service->isBackendToolbarEnabled($this->backendUser([])));
    }

    #[Test]
    public function explicitSettingOnWinsOverDefaultOptOut(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(false));

        self::assertTrue($service->isFrontendToolbarEnabled($this->backendUser(['agentation_frontend_enabled' => 1])));
        self::assertTrue($service->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => '1'])));
    }

    /**
     * @return iterable<string, array{mixed, bool}>
     */
    public static function settingValues(): iterable
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
    #[DataProvider('settingValues')]
    public function settingValuesAreInterpretedLikeCheckboxes(mixed $value, bool $expected): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(false));

        self::assertSame($expected, $service->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => $value])));
    }

    #[Test]
    public function userWithoutRecordIsNeverEnabled(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));

        self::assertFalse($service->isBackendToolbarEnabled($this->backendUser(['agentation_backend_enabled' => 1], uid: 0)));
    }

    #[Test]
    public function withoutAnyBackendUserTheToolbarIsOff(): void
    {
        unset($GLOBALS['BE_USER']);
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));

        self::assertFalse($service->isFrontendToolbarEnabled());
        self::assertFalse($service->isBackendToolbarEnabled());
    }

    #[Test]
    public function globalBackendUserIsUsedWhenNoneIsPassed(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_frontend_enabled' => 1, 'agentation_backend_enabled' => 0]);
        $service = new UserToolbarSettingsService($this->createConfigurationService(false));

        self::assertTrue($service->isFrontendToolbarEnabled());
        self::assertFalse($service->isBackendToolbarEnabled());
    }

    /**
     * @param array<string, mixed> $settings
     */
    private function backendUser(array $settings, int $uid = 1): BackendUserAuthentication
    {
        $backendUser = $this->createMock(BackendUserAuthentication::class);
        $backendUser->user = ['uid' => $uid, 'username' => 'tester'];
        $backendUser->method('getUserSettings')->willReturn(new UserSettings($settings));
        return $backendUser;
    }

    private function createConfigurationService(bool $defaultOptIn): ConfigurationService
    {
        $extensionConfiguration = $this->createMock(ExtensionConfiguration::class);
        $extensionConfiguration
            ->method('get')
            ->with('agentation')
            ->willReturn(['defaultOptIn' => $defaultOptIn ? '1' : '0']);

        return new ConfigurationService($extensionConfiguration);
    }
}
