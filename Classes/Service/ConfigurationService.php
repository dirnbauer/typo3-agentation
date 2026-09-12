<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationPathDoesNotExistException;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Core\Environment;
use Webconsulting\Agentation\Enum\ContextGate;
use Webconsulting\Agentation\Enum\ToolbarPosition;

/**
 * Typed view on the extension configuration (ext_conf_template.txt).
 *
 * Values are normalised once at construction time so every consumer sees
 * the same defaults, enums and the application-context gate.
 */
final readonly class ConfigurationService
{
    private const string CLOUD_ENDPOINT = 'https://agentation-mcp-cloud.vercel.app/api';
    private const string LOCAL_ENDPOINT = 'http://localhost:4747';

    private string $apiKey;
    private string $workspaceId;
    private string $syncEndpoint;
    private bool $frontendEnabled;
    private bool $backendEnabled;
    private ContextGate $contextGate;
    private bool $defaultOptIn;
    private ToolbarPosition $toolbarPosition;
    private string $webhookUrl;
    private string $additionalOptions;

    public function __construct(ExtensionConfiguration $extensionConfiguration)
    {
        $raw = [];
        try {
            $loaded = $extensionConfiguration->get('agentation');
            if (is_array($loaded)) {
                $raw = $loaded;
            }
        } catch (ExtensionConfigurationExtensionNotConfiguredException|ExtensionConfigurationPathDoesNotExistException) {
            // Extension not configured yet (fresh install) - use the defaults.
        }

        $this->apiKey = self::stringValue($raw, 'apiKey');
        $this->workspaceId = self::stringValue($raw, 'workspaceId');
        $this->syncEndpoint = self::stringValue($raw, 'syncEndpoint');
        $this->frontendEnabled = self::boolValue($raw, 'frontendEnabled', true);
        $this->backendEnabled = self::boolValue($raw, 'backendEnabled', true);
        $this->contextGate = ContextGate::fromSetting(self::stringValue($raw, 'contextGate'));
        $this->defaultOptIn = self::boolValue($raw, 'defaultOptIn', false);
        $this->toolbarPosition = ToolbarPosition::fromSetting(self::stringValue($raw, 'toolbarPosition'));
        $this->webhookUrl = self::stringValue($raw, 'webhookUrl');
        $this->additionalOptions = self::stringValue($raw, 'additionalOptions');
    }

    public function getApiKey(): string
    {
        return $this->apiKey;
    }

    public function getWorkspaceId(): string
    {
        return $this->workspaceId;
    }

    /**
     * Explicit endpoint, or auto-selected: the cloud API when an API key
     * is present (HTTPS works from any backend origin), otherwise the local
     * agentation-mcp server (HTTP - browsers block it from HTTPS origins,
     * which the backend proxy route works around).
     */
    public function getSyncEndpoint(): string
    {
        if ($this->syncEndpoint !== '') {
            return $this->syncEndpoint;
        }
        return $this->apiKey !== '' ? self::CLOUD_ENDPOINT : self::LOCAL_ENDPOINT;
    }

    public function isFrontendEnabled(): bool
    {
        return $this->frontendEnabled;
    }

    public function isBackendEnabled(): bool
    {
        return $this->backendEnabled;
    }

    public function isDefaultOptIn(): bool
    {
        return $this->defaultOptIn;
    }

    public function getToolbarPosition(): ToolbarPosition
    {
        return $this->toolbarPosition;
    }

    public function getContextGate(): ContextGate
    {
        return $this->contextGate;
    }

    public function getWebhookUrl(): string
    {
        return $this->webhookUrl;
    }

    /**
     * Extra props merged into the toolbar's init call; invalid JSON and
     * non-object payloads are ignored.
     *
     * @return array<string, mixed>
     */
    public function getAdditionalOptions(): array
    {
        $raw = trim($this->additionalOptions);
        if ($raw === '') {
            return [];
        }
        try {
            $decoded = json_decode($raw, true, 16, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        if (!is_array($decoded)) {
            return [];
        }
        $options = [];
        foreach ($decoded as $key => $value) {
            if (is_string($key)) {
                $options[$key] = $value;
            }
        }
        return $options;
    }

    public function isContextAllowed(): bool
    {
        return $this->contextGate->allows(Environment::getContext());
    }

    /**
     * @param array<int|string, mixed> $raw
     */
    private static function stringValue(array $raw, string $key, string $default = ''): string
    {
        $value = $raw[$key] ?? null;
        return is_scalar($value) ? trim((string)$value) : $default;
    }

    /**
     * @param array<int|string, mixed> $raw
     */
    private static function boolValue(array $raw, string $key, bool $default): bool
    {
        $value = $raw[$key] ?? null;
        if ($value === null) {
            return $default;
        }
        if (is_string($value)) {
            return !in_array(strtolower(trim($value)), ['', '0', 'false', 'off', 'no'], true);
        }
        return is_scalar($value) ? (bool)$value : $default;
    }
}
