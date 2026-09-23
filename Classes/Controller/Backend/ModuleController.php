<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Template\ModuleTemplateFactory;
use TYPO3\CMS\Core\Localization\LanguageService;
use Webconsulting\Agentation\Mcp\McpServerConfiguration;
use Webconsulting\Agentation\Service\ViteAssetResolver;
use Webconsulting\Agentation\Settings\ExtensionSettings;

/**
 * Backend module System > Agentation: the MCP configuration for the coding
 * agent, a status overview and the stored annotations (loaded by
 * Resources/Public/JavaScript/module.js through the AJAX proxy routes).
 */
#[Autoconfigure(public: true)]
final readonly class ModuleController
{
    private const string MODULE = 'agentation';
    private const string MCP_DOCS_URL = 'https://www.agentation.com/mcp';

    public function __construct(
        private ModuleTemplateFactory $moduleTemplateFactory,
        private ExtensionSettings $settings,
        private McpServerConfiguration $mcp,
        private ViteAssetResolver $vite,
    ) {}

    public function indexAction(ServerRequestInterface $request): ResponseInterface
    {
        $title = self::languageService()->sL('agentation.mod:title');

        $view = $this->moduleTemplateFactory->create($request);
        $view->setTitle($title);
        $view->getDocHeaderComponent()->setShortcutContext(self::MODULE, $title);
        $view->assignMultiple([
            'cloudMode' => $this->settings->apiKey !== '',
            'syncEndpoint' => $this->settings->syncEndpoint,
            'workspaceId' => $this->settings->workspaceId,
            'frontendEnabled' => $this->settings->frontendEnabled,
            'backendEnabled' => $this->settings->backendEnabled,
            'contextAllowed' => $this->settings->contextAllowed,
            'bundleBuilt' => $this->vite->hasBuild(),
            'mcpJson' => $this->mcp->json(),
            'cursorDeepLink' => $this->mcp->cursorDeepLink(),
            'claudeCodeCli' => $this->mcp->claudeCodeCommand(),
            'mcpDocsUrl' => self::MCP_DOCS_URL,
        ]);

        return $view->renderResponse('Backend/Module/Index');
    }

    /**
     * Created by the backend middleware from the user's preferences.
     */
    private static function languageService(): LanguageService
    {
        $languageService = $GLOBALS['LANG'] ?? null;
        return $languageService instanceof LanguageService
            ? $languageService
            : throw new \RuntimeException('Language service missing on an authenticated backend route.', 1758196801);
    }
}
