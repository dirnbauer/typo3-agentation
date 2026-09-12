<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Core\Package\PackageManager;
use TYPO3\CMS\Core\Utility\PathUtility;

/**
 * Resolves the built toolbar entrypoint from the Vite manifest.
 *
 * Self-contained: no third-party TYPO3-Vite integration is required. When
 * the manifest is missing (extension installed without a build) callers
 * get null / an empty list and can surface that to admins.
 */
final class ViteAssetResolver
{
    private const string EXTENSION_KEY = 'agentation';
    private const string PUBLIC_DIRECTORY = 'Resources/Public/Vite/';
    private const string ENTRY = 'Build/Sources/agentation.js';

    /** @var array<mixed>|null */
    private ?array $manifest = null;
    private bool $manifestLoaded = false;
    private ?string $publicBaseUrl = null;

    public function __construct(
        private readonly PackageManager $packageManager,
    ) {}

    public function hasBuild(): bool
    {
        return $this->loadManifest() !== null;
    }

    public function getEntryUrl(): ?string
    {
        $entry = $this->entry();
        $file = $entry['file'] ?? null;
        return is_string($file) && $file !== '' ? $this->publicUrl($file) : null;
    }

    /** @return list<string> */
    public function getEntryCssUrls(): array
    {
        $entry = $this->entry();
        $cssFiles = $entry['css'] ?? null;
        if (!is_array($cssFiles)) {
            return [];
        }
        $urls = [];
        foreach ($cssFiles as $cssFile) {
            if (is_string($cssFile) && $cssFile !== '') {
                $urls[] = $this->publicUrl($cssFile);
            }
        }
        return $urls;
    }

    /** @return array<mixed>|null */
    private function entry(): ?array
    {
        $entry = $this->loadManifest()[self::ENTRY] ?? null;
        return is_array($entry) ? $entry : null;
    }

    /** @return array<mixed>|null */
    private function loadManifest(): ?array
    {
        if ($this->manifestLoaded) {
            return $this->manifest;
        }
        $this->manifestLoaded = true;

        $path = $this->publicDirectory() . 'manifest.json';
        if (!is_file($path)) {
            return null;
        }
        $content = file_get_contents($path);
        if ($content === false) {
            return null;
        }
        try {
            $decoded = json_decode($content, true, 32, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return null;
        }
        if (is_array($decoded)) {
            $this->manifest = $decoded;
        }
        return $this->manifest;
    }

    private function publicDirectory(): string
    {
        return $this->packageManager->getPackage(self::EXTENSION_KEY)->getPackagePath() . self::PUBLIC_DIRECTORY;
    }

    private function publicUrl(string $relative): string
    {
        $this->publicBaseUrl ??= PathUtility::getAbsoluteWebPath($this->publicDirectory());
        return $this->publicBaseUrl . ltrim($relative, '/');
    }
}
