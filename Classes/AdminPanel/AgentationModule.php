<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\AdminPanel;

use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Adminpanel\ModuleApi\AbstractModule;
use TYPO3\CMS\Adminpanel\ModuleApi\ContentProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleData;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleSettingsProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ResourceProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ShortInfoProviderInterface;
use TYPO3\CMS\Core\View\ViewFactoryData;
use TYPO3\CMS\Core\View\ViewFactoryInterface;
use TYPO3\CMS\Core\View\ViewInterface;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\FrontendToolbarSettingsService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;

/**
 * Admin Panel section for the Agentation toolbar.
 *
 * The section is listed for every backend user whose User Settings switch
 * for the frontend toolbar is on (or who inherits the default opt-in).
 * Inside the section the user toggles the toolbar itself and picks the
 * position and annotation scope; the Admin Panel persists those values in
 * the user's uc and FrontendToolbarSettingsService reads them back for
 * both this module and the asset listener.
 *
 * Registered in ext_localconf.php via
 * $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['adminpanel']['modules'].
 */
#[Autoconfigure(public: true)]
final class AgentationModule extends AbstractModule implements
    ContentProviderInterface,
    ModuleSettingsProviderInterface,
    ResourceProviderInterface,
    ShortInfoProviderInterface
{
    public function __construct(
        private readonly ConfigurationService $configuration,
        private readonly UserToolbarSettingsService $userToolbarSettings,
        private readonly FrontendToolbarSettingsService $toolbarSettings,
        private readonly ViewFactoryInterface $viewFactory,
    ) {}

    public function getIdentifier(): string
    {
        return FrontendToolbarSettingsService::MODULE_IDENTIFIER;
    }

    public function getLabel(): string
    {
        return $this->getLanguageService()->sL('agentation.messages:adminpanel.label');
    }

    public function getIconIdentifier(): string
    {
        return 'agentation-logo';
    }

    public function getShortInfo(): string
    {
        return $this->getLanguageService()->sL(
            $this->toolbarSettings->isToolbarActive()
                ? 'agentation.messages:adminpanel.shortinfo.on'
                : 'agentation.messages:adminpanel.shortinfo.off'
        );
    }

    /**
     * Whether the section appears in the Admin Panel at all. The per-session
     * checkbox lives inside the section, so it must not gate visibility -
     * otherwise a switched-off toolbar could never be switched on again.
     */
    public function isEnabled(): bool
    {
        return $this->userToolbarSettings->isFrontendToolbarEnabled();
    }

    public function getSettings(): string
    {
        $view = $this->createView();
        $view->assignMultiple([
            'enabled' => $this->toolbarSettings->isToolbarActive(),
            'position' => $this->toolbarSettings->getPosition()->value,
            'scope' => $this->toolbarSettings->getScope()->value,
            'positions' => ToolbarPosition::values(),
            'scopes' => AnnotationScope::values(),
            'apiKeySet' => $this->configuration->getApiKey() !== '',
        ]);
        return $view->render('AdminPanel/ModuleSettings');
    }

    public function getContent(ModuleData $data): string
    {
        $view = $this->createView();
        $view->assignMultiple([
            'enabled' => $this->toolbarSettings->isToolbarActive(),
            'position' => $this->toolbarSettings->getPosition()->value,
            'scope' => $this->toolbarSettings->getScope()->value,
            'apiKey' => $this->configuration->getApiKey() !== '',
            'workspaceId' => $this->configuration->getWorkspaceId(),
            'contextAllowed' => $this->configuration->isContextAllowed(),
        ]);
        return $view->render('AdminPanel/ModuleContent');
    }

    /** @return list<string> */
    public function getCssFiles(): array
    {
        return ['EXT:agentation/Resources/Public/Css/AdminPanel.css'];
    }

    /** @return list<string> */
    public function getJavaScriptFiles(): array
    {
        return [];
    }

    public function onSubmit(ModuleData $moduleData, ServerRequestInterface $request): void {}

    private function createView(): ViewInterface
    {
        return $this->viewFactory->create(new ViewFactoryData(
            templateRootPaths: ['EXT:agentation/Resources/Private/Templates'],
            partialRootPaths: ['EXT:agentation/Resources/Private/Partials'],
            layoutRootPaths: ['EXT:agentation/Resources/Private/Layouts'],
        ));
    }
}
