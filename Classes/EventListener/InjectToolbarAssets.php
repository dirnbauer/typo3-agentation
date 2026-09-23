<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\EventListener;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Frontend\Page\PageInformation;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Middleware\FrontendSyncProxy;
use Webconsulting\Agentation\Service\ProxyToken;
use Webconsulting\Agentation\Service\ToolbarGate;
use Webconsulting\Agentation\Service\ViteAssetResolver;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Injects the Agentation toolbar bundle into frontend and backend renders
 * the ToolbarGate lets through.
 *
 * The config is shipped as an inert JSON data island so the strict v14
 * backend CSP ignores it; the module bundle reads it on boot. It carries
 * no secret: the API key stays on the server, where the proxies add it. The
 * toolbar reaches the sync server only through a same-origin proxy — the
 * backend AJAX route in module frames, {@see FrontendSyncProxy} on frontend
 * pages — so an HTTP sync endpoint works from HTTPS pages too.
 */
final readonly class InjectToolbarAssets
{
    private const string CONFIG_ASSET = 'agentation-config';
    private const string CONFIG_ELEMENT_ID = 'typo3-agentation-config';
    private const string BUNDLE_ASSET = 'agentation-toolbar';

    public function __construct(
        private ExtensionSettings $settings,
        private ToolbarSettings $toolbar,
        private ToolbarGate $gate,
        private ViteAssetResolver $vite,
        private BackendUriBuilder $uriBuilder,
        private ProxyToken $proxyToken,
    ) {}

    #[AsEventListener('agentation/inject-toolbar')]
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        // The event carries no request; the global is the PSR-7 request
        // TYPO3 is currently handling.
        $request = $GLOBALS['TYPO3_REQUEST'] ?? null;
        if (!$request instanceof ServerRequestInterface) {
            return;
        }

        $scope = $this->gate->scopeFor($request);
        $user = $this->gate->loggedInBackendUser();
        $entry = $this->vite->getEntryUrl();
        if ($scope === null || $user === null || $entry === null) {
            return;
        }

        $this->addAssets($event->getAssetCollector(), $this->payload($scope, $user, $request), $entry);
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function addAssets(AssetCollector $collector, array $payload, string $entry): void
    {
        // <script type="application/json"> is never executed, so the strict
        // backend CSP (script-src 'self' 'nonce-…') needs no hash or nonce
        // for it. Priority puts it into <head>; the deferred module bundle
        // reads it from #typo3-agentation-config on boot. JSON_HEX_TAG keeps
        // a "</script>" in any value from closing the element early.
        $collector->addInlineJavaScript(
            self::CONFIG_ASSET,
            json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_INVALID_UTF8_SUBSTITUTE | JSON_THROW_ON_ERROR),
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
            $collector->addStyleSheet('agentation-css-' . md5($cssUrl), $cssUrl, [], ['priority' => false, 'csp' => true]);
        }
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(InjectionScope $scope, BackendUserAuthentication $user, ServerRequestInterface $request): array
    {
        [$position, $includeAdminPanelChrome, $proxyUrl] = match ($scope) {
            InjectionScope::Frontend => [
                $this->toolbar->getFrontendPosition(),
                $this->toolbar->getFrontendScope()->includesAdminPanelChrome(),
                FrontendSyncProxy::path($request) . '?token=' . rawurlencode($this->proxyToken->for($user)),
            ],
            InjectionScope::Backend => [
                $this->settings->toolbarPosition,
                true,
                (string)$this->uriBuilder->buildUriFromRoute('ajax_agentation_api_proxy'),
            ],
        };
        // TYPO3 v14 has no TypoScriptFrontendController; the resolved page
        // lives in the request attribute set by the frontend middleware.
        $pageInformation = $request->getAttribute('frontend.page.information');
        $pageId = $pageInformation instanceof PageInformation ? $pageInformation->getId() : 0;
        $username = $user->user['username'] ?? '';

        return [
            'enabled' => true,
            'scope' => $scope->value,
            'position' => $position->value,
            'workspaceId' => self::nullIfEmpty($this->settings->workspaceId),
            'webhookUrl' => self::nullIfEmpty($this->settings->webhookUrl),
            'endpoint' => $this->settings->syncEndpoint,
            'proxyUrl' => $proxyUrl,
            'context' => 'typo3-' . $scope->value,
            'typo3Version' => new Typo3Version()->getVersion(),
            'pageId' => $pageId > 0 ? $pageId : null,
            'beUser' => is_string($username) ? self::nullIfEmpty($username) : null,
            'metadata' => [
                'applicationContext' => (string)Environment::getContext(),
                'includeAdminPanelChrome' => $includeAdminPanelChrome,
            ],
            'additionalOptions' => $this->settings->additionalOptions,
        ];
    }

    private static function nullIfEmpty(string $value): ?string
    {
        return $value !== '' ? $value : null;
    }
}
