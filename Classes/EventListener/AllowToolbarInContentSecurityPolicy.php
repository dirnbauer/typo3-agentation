<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Directive;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Event\PolicyMutatedEvent;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Mutation;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\MutationMode;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\SourceKeyword;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\UriValue;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Service\ToolbarGate;
use Webconsulting\Agentation\Settings\ExtensionSettings;

/**
 * Widens the Content-Security-Policy of exactly the responses that carry
 * the toolbar, never the installation as a whole:
 *
 *   - connect-src: the sync endpoint and the webhook, which the toolbar
 *     calls from the browser
 *   - frontend style-src 'unsafe-inline': the toolbar injects <style>
 *     elements at runtime (the backend policy already allows them for lit)
 */
final readonly class AllowToolbarInContentSecurityPolicy
{
    public function __construct(
        private ToolbarGate $gate,
        private ExtensionSettings $settings,
    ) {}

    #[AsEventListener('agentation/content-security-policy')]
    public function __invoke(PolicyMutatedEvent $event): void
    {
        $scope = $event->request !== null ? $this->gate->scopeFor($event->request) : null;
        if ($scope === null) {
            return;
        }

        $mutations = [];
        $origins = array_values(array_unique(array_filter(
            [self::origin($this->settings->syncEndpoint), self::origin($this->settings->webhookUrl)],
            static fn(?string $origin): bool => $origin !== null,
        )));
        if ($origins !== []) {
            $mutations[] = new Mutation(
                MutationMode::Extend,
                Directive::ConnectSrc,
                ...array_map(static fn(string $origin): UriValue => new UriValue($origin), $origins),
            );
        }
        if ($scope === InjectionScope::Frontend) {
            $mutations[] = new Mutation(MutationMode::Extend, Directive::StyleSrc, SourceKeyword::unsafeInline);
        }
        if ($mutations !== []) {
            $event->setCurrentPolicy($event->getCurrentPolicy()->mutate(...$mutations));
        }
    }

    /**
     * "https://host:8443" for any absolute http(s) URL, null otherwise.
     */
    private static function origin(string $url): ?string
    {
        $parts = parse_url($url);
        if (!is_array($parts)) {
            return null;
        }
        $scheme = strtolower($parts['scheme'] ?? '');
        $host = $parts['host'] ?? '';
        if (!in_array($scheme, ['http', 'https'], true) || $host === '') {
            return null;
        }

        return $scheme . '://' . $host . (isset($parts['port']) ? ':' . $parts['port'] : '');
    }
}
