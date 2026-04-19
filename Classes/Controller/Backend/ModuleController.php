<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Backend\Template\ModuleTemplate;
use TYPO3\CMS\Backend\Template\ModuleTemplateFactory;
use WebConsulting\Agentation\Service\ConfigurationService;
use WebConsulting\Agentation\Service\ViteAssetResolver;

/**
 * Backend module: shows agentation health/status and an MCP config snippet
 * pre-filled with the configured API key and workspace. Implemented with
 * TYPO3 v14's ModuleTemplate so it inherits styleguide-compliant chrome.
 */
final class ModuleController
{
    public function __construct(
        private readonly ModuleTemplateFactory $moduleTemplateFactory,
        private readonly ConfigurationService $configuration,
        private readonly ViteAssetResolver $vite,
    ) {}

    public function indexAction(ServerRequestInterface $request): ResponseInterface
    {
        $view = $this->moduleTemplateFactory->create($request);
        $view->setTitle(
            $this->translate('mod.tabs.label'),
            $this->translate('module.heading')
        );

        $mcpConfig = $this->buildMcpConfig();

        $view->assignMultiple([
            'apiKeyConfigured' => $this->configuration->getApiKey() !== '',
            'workspaceId' => $this->configuration->getWorkspaceId(),
            'frontendEnabled' => $this->configuration->isFrontendEnabled(),
            'backendEnabled' => $this->configuration->isBackendEnabled(),
            'contextAllowed' => $this->configuration->isContextAllowed(),
            'defaultOptIn' => $this->configuration->isDefaultOptIn(),
            'toolbarPosition' => $this->configuration->getToolbarPosition(),
            'webhookUrl' => $this->configuration->getWebhookUrl(),
            'bundleBuilt' => $this->vite->hasBuild(),
            'mcpJson' => json_encode(
                $mcpConfig,
                JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
            ),
        ]);

        return $view->renderResponse('Backend/Module/Index');
    }

    /**
     * @return array<string, mixed>
     */
    private function buildMcpConfig(): array
    {
        $server = [
            'command' => 'npx',
            'args' => ['-y', 'agentation', 'mcp'],
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
        return [
            'mcpServers' => [
                'agentation' => $server,
            ],
        ];
    }

    private function translate(string $key): string
    {
        return $GLOBALS['LANG']->sL(
            'LLL:EXT:agentation/Resources/Private/Language/locallang_mod.xlf:' . $key
        ) ?: $key;
    }
}
