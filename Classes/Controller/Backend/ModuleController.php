<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Template\ModuleTemplateFactory;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Page\PageRenderer;
use Webconsulting\Agentation\Mcp\McpServerConfiguration;
use Webconsulting\Agentation\Service\ViteAssetResolver;
use Webconsulting\Agentation\Settings\ExtensionSettings;

/**
 * Backend module System > Agentation: MCP configuration snippets for the
 * coding agent, a status overview and the stored-annotation list (filled by
 * Resources/Public/Vite/module.js via the AJAX proxy routes).
 */
#[Autoconfigure(public: true)]
final readonly class ModuleController
{
    private const string MCP_DOCS_URL = 'https://www.agentation.com/mcp';
    private const string LABEL_FILE = 'EXT:agentation/Resources/Private/Language/locallang_mod.xlf';

    public function __construct(
        private ModuleTemplateFactory $moduleTemplateFactory,
        private PageRenderer $pageRenderer,
        private ExtensionSettings $settings,
        private McpServerConfiguration $mcp,
        private ViteAssetResolver $vite,
    ) {}

    public function indexAction(ServerRequestInterface $request): ResponseInterface
    {
        // module.* labels are exposed to module.js as TYPO3.lang.
        $this->pageRenderer->addInlineLanguageLabelFile(self::LABEL_FILE, 'module.');

        $languageService = self::languageService();
        $view = $this->moduleTemplateFactory->create($request);
        $view->setTitle(
            $languageService->sL('agentation.mod:mod.tabs.label'),
            $languageService->sL('agentation.mod:module.heading')
        );
        $view->assignMultiple([
            'apiKeyConfigured' => $this->settings->apiKey !== '',
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
