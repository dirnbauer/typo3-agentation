<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\EventListener;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Frontend\Page\PageInformation;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\FrontendToolbarSettingsService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;
use Webconsulting\Agentation\Service\ViteAssetResolver;

/**
 * Injects the Agentation toolbar bundle into frontend and backend renders.
 *
 * Gating:
 *   - the application-context gate passes (Development by default)
 *   - the extension is enabled for the current scope (frontend / backend)
 *   - frontend: a backend user is logged in, the User Settings switch is on
 *     and the Admin Panel section has the toolbar switched on
 *   - backend: the User Settings switch for the backend toolbar is on
 *
 * The config is shipped as an inert JSON data island so the strict v14
 * backend CSP ignores it; the module bundle reads it on boot.
 */
final class InjectToolbarAssets
{
    private const string CONFIG_ASSET = 'agentation-config';
    private const string CONFIG_ELEMENT_ID = 'typo3-agentation-config';
    private const string BUNDLE_ASSET = 'agentation-toolbar';
    private const string BACKEND_MODULE_PREFIX = '/typo3/module/';
    private const string OWN_MODULE_PREFIX = '/typo3/module/system/agentation';

    private bool $alreadyAdded = false;

    public function __construct(
        private readonly ConfigurationService $config,
        private readonly UserToolbarSettingsService $userToolbarSettings,
        private readonly FrontendToolbarSettingsService $frontendToolbarSettings,
        private readonly ViteAssetResolver $vite,
        private readonly BackendUriBuilder $backendUriBuilder,
    ) {}

    #[AsEventListener('agentation/inject-toolbar')]
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        if ($this->alreadyAdded || !$this->config->isContextAllowed()) {
            return;
        }
        // The event carries no request; the global is the PSR-7 request
        // TYPO3 is currently handling.
        $request = $GLOBALS['TYPO3_REQUEST'] ?? null;
        if (!$request instanceof ServerRequestInterface) {
            return;
        }

        $scope = $this->resolveScope($request);
        if ($scope === null) {
            return;
        }

        $payload = match ($scope) {
            InjectionScope::Frontend => $this->resolveFrontendPayload($request),
            InjectionScope::Backend => $this->resolveBackendPayload(),
        };
        if ($payload === null) {
            return;
        }

        $entry = $this->vite->getEntryUrl();
        if ($entry === null) {
            return;
        }

        $this->addAssets($event->getAssetCollector(), $payload, $entry);
        $this->alreadyAdded = true;
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function addAssets(AssetCollector $collector, array $payload, string $entry): void
    {
        // <script type="application/json"> is never executed, so the strict
        // backend CSP (script-src 'self' 'nonce-…') does not need a hash or
        // nonce for it. Priority puts it into <head>; the deferred module
        // bundle below reads it from #typo3-agentation-config on boot.
        $collector->addInlineJavaScript(
            self::CONFIG_ASSET,
            (string)json_encode($payload, JSON_UNESCAPED_SLASHES),
            ['type' => 'application/json', 'id' => self::CONFIG_ELEMENT_ID],
            ['priority' => true]
        );
        $collector->addJavaScript(
            self::BUNDLE_ASSET,
            $entry,
            ['type' => 'module', 'defer' => 'defer'],
            ['priority' => false, 'csp' => true]
        );
        foreach ($this->vite->getEntryCssUrls() as $cssUrl) {
            $collector->addStyleSheet(
                'agentation-css-' . md5($cssUrl),
                $cssUrl,
                [],
                ['priority' => false, 'csp' => true]
            );
        }
    }

    private function resolveScope(ServerRequestInterface $request): ?InjectionScope
    {
        $type = ApplicationType::fromRequest($request);
        if ($type->isFrontend() && $this->config->isFrontendEnabled()) {
            return $this->isRenderedInsideBackendFrame($request) ? null : InjectionScope::Frontend;
        }
        if ($type->isBackend() && $this->config->isBackendEnabled()) {
            // TYPO3 v14 renders two documents per backend navigation: the
            // shell at /typo3/main and the module content iframe at
            // /typo3/module/*. React cannot portal across iframes, so the
            // toolbar is mounted only into the content frame where the user
            // edits; the fixed shell chrome is out of annotation scope.
            $path = $request->getUri()->getPath();
            if (!str_starts_with($path, self::BACKEND_MODULE_PREFIX)) {
                return null;
            }
            // Never mount the widget on Agentation's own management module:
            // its localStorage/EventSource sync would re-push annotations
            // right after the module deleted them server-side.
            if (str_starts_with($path, self::OWN_MODULE_PREFIX)) {
                return null;
            }
            return InjectionScope::Backend;
        }
        return null;
    }

