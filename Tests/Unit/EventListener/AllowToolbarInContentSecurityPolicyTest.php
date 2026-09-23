<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\EventListener;

use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Directive;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Event\PolicyMutatedEvent;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Policy;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\Scope;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\SourceKeyword;
use TYPO3\CMS\Core\Security\ContentSecurityPolicy\UriValue;
use Webconsulting\Agentation\EventListener\AllowToolbarInContentSecurityPolicy;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class AllowToolbarInContentSecurityPolicyTest extends AgentationTestCase
{
    #[Test]
    public function aBackendFrameWithTheToolbarMayReachTheSyncEndpointAndTheWebhook(): void
    {
        $this->loginBackendUser(['agentation_backend_enabled' => 1]);
        $configuration = ['webhookUrl' => 'https://hooks.example:8443/agentation?x=1'];

        $policy = $this->mutate(Scope::backend(), $this->backendRequest('/typo3/module/web/layout'), $configuration);

        self::assertTrue($policy->containsDirective(
            Directive::ConnectSrc,
            new UriValue('http://localhost:4747'),
            new UriValue('https://hooks.example:8443'),
        ), 'origins only, never paths');
        self::assertFalse($policy->containsDirective(Directive::StyleSrc, SourceKeyword::unsafeInline), 'the backend policy already allows the toolbar styles');
    }

    #[Test]
    public function aFrontendPageWithTheToolbarAlsoAllowsItsInlineStyles(): void
    {
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        $policy = $this->mutate(Scope::frontend(), $this->frontendRequest('https://example.test/'), [], ['enabled' => '1']);

        self::assertTrue($policy->containsDirective(Directive::StyleSrc, SourceKeyword::unsafeInline));
        self::assertTrue($policy->containsDirective(Directive::ConnectSrc, new UriValue('http://localhost:4747')));
    }

    #[Test]
    public function responsesWithoutTheToolbarKeepTheirPolicy(): void
    {
        $this->loginBackendUser(['agentation_backend_enabled' => 0]);

        $policy = $this->mutate(Scope::backend(), $this->backendRequest('/typo3/module/web/layout'));

        self::assertTrue($policy->isEmpty());
    }

    /**
     * @param array<string, mixed> $configuration
     * @param array<string, string> $adminPanelOptions
     */
    private function mutate(Scope $scope, ServerRequestInterface $request, array $configuration = [], array $adminPanelOptions = []): Policy
    {
        $event = new PolicyMutatedEvent($scope, $request, new Policy(), new Policy());
        $listener = new AllowToolbarInContentSecurityPolicy(
            $this->toolbarGate($configuration, $adminPanelOptions),
            $this->extensionSettings($configuration + ['contextGate' => 'All contexts']),
        );
        $listener($event);

        return $event->getCurrentPolicy();
    }
}
