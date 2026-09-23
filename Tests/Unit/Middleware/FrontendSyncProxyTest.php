<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Middleware;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\NormalizedParams;
use TYPO3\CMS\Core\Http\RequestFactory;
use TYPO3\CMS\Core\Http\Response;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Http\Stream;
use Webconsulting\Agentation\Middleware\FrontendSyncProxy;
use Webconsulting\Agentation\Service\SyncProxy;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

/**
 * The frontend proxy answers its own path only, only a logged-in backend
 * user whose frontend toolbar is on, and only with that user's session token.
 */
final class FrontendSyncProxyTest extends AgentationTestCase
{
    private const array TOOLBAR_ON = ['enabled' => '1'];

    protected bool $backupEnvironment = true;

    /** @var list<array{url: string, method: string, options: array<string, mixed>}> */
    private array $upstreamCalls = [];

    #[Test]
    public function anyOtherPathGoesToTheNextHandler(): void
    {
        $request = $this->frontendRequest('https://site.example/about');
        $next = new Response();
        $handler = $this->createMock(RequestHandlerInterface::class);
        $handler->expects($this->once())->method('handle')->with($request)->willReturn($next);

        self::assertSame($next, $this->middleware()->process($request, $handler));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function aLoggedInUserWithTheToolbarOnIsForwarded(): void
    {
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);
        $request = $this->proxyRequest(['path' => '/sessions/s1/annotations', 'token' => $this->validToken()], 'POST', '{"comment":"Too small"}');

        $response = $this->middleware(['apiKey' => 'k3y'])->process($request, $this->unusedHandler());

        self::assertSame(201, $response->getStatusCode());
        self::assertSame('{"id":"a1"}', (string)$response->getBody());
        self::assertSame('no-store', $response->getHeaderLine('Cache-Control'));
        self::assertSame('noindex', $response->getHeaderLine('X-Robots-Tag'));
        self::assertCount(1, $this->upstreamCalls);
        self::assertSame('POST', $this->upstreamCalls[0]['method']);
        self::assertSame('https://agentation-mcp-cloud.vercel.app/api/sessions/s1/annotations', $this->upstreamCalls[0]['url']);
        self::assertSame('k3y', $this->upstreamCalls[0]['options']['headers']['x-api-key'] ?? null);
    }

    #[Test]
    public function withoutABackendUserNothingIsForwarded(): void
    {
        $response = $this->middleware()->process($this->proxyRequest(['path' => '/sessions', 'token' => 'x']), $this->unusedHandler());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame(['error' => 'notAllowed'], self::json($response));
        self::assertSame([], $this->upstreamCalls);
    }

    /**
     * @return iterable<string, array{array<string, mixed>, array<string, int>, array<string, string>, string}>
     */
    public static function refusals(): iterable
    {
        yield 'frontend toolbar switched off globally' => [['frontendEnabled' => '0'], ['agentation_frontend_enabled' => 1], self::TOOLBAR_ON, 'notAllowed'];
        yield 'application context not allowed' => [['contextGate' => 'Development'], ['agentation_frontend_enabled' => 1], self::TOOLBAR_ON, 'notAllowed'];
        yield 'user setting off' => [[], ['agentation_frontend_enabled' => 0], self::TOOLBAR_ON, 'toolbarDisabled'];
        yield 'admin panel toggle off' => [[], ['agentation_frontend_enabled' => 1], ['enabled' => '0'], 'toolbarDisabled'];
    }

    /**
     * @param array<string, mixed> $configuration
     * @param array<string, int> $userSettings
     * @param array<string, string> $adminPanel
     */
    #[Test]
    #[DataProvider('refusals')]
    public function onlyUsersWhoSeeTheToolbarMayUseTheProxy(array $configuration, array $userSettings, array $adminPanel, string $error): void
    {
        self::switchApplicationContext('Production');
        $this->loginBackendUser($userSettings);
        $request = $this->proxyRequest(['path' => '/sessions', 'token' => $this->validToken()]);

        $response = $this->middleware($configuration + ['contextGate' => 'All contexts'], $adminPanel)->process($request, $this->unusedHandler());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame(['error' => $error], self::json($response));
        self::assertSame([], $this->upstreamCalls);
    }