    /**
     * A frontend render served inside a backend preview iframe (visual
     * editor canvas, Web > Layout preview panes, ...) carries the backend
     * URL as same-origin Referer.
     */
    private function isRenderedInsideBackendFrame(ServerRequestInterface $request): bool
    {
        $referer = $request->getHeaderLine('Referer');
        $host = $request->getUri()->getHost();
        if ($referer === '' || $host === '') {
            return false;
        }
        $port = $request->getUri()->getPort();
        return str_contains($referer, '://' . $host . '/typo3/')
            || ($port !== null && str_contains($referer, '://' . $host . ':' . $port . '/typo3/'));
    }

    /**
     * @return array<string, mixed>|null
     */
    private function resolveFrontendPayload(ServerRequestInterface $request): ?array
    {
        $beUser = $this->currentBackendUser();
        if ($beUser === null || !$this->frontendToolbarSettings->isToolbarActive($beUser)) {
            return null;
        }

        // TYPO3 v14 has no TypoScriptFrontendController; the resolved page
        // lives in the PSR-7 request attribute set by the frontend middleware.
        $pageInformation = $request->getAttribute('frontend.page.information');
        $pageId = $pageInformation instanceof PageInformation ? $pageInformation->getId() : 0;

        return $this->buildPayload(
            scope: InjectionScope::Frontend,
            position: $this->frontendToolbarSettings->getPosition(),
            includeAdminPanelChrome: $this->frontendToolbarSettings->getScope()->includesAdminPanelChrome(),
            beUserName: self::userName($beUser),
            pageId: $pageId,
        );
    }

    /**
     * @return array<string, mixed>|null
     */
    private function resolveBackendPayload(): ?array
    {
        $beUser = $this->currentBackendUser();
        if ($beUser === null || !$this->userToolbarSettings->isBackendToolbarEnabled($beUser)) {
            return null;
        }

        return $this->buildPayload(
            scope: InjectionScope::Backend,
            position: $this->config->getToolbarPosition(),
            includeAdminPanelChrome: true,
            beUserName: self::userName($beUser),
            pageId: 0,
        );
    }

    /**
     * @return array<string, mixed>
     */
    private function buildPayload(
        InjectionScope $scope,
        ToolbarPosition $position,
        bool $includeAdminPanelChrome,
        string $beUserName,
        int $pageId,
    ): array {
        return [
            'enabled' => true,
            'scope' => $scope->value,
            'position' => $position->value,
            'apiKey' => self::nullIfEmpty($this->config->getApiKey()),
            'workspaceId' => self::nullIfEmpty($this->config->getWorkspaceId()),
            'webhookUrl' => self::nullIfEmpty($this->config->getWebhookUrl()),
            'endpoint' => self::nullIfEmpty($this->config->getSyncEndpoint()),
            'proxyUrl' => $scope === InjectionScope::Backend ? $this->buildProxyUrl() : null,
            'context' => 'typo3-' . $scope->value,
            'typo3Version' => (new Typo3Version())->getVersion(),
            'pageId' => $pageId > 0 ? $pageId : null,
            'beUser' => self::nullIfEmpty($beUserName),
            'metadata' => [
                'applicationContext' => (string)Environment::getContext(),
                'includeAdminPanelChrome' => $includeAdminPanelChrome,
            ],
            'additionalOptions' => $this->config->getAdditionalOptions(),
        ];
    }

    private function buildProxyUrl(): ?string
    {
        try {
            return (string)$this->backendUriBuilder->buildUriFromRoute('agentation_api_proxy');
        } catch (\Throwable) {
            return null;
        }
    }

    private function currentBackendUser(): ?BackendUserAuthentication
    {
        $beUser = $GLOBALS['BE_USER'] ?? null;
        if (!$beUser instanceof BackendUserAuthentication || (int)($beUser->user['uid'] ?? 0) <= 0) {
            return null;
        }
        return $beUser;
    }

    private static function userName(BackendUserAuthentication $beUser): string
    {
        $username = $beUser->user['username'] ?? '';
        return is_string($username) ? $username : '';
    }

    private static function nullIfEmpty(string $value): ?string
    {
        return $value !== '' ? $value : null;
    }
}
