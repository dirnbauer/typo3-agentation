<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\EventListener;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Context\Context;
use TYPO3\CMS\Core\Context\UserAspect;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Http\Uri;
use TYPO3\CMS\Core\Package\PackageInterface;
use TYPO3\CMS\Core\Package\PackageManager;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\StringUtility;
use TYPO3\CMS\Frontend\Page\PageInformation;
use Webconsulting\Agentation\EventListener\InjectToolbarAssets;
use Webconsulting\Agentation\Service\ViteAssetResolver;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class InjectToolbarAssetsTest extends AgentationTestCase
{
    private const string PROXY_URL = '/typo3/ajax/agentation/api/proxy?token=abc';

    protected bool $backupEnvironment = true;

    private string $packagePath;

    protected function setUp(): void
    {
        parent::setUp();
        $this->packagePath = Environment::getPublicPath() . '/typo3temp/var/tests/agentation-' . StringUtility::getUniqueId() . '/';
        GeneralUtility::mkdir_deep($this->packagePath . 'Resources/Public/Vite');
        $this->testFilesToDelete[] = $this->packagePath;
        self::switchApplicationContext('Development');
    }

    protected function tearDown(): void
    {
        unset($GLOBALS['BE_USER'], $GLOBALS['TYPO3_REQUEST']);
        parent::tearDown();
    }

    #[Test]
    public function backendModuleFrameGetsTheToolbar(): void
    {
        $this->backendRequest('/typo3/module/web/layout?id=1');
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);

        $collector = $this->dispatch($this->listener(['apiKey' => 'secret', 'workspaceId' => 'ws-1']));

        self::assertTrue($collector->hasJavaScript('agentation-toolbar'));
        self::assertTrue($collector->hasInlineJavaScript('agentation-config'));
        $javaScripts = $collector->getJavaScripts(false);
        self::assertStringEndsWith('/Resources/Public/Vite/assets/agentation-abc123.js', $javaScripts['agentation-toolbar']['source']);
        self::assertSame('module', $javaScripts['agentation-toolbar']['attributes']['type']);
        self::assertCount(1, $collector->getStyleSheets(false));

        $inline = $collector->getInlineJavaScripts(true)['agentation-config'];
        self::assertSame('application/json', $inline['attributes']['type']);
        self::assertSame('typo3-agentation-config', $inline['attributes']['id']);

        $payload = self::payload($collector);
        self::assertTrue($payload['enabled']);
        self::assertSame('backend', $payload['scope']);
        self::assertSame('typo3-backend', $payload['context']);
        self::assertSame('bottom-right', $payload['position']);
        self::assertSame('secret', $payload['apiKey']);
        self::assertSame('ws-1', $payload['workspaceId']);
        self::assertSame('https://agentation-mcp-cloud.vercel.app/api', $payload['endpoint']);
        self::assertSame(self::PROXY_URL, $payload['proxyUrl']);
        self::assertSame('tester', $payload['beUser']);
        self::assertNull($payload['pageId']);
        self::assertNull($payload['webhookUrl']);
        self::assertSame('Development', $payload['metadata']['applicationContext']);
        self::assertTrue($payload['metadata']['includeAdminPanelChrome']);
    }

    /**
     * @return iterable<string, array{string}>
     */
    public static function backendPathsWithoutToolbar(): iterable
    {
        yield 'backend shell' => ['/typo3/main'];
        yield 'login' => ['/typo3/login'];
        yield 'own management module' => ['/typo3/module/system/agentation'];
    }

    #[Test]
    #[DataProvider('backendPathsWithoutToolbar')]
    public function backendShellAndOwnModuleAreSkipped(string $path): void
    {
        $this->backendRequest($path);
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);

        self::assertNothingInjected($this->dispatch($this->listener()));
    }

    #[Test]
    public function backendToolbarRespectsTheUserSettingAndTheGlobalSwitch(): void
    {
        $this->backendRequest('/typo3/module/web/layout');

        $this->loginBackendUser(['agentation_backend_enabled' => 0]);
        self::assertNothingInjected($this->dispatch($this->listener()));

        $this->loginBackendUser(['agentation_backend_enabled' => 1]);
        self::assertNothingInjected($this->dispatch($this->listener(['backendEnabled' => '0'])));

        unset($GLOBALS['BE_USER']);
        self::assertNothingInjected($this->dispatch($this->listener()));
    }

    #[Test]
    public function aBackendUserObjectWithoutLoginIsNotAUser(): void
    {
        $this->backendRequest('/typo3/module/web/layout');
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1], uid: 0);

        self::assertNothingInjected($this->dispatch($this->listener()));
    }

    #[Test]
    public function frontendPageGetsTheToolbarWithThePageId(): void
    {
        $pageInformation = new PageInformation();
        $pageInformation->setId(42);
        $GLOBALS['TYPO3_REQUEST'] = $this->frontendRequest('https://example.test/about')
            ->withAttribute('frontend.page.information', $pageInformation);
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        $collector = $this->dispatch($this->listener(
            ['webhookUrl' => 'https://hooks.example/agentation', 'additionalOptions' => '{"theme":"dark"}'],
            ['enabled' => '1', 'position' => 'top-left', 'scope' => 'frontend+adminpanel'],
        ));

        $payload = self::payload($collector);
        self::assertSame('frontend', $payload['scope']);
        self::assertSame('typo3-frontend', $payload['context']);
        self::assertSame(42, $payload['pageId']);
        self::assertSame('top-left', $payload['position']);
        self::assertNull($payload['proxyUrl']);
        self::assertNull($payload['apiKey']);
        self::assertSame('http://localhost:4747', $payload['endpoint']);
        self::assertSame('https://hooks.example/agentation', $payload['webhookUrl']);
        self::assertSame(['theme' => 'dark'], $payload['additionalOptions']);
        self::assertTrue($payload['metadata']['includeAdminPanelChrome']);
    }

    #[Test]
    public function frontendWithoutPageInformationHasNoPageId(): void
    {
        $this->frontendRequest('https://example.test/');
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        $payload = self::payload($this->dispatch($this->listener([], ['enabled' => '1'])));

        self::assertNull($payload['pageId']);
        self::assertFalse($payload['metadata']['includeAdminPanelChrome']);
    }

    /**
     * @return iterable<string, array{string, string}>
     */
    public static function backendPreviewFrames(): iterable
    {
        yield 'same host' => ['https://example.test/about', 'https://example.test/typo3/module/web/layout?id=1'];
        yield 'same host with port' => ['https://example.test:8443/about', 'https://example.test:8443/typo3/module/web/layout'];
    }

    #[Test]
    #[DataProvider('backendPreviewFrames')]
    public function frontendInsideABackendPreviewFrameIsSkipped(string $url, string $referer): void
    {
        $this->frontendRequest($url, ['Referer' => $referer]);
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        self::assertNothingInjected($this->dispatch($this->listener([], ['enabled' => '1'])));
    }

    #[Test]
    public function frontendRequiresABackendUserWithTheAdminPanelToggleOn(): void
    {
        $this->frontendRequest('https://example.test/');

        self::assertNothingInjected($this->dispatch($this->listener([], ['enabled' => '1'])));

        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);
        self::assertNothingInjected($this->dispatch($this->listener([], ['enabled' => '0'])));
        self::assertNothingInjected($this->dispatch($this->listener(['frontendEnabled' => '0'], ['enabled' => '1'])));

        $this->loginBackendUser(['agentation_frontend_enabled' => 0]);
        self::assertNothingInjected($this->dispatch($this->listener([], ['enabled' => '1'])));
    }

    #[Test]
    public function contextGateBlocksInjectionOutsideDevelopment(): void
    {
        self::switchApplicationContext('Production');
        $this->backendRequest('/typo3/module/web/layout');
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);

        self::assertNothingInjected($this->dispatch($this->listener(['contextGate' => 'Development'])));
        self::assertNothingInjected($this->dispatch($this->listener(['contextGate' => 'Development and Testing'])));
        self::assertTrue($this->dispatch($this->listener(['contextGate' => 'All contexts']))->hasJavaScript('agentation-toolbar'));
    }

    #[Test]
    public function missingBuildMeansNothingIsInjected(): void
    {
        $this->backendRequest('/typo3/module/web/layout');
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);

        self::assertNothingInjected($this->dispatch($this->listener(withBuild: false)));
    }

    #[Test]
    public function withoutARequestNothingIsInjected(): void
    {
        unset($GLOBALS['TYPO3_REQUEST']);
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);

        self::assertNothingInjected($this->dispatch($this->listener()));
    }

    #[Test]
    public function dispatchingTwicePerRenderIsIdempotent(): void
    {
        $this->backendRequest('/typo3/module/web/layout');
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);
        $listener = $this->listener();

        $collector = new AssetCollector();
        $listener(new BeforeJavaScriptsRenderingEvent($collector, false, true));
        $listener(new BeforeJavaScriptsRenderingEvent($collector, false, false));

        self::assertCount(1, $collector->getJavaScripts(false));
        self::assertCount(1, $collector->getInlineJavaScripts(true));
    }

    /**
     * @param array<string, mixed> $extensionConfiguration
     * @param array<string, string> $adminPanelOptions
     */
    private function listener(array $extensionConfiguration = [], array $adminPanelOptions = [], bool $withBuild = true): InjectToolbarAssets
    {
        $extensionConfiguration += ['contextGate' => 'All contexts'];
        $toolbar = $this->toolbarSettings($extensionConfiguration, $adminPanelOptions);
        $settings = $this->extensionSettings($extensionConfiguration);

        $manifest = $this->packagePath . 'Resources/Public/Vite/manifest.json';
        if ($withBuild) {
            file_put_contents($manifest, '{"Build/Sources/agentation.js":{"file":"assets/agentation-abc123.js","css":["assets/agentation-abc123.css"]}}');
        } elseif (is_file($manifest)) {
            unlink($manifest);
        }
        $package = self::createStub(PackageInterface::class);
        $package->method('getPackagePath')->willReturn($this->packagePath);
        $packageManager = self::createStub(PackageManager::class);
        $packageManager->method('getPackage')->willReturn($package);

        $uriBuilder = self::createStub(BackendUriBuilder::class);
        $uriBuilder->method('buildUriFromRoute')->willReturn(new Uri(self::PROXY_URL));

        // Like the core middlewares: the aspect mirrors the global user.
        $context = new Context();
        $user = $GLOBALS['BE_USER'] ?? null;
        $context->setAspect('backend.user', new UserAspect($user instanceof BackendUserAuthentication ? $user : null));

        return new InjectToolbarAssets($settings, $toolbar, new ViteAssetResolver($packageManager), $uriBuilder, $context);
    }

    private function backendRequest(string $pathAndQuery): ServerRequest
    {
        return $this->request('https://example.test' . $pathAndQuery, SystemEnvironmentBuilder::REQUESTTYPE_BE);
    }

    /**
     * @param array<string, string> $headers
     */
    private function frontendRequest(string $url, array $headers = []): ServerRequest
    {
        return $this->request($url, SystemEnvironmentBuilder::REQUESTTYPE_FE, $headers);
    }

    /**
     * @param array<string, string> $headers
     */
    private function request(string $url, int $applicationType, array $headers = []): ServerRequest
    {
        $request = (new ServerRequest($url, 'GET', 'php://memory', $headers))
            ->withAttribute('applicationType', $applicationType);
        $GLOBALS['TYPO3_REQUEST'] = $request;
        return $request;
    }

    /**
     * @param array<string, mixed> $userSettings
     */
    private function loginBackendUser(array $userSettings): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser($userSettings);
    }

    private function dispatch(InjectToolbarAssets $listener): AssetCollector
    {
        $collector = new AssetCollector();
        $listener(new BeforeJavaScriptsRenderingEvent($collector, false, false));
        return $collector;
    }

    /**
     * @return array<string, mixed>
     */
    private static function payload(AssetCollector $collector): array
    {
        $inline = $collector->getInlineJavaScripts(true)['agentation-config'] ?? null;
        self::assertIsArray($inline);
        $payload = json_decode((string)$inline['source'], true, 16, JSON_THROW_ON_ERROR);
        self::assertIsArray($payload);
        return $payload;
    }

    private static function assertNothingInjected(AssetCollector $collector): void
    {
        self::assertFalse($collector->hasJavaScript('agentation-toolbar'));
        self::assertFalse($collector->hasInlineJavaScript('agentation-config'));
        self::assertSame([], $collector->getStyleSheets());
    }
}
