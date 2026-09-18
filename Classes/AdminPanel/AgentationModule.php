<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\AdminPanel;

use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Adminpanel\ModuleApi\AbstractModule;
use TYPO3\CMS\Adminpanel\ModuleApi\ContentProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleData;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleSettingsProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ResourceProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ShortInfoProviderInterface;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Core\View\ViewFactoryData;
use TYPO3\CMS\Core\View\ViewFactoryInterface;
use TYPO3\CMS\Core\View\ViewInterface;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Admin Panel section for the frontend toolbar.
 *
 * The section is listed for every backend user whose User Settings switch
 * for the frontend toolbar is on. Inside the section the user toggles the
 * toolbar itself and picks position and annotation scope; the Admin Panel
 * persists those values in the user's uc and ToolbarSettings reads them
 * back for both this module and the asset listener.
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
        private readonly ExtensionSettings $settings,
        private readonly ToolbarSettings $toolbar,
        private readonly ViewFactoryInterface $viewFactory,
        private readonly BackendUriBuilder $uriBuilder,
    ) {}

    public function getIdentifier(): string
    {
        return ToolbarSettings::ADMIN_PANEL_MODULE;
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
            $this->isToolbarActive()
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
        return $this->toolbar->isFrontendToolbarEnabled($this->getBackendUser());
    }

    public function getSettings(): string
    {
        return $this->render('AdminPanel/ModuleSettings', [
            'positions' => ToolbarPosition::values(),
            'scopes' => AnnotationScope::values(),
        ]);
    }

    public function getContent(ModuleData $data): string
    {
        return $this->render('AdminPanel/ModuleContent', [
            'workspaceId' => $this->settings->workspaceId,
            'contextAllowed' => $this->settings->contextAllowed,
            'backendModuleUrl' => (string)$this->uriBuilder->buildUriFromRoute('agentation'),
        ]);
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

    private function isToolbarActive(): bool
    {
        return $this->toolbar->isFrontendToolbarActive($this->getBackendUser());
    }

    /**
     * @param array<string, mixed> $variables
     */
    private function render(string $template, array $variables): string
    {
        $view = $this->createView();
        $view->assignMultiple($variables + [
            'enabled' => $this->isToolbarActive(),
            'position' => $this->toolbar->getFrontendPosition()->value,
            'scope' => $this->toolbar->getFrontendScope()->value,
            'apiKeySet' => $this->settings->apiKey !== '',
        ]);
        return $view->render($template);
    }

    private function createView(): ViewInterface
    {
        return $this->viewFactory->create(new ViewFactoryData(
            templateRootPaths: ['EXT:agentation/Resources/Private/Templates'],
        ));
    }
}
