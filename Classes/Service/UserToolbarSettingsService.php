<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use Psr\Container\ContainerInterface;

/**
 * Evaluates the per-BE-user toolbar switches from TYPO3 user settings.
 */
final class UserToolbarSettingsService
{
    public function __construct(
        private readonly ConfigurationService $configuration,
    ) {}

    public function isFrontendToolbarEnabled(?object $backendUser = null): bool
    {
        return $this->isUserSettingEnabled(
            'agentation_frontend_enabled',
            $this->configuration->isDefaultOptIn(),
            $backendUser,
        );
    }

    public function isBackendToolbarEnabled(?object $backendUser = null): bool
    {
        return $this->isUserSettingEnabled(
            'agentation_backend_enabled',
            $this->configuration->isDefaultOptIn(),
            $backendUser,
        );
    }

    private function isUserSettingEnabled(string $key, bool $default, ?object $backendUser): bool
    {
        $backendUser ??= $GLOBALS['BE_USER'] ?? null;
        if (!is_object($backendUser) || (int)($backendUser->user['uid'] ?? 0) <= 0) {
            return false;
        }

        if (method_exists($backendUser, 'getUserSettings')) {
            $settings = $backendUser->getUserSettings();
            if ($settings instanceof ContainerInterface && $settings->has($key)) {
                return $this->toBool($settings->get($key));
            }
        }

        $userSettings = $this->extractUserSettingsJson($backendUser);
        if (array_key_exists($key, $userSettings)) {
            return $this->toBool($userSettings[$key]);
        }

        $uc = is_array($backendUser->uc ?? null) ? $backendUser->uc : [];
        if (array_key_exists($key, $uc)) {
            return $this->toBool($uc[$key]);
        }

        return $default;
    }

    /**
     * @return array<string, mixed>
     */
    private function extractUserSettingsJson(object $backendUser): array
    {
        $raw = $backendUser->user['user_settings'] ?? null;
        if (is_array($raw)) {
            return $raw;
        }
        if (!is_string($raw) || trim($raw) === '') {
            return [];
        }
        $decoded = json_decode($raw, true);
        return is_array($decoded) ? $decoded : [];
    }

    private function toBool(mixed $value): bool
    {
        if (is_bool($value)) {
            return $value;
        }
        if (is_int($value)) {
            return $value !== 0;
        }
        if (is_string($value)) {
            return !in_array(strtolower(trim($value)), ['', '0', 'false', 'off', 'no'], true);
        }
        return (bool)$value;
    }
}
