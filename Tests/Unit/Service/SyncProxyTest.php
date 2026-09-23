<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\RequestFactory;
use TYPO3\CMS\Core\Http\Response;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Http\Stream;
use Webconsulting\Agentation\Service\SyncProxy;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

/**
 * The forwarding both proxies share. It must never become an open proxy:
 * the host is always the configured sync endpoint, the caller chooses only an
 * API path below it, and sizes and time are limited.
 */
final class SyncProxyTest extends AgentationTestCase
{
    /** @var list<array{url: string, method: string, options: array<string, mixed>}> */
    private array $upstreamCalls = [];

    /** @var \Closure(string, string): ResponseInterface */
    private \Closure $upstream;

    #[\Override]
    protected function setUp(): void
    {
        parent::setUp();
        $this->upstream = static fn(string $url, string $method): ResponseInterface => new JsonResponse(['echo' => $method . ' ' . $url]);
    }

    /**
     * @return iterable<string, array{string, bool, list<string>}>
     */
    public static function endpoints(): iterable
    {
        yield 'empty' => ['', false, []];
        yield 'trailing slash is trimmed' => ['https://sync.example/api/', false, ['https://sync.example/api']];
        yield 'localhost outside a container' => ['http://localhost:4747', false, ['http://localhost:4747']];
        yield 'remote host inside a container' => ['https://sync.example/api', true, ['https://sync.example/api']];
        yield 'localhost inside a container' => ['http://localhost:4747', true, [
            'http://localhost:4747',
            'http://host.docker.internal:4747',
            'http://host.containers.internal:4747',
        ]];
        yield 'loopback ip with path inside a container' => ['http://127.0.0.1:4747/api', true, [
            'http://127.0.0.1:4747/api',
            'http://host.docker.internal:4747/api',
            'http://host.containers.internal:4747/api',
        ]];
        yield 'host.docker.internal as configured in DDEV' => ['http://host.docker.internal:4747', true, ['http://host.docker.internal:4747']];
    }

    /**
     * @param list<string> $expected
     */
    #[Test]
    #[DataProvider('endpoints')]
    public function containerAwareEndpointCandidates(string $configured, bool $insideContainer, array $expected): void
    {
        self::assertSame($expected, SyncProxy::endpointsToTry($configured, $insideContainer));
    }

    /**
     * @return iterable<string, array{string}>
     */
    public static function apiPaths(): iterable
    {
        yield 'health' => ['/health'];
        yield 'pending' => ['/pending'];
        yield 'sessions' => ['/sessions'];
        yield 'one session' => ['/sessions/5f0c9a2e-1b7d-4c1e-9a53-2f1f3c7e8d10'];
        yield 'a session\'s annotations' => ['/sessions/s1/annotations'];
        yield 'a session\'s events' => ['/sessions/s1/events'];
        yield 'an encoded annotation id' => ['/annotations/a%20b%2F1'];
        yield 'a query' => ['/sessions?limit=10&status=pending'];
    }

    #[Test]
    #[DataProvider('apiPaths')]
    public function apiPathsAreAccepted(string $path): void
    {
        self::assertTrue(SyncProxy::isApiPath($path));
    }

    /**
     * @return iterable<string, array{string}>
     */
    public static function foreignPaths(): iterable
    {
        yield 'empty' => [''];
        yield 'relative' => ['sessions'];
        yield 'absolute url' => ['https://evil.example/'];
        yield 'protocol-relative url' => ['//evil.example/sessions'];
        yield 'userinfo' => ['@evil.example/sessions'];
        yield 'another resource' => ['/admin'];
        yield 'dot-dot segment' => ['/sessions/../admin'];
        yield 'dot segment' => ['/sessions/./s1'];
        yield 'encoded dot-dot segment' => ['/sessions/%2e%2e/admin'];
        yield 'empty segment' => ['/sessions//s1'];
        yield 'backslash' => ['/sessions\\s1'];
        yield 'fragment' => ['/health#x'];
        yield 'encoded null byte' => ['/annotations/a%00b'];
        yield 'space' => ['/annotations/a b'];
        yield 'newline' => ["/health\n"];
    }

    #[Test]
    #[DataProvider('foreignPaths')]
    public function everythingElseIsRejected(string $path): void
    {
        self::assertFalse(SyncProxy::isApiPath($path));
    }

    #[Test]
    public function aTargetNeverLeavesItsEndpoint(): void
    {
        self::assertSame('http://localhost:4747/sessions', SyncProxy::target('http://localhost:4747', '/sessions'));
        self::assertSame('https://agentation-mcp-cloud.vercel.app/api/pending', SyncProxy::target('https://agentation-mcp-cloud.vercel.app/api/', '/pending'));
        self::assertNull(SyncProxy::target('http://localhost:4747', '@evil.example/sessions'), 'another host through userinfo');
        self::assertNull(SyncProxy::target('http://localhost:4747', ':8080/sessions'), 'another port');
        self::assertNull(SyncProxy::target('https://sync.example/api', '/../admin'), 'out of the base path');
    }

