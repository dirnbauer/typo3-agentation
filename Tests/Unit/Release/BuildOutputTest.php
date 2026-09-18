<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Release;

use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

/**
 * Guards the committed Vite output: Composer installations get the built
 * assets without a Node toolchain, so the repository must always contain
 * a build matching what PHP and the import map reference.
 */
final class BuildOutputTest extends TestCase
{
    private const string VITE_DIRECTORY = '/Resources/Public/Vite/';

    #[Test]
    public function viteManifestContainsTheToolbarEntrypoint(): void
    {
        $manifest = self::manifest();
        $entry = $manifest['Build/Sources/agentation.js'] ?? null;

        self::assertIsArray($entry);
        self::assertIsString($entry['file'] ?? null);
        self::assertStringStartsWith('assets/agentation-', $entry['file']);
        self::assertFileExists(self::root() . self::VITE_DIRECTORY . $entry['file']);
    }

    #[Test]
    public function backendModuleIsBuiltUnderTheStableNameTheImportMapReferences(): void
    {
        $entry = self::manifest()['Build/Sources/module.js'] ?? null;

        self::assertIsArray($entry);
        self::assertSame('module.js', $entry['file'] ?? null);
        self::assertFileExists(self::root() . self::VITE_DIRECTORY . 'module.js');

        $imports = require self::root() . '/Configuration/JavaScriptModules.php';
        self::assertSame('EXT:agentation/Resources/Public/Vite/', $imports['imports']['@webconsulting/agentation/'] ?? null);
    }

    #[Test]
    public function backendModuleKeepsTypo3ModulesExternal(): void
    {
        $source = (string)file_get_contents(self::root() . self::VITE_DIRECTORY . 'module.js');

        self::assertStringContainsString('@typo3/backend/notification.js', $source);
        self::assertStringContainsString('@typo3/core/ajax/ajax-request.js', $source);
        self::assertStringNotContainsString('react', strtolower($source), 'The module bundle must not pull React in');
    }

    #[Test]
    public function chunksReferencedByTheEntrypointsExist(): void
    {
        $manifest = self::manifest();
        foreach (['Build/Sources/agentation.js', 'Build/Sources/module.js'] as $entry) {
            foreach ((array)($manifest[$entry]['imports'] ?? []) as $chunk) {
                self::assertIsString($chunk);
                self::assertIsString($manifest[$chunk]['file'] ?? null, $chunk);
                self::assertFileExists(self::root() . self::VITE_DIRECTORY . $manifest[$chunk]['file'], $chunk);
            }
        }
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private static function manifest(): array
    {
        $path = self::root() . self::VITE_DIRECTORY . 'manifest.json';
        self::assertFileExists($path);
        $manifest = json_decode((string)file_get_contents($path), true, 32, JSON_THROW_ON_ERROR);
        self::assertIsArray($manifest);
        return $manifest;
    }

    private static function root(): string
    {
        return dirname(__DIR__, 3);
    }
}
