<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\Service;

use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\SingletonInterface;

/**
 * Reads extension configuration from ext_conf_template.txt and evaluates
 * the application-context gate. All callers go through here so the rules
 * are enforced in one place.
 */
final class ConfigurationService implements SingletonInterface
{
    private const DEFAULTS = [
        'apiKey' => '',
        'workspaceId' => '',
        'frontendEnabled' => true,
        'backendEnabled' => true,
        'contextGate' => 'Development',
        'defaultOptIn' => false,
        'toolbarPosition' => 'bottom-right',
        'webhookUrl' => '',
        'additionalOptions' => '',
    ];

    /** @var array<string, mixed> */
    private array $config;

    public function __construct(ExtensionConfiguration $extensionConfiguration)
    {
        $raw = [];
        try {
            $loaded = $extensionConfiguration->get('agentation');
            if (is_array($loaded)) {
                $raw = $loaded;
            }
        } catch (\Throwable) {
            // Extension not yet configured — fall back to defaults.
        }
        $this->config = array_merge(self::DEFAULTS, $this->normalize($raw));
    }

    public function getApiKey(): string
    {
        return (string)$this->config['apiKey'];
    }

    public function getWorkspaceId(): string
    {
        return (string)$this->config['workspaceId'];
    }

    public function isFrontendEnabled(): bool
    {
        return (bool)$this->config['frontendEnabled'];
    }

    public function isBackendEnabled(): bool
    {
        return (bool)$this->config['backendEnabled'];
    }

    public function isDefaultOptIn(): bool
    {
        return (bool)$this->config['defaultOptIn'];
    }

    public function getToolbarPosition(): string
    {
        $position = (string)$this->config['toolbarPosition'];
        return in_array($position, ['bottom-right', 'bottom-left', 'top-right', 'top-left'], true)
            ? $position
            : 'bottom-right';
    }

    public function getWebhookUrl(): string
    {
        return (string)$this->config['webhookUrl'];
    }

    /** @return array<string, mixed> */
    public function getAdditionalOptions(): array
    {
        $raw = trim((string)$this->config['additionalOptions']);
        if ($raw === '') {
            return [];
        }
        try {
            $decoded = json_decode($raw, true, 16, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return is_array($decoded) ? $decoded : [];
    }

    public function isContextAllowed(): bool
    {
        $gate = (string)$this->config['contextGate'];
        $appContext = (string)Environment::getContext();

        return match ($gate) {
            'All contexts' => true,
            'Development and Testing' => str_starts_with($appContext, 'Development')
                || str_starts_with($appContext, 'Testing'),
            default => str_starts_with($appContext, 'Development'),
        };
    }

    /**
     * @return array{
     *   apiKey: string, workspaceId: string, frontendEnabled: bool,
     *   backendEnabled: bool, defaultOptIn: bool, toolbarPosition: string,
     *   webhookUrl: string, additionalOptions: array<string, mixed>,
     *   contextAllowed: bool
     * }
     */
    public function toArray(): array
    {
        return [
            'apiKey' => $this->getApiKey(),
            'workspaceId' => $this->getWorkspaceId(),
            'frontendEnabled' => $this->isFrontendEnabled(),
            'backendEnabled' => $this->isBackendEnabled(),
            'defaultOptIn' => $this->isDefaultOptIn(),
            'toolbarPosition' => $this->getToolbarPosition(),
            'webhookUrl' => $this->getWebhookUrl(),
            'additionalOptions' => $this->getAdditionalOptions(),
            'contextAllowed' => $this->isContextAllowed(),
        ];
    }

    /**
     * @param array<int|string, mixed> $raw
     * @return array<string, mixed>
     */
    private function normalize(array $raw): array
    {
        $out = [];
        foreach ($raw as $key => $value) {
            if (!is_string($key)) {
                continue;
            }
            $out[$key] = match ($key) {
                'frontendEnabled', 'backendEnabled', 'defaultOptIn' => (bool)$value,
                default => $value,
            };
        }
        return $out;
    }
}
