<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\EventListener;

use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Frontend\Cache\CacheInstruction;
use TYPO3\CMS\Frontend\Event\ShouldUseCachedPageDataIfAvailableEvent;
use Webconsulting\Agentation\EventListener\RenderToolbarPagesUncached;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class RenderToolbarPagesUncachedTest extends AgentationTestCase
{
    #[Test]
    public function aPageWithTheToolbarIsNeitherReadFromNorWrittenToThePageCache(): void
    {
        $cacheInstruction = new CacheInstruction();
        $event = new ShouldUseCachedPageDataIfAvailableEvent(
            $this->frontendRequest('https://example.test/')->withAttribute('frontend.cache.instruction', $cacheInstruction),
            true,
        );
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        $this->listener(['enabled' => '1'])($event);

        self::assertFalse($event->shouldUseCachedPageData());
        self::assertFalse($cacheInstruction->isCachingAllowed());
    }

    #[Test]
    public function everyOtherPageKeepsThePageCache(): void
    {
        $cacheInstruction = new CacheInstruction();
        $event = new ShouldUseCachedPageDataIfAvailableEvent(
            $this->frontendRequest('https://example.test/')->withAttribute('frontend.cache.instruction', $cacheInstruction),
            true,
        );
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        // The Admin Panel section has the toolbar switched off.
        $this->listener(['enabled' => '0'])($event);

        self::assertTrue($event->shouldUseCachedPageData());
        self::assertTrue($cacheInstruction->isCachingAllowed());
    }

    #[Test]
    public function anonymousVisitorsKeepThePageCache(): void
    {
        $cacheInstruction = new CacheInstruction();
        $event = new ShouldUseCachedPageDataIfAvailableEvent(
            $this->frontendRequest('https://example.test/')->withAttribute('frontend.cache.instruction', $cacheInstruction),
            true,
        );

        $this->listener(['enabled' => '1'])($event);

        self::assertTrue($event->shouldUseCachedPageData());
        self::assertTrue($cacheInstruction->isCachingAllowed());
    }

    /**
     * @param array<string, string> $adminPanelOptions
     */
    private function listener(array $adminPanelOptions): RenderToolbarPagesUncached
    {
        return new RenderToolbarPagesUncached($this->toolbarGate([], $adminPanelOptions));
    }
}
