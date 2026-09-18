<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\EventListener;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Context\Context;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Frontend\Page\PageInformation;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Service\ViteAssetResolver;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Injects the Agentation toolbar bundle into frontend and backend renders.
 *
 * Gating, in order:
 *   - the application-context gate passes (Development by default)
 *   - a backend user is logged in
 *   - the extension is enabled for the application (frontend / backend) and
 *     the request is a page the toolbar may mount on
 *   - frontend: the User Settings switch is on and the Admin Panel section
 *     has the toolbar switched on; backend: the User Settings switch is on
 *
 * The config is shipped as an inert JSON data island so the strict v14
 * backend CSP ignores it; the module bundle reads it on boot.
 */
final readonly class InjectToolbarAssets
{
    private const string CONFIG_ASSET = 'agentation-config';
    private const string CONFIG_ELEMENT_ID = 'typo3-agentation-config';
    private const string BUNDLE_ASSET = 'agentation-toolbar';
    private const string BACKEND_MODULE_PREFIX = '/typo3/module/';
    private const string OWN_MODULE_PREFIX = '/typo3/module/system/agentation';

    public function __construct(
        private ExtensionSettings $settings,
        private ToolbarSettings $toolbar,
        private ViteAssetResolver $vite,
        private BackendUriBuilder $uriBuilder,
        private Context $context,
    ) {}

    #[AsEventListener('agentation/inject-toolbar')]
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        // The event carries no request; the global is the PSR-7 request
        // TYPO3 is currently handling.
        $request = $GLOBALS['TYPO3_REQUEST'] ?? null;
        $user = $this->loggedInBackendUser();
        if (!$this->settings->contextAllowed || !$request instanceof ServerRequestInterface || $user === null) {
            return;
        }

        $scope = $this->resolveScope($request);
        $entry = $this->vite->getEntryUrl();
        if ($scope === null || $entry === null || !$this->isToolbarEnabled($scope, $user)) {
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
        // reads it from #typo3-agentation-config on boot.
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
            $collector->addStyleSheet('agentation-css-' . md5($cssUrl), $cssUrl, [], ['priority' => false, 'csp' => true]);
        }
    }

    private function resolveScope(ServerRequestInterface $request): ?InjectionScope
    {
        $type = ApplicationType::fromRequest($request);
        if ($type->isFrontend() && $this->settings->frontendEnabled) {
            return $this->isRenderedInsideBackendFrame($request) ? null : InjectionScope::Frontend;
        }
        if ($type->isBackend() && $this->settings->backendEnabled) {
            // TYPO3 v14 renders two documents per backend navigation: the
            // shell at /typo3/main and the module content iframe at
            // /typo3/module/*. React cannot portal across iframes, so the
            // toolbar mounts only into the content frame where the user
            // edits. Agentation's own management module is excluded: its
            // localStorage/EventSource sync would re-push annotations right
            // after the module deleted them server-side.
            $path = $request->getUri()->getPath();
            $isModuleFrame = str_starts_with($path, self::BACKEND_MODULE_PREFIX)
                && !str_starts_with($path, self::OWN_MODULE_PREFIX);
            return $isModuleFrame ? InjectionScope::Backend : null;
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

    private function isToolbarEnabled(InjectionScope $scope, BackendUserAuthentication $user): bool
    {
        return match ($scope) {
            InjectionScope::Frontend => $this->toolbar->isFrontendToolbarActive($user),
            InjectionScope::Backend => $this->toolbar->isBackendToolbarEnabled($user),
        };
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
                null,
            ],
            InjectionScope::Backend => [
                $this->settings->toolbarPosition,
                true,
                (string)$this->uriBuilder->buildUriFromRoute('agentation_api_proxy'),
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
            'apiKey' => self::nullIfEmpty($this->settings->apiKey),
            'workspaceId' => self::nullIfEmpty($this->settings->workspaceId),
            'webhookUrl' => self::nullIfEmpty($this->settings->webhookUrl),
            'endpoint' => $this->settings->syncEndpoint,
            'proxyUrl' => $proxyUrl,
            'context' => 'typo3-' . $scope->value,
            'typo3Version' => (new Typo3Version())->getVersion(),
            'pageId' => $pageId > 0 ? $pageId : null,
            'beUser' => is_string($username) ? self::nullIfEmpty($username) : null,
            'metadata' => [
                'applicationContext' => (string)Environment::getContext(),
                'includeAdminPanelChrome' => $includeAdminPanelChrome,
            ],
            'additionalOptions' => $this->settings->additionalOptions,
        ];
    }

    /**
     * Both applications keep the authenticated backend user in the global;
     * the Context aspect tells whether that user is actually logged in.
     */
    private function loggedInBackendUser(): ?BackendUserAuthentication
    {
        if ($this->context->getPropertyFromAspect('backend.user', 'isLoggedIn', false) !== true) {
            return null;
        }
        $user = $GLOBALS['BE_USER'] ?? null;
        return $user instanceof BackendUserAuthentication ? $user : null;
    }

    private static function nullIfEmpty(string $value): ?string
    {
        return $value !== '' ? $value : null;
    }
}
