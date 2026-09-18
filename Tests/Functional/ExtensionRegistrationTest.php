<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Functional;

use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleData;
use TYPO3\CMS\Adminpanel\Service\ModuleLoader;
use TYPO3\CMS\Backend\Module\ModuleProvider;
use TYPO3\CMS\Backend\Routing\Router;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Http\NormalizedParams;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Imaging\IconRegistry;
use TYPO3\CMS\Core\Localization\LanguageServiceFactory;
use TYPO3\TestingFramework\Core\Functional\FunctionalTestCase;
use Webconsulting\Agentation\AdminPanel\AgentationModule;
use Webconsulting\Agentation\Controller\Backend\ApiProxyController;
use Webconsulting\Agentation\Controller\Backend\ModuleController;

/**
 * Boots the extension in a real TYPO3 instance and asserts everything the
 * configuration files register: Admin Panel module, backend module and
 * AJAX routes, icons, user settings and public DI services.
 */
final class ExtensionRegistrationTest extends FunctionalTestCase
{
    private const int ADMIN_UID = 1;
    private const int EDITOR_UID = 2;

    protected array $coreExtensionsToLoad = ['adminpanel'];

    protected array $testExtensionsToLoad = ['webconsulting/agentation'];

    protected array $configurationToUseInTestInstance = [
        'EXTENSIONS' => [
            'agentation' => [
                'defaultOptIn' => '0',
                'contextGate' => 'Development and Testing',
            ],
        ],
    ];

    protected function setUp(): void
    {
        parent::setUp();
        $connection = $this->getConnectionPool()->getConnectionForTable('be_users');
        $connection->insert('be_users', ['uid' => self::ADMIN_UID, 'username' => 'admin', 'admin' => 1]);
        $connection->insert('be_users', ['uid' => self::EDITOR_UID, 'username' => 'editor', 'admin' => 0]);
        $this->saveUserSettings(self::ADMIN_UID, ['agentation_frontend_enabled' => 1, 'agentation_backend_enabled' => 1]);
        $this->saveUserSettings(self::EDITOR_UID, ['agentation_frontend_enabled' => 1, 'agentation_backend_enabled' => 1]);
    }

    #[Test]
    public function adminPanelModuleIsRegisteredAndBootsForAnOptedInUser(): void
    {
        $registration = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['adminpanel']['modules']['agentation'] ?? null;
        self::assertIsArray($registration);
        self::assertSame(AgentationModule::class, $registration['module']);

        $this->login(self::ADMIN_UID);
        $GLOBALS['BE_USER']->uc['AdminPanel']['agentation_enabled'] = '1';

        $modules = $this->get(ModuleLoader::class)->validateSortAndInitializeModules(
            $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['adminpanel']['modules']
        );
        self::assertArrayHasKey('agentation', $modules);
        $module = $modules['agentation'];
        self::assertInstanceOf(AgentationModule::class, $module);
        self::assertTrue($module->isEnabled());
        self::assertSame('agentation', $module->getIdentifier());
        self::assertSame('Agentation', $module->getLabel());
        self::assertSame('Toolbar on', $module->getShortInfo());
        self::assertSame('agentation-logo', $module->getIconIdentifier());

        $settings = $module->getSettings();
        self::assertStringContainsString('name="TSFE_ADMIN_PANEL[agentation_enabled]"', $settings);
        self::assertStringContainsString('name="TSFE_ADMIN_PANEL[agentation_position]"', $settings);
        self::assertStringContainsString('<option value="top-left"', $settings);
        self::assertStringContainsString('name="TSFE_ADMIN_PANEL[agentation_scope]"', $settings);

        $content = $module->getContent(new ModuleData());
        self::assertStringContainsString('href="/typo3/module/system/agentation', $content, 'links to the backend module through the router');
        self::assertStringContainsString('typo3-adminPanel-badge-success', $content);
    }

    #[Test]
    public function adminPanelSectionIsHiddenWhenTheUserSettingIsOff(): void
    {
        $this->saveUserSettings(self::ADMIN_UID, ['agentation_frontend_enabled' => 0]);
        $this->login(self::ADMIN_UID);

        $modules = $this->get(ModuleLoader::class)->validateSortAndInitializeModules([
            'agentation' => $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['adminpanel']['modules']['agentation'],
        ]);

        self::assertArrayNotHasKey('agentation', $modules);
    }

    #[Test]
    public function backendModuleAndAjaxRoutesAreRegistered(): void
    {
        $moduleProvider = $this->get(ModuleProvider::class);
        self::assertTrue($moduleProvider->isModuleRegistered('agentation'));
        $module = $moduleProvider->getModule('agentation');
        self::assertNotNull($module);
        self::assertSame('/module/system/agentation', $module->getPath());
        self::assertSame('system', $module->getParentIdentifier());
        self::assertSame('agentation-module', $module->getIconIdentifier());
        self::assertSame('admin', $module->getAccess());
        self::assertSame('live', $module->getWorkspaceAccess());

        $router = $this->get(Router::class);
        $moduleRoute = $router->getRoute('agentation');
        self::assertNotNull($moduleRoute);
        self::assertSame('/module/system/agentation', $moduleRoute->getPath());

        $expectedAjaxRoutes = [
            'ajax_agentation_api_list' => ['/ajax/agentation/api/list', ['GET']],
            'ajax_agentation_api_delete' => ['/ajax/agentation/api/delete', ['POST']],
            'ajax_agentation_api_delete_all' => ['/ajax/agentation/api/delete-all', ['POST']],
            'ajax_agentation_api_proxy' => ['/ajax/agentation/api/proxy', ['GET', 'POST', 'PATCH', 'DELETE']],
        ];
        foreach ($expectedAjaxRoutes as $name => [$path, $methods]) {
            self::assertTrue($router->hasRoute($name), $name);
            $route = $router->getRoute($name);
            self::assertNotNull($route, $name);
            self::assertSame($path, $route->getPath(), $name);
            self::assertSame($methods, $route->getMethods(), $name);
        }
        self::assertFalse($router->hasRoute('ajax_agentation_api_sessions'), 'the unused sessions route is gone');
    }

