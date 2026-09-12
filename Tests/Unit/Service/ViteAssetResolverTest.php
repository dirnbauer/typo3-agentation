<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Package\PackageInterface;
use TYPO3\CMS\Core\Package\PackageManager;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\StringUtility;
use TYPO3\TestingFramework\Core\Unit\UnitTestCase;
use Webconsulting\Agentation\Service\ViteAssetResolver;

final class ViteAssetResolverTest extends UnitTestCase
{
    private const string MANIFEST = '{"Build/Sources/agentation.js":{"file":"assets/agentation-abc123.js","css":["assets/agentation-abc123.css"],"isEntry":true}}';

    private string $packagePath;

    protected function setUp(): void
    {
        parent::setUp();
        $this->packagePath = Environment::getPublicPath() . '/typo3temp/var/tests/agentation-' . StringUtility::getUniqueId() . '/';
        GeneralUtility::mkdir_deep($this->packagePath . 'Resources/Public/Vite');
        $this->testFilesToDelete[] = $this->packagePath;
    }

    #[Test]
    public function withoutManifestThereIsNoBuild(): void
    {
        $resolver = $this->resolver();

        self::assertFalse($resolver->hasBuild());
        self::assertNull($resolver->getEntryUrl());
        self::assertSame([], $resolver->getEntryCssUrls());
    }

    #[Test]
    public function entryAndCssUrlsAreResolvedFromTheManifest(): void
    {
        $this->writeManifest(self::MANIFEST);
        $resolver = $this->resolver();

        self::assertTrue($resolver->hasBuild());
        $entryUrl = $resolver->getEntryUrl();
        self::assertIsString($entryUrl);
        self::assertStringEndsWith('/Resources/Public/Vite/assets/agentation-abc123.js', $entryUrl);
        self::assertFalse(str_starts_with($entryUrl, Environment::getPublicPath()), 'URL must be a web path, not a filesystem path');

        $cssUrls = $resolver->getEntryCssUrls();
        self::assertCount(1, $cssUrls);
        self::assertStringEndsWith('/Resources/Public/Vite/assets/agentation-abc123.css', $cssUrls[0]);
    }

    #[Test]
    public function invalidManifestJsonMeansNoBuild(): void
    {
        $this->writeManifest('{"Build/Sources/agentation.js": ');
        $resolver = $this->resolver();

        self::assertFalse($resolver->hasBuild());
        self::assertNull($resolver->getEntryUrl());
    }

    #[Test]
    public function manifestWithoutTheEntrypointYieldsNoUrls(): void
    {
        $this->writeManifest('{"Build/Sources/other.js":{"file":"assets/other.js"}}');
        $resolver = $this->resolver();

        self::assertTrue($resolver->hasBuild());
        self::assertNull($resolver->getEntryUrl());
        self::assertSame([], $resolver->getEntryCssUrls());
    }

    #[Test]
    public function entryWithoutCssListYieldsNoCssUrls(): void
    {
        $this->writeManifest('{"Build/Sources/agentation.js":{"file":"assets/agentation-abc123.js"}}');
        $resolver = $this->resolver();

        self::assertStringEndsWith('agentation-abc123.js', (string)$resolver->getEntryUrl());
        self::assertSame([], $resolver->getEntryCssUrls());
    }

    #[Test]
    public function manifestIsReadOnlyOnce(): void
    {
        $this->writeManifest(self::MANIFEST);
        $resolver = $this->resolver();
        $first = $resolver->getEntryUrl();

        unlink($this->packagePath . 'Resources/Public/Vite/manifest.json');

        self::assertSame($first, $resolver->getEntryUrl());
        self::assertTrue($resolver->hasBuild());
    }

    private function resolver(): ViteAssetResolver
    {
        $package = $this->createMock(PackageInterface::class);
        $package->method('getPackagePath')->willReturn($this->packagePath);
        $packageManager = $this->createMock(PackageManager::class);
        $packageManager->method('getPackage')->with('agentation')->willReturn($package);
        return new ViteAssetResolver($packageManager);
    }

    private function writeManifest(string $json): void
    {
        file_put_contents($this->packagePath . 'Resources/Public/Vite/manifest.json', $json);
    }
}
