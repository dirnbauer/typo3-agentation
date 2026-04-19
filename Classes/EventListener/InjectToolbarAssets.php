<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\EventListener;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfigurationService;
use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use WebConsulting\Agentation\Service\ConfigurationService;
use WebConsulting\Agentation\Service\ViteAssetResolver;

/**
 * Injects the agentation toolbar bundle into FE and BE page renders.
 *
 * Gating:
 *   - contextGate passes (Development by default)
 *   - Extension enabled for the current scope (FE / BE)
 *   - FE: BE user session exists AND admin panel's agentation module toggled on
 *   - BE: BE user's uc has `agentation_backend_enabled`
 *
 * The config is written as an inline script (priority = true so it lands in
 * <head>), and the external module bundle is added with priority = false.
 * Module scripts defer, so the inline config always sets
 * `window.TYPO3Agentation` before the bundle reads it.
 */
final class InjectToolbarAssets
{
    private bool $alreadyAdded = false;

    public function __construct(
        private readonly ConfigurationService $config,
        private readonly ViteAssetResolver $vite,
    ) {}

    #[AsEventListener('agentation/inject-toolbar')]
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        if ($this->alreadyAdded) {
            return;
        }
        if (!$this->config->isContextAllowed()) {
            return;
        }
        $request = $GLOBALS['TYPO3_REQUEST'] ?? null;
        if (!$request instanceof ServerRequestInterface) {
            return;
        }

        $scope = $this->resolveScope($request);
        if ($scope === null) {
            return;
        }

        $payload = match ($scope) {
            'frontend' => $this->resolveFrontendPayload(),
            'backend' => $this->resolveBackendPayload(),
        };
        if ($payload === null) {
            return;
        }

        $entry = $this->vite->getEntryUrl();
        if ($entry === null) {
            return;
        }

        $collector = $event->getAssetCollector();
        $this->addAssets($collector, $payload, $entry);
        $this->alreadyAdded = true;
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function addAssets(AssetCollector $collector, array $payload, string $entry): void
    {
        // Ship the config as a JSON data island rather than executable inline
        // JS. <script type="application/json"> is inert to the browser, so
        // the strict v14 backend CSP (script-src 'self' 'nonce-…') ignores
        // it entirely — no hash or nonce dance needed. The bundle reads it
        // from #typo3-agentation-config on boot.
        $collector->addInlineJavaScript(
            'agentation-config',
            (string)json_encode($payload, JSON_UNESCAPED_SLASHES),
            ['type' => 'application/json', 'id' => 'typo3-agentation-config'],
            ['priority' => true]
        );
        $collector->addJavaScript(
            'agentation-toolbar',
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

    private function resolveScope(ServerRequestInterface $request): ?string
    {
        $type = ApplicationType::fromRequest($request);
        if ($type->isFrontend() && $this->config->isFrontendEnabled()) {
            return 'frontend';
        }
        if ($type->isBackend() && $this->config->isBackendEnabled()) {
            return 'backend';
        }
        return null;
    }

    /**
     * @return array<string, mixed>|null
     */
    private function resolveFrontendPayload(): ?array
    {
        $beUser = $GLOBALS['BE_USER'] ?? null;
        if (!is_object($beUser) || empty($beUser->user['uid'] ?? null)) {
            return null;
        }

        $adminPanelService = GeneralUtility::makeInstance(AdminPanelConfigurationService::class);
        $enabled = (string)$adminPanelService->getConfigurationOption('agentation', 'enabled');
        $moduleEnabled = $enabled !== ''
            ? (bool)$enabled
            : $this->config->isDefaultOptIn();
        if (!$moduleEnabled) {
            return null;
        }

        $position = (string)$adminPanelService->getConfigurationOption('agentation', 'position');
        if ($position === '') {
            $position = $this->config->getToolbarPosition();
        }
        $rawScope = (string)$adminPanelService->getConfigurationOption('agentation', 'scope');
        $scope = $rawScope === 'frontend+adminpanel' ? 'frontend+adminpanel' : 'frontend';

        $pageId = 0;
        $frontendController = $GLOBALS['TSFE'] ?? null;
        if (is_object($frontendController) && isset($frontendController->id)) {
            $pageId = (int)$frontendController->id;
        }

        return $this->buildPayload(
            scope: 'frontend',
            position: $position,
            includeAdminPanelChrome: $scope === 'frontend+adminpanel',
            beUserName: (string)($beUser->user['username'] ?? ''),
            pageId: $pageId,
        );
    }

    /**
     * @return array<string, mixed>|null
     */
    private function resolveBackendPayload(): ?array
    {
        $beUser = $GLOBALS['BE_USER'] ?? null;
        if (!is_object($beUser) || empty($beUser->user['uid'] ?? null)) {
            return null;
        }

        // Enable if EITHER the extension-wide default opt-in is on OR the
        // user has explicitly ticked the backend toggle. We can't treat a
        // stored `false` as "user opted out" because v14's TCA-based user
        // settings pre-populate every declared check field with its default
        // (false) the moment it's registered — so `has()` would always be
        // true, and a false value would silently override defaultOptIn.
        $userOptedIn = false;
        if (method_exists($beUser, 'getUserSettings')) {
            $settings = $beUser->getUserSettings();
            if ($settings->has('agentation_backend_enabled')
                && (bool)$settings->get('agentation_backend_enabled')
            ) {
                $userOptedIn = true;
            }
        } else {
            $uc = is_array($beUser->uc ?? null) ? $beUser->uc : [];
            if (!empty($uc['agentation_backend_enabled'])) {
                $userOptedIn = true;
            }
        }
        if (!$userOptedIn && !$this->config->isDefaultOptIn()) {
            return null;
        }

        return $this->buildPayload(
            scope: 'backend',
            position: $this->config->getToolbarPosition(),
            includeAdminPanelChrome: true,
            beUserName: (string)($beUser->user['username'] ?? ''),
            pageId: 0,
        );
    }

    /**
     * @return array<string, mixed>
     */
    private function buildPayload(
        string $scope,
        string $position,
        bool $includeAdminPanelChrome,
        string $beUserName,
        int $pageId,
    ): array {
        return [
            'enabled' => true,
            'scope' => $scope,
            'position' => $position,
            'apiKey' => $this->config->getApiKey() !== '' ? $this->config->getApiKey() : null,
            'workspaceId' => $this->config->getWorkspaceId() !== '' ? $this->config->getWorkspaceId() : null,
            'webhookUrl' => $this->config->getWebhookUrl() !== '' ? $this->config->getWebhookUrl() : null,
            'context' => 'typo3-' . $scope,
            'typo3Version' => (new Typo3Version())->getVersion(),
            'pageId' => $pageId ?: null,
            'beUser' => $beUserName ?: null,
            'metadata' => [
                'applicationContext' => (string)Environment::getContext(),
                'includeAdminPanelChrome' => $includeAdminPanelChrome,
            ],
            'additionalOptions' => $this->config->getAdditionalOptions(),
        ];
    }
}
