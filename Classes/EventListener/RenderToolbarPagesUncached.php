<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Frontend\Cache\CacheInstruction;
use TYPO3\CMS\Frontend\Event\ShouldUseCachedPageDataIfAvailableEvent;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Service\ToolbarGate;

/**
 * Renders a frontend page freshly, and keeps it out of the page cache,
 * whenever the toolbar belongs on it.
 *
 * The toolbar assets are added while the page renders. A page answered
 * from the cache would come without them, and a page stored after
 * rendering with them would hand the toolbar — and the name of the backend
 * user it was rendered for — to every later visitor.
 */
final readonly class RenderToolbarPagesUncached
{
    public function __construct(
        private ToolbarGate $gate,
    ) {}

    #[AsEventListener('agentation/render-toolbar-pages-uncached')]
    public function __invoke(ShouldUseCachedPageDataIfAvailableEvent $event): void
    {
        $request = $event->getRequest();
        if ($this->gate->scopeFor($request) !== InjectionScope::Frontend) {
            return;
        }

        $event->setShouldUseCachedPageData(false);
        $cacheInstruction = $request->getAttribute('frontend.cache.instruction');
        if ($cacheInstruction instanceof CacheInstruction) {
            $cacheInstruction->disableCache('EXT:agentation: the toolbar is rendered for the logged-in backend user.');
        }
    }
}
