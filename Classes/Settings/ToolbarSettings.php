<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Settings;

use TYPO3\CMS\Adminpanel\Service\ConfigurationService as AdminPanelConfiguration;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use Webconsulting\Agentation\Enum\AnnotationScope;
use Webconsulting\Agentation\Enum\ToolbarPosition;

/**
 * What a backend user chose for the toolbar, layered over the extension
 * defaults:
 *
 *   - the two switches in User Settings > Agentation (be_users.user_settings,
 *     registered in Configuration/TCA/Overrides/be_users.php)
 *   - the frontend section of the Admin Panel (toggle, position, scope),
 *     which the Admin Panel stores in the current user's uc
 *
 * A user who never saved a switch inherits the extension's default opt-in;
 * an explicit choice always wins.
 */
final readonly class ToolbarSettings
{
    public const string ADMIN_PANEL_MODULE = 'agentation';

    private const string FRONTEND_SWITCH = 'agentation_frontend_enabled';
    private const string BACKEND_SWITCH = 'agentation_backend_enabled';

    public function __construct(
        private ExtensionSettings $settings,
        private AdminPanelConfiguration $adminPanel,
    ) {}

    /**
     * User Settings switch for the toolbar in backend module frames.
     */
    public function isBackendToolbarEnabled(BackendUserAuthentication $user): bool
    {
        return $this->userSwitch($user, self::BACKEND_SWITCH);
    }

    /**
     * User Settings switch for the frontend toolbar. It also decides whether
     * the Admin Panel section is listed at all.
     */
    public function isFrontendToolbarEnabled(BackendUserAuthentication $user): bool
    {
        return $this->userSwitch($user, self::FRONTEND_SWITCH);
    }

    /**
     * True when the toolbar should render on frontend pages: the User
     * Settings switch is on and the Admin Panel checkbox is either ticked or
     * never touched while the extension defaults to opt-in.
     */
    public function isFrontendToolbarActive(BackendUserAuthentication $user): bool
    {
        if (!$this->isFrontendToolbarEnabled($user)) {
            return false;
        }
        $stored = $this->adminPanelOption('enabled');
        return $stored === '' ? $this->settings->defaultOptIn : filter_var($stored, FILTER_VALIDATE_BOOLEAN);
    }

    public function getFrontendPosition(): ToolbarPosition
    {
        $stored = $this->adminPanelOption('position');
        return $stored === '' ? $this->settings->toolbarPosition : ToolbarPosition::fromSetting($stored);
    }

    public function getFrontendScope(): AnnotationScope
    {
        return AnnotationScope::fromSetting($this->adminPanelOption('scope'));
    }

    private function userSwitch(BackendUserAuthentication $user, string $key): bool
    {
        $userSettings = $user->getUserSettings();
        if (!$userSettings->has($key)) {
            return $this->settings->defaultOptIn;
        }
        $value = $userSettings->get($key);
        return is_scalar($value) && filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    /**
     * Admin Panel values are per current backend user by the Admin Panel's
     * own API.
     */
    private function adminPanelOption(string $name): string
    {
        return trim($this->adminPanel->getConfigurationOption(self::ADMIN_PANEL_MODULE, $name));
    }
}
