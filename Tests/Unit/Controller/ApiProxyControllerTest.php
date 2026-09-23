<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Controller;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\RequestFactory;
use TYPO3\CMS\Core\Http\Response;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\CMS\Core\Http\Stream;
use Webconsulting\Agentation\Controller\Backend\ApiProxyController;
use Webconsulting\Agentation\Service\SyncProxy;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class ApiProxyControllerTest extends AgentationTestCase
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

    #[\Override]
    protected function tearDown(): void
    {
        unset($GLOBALS['BE_USER']);
        parent::tearDown();
    }

    #[Test]
    public function managementRoutesAreForAdministratorsOnly(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1], admin: false);
        $controller = $this->controller();

        $request = new ServerRequest();
        $responses = [
            'list' => $controller->listAction($request),
            'delete' => $controller->deleteAction($request),
            'deleteAll' => $controller->deleteAllAction($request),
        ];
        foreach ($responses as $action => $response) {
            self::assertSame(403, $response->getStatusCode(), $action);
            self::assertSame(['error' => 'adminOnly'], self::json($response), $action);
        }
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function listForwardsThePendingAnnotationsWithTheApiKey(): void
    {
        $this->loginAdmin();
        $this->upstream = static fn(): ResponseInterface => new JsonResponse(['annotations' => [['id' => 'a1']]]);

        $response = $this->controller(['apiKey' => 'k3y'])->listAction(new ServerRequest());

        self::assertSame(200, $response->getStatusCode());
        self::assertSame(['annotations' => [['id' => 'a1']]], self::json($response));
        self::assertCount(1, $this->upstreamCalls);
        self::assertSame('https://agentation-mcp-cloud.vercel.app/api/pending', $this->upstreamCalls[0]['url']);
        self::assertSame('GET', $this->upstreamCalls[0]['method']);
        self::assertSame(['Accept' => 'application/json', 'x-api-key' => 'k3y'], $this->upstreamCalls[0]['options']['headers']);
        self::assertFalse($this->upstreamCalls[0]['options']['http_errors']);
    }

    #[Test]
    public function transportFailureIsReportedWithTheEndpointsTried(): void
    {
        $this->loginAdmin();
        $this->upstream = static fn(): ResponseInterface => throw new \RuntimeException('connection refused');

        $response = $this->controller(['syncEndpoint' => 'http://localhost:4747'])->listAction(new ServerRequest());

        self::assertSame(502, $response->getStatusCode());
        $body = self::json($response);
        self::assertSame('syncUnreachable', $body['error']);
        self::assertSame('http://localhost:4747', $body['endpoint']);
        self::assertContains('http://localhost:4747', $body['tried']);
    }

    #[Test]
    public function deleteRequiresAnAnnotationId(): void
    {
        $this->loginAdmin();

        $response = $this->controller()->deleteAction(new ServerRequest());

        self::assertSame(400, $response->getStatusCode());
        self::assertSame(['error' => 'missingAnnotationId'], self::json($response));
        self::assertSame([], $this->upstreamCalls);
    }

    #[Test]
    public function deleteForwardsTheIdFromTheJsonBody(): void
    {
        $this->loginAdmin();
        $this->upstream = static fn(): ResponseInterface => new Response('php://temp', 204);
        $request = new ServerRequest('https://typo3.test/typo3/ajax/agentation/api/delete', 'POST', self::body('{"id": "a b/1"}'));

        $response = $this->controller()->deleteAction($request);

        self::assertSame(204, $response->getStatusCode());
        self::assertSame('DELETE', $this->upstreamCalls[0]['method']);
        self::assertSame('http://localhost:4747/annotations/a%20b%2F1', $this->upstreamCalls[0]['url']);
    }

    #[Test]
    public function deleteAllReportsDeletedAndFailedIds(): void
    {
        $this->loginAdmin();
        $this->upstream = static function (string $url, string $method): ResponseInterface {
            if ($method === 'GET') {
                return new JsonResponse([['id' => 'ok-1'], ['id' => 'gone'], ['comment' => 'no id'], ['id' => 'ok-2']]);
            }
            return new Response('php://temp', str_contains($url, 'gone') ? 404 : 200);
        };

        $response = $this->controller()->deleteAllAction(new ServerRequest());

        self::assertSame(
            ['deleted' => 2, 'failed' => 1, 'failures' => ['gone'], 'total' => 3],
            self::json($response)
        );
        self::assertSame(
            ['GET /pending', 'DELETE /annotations/ok-1', 'DELETE /annotations/gone', 'DELETE /annotations/ok-2'],
            array_map(static fn(array $call): string => $call['method'] . ' ' . substr($call['url'], strlen('http://localhost:4747')), $this->upstreamCalls)
        );
    }

    #[Test]
    public function widgetProxyIsDeniedWhenTheUserDisabledTheBackendToolbar(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 0]);

        $response = $this->controller()->proxyAction((new ServerRequest())->withQueryParams(['path' => '/sessions']));

        self::assertSame(403, $response->getStatusCode());
        self::assertSame(['error' => 'toolbarDisabled'], self::json($response));
    }

    /**
     * @return iterable<string, array{array<string, string>}>
     */
    public static function invalidPaths(): iterable
    {
        yield 'missing' => [[]];
        yield 'empty' => [['path' => '']];
        yield 'relative' => [['path' => 'sessions']];
        yield 'absolute url' => [['path' => 'https://evil.example/']];
    }

    /**
     * @param array<string, string> $query
     */
    #[Test]
    #[DataProvider('invalidPaths')]
    public function widgetProxyRejectsPathsThatAreNotApiPaths(array $query): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1]);

        $response = $this->controller()->proxyAction((new ServerRequest())->withQueryParams($query));

        self::assertSame(400, $response->getStatusCode());
        self::assertSame(['error' => 'invalidPath'], self::json($response));
    }

    #[Test]
    public function widgetProxyMirrorsMethodBodyAndContentType(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1]);
        $this->upstream = static function (): ResponseInterface {
            $response = new Response('php://temp', 201, ['Content-Type' => 'text/plain; charset=utf-8']);
            $response->getBody()->write('created');
            return $response;
        };
        $request = (new ServerRequest('https://typo3.test/typo3/ajax/agentation/api/proxy', 'patch', self::body('{"status":"resolved"}'), ['Content-Type' => 'application/json']))
            ->withQueryParams(['path' => '/sessions/s1/annotations']);

        $response = $this->controller(['apiKey' => 'k3y'])->proxyAction($request);

        self::assertSame(201, $response->getStatusCode());
        self::assertSame('text/plain; charset=utf-8', $response->getHeaderLine('Content-Type'));
        self::assertSame('created', (string)$response->getBody());
        $call = $this->upstreamCalls[0];
        self::assertSame('PATCH', $call['method']);
        self::assertSame('https://agentation-mcp-cloud.vercel.app/api/sessions/s1/annotations', $call['url']);
        self::assertSame('{"status":"resolved"}', $call['options']['body']);
        self::assertSame(
            ['Content-Type' => 'application/json', 'Accept' => 'application/json', 'x-api-key' => 'k3y'],
            $call['options']['headers']
        );
    }

    #[Test]
    public function widgetProxyOmitsAnEmptyBody(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1]);

        $this->controller()->proxyAction((new ServerRequest())->withQueryParams(['path' => '/health']));

        self::assertNull($this->upstreamCalls[0]['options']['body']);
        self::assertArrayNotHasKey('Content-Type', $this->upstreamCalls[0]['options']['headers']);
    }

    #[Test]
    public function aMissingBackendUserIsAProgrammingError(): void
    {
        unset($GLOBALS['BE_USER']);

        $this->expectException(\RuntimeException::class);
        $this->controller()->listAction(new ServerRequest());
    }

    /**
     * @param array<string, mixed> $configuration
     */
    private function controller(array $configuration = []): ApiProxyController
    {
        $requestFactory = self::createStub(RequestFactory::class);
        $requestFactory->method('request')->willReturnCallback(function (string $url, string $method, array $options): ResponseInterface {
            $this->upstreamCalls[] = ['url' => $url, 'method' => $method, 'options' => $options];
            return ($this->upstream)($url, $method);
        });
        return new ApiProxyController($this->toolbarSettings($configuration), new SyncProxy($this->extensionSettings($configuration), $requestFactory));
    }

    private function loginAdmin(): void
    {
        $GLOBALS['BE_USER'] = $this->backendUser(['agentation_backend_enabled' => 1], admin: true);
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