    #[Test]
    public function backendModuleRendersTheMcpSetupForAnAdmin(): void
    {
        $this->login(self::ADMIN_UID);
        $request = (new ServerRequest('https://typo3-testing.local/typo3/module/system/agentation', 'GET', null, [], [
            'HTTP_HOST' => 'typo3-testing.local',
            'HTTPS' => 'on',
            'SERVER_PORT' => 443,
            'SCRIPT_NAME' => '/typo3/index.php',
            'SCRIPT_FILENAME' => $this->instancePath . '/typo3/index.php',
            'DOCUMENT_ROOT' => $this->instancePath,
            'REQUEST_URI' => '/typo3/module/system/agentation',
        ]))
            ->withAttribute('applicationType', SystemEnvironmentBuilder::REQUESTTYPE_BE)
            ->withAttribute('module', $this->get(ModuleProvider::class)->getModule('agentation'))
            ->withAttribute('route', $this->get(Router::class)->getRoute('agentation'));
        $request = $request->withAttribute('normalizedParams', NormalizedParams::createFromRequest($request));
        $GLOBALS['TYPO3_REQUEST'] = $request;

        $response = $this->get(ModuleController::class)->indexAction($request);
        $body = (string)$response->getBody();

        self::assertSame(200, $response->getStatusCode());
        self::assertStringContainsString('id="agentation-mcp-json"', $body);
        self::assertStringContainsString('agentation-mcp', $body);
        self::assertStringContainsString('cursor://anysphere.cursor-deeplink/mcp/install?name=agentation', $body);
        self::assertStringContainsString('data-agentation-action="copy"', $body);
        self::assertStringContainsString('@webconsulting/agentation/module.js', $body);
        self::assertStringContainsString('module.annotations.localOnly', $body, 'module.* labels are exposed to module.js as TYPO3.lang');
        self::assertStringContainsString('<title>Agentation', $body);
    }

    #[Test]
    public function annotationManagementRoutesRejectNonAdministrators(): void
    {
        $this->login(self::EDITOR_UID);
        $controller = $this->get(ApiProxyController::class);

        $response = $controller->listAction(new ServerRequest());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame('{"error":"adminOnly"}', (string)$response->getBody());
    }

    #[Test]
    public function deletingWithoutAnIdIsRejectedBeforeAnyUpstreamCall(): void
    {
        $this->login(self::ADMIN_UID);

        $response = $this->get(ApiProxyController::class)->deleteAction(new ServerRequest());

        self::assertSame(400, $response->getStatusCode());
        self::assertSame('{"error":"missingAnnotationId"}', (string)$response->getBody());
    }

    #[Test]
    public function iconsAndUserSettingsAreRegistered(): void
    {
        $iconRegistry = $this->get(IconRegistry::class);
        self::assertTrue($iconRegistry->isRegistered('agentation-logo'));
        self::assertTrue($iconRegistry->isRegistered('agentation-module'));

        $userSettings = $GLOBALS['TCA']['be_users']['columns']['user_settings'];
        self::assertSame('check', $userSettings['columns']['agentation_backend_enabled']['config']['type']);
        self::assertSame('check', $userSettings['columns']['agentation_frontend_enabled']['config']['type']);
        self::assertSame(0, $userSettings['columns']['agentation_frontend_enabled']['config']['default']);
        self::assertStringContainsString(
            '--div--;LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.tab,agentation_backend_enabled,agentation_frontend_enabled',
            $userSettings['showitem']
        );
        self::assertSame(1, substr_count($userSettings['showitem'], 'agentation_backend_enabled'));
    }

    #[Test]
    public function controllersAndAdminPanelModuleArePublicServices(): void
    {
        // The Admin Panel base class reads the backend user's TSconfig while
        // being constructed, exactly like in a real admin panel request.
        $this->login(self::ADMIN_UID);
        foreach ([ModuleController::class, ApiProxyController::class, AgentationModule::class] as $service) {
            self::assertTrue($this->getContainer()->has($service), $service);
            self::assertInstanceOf($service, $this->getContainer()->get($service));
        }
    }

    /**
     * Stores user settings the way the User Settings module does: in `uc`
     * (which the backend login syncs into the `user_settings` JSON column)
     * and in the column itself.
     *
     * @param array<string, int> $settings
     */
    private function saveUserSettings(int $uid, array $settings): void
    {
        $this->getConnectionPool()->getConnectionForTable('be_users')->update(
            'be_users',
            ['uc' => serialize($settings), 'user_settings' => json_encode($settings, JSON_THROW_ON_ERROR)],
            ['uid' => $uid]
        );
    }

    private function login(int $uid): void
    {
        $backendUser = $this->setUpBackendUser($uid);
        $GLOBALS['LANG'] = $this->get(LanguageServiceFactory::class)->createFromUserPreferences($backendUser);
    }
}
