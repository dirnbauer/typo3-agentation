<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\Service;

use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\SingletonInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

/**
 * Resolves the built agentation entrypoint from the Vite manifest.
 *
 * Self-contained: no third-party TYPO3-Vite integration is required.
 * If the manifest is missing (e.g. extension installed without build),
 * callers get null and can surface that to admins.
 */
final class ViteAssetResolver implements SingletonInterface
{
    private const MANIFEST_PATH = 'EXT:agentation/Resources/Public/Vite/manifest.json';
    private const ENTRY = 'Build/Sources/agentation.js';

    private ?string $publicBase = null;

    public function hasBuild(): bool
    {
        return $this->resolveManifest() !== null;
    }

    public function getEntryUrl(): ?string
    {
        $manifest = $this->resolveManifest();
        if ($manifest === null) {
            return null;
        }
        $entry = $manifest[self::ENTRY] ?? null;
        if (!is_array($entry) || !is_string($entry['file'] ?? null)) {
            return null;
        }
        return $this->publicUrl($entry['file']);
    }

    /** @return list<string> */
    public function getEntryCssUrls(): array
    {
        $manifest = $this->resolveManifest();
        if ($manifest === null) {
            return [];
        }
        $entry = $manifest[self::ENTRY] ?? null;
        if (!is_array($entry) || !is_array($entry['css'] ?? null)) {
            return [];
        }
        $urls = [];
        foreach ($entry['css'] as $cssFile) {
            if (is_string($cssFile)) {
                $urls[] = $this->publicUrl($cssFile);
            }
        }
        return $urls;
    }

    /** @return array<string, mixed>|null */
    private function resolveManifest(): ?array
    {
        $path = GeneralUtility::getFileAbsFileName(self::MANIFEST_PATH);
        if ($path === '' || !is_file($path)) {
            return null;
        }
        try {
            $data = json_decode((string)file_get_contents($path), true, 32, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return null;
        }
        return is_array($data) ? $data : null;
    }

    private function publicUrl(string $relative): string
    {
        $base = $this->publicBase ??= PathUtility::getAbsoluteWebPath(
            (string)GeneralUtility::getFileAbsFileName('EXT:agentation/Resources/Public/Vite/')
        );
        return $base . ltrim($relative, '/');
    }
}
