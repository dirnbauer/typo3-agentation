<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Release;

use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

/**
 * Guards the committed browser assets: Composer installations get them
 * without a Node toolchain, so the repository must always contain a
 * toolbar build matching what PHP references, and backend module scripts
 * the import map can load as they are.
 */
final class BuildOutputTest extends TestCase
{
    private const string VITE_DIRECTORY = '/Resources/Public/Vite/';
    private const string JAVASCRIPT_DIRECTORY = '/Resources/Public/JavaScript/';

    #[Test]
    public function viteManifestContainsTheToolbarEntrypoint(): void
    {
        $entry = self::manifest()['Build/Sources/agentation.js'] ?? null;

        self::assertIsArray($entry);
        self::assertIsString($entry['file'] ?? null);
        self::assertStringStartsWith('assets/agentation-', $entry['file']);
        self::assertFileExists(self::root() . self::VITE_DIRECTORY . $entry['file']);
    }

    #[Test]
    public function theToolbarIsTheOnlyBuiltEntrypoint(): void
    {
        $entries = array_keys(array_filter(self::manifest(), static fn(array $chunk): bool => ($chunk['isEntry'] ?? false) === true));

        self::assertSame(['Build/Sources/agentation.js'], $entries);
    }

    #[Test]
    public function chunksReferencedByTheToolbarExist(): void
    {
        $manifest = self::manifest();
        foreach ((array)($manifest['Build/Sources/agentation.js']['imports'] ?? []) as $chunk) {
            self::assertIsString($chunk);
            self::assertIsString($manifest[$chunk]['file'] ?? null, $chunk);
            self::assertFileExists(self::root() . self::VITE_DIRECTORY . $manifest[$chunk]['file'], $chunk);
        }
    }

    #[Test]
    public function backendModuleScriptsAreServedByTheImportMap(): void
    {
        $imports = require self::root() . '/Configuration/JavaScriptModules.php';
        self::assertSame('EXT:agentation/Resources/Public/JavaScript/', $imports['imports']['@webconsulting/agentation/'] ?? null);

        foreach (['module.js', 'storage.js'] as $script) {
            self::assertFileExists(self::root() . self::JAVASCRIPT_DIRECTORY . $script);
        }
    }

    #[Test]
    public function theBackendModuleImportsOnlyThroughTheImportMap(): void
    {
        $source = (string)file_get_contents(self::root() . self::JAVASCRIPT_DIRECTORY . 'module.js');
        preg_match_all('/^import .* from \'([^\']+)\';$/m', $source, $matches);

        self::assertNotEmpty($matches[1]);
        foreach ($matches[1] as $specifier) {
            self::assertMatchesRegularExpression('#^(@typo3/|~labels/|@webconsulting/agentation/)#', $specifier);
        }
        self::assertStringNotContainsString('react', strtolower($source), 'The backend module must not pull React in');
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
