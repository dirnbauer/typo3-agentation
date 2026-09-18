<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Release;

use PHPUnit\Framework\TestCase;

final class ManifestTest extends TestCase
{
    public function testViteManifestContainsAgentationEntrypoint(): void
    {
        $root = dirname(__DIR__, 3);
        $manifestPath = $root . '/Resources/Public/Vite/manifest.json';

        self::assertFileExists($manifestPath);

        $manifest = json_decode(
            (string)file_get_contents($manifestPath),
            true,
            32,
            JSON_THROW_ON_ERROR
        );

        self::assertIsArray($manifest);

        $entry = $manifest['Build/Sources/agentation.js'] ?? null;
        self::assertIsArray($entry);
        self::assertIsString($entry['file'] ?? null);
        self::assertFileExists($root . '/Resources/Public/Vite/' . $entry['file']);
    }
}
