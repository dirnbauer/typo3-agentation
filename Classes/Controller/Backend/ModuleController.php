<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Template\ModuleTemplateFactory;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Localization\LanguageServiceFactory;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\ViteAssetResolver;

/**
 * Backend module System > Agentation: health/status overview plus an MCP
 * configuration snippet pre-filled with the configured API key and
 * workspace. Rendered through ModuleTemplate for standard backend chrome.
 */
#[Autoconfigure(public: true)]
final readonly class ModuleController
{
    private const string MCP_DOCS_URL = 'https://www.agentation.com/mcp';

    public function __construct(
        private ModuleTemplateFactory $moduleTemplateFactory,
        private ConfigurationService $configuration,
        private ViteAssetResolver $vite,
        private LanguageServiceFactory $languageServiceFactory,
    ) {}

    public function indexAction(ServerRequestInterface $request): ResponseInterface
    {
        $languageService = $this->languageServiceFactory->createFromUserPreferences($this->currentBackendUser());
        $view = $this->moduleTemplateFactory->create($request);
        $view->setTitle(
            self::label($languageService, 'mod.tabs.label'),
            self::label($languageService, 'module.heading')
        );

        $serverConfig = $this->buildServerConfig();
        $mcpConfig = ['mcpServers' => ['agentation' => $serverConfig]];

        $view->assignMultiple([
            'apiKeyConfigured' => $this->configuration->getApiKey() !== '',
            'workspaceId' => $this->configuration->getWorkspaceId(),
            'frontendEnabled' => $this->configuration->isFrontendEnabled(),
            'backendEnabled' => $this->configuration->isBackendEnabled(),
            'contextAllowed' => $this->configuration->isContextAllowed(),
            'defaultOptIn' => $this->configuration->isDefaultOptIn(),
            'toolbarPosition' => $this->configuration->getToolbarPosition()->value,
            'webhookUrl' => $this->configuration->getWebhookUrl(),
            'bundleBuilt' => $this->vite->hasBuild(),
            'mcpJson' => json_encode(
                $mcpConfig,
                JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
            ),
            'cursorDeepLink' => $this->buildCursorDeepLink($serverConfig),
            'claudeCodeCli' => $this->buildClaudeCodeCli($serverConfig),
            'mcpDocsUrl' => self::MCP_DOCS_URL,
            'stepCount' => 4,
        ]);

        return $view->renderResponse('Backend/Module/Index');
    }

    /**
     * The MCP server is the separate npm package `agentation-mcp` (not a
     * subcommand of `agentation`); its binary is run as `agentation-mcp server`.
     *
     * @return array{command: string, args: list<string>, env?: array<string, string>}
     */
    private function buildServerConfig(): array
    {
        $server = [
            'command' => 'npx',
            'args' => ['-y', 'agentation-mcp', 'server'],
        ];
        $env = [];
        if ($this->configuration->getApiKey() !== '') {
            $env['AGENTATION_API_KEY'] = $this->configuration->getApiKey();
        }
        if ($this->configuration->getWorkspaceId() !== '') {
            $env['AGENTATION_WORKSPACE'] = $this->configuration->getWorkspaceId();
        }
        if ($env !== []) {
            $server['env'] = $env;
        }
        return $server;
    }

    /**
     * @param array{command: string, args: list<string>, env?: array<string, string>} $serverConfig
     */
    private function buildCursorDeepLink(array $serverConfig): string
    {
        $encoded = base64_encode(
            (string)json_encode($serverConfig, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
        );
        return 'cursor://anysphere.cursor-deeplink/mcp/install?name=agentation&config='
            . rawurlencode($encoded);
    }

    /**
     * @param array{command: string, args: list<string>, env?: array<string, string>} $serverConfig
     */
    private function buildClaudeCodeCli(array $serverConfig): string
    {
        $parts = ['claude mcp add agentation'];
        foreach ($serverConfig['env'] ?? [] as $key => $value) {
            $parts[] = '--env ' . escapeshellarg($key . '=' . $value);
        }
        $parts[] = '--';
        $parts[] = escapeshellarg($serverConfig['command']);
        foreach ($serverConfig['args'] as $arg) {
            $parts[] = escapeshellarg($arg);
        }
        return implode(' ', $parts);
    }

    private function currentBackendUser(): ?BackendUserAuthentication
    {
        $backendUser = $GLOBALS['BE_USER'] ?? null;
        return $backendUser instanceof BackendUserAuthentication ? $backendUser : null;
    }

    private static function label(LanguageService $languageService, string $key): string
    {
        $label = $languageService->sL('agentation.mod:' . $key);
        return $label !== '' ? $label : $key;
    }
}
