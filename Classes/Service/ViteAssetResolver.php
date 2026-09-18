<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Core\Package\PackageManager;
use TYPO3\CMS\Core\Utility\PathUtility;

/**
 * Resolves the built toolbar entrypoint from the Vite manifest in
 * Resources/Public/Vite/. No third-party TYPO3-Vite integration is needed.
 *
 * Without a build (manifest missing, unreadable or lacking the toolbar
 * entry) every URL is null / empty and callers surface that to admins.
 */
final class ViteAssetResolver
{
    private const string EXTENSION_KEY = 'agentation';
    private const string PUBLIC_DIRECTORY = 'Resources/Public/Vite/';
    private const string ENTRY = 'Build/Sources/agentation.js';

    /** @var array<mixed>|null */
    private ?array $entry = null;
    private bool $resolved = false;

    public function __construct(
        private readonly PackageManager $packageManager,
    ) {}

    public function hasBuild(): bool
    {
        return $this->getEntryUrl() !== null;
    }

    public function getEntryUrl(): ?string
    {
        $file = $this->entry()['file'] ?? null;
        return is_string($file) && $file !== '' ? $this->publicUrl($file) : null;
    }

    /** @return list<string> */
    public function getEntryCssUrls(): array
    {
        $urls = [];
        foreach ((array)($this->entry()['css'] ?? []) as $cssFile) {
            if (is_string($cssFile) && $cssFile !== '') {
                $urls[] = $this->publicUrl($cssFile);
            }
        }
        return $urls;
    }

    /** @return array<mixed>|null */
    private function entry(): ?array
    {
        if (!$this->resolved) {
            $this->resolved = true;
            $this->entry = $this->readManifest()[self::ENTRY] ?? null;
        }
        return $this->entry;
    }

    /** @return array<string, array<mixed>> */
    private function readManifest(): array
    {
        $path = $this->publicDirectory() . 'manifest.json';
        $json = is_file($path) ? file_get_contents($path) : false;
        if ($json === false) {
            return [];
        }
        try {
            $manifest = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        $entries = [];
        foreach (is_array($manifest) ? $manifest : [] as $name => $entry) {
            if (is_string($name) && is_array($entry)) {
                $entries[$name] = $entry;
            }
        }
        return $entries;
    }

    private function publicDirectory(): string
    {
        return $this->packageManager->getPackage(self::EXTENSION_KEY)->getPackagePath() . self::PUBLIC_DIRECTORY;
    }

    private function publicUrl(string $relative): string
    {
        return PathUtility::getAbsoluteWebPath($this->publicDirectory()) . ltrim($relative, '/');
    }
}