    #[Test]
    public function aWidgetCallIsForwardedToTheConfiguredEndpointOnly(): void
    {
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy', 'POST', self::body('{"url":"https://site.example/"}'), [
            'Content-Type' => 'application/json',
            'Cookie' => 'be_typo_user=secret',
            'Authorization' => 'Bearer visitor',
            'X-Forwarded-For' => '10.0.0.1',
        ]))->withQueryParams(['path' => '/sessions', 'token' => 't']);

        $response = $this->proxy(['syncEndpoint' => 'http://localhost:4747', 'apiKey' => 'k3y'])->forwardWidgetCall($request);

        self::assertSame(200, $response->getStatusCode());
        self::assertSame('no-store', $response->getHeaderLine('Cache-Control'));
        self::assertCount(1, $this->upstreamCalls);
        $call = $this->upstreamCalls[0];
        self::assertSame('http://localhost:4747/sessions', $call['url']);
        self::assertSame('POST', $call['method']);
        self::assertSame('{"url":"https://site.example/"}', $call['options']['body']);
        self::assertSame(
            ['Content-Type' => 'application/json', 'Accept' => 'application/json', 'x-api-key' => 'k3y'],
            $call['options']['headers'],
            'Only the content type travels upstream; the API key is added on the server.',
        );
        self::assertSame(SyncProxy::TIMEOUT_SECONDS, $call['options']['timeout']);
        self::assertSame(SyncProxy::TIMEOUT_SECONDS, $call['options']['connect_timeout']);
        self::assertFalse($call['options']['allow_redirects'], 'A redirect would lead away from the endpoint.');
        self::assertFalse($call['options']['http_errors']);
    }

    #[Test]
    public function aForeignPathNeverReachesUpstream(): void
    {
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy'))->withQueryParams(['path' => '//evil.example/steal']);

        $response = $this->proxy()->forwardWidgetCall($request);

        self::assertSame(400, $response->getStatusCode());
        self::assertSame(['error' => 'invalidPath'], self::json($response));
        self::assertSame([], $this->upstreamCalls);
        self::assertNull($this->proxy()->forward('GET', '/../etc/passwd'));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function otherMethodsAreRefused(): void
    {
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy', 'PUT'))->withQueryParams(['path' => '/sessions']);

        $response = $this->proxy()->forwardWidgetCall($request);

        self::assertSame(405, $response->getStatusCode());
        self::assertSame('GET, POST, PATCH, DELETE', $response->getHeaderLine('Allow'));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function anOversizedRequestBodyIsRefusedBeforeForwarding(): void
    {
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy', 'POST', self::body(str_repeat('x', SyncProxy::MAX_REQUEST_BYTES + 1))))
            ->withQueryParams(['path' => '/sessions']);

        $response = $this->proxy()->forwardWidgetCall($request);

        self::assertSame(413, $response->getStatusCode());
        self::assertSame(['error' => 'requestTooLarge'], self::json($response));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function anOversizedUpstreamAnswerIsNotPassedOn(): void
    {
        $this->upstream = static function (): ResponseInterface {
            $response = new Response('php://temp', 200, ['Content-Type' => 'application/json']);
            $response->getBody()->write(str_repeat('x', SyncProxy::MAX_RESPONSE_BYTES + 1));
            return $response;
        };
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy'))->withQueryParams(['path' => '/pending']);

        $response = $this->proxy()->forwardWidgetCall($request);

        self::assertSame(502, $response->getStatusCode());
        self::assertSame(['error' => 'responseTooLarge'], self::json($response));
    }

    #[Test]
    public function anUnreachableEndpointIsReportedWithWhatWasTried(): void
    {
        $this->upstream = static fn(): ResponseInterface => throw new \RuntimeException('connection refused');
        $request = (new ServerRequest('https://site.example/_agentation/api/proxy'))->withQueryParams(['path' => '/health']);

        $response = $this->proxy(['syncEndpoint' => 'http://host.docker.internal:4747'])->forwardWidgetCall($request);

        self::assertSame(502, $response->getStatusCode());
        self::assertSame(
            ['error' => 'syncUnreachable', 'endpoint' => 'http://host.docker.internal:4747', 'tried' => ['http://host.docker.internal:4747']],
            self::json($response),
        );
    }

    /**
     * @param array<string, mixed> $configuration
     */
    private function proxy(array $configuration = []): SyncProxy
    {
        $requestFactory = self::createStub(RequestFactory::class);
        $requestFactory->method('request')->willReturnCallback(function (string $url, string $method, array $options): ResponseInterface {
            $this->upstreamCalls[] = ['url' => $url, 'method' => $method, 'options' => $options];
            return ($this->upstream)($url, $method);
        });
        return new SyncProxy($this->extensionSettings($configuration), $requestFactory);
    }

    private static function body(string $content): Stream
    {
        $stream = new Stream('php://temp', 'rw');
        $stream->write($content);
        return $stream;
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
