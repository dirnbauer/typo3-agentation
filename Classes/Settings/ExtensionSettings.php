<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Settings;

use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationPathDoesNotExistException;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Core\Environment;
use Webconsulting\Agentation\Enum\ContextGate;
use Webconsulting\Agentation\Enum\ToolbarPosition;

/**
 * The extension configuration (ext_conf_template.txt) as typed, normalised
 * values. Resolved once per request; every consumer reads the same
 * defaults, enums and the evaluated application-context gate.
 */
final readonly class ExtensionSettings
{
    private const string CLOUD_ENDPOINT = 'https://agentation-mcp-cloud.vercel.app/api';
    private const string LOCAL_ENDPOINT = 'http://localhost:4747';

    public string $apiKey;
    public string $workspaceId;

    /**
     * Explicit sync endpoint, or auto-selected: the cloud API when an API
     * key is present (HTTPS works from any backend origin), otherwise the
     * local agentation-mcp server (HTTP; the backend proxy route works
     * around the mixed-content block).
     */
    public string $syncEndpoint;
    public bool $frontendEnabled;
    public bool $backendEnabled;
    public ContextGate $contextGate;

    /** Whether the current application context may load the toolbar at all. */
    public bool $contextAllowed;
    public bool $defaultOptIn;
    public ToolbarPosition $toolbarPosition;
    public string $webhookUrl;

    /**
     * Extra props merged into the toolbar's init call. Invalid JSON and
     * non-object payloads are ignored.
     *
     * @var array<string, mixed>
     */
    public array $additionalOptions;

    public function __construct(ExtensionConfiguration $extensionConfiguration)
    {
        $raw = [];
        try {
            $loaded = $extensionConfiguration->get('agentation');
            if (is_array($loaded)) {
                $raw = $loaded;
            }
        } catch (ExtensionConfigurationExtensionNotConfiguredException|ExtensionConfigurationPathDoesNotExistException) {
            // Fresh install without saved configuration: the defaults apply.
        }

        $this->apiKey = self::string($raw, 'apiKey');
        $this->workspaceId = self::string($raw, 'workspaceId');
        $explicitEndpoint = self::string($raw, 'syncEndpoint');
        $this->syncEndpoint = $explicitEndpoint !== ''
            ? $explicitEndpoint
            : ($this->apiKey !== '' ? self::CLOUD_ENDPOINT : self::LOCAL_ENDPOINT);
        $this->frontendEnabled = self::bool($raw, 'frontendEnabled', true);
        $this->backendEnabled = self::bool($raw, 'backendEnabled', true);
        $this->contextGate = ContextGate::fromSetting(self::string($raw, 'contextGate'));
        $this->contextAllowed = $this->contextGate->allows(Environment::getContext());
        $this->defaultOptIn = self::bool($raw, 'defaultOptIn', false);
        $this->toolbarPosition = ToolbarPosition::fromSetting(self::string($raw, 'toolbarPosition'));
        $this->webhookUrl = self::string($raw, 'webhookUrl');
        $this->additionalOptions = self::jsonObject(self::string($raw, 'additionalOptions'));
    }

    /**
     * @param array<int|string, mixed> $raw
     */
    private static function string(array $raw, string $key): string
    {
        $value = $raw[$key] ?? null;
        return is_scalar($value) ? trim((string)$value) : '';
    }

    /**
     * Checkbox semantics: "1", "on", "yes", "true" and truthy scalars are on;
     * "", "0", "off", "no", "false" and falsy scalars are off. A missing
     * value keeps the default.
     *
     * @param array<int|string, mixed> $raw
     */
    private static function bool(array $raw, string $key, bool $default): bool
    {
        $value = $raw[$key] ?? null;
        return is_scalar($value) ? filter_var($value, FILTER_VALIDATE_BOOLEAN) : $default;
    }

    /**
     * @return array<string, mixed>
     */
    private static function jsonObject(string $json): array
    {
        if ($json === '') {
            return [];
        }
        try {
            $decoded = json_decode($json, true, 16, JSON_THROW_ON_ERROR);
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
}