    /**
     * @return iterable<string, array{array<string, string>}>
     */
    public static function badTokens(): iterable
    {
        yield 'no token' => [['path' => '/sessions']];
        yield 'empty token' => [['path' => '/sessions', 'token' => '']];
        yield 'another session\'s token' => [['path' => '/sessions', 'token' => 'another']];
    }

    /**
     * @param array<string, string> $query
     */
    #[Test]
    #[DataProvider('badTokens')]
    public function aCallWithoutTheSessionTokenIsRefused(array $query): void
    {
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);
        if (($query['token'] ?? '') === 'another') {
            $query['token'] = $this->proxyToken()->for($this->backendUser(sessionId: 'someone-else'));
        }

        $response = $this->middleware()->process($this->proxyRequest($query), $this->unusedHandler());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame(['error' => 'invalidToken'], self::json($response));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function theTokenDoesNotOpenOtherHosts(): void
    {
        $this->loginBackendUser(['agentation_frontend_enabled' => 1]);

        $response = $this->middleware()->process(
            $this->proxyRequest(['path' => '//evil.example/steal', 'token' => $this->validToken()]),
            $this->unusedHandler(),
        );

        self::assertSame(400, $response->getStatusCode());
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function thePathFollowsTheSitePathOfTheInstallation(): void
    {
        $request = new ServerRequest('https://site.example/cms/_agentation/api/proxy');
        $root = new ServerRequest('https://site.example/_agentation/api/proxy');

        self::assertSame('/cms/_agentation/api/proxy', FrontendSyncProxy::path($request->withAttribute('normalizedParams', $this->normalizedParams('/cms/'))));
        self::assertSame('/_agentation/api/proxy', FrontendSyncProxy::path($root->withAttribute('normalizedParams', $this->normalizedParams('/'))));
        self::assertSame('/_agentation/api/proxy', FrontendSyncProxy::path($root), 'without normalized params, the root');
    }

    /**
     * @param array<string, mixed> $configuration
     * @param array<string, string> $adminPanel
     */
    private function middleware(array $configuration = [], array $adminPanel = self::TOOLBAR_ON): FrontendSyncProxy
    {
        $configuration += ['contextGate' => 'All contexts'];
        $requestFactory = self::createStub(RequestFactory::class);
        $requestFactory->method('request')->willReturnCallback(function (string $url, string $method, array $options): ResponseInterface {
            $this->upstreamCalls[] = ['url' => $url, 'method' => $method, 'options' => $options];
            return new JsonResponse(['id' => 'a1'], 201);
        });

        return new FrontendSyncProxy(
            $this->extensionSettings($configuration),
            $this->toolbarSettings($configuration, $adminPanel),
            $this->toolbarGate($configuration, $adminPanel),
            $this->proxyToken(),
            new SyncProxy($this->extensionSettings($configuration), $requestFactory),
        );
    }

    private function validToken(): string
    {
        $user = $GLOBALS['BE_USER'] ?? null;
        self::assertNotNull($user);
        return $this->proxyToken()->for($user);
    }

    /**
     * @param array<string, string> $query
     */
    private function proxyRequest(array $query, string $method = 'GET', string $body = ''): ServerRequestInterface
    {
        $request = $this->frontendRequest('https://site.example/_agentation/api/proxy?' . http_build_query($query))
            ->withMethod($method)
            ->withQueryParams($query);
        if ($body !== '') {
            $stream = new Stream('php://temp', 'rw');
            $stream->write($body);
            $request = $request->withBody($stream)->withHeader('Content-Type', 'application/json');
        }
        return $request;
    }

    private function unusedHandler(): RequestHandlerInterface
    {
        $handler = $this->createMock(RequestHandlerInterface::class);
        $handler->expects($this->never())->method('handle');
        return $handler;
    }

    private function normalizedParams(string $sitePath): NormalizedParams
    {
        $params = self::createStub(NormalizedParams::class);
        $params->method('getSitePath')->willReturn($sitePath);
        return $params;
    }

    /**
     * @return array<int|string, mixed>
     */
    private static function json(ResponseInterface $response): array
    {
        $decoded = json_decode((string)$response->getBody(), true, 16, JSON_THROW_ON_ERROR);
        self::assertIsArray($decoded);
        return $decoded;
    }
}
