<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit;

use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfiguration;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Authentication\UserSettings;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Core\ApplicationContext;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\TestingFramework\Core\Unit\UnitTestCase;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Builders for the two settings objects every service depends on.
 */
abstract class AgentationTestCase extends UnitTestCase
{
    /**
     * Real ExtensionConfiguration reading the (backed-up and restored)
     * global, exactly like at runtime.
     *
     * @param array<string, mixed> $configuration
     */
    protected function extensionSettings(array $configuration = []): ExtensionSettings
    {
        $GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS']['agentation'] = $configuration;
        return new ExtensionSettings(new ExtensionConfiguration());
    }

    /**
     * @param array<string, mixed> $configuration
     * @param array<string, string> $adminPanelOptions values the Admin Panel stored for the "agentation" section
     */
    protected function toolbarSettings(array $configuration = [], array $adminPanelOptions = []): ToolbarSettings
    {
        $adminPanel = self::createStub(AdminPanelConfiguration::class);
        $adminPanel->method('getConfigurationOption')->willReturnCallback(
            static fn(string $identifier, string $option): string => $identifier === 'agentation' ? ($adminPanelOptions[$option] ?? '') : ''
        );
        return new ToolbarSettings($this->extensionSettings($configuration), $adminPanel);
    }

    /**
     * @param array<string, mixed> $userSettings saved User Settings (be_users.user_settings)
     */
    protected function backendUser(array $userSettings = [], int $uid = 1, bool $admin = false): BackendUserAuthentication
    {
        $user = self::createStub(BackendUserAuthentication::class);
        $user->user = ['uid' => $uid, 'username' => 'tester', 'admin' => $admin ? 1 : 0];
        $user->method('getUserSettings')->willReturn(new UserSettings($userSettings));
        $user->method('isAdmin')->willReturn($admin);
        return $user;
    }

    protected static function switchApplicationContext(string $context): void
    {
        Environment::initialize(
            new ApplicationContext($context),
            Environment::isCli(),
            Environment::isComposerMode(),
            Environment::getProjectPath(),
            Environment::getPublicPath(),
            Environment::getVarPath(),
            Environment::getConfigPath(),
            Environment::getCurrentScript(),
            Environment::isWindows() ? 'WINDOWS' : 'UNIX'
        );
    }
}
