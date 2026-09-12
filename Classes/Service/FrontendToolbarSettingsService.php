<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfigurationService;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;

/**
 * Resolves the frontend toolbar state a backend user chose in the Admin
 * Panel section (stored by the Admin Panel in the user's uc), layered over
 * the User Settings switch and the extension defaults.
 *
 * Shared by the Admin Panel module (display) and the asset listener
 * (injection) so both agree on what "on" means.
 */
final readonly class FrontendToolbarSettingsService
{
    public const string MODULE_IDENTIFIER = 'agentation';

    public function __construct(
        private ConfigurationService $configuration,
        private UserToolbarSettingsService $userToolbarSettings,
        private AdminPanelConfigurationService $adminPanelConfiguration,
    ) {}

    /**
     * True when the toolbar should render on frontend pages for this user:
     * the User Settings switch is on and the Admin Panel checkbox is either
     * ticked or never touched while the extension defaults to opt-in.
     */
    public function isToolbarActive(?BackendUserAuthentication $backendUser = null): bool
    {
        if (!$this->userToolbarSettings->isFrontendToolbarEnabled($backendUser)) {
            return false;
        }
        $stored = $this->option('enabled');
        if ($stored === '') {
            return $this->configuration->isDefaultOptIn();
        }
        return !in_array(strtolower($stored), ['0', 'false', 'off', 'no'], true);
    }

    public function getPosition(): ToolbarPosition
    {
        $stored = $this->option('position');
        return $stored === ''
            ? $this->configuration->getToolbarPosition()
            : ToolbarPosition::fromSetting($stored);
    }

    public function getScope(): AnnotationScope
    {
        return AnnotationScope::fromSetting($this->option('scope'));
    }

    private function option(string $name): string
    {
        return trim($this->adminPanelConfiguration->getConfigurationOption(self::MODULE_IDENTIFIER, $name));
    }
}
