<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\AdminPanel;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\AbstractModule;
use TYPO3\CMS\Adminpanel\ModuleApi\ConfigurableInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ContentProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleData;
use TYPO3\CMS\Adminpanel\ModuleApi\ModuleSettingsProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ResourceProviderInterface;
use TYPO3\CMS\Adminpanel\ModuleApi\ShortInfoProviderInterface;
use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfigurationService;
use TYPO3\CMS\Core\View\ViewFactoryData;
use TYPO3\CMS\Core\View\ViewFactoryInterface;
use TYPO3\CMS\Core\View\ViewInterface;
use WebConsulting\Agentation\Service\ConfigurationService;
use WebConsulting\Agentation\Service\UserToolbarSettingsService;

/**
 * Admin Panel section for the Agentation toolbar.
 *
 * Provides per-user opt-in plus a handful of base settings:
 *   - enabled (on/off for this session)
 *   - position (bottom-right / bottom-left / top-right / top-left)
 *   - scope (annotate frontend page only / include admin panel chrome)
 *
 * Settings are persisted by the Admin Panel itself in its module data,
 * and read back by FrontendAssetListener when injecting the bundle.
 */
final class AgentationModule extends AbstractModule implements
    ConfigurableInterface,
    ContentProviderInterface,
    ModuleSettingsProviderInterface,
    ResourceProviderInterface,
    ShortInfoProviderInterface
{
    public function __construct(
        private readonly ConfigurationService $configuration,
        private readonly UserToolbarSettingsService $userToolbarSettings,
        private readonly AdminPanelConfigurationService $adminPanelConfiguration,
        private readonly ViewFactoryInterface $viewFactory,
    ) {}

    public function getIdentifier(): string
    {
        return 'agentation';
    }

    public function getLabel(): string
    {
        return $this->getLanguageService()->sL(
            'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:adminpanel.label'
        );
    }

    public function getIconIdentifier(): string
    {
        return 'agentation-logo';
    }

    public function getShortInfo(): string
    {
        return $this->getLanguageService()->sL(
            $this->isEnabled()
                ? 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:adminpanel.shortinfo.on'
                : 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:adminpanel.shortinfo.off'
        );
    }

    public function getSettings(): string
    {
        $view = $this->createView();
        $view->assignMultiple([
            'moduleData' => $this->getConfigurationService()->getConfigurationOption(
                $this->getIdentifier(),
                ''
            ),
            'enabled' => $this->isEnabled(),
            'position' => $this->getPosition(),
            'scope' => $this->getScope(),
            'positions' => ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
            'scopes' => ['frontend', 'frontend+adminpanel'],
            'apiKeySet' => $this->configuration->getApiKey() !== '',
        ]);
        return $view->render('AdminPanel/ModuleSettings');
    }

    public function getContent(ModuleData $data): string
    {
        $view = $this->createView();
        $view->assignMultiple([
            'enabled' => $this->isEnabled(),
            'position' => $this->getPosition(),
            'scope' => $this->getScope(),
            'apiKey' => $this->configuration->getApiKey() !== '',
            'workspaceId' => $this->configuration->getWorkspaceId(),
            'contextAllowed' => $this->configuration->isContextAllowed(),
        ]);
        return $view->render('AdminPanel/ModuleContent');
    }

    public function getCssFiles(): array
    {
        return [
            'EXT:agentation/Resources/Public/Css/AdminPanel.css',
        ];
    }

    public function getJavaScriptFiles(): array
    {
        return [];
    }

    public function onSubmit(ModuleData $moduleData, ServerRequestInterface $request): void
    {
    }

    public function isEnabled(): bool
    {
        if (!$this->userToolbarSettings->isFrontendToolbarEnabled()) {
            return false;
        }

        $value = $this->getConfigurationService()->getConfigurationOption(
            $this->getIdentifier(),
            'enabled'
        );
        if ($value === '') {
            return $this->configuration->isDefaultOptIn();
        }
        return (bool)$value;
    }

    public function getPosition(): string
    {
        $value = $this->getConfigurationService()->getConfigurationOption(
            $this->getIdentifier(),
            'position'
        );
        if ($value === '') {
            $value = $this->configuration->getToolbarPosition();
        }
        return in_array($value, ['bottom-right', 'bottom-left', 'top-right', 'top-left'], true)
            ? $value
            : 'bottom-right';
    }

    public function getScope(): string
    {
        $value = $this->getConfigurationService()->getConfigurationOption(
            $this->getIdentifier(),
            'scope'
        );
        return $value === 'frontend+adminpanel' ? 'frontend+adminpanel' : 'frontend';
    }

    private function createView(): ViewInterface
    {
        $viewFactoryData = new ViewFactoryData(
            templateRootPaths: ['EXT:agentation/Resources/Private/Templates'],
            partialRootPaths: ['EXT:agentation/Resources/Private/Partials'],
            layoutRootPaths: ['EXT:agentation/Resources/Private/Layouts'],
        );
        return $this->viewFactory->create($viewFactoryData);
    }

    private function getConfigurationService(): AdminPanelConfigurationService
    {
        return $this->adminPanelConfiguration;
    }
}
