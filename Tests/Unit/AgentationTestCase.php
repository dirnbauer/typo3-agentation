<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit;

use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfiguration;
use TYPO3\CMS\Backend\Module\ModuleInterface;
use TYPO3\CMS\Backend\Routing\Route;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Authentication\UserSettings;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Context\Context;
use TYPO3\CMS\Core\Context\UserAspect;
use TYPO3\CMS\Core\Core\ApplicationContext;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Crypto\HashService;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Session\UserSession;
use TYPO3\TestingFramework\Core\Unit\UnitTestCase;
use Webconsulting\Agentation\Service\ProxyToken;
use Webconsulting\Agentation\Service\ToolbarGate;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Builders for the settings objects every service depends on, and for the
 * requests and users the toolbar gate decides about.
 */
abstract class AgentationTestCase extends UnitTestCase
{
    #[\Override]
    protected function tearDown(): void
    {
        unset($GLOBALS['BE_USER'], $GLOBALS['TYPO3_REQUEST']);
        parent::tearDown();
    }

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
     * The gate for the user currently in $GLOBALS['BE_USER']; the context
     * gate is open unless the configuration says otherwise.
     *
     * @param array<string, mixed> $configuration
     * @param array<string, string> $adminPanelOptions
     */
    protected function toolbarGate(array $configuration = [], array $adminPanelOptions = []): ToolbarGate
    {
        $configuration += ['contextGate' => 'All contexts'];
        // Like the core middlewares: the aspect mirrors the global user.
        $context = new Context();
        $user = $GLOBALS['BE_USER'] ?? null;
        $context->setAspect('backend.user', new UserAspect($user instanceof BackendUserAuthentication ? $user : null));

        return new ToolbarGate(
            $this->extensionSettings($configuration),
            $this->toolbarSettings($configuration, $adminPanelOptions),
            $context,
        );
    }

    /**
     * @param array<string, mixed> $userSettings saved User Settings (be_users.user_settings)
     * @param string $sessionId the id of the user's backend session
     */
    protected function backendUser(array $userSettings = [], int $uid = 1, bool $admin = false, string $sessionId = 'session-1'): BackendUserAuthentication
    {
        $user = self::createStub(BackendUserAuthentication::class);
        $user->user = ['uid' => $uid, 'username' => 'tester', 'admin' => $admin ? 1 : 0];
        $user->method('getUserSettings')->willReturn(new UserSettings($userSettings));
        $user->method('isAdmin')->willReturn($admin);
        $user->method('getSession')->willReturn(UserSession::createNonFixated($sessionId));
        return $user;
    }

    /**
     * The proxy token service with a fixed encryption key.
     */
    protected function proxyToken(): ProxyToken
    {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['encryptionKey'] = 'agentation-unit-test-encryption-key-0123456789abcdef';
        return new ProxyToken(new HashService());
    }

    /**
     * @param array<string, mixed> $userSettings
     */
    protected function loginBackendUser(array $userSettings): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser($userSettings);
    }

    /**
     * A backend request as the router leaves it: a module route carries the
     * module, any other route (the shell, the login) does not.
     */
    protected function backendRequest(string $pathAndQuery, ?string $moduleIdentifier = 'web_layout', string $parentModule = 'web'): ServerRequest
    {
        $options = [];
        if ($moduleIdentifier !== null) {
            $module = self::createStub(ModuleInterface::class);
            $module->method('getIdentifier')->willReturn($moduleIdentifier);
            $module->method('getParentIdentifier')->willReturn($parentModule);
            $options['module'] = $module;
        }
        $path = (string)parse_url($pathAndQuery, PHP_URL_PATH);

        return $this->request('https://example.test' . $pathAndQuery, SystemEnvironmentBuilder::REQUESTTYPE_BE)
            ->withAttribute('route', new Route(substr($path, strlen('/typo3')), $options));
    }

    /**
     * @param array<string, string> $headers
     */
    protected function frontendRequest(string $url, array $headers = []): ServerRequest
    {
        return $this->request($url, SystemEnvironmentBuilder::REQUESTTYPE_FE, $headers);
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

    /**
     * @param array<string, string> $headers
     */
    private function request(string $url, int $applicationType, array $headers = []): ServerRequest
    {
        return (new ServerRequest($url, 'GET', 'php://memory', $headers))
            ->withAttribute('applicationType', $applicationType);
    }
}
