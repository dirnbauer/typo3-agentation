<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use TYPO3\CMS\Core\Authentication\UserSettings;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;

final class UserToolbarSettingsServiceTest extends TestCase
{
    public function testBackendSettingOffOverridesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));
        $backendUser = new class {
            public array $user = ['uid' => 1];

            public function getUserSettings(): UserSettings
            {
                return new UserSettings(['agentation_backend_enabled' => 0]);
            }
        };

        self::assertFalse($service->isBackendToolbarEnabled($backendUser));
    }

    public function testMissingBackendSettingUsesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));
        $backendUser = new class {
            public array $user = ['uid' => 1];

            public function getUserSettings(): UserSettings
            {
                return new UserSettings([]);
            }
        };

        self::assertTrue($service->isBackendToolbarEnabled($backendUser));
    }

    public function testFrontendSettingOffOverridesDefaultOptIn(): void
    {
        $service = new UserToolbarSettingsService($this->createConfigurationService(true));
        $backendUser = new class {
            public array $user = ['uid' => 1];

            public function getUserSettings(): UserSettings
            {
                return new UserSettings(['agentation_frontend_enabled' => '0']);
            }
        };

        self::assertFalse($service->isFrontendToolbarEnabled($backendUser));
    }

    private function createConfigurationService(bool $defaultOptIn): ConfigurationService
    {
        /** @var ExtensionConfiguration&MockObject $extensionConfiguration */
        $extensionConfiguration = $this->createMock(ExtensionConfiguration::class);
        $extensionConfiguration
            ->method('get')
            ->with('agentation')
            ->willReturn(['defaultOptIn' => $defaultOptIn]);

        return new ConfigurationService($extensionConfiguration);
    }
}
