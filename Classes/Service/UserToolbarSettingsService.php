<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;

/**
 * Evaluates the per-user toolbar switches from User Settings > Agentation.
 *
 * The fields are registered in Configuration/TCA/Overrides/be_users.php.
 * A user who never saved the settings inherits the extension's default
 * opt-in; an explicit choice always wins.
 */
final readonly class UserToolbarSettingsService
{
    private const string FRONTEND_SETTING = 'agentation_frontend_enabled';
    private const string BACKEND_SETTING = 'agentation_backend_enabled';

    public function __construct(
        private ConfigurationService $configuration,
    ) {}

    public function isFrontendToolbarEnabled(?BackendUserAuthentication $backendUser = null): bool
    {
        return $this->isUserSettingEnabled(self::FRONTEND_SETTING, $backendUser);
    }

    public function isBackendToolbarEnabled(?BackendUserAuthentication $backendUser = null): bool
    {
        return $this->isUserSettingEnabled(self::BACKEND_SETTING, $backendUser);
    }

    private function isUserSettingEnabled(string $key, ?BackendUserAuthentication $backendUser): bool
    {
        $backendUser ??= $this->currentBackendUser();
        if ($backendUser === null || (int)($backendUser->user['uid'] ?? 0) <= 0) {
            return false;
        }

        $settings = $backendUser->getUserSettings();
        if ($settings->has($key)) {
            return self::toBool($settings->get($key));
        }

        return $this->configuration->isDefaultOptIn();
    }

    private function currentBackendUser(): ?BackendUserAuthentication
    {
        $backendUser = $GLOBALS['BE_USER'] ?? null;
        return $backendUser instanceof BackendUserAuthentication ? $backendUser : null;
    }

    private static function toBool(mixed $value): bool
    {
        if (is_bool($value)) {
            return $value;
        }
        if (is_int($value)) {
            return $value !== 0;
        }
        if (is_float($value)) {
            return $value !== 0.0;
        }
        if (is_string($value)) {
            return !in_array(strtolower(trim($value)), ['', '0', 'false', 'off', 'no'], true);
        }
        return false;
    }
}
