<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\StreamInterface;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\RequestFactory;
use TYPO3\CMS\Core\Http\Response;
use Webconsulting\Agentation\Settings\ExtensionSettings;

/**
 * Server-side forwarding to the agentation-mcp HTTP API, shared by the
 * backend AJAX proxy and the frontend proxy middleware.
 *
 * Browsers block fetch() from an HTTPS page to http://localhost:4747 as
 * mixed content, so the toolbar sends its calls to TYPO3, which forwards them
 * here. It is not an open proxy: the target is always the configured sync
 * endpoint (plus the container aliases of a localhost endpoint), the caller
 * only chooses the API path below it, and that path must name one of the
 * API's resources. Only the content type travels upstream; the API key is
 * added here and never reaches the browser. Requests and responses are size
 * limited and every call times out after a few seconds.
 */
final readonly class SyncProxy
{
    public const float TIMEOUT_SECONDS = 4.0;
    public const int MAX_REQUEST_BYTES = 1_048_576;
    public const int MAX_RESPONSE_BYTES = 4_194_304;

    /** Methods the toolbar uses: read, create, update, delete. */
    public const array METHODS = ['GET', 'POST', 'PATCH', 'DELETE'];

    /**
     * The resources of the agentation-mcp API (`/health`, `/sessions/…`,
     * `/annotations/…`, `/pending`, `/events`): the first path segment must be
     * one of them. Further segments are plain identifiers, never dot segments.
     */
    private const string PATH_PATTERN = '#^/(health|pending|events|sessions|annotations)(/[A-Za-z0-9_~%-][A-Za-z0-9._~%-]*)*/?(\?[A-Za-z0-9._~%&=+-]*)?$#D';

    public function __construct(
        private ExtensionSettings $settings,
        private RequestFactory $requestFactory,
    ) {}

    /**
     * The generic forward for the toolbar widget. The widget's patched fetch()
     * sends the original API path in the `path` query parameter, so one entry
     * point covers sessions, annotations, pending, events and health. Status,
     * body and content type of the upstream answer are mirrored back.
     */
    public function forwardWidgetCall(ServerRequestInterface $request): ResponseInterface
    {
        $method = strtoupper($request->getMethod());
        if (!in_array($method, self::METHODS, true)) {
            return self::error('methodNotAllowed', 405)->withHeader('Allow', implode(', ', self::METHODS));
        }
        $path = $request->getQueryParams()['path'] ?? '';
        if (!is_string($path) || !self::isApiPath($path)) {
            return self::error('invalidPath', 400);
        }
        $body = self::readLimited($request->getBody(), self::MAX_REQUEST_BYTES);
        if ($body === null) {
            return self::error('requestTooLarge', 413);
        }

        $contentType = $request->getHeaderLine('Content-Type');
        $upstream = $this->forward($method, $path, $contentType !== '' ? ['Content-Type' => $contentType] : [], $body);
        if ($upstream === null) {
            return $this->unreachable();
        }
        $answer = self::bodyOf($upstream);
        if ($answer === null) {
            return self::error('responseTooLarge', 502);
        }

        $response = new Response('php://temp', $upstream->getStatusCode(), ['Cache-Control' => 'no-store']);
        $response->getBody()->write($answer);
        $upstreamType = $upstream->getHeaderLine('Content-Type');
        return $upstreamType !== '' ? $response->withHeader('Content-Type', $upstreamType) : $response;
    }

    /**
     * Sends one request to the first reachable candidate endpoint. Upstream
     * HTTP errors (4xx/5xx) are responses, not failures; only transport
     * failures move on to the next candidate. Null when none answered, or
     * when the path is not an API path.
     *
     * @param array<string, string> $headers
     */
    public function forward(string $method, string $path, array $headers = [], string $body = ''): ?ResponseInterface
    {
        if (!self::isApiPath($path)) {
            return null;
        }
        $headers += ['Accept' => 'application/json'];
        if ($this->settings->apiKey !== '') {
            $headers['x-api-key'] = $this->settings->apiKey;
        }
        foreach ($this->candidateEndpoints() as $base) {
            $url = self::target($base, $path);
            if ($url === null) {
                continue;
            }
            try {
                return $this->requestFactory->request($url, $method, [
                    'headers' => $headers,
                    'body' => $body !== '' ? $body : null,
                    'timeout' => self::TIMEOUT_SECONDS,
                    'connect_timeout' => self::TIMEOUT_SECONDS,
                    'read_timeout' => self::TIMEOUT_SECONDS,
                    'allow_redirects' => false,
                    'http_errors' => false,
                    'stream' => true,
                ]);
            } catch (\Throwable) {
                continue;
            }
        }
        return null;
    }

    /**
     * The 502 answer when no candidate endpoint answered.
     */
    public function unreachable(): JsonResponse
    {
        return new JsonResponse([
            'error' => 'syncUnreachable',
            'endpoint' => $this->settings->syncEndpoint,
            'tried' => $this->candidateEndpoints(),
        ], 502);
    }

    /**
     * @return list<string>
     */
    public function candidateEndpoints(): array
    {
        return self::endpointsToTry($this->settings->syncEndpoint, self::isInsideContainer());
    }

    /**
     * URLs to try for a call, with container-aware fallbacks.
     *
     * Inside DDEV/Docker a configured http://localhost:4747 points at the
     * container's own loopback, not at the host where `agentation-mcp
     * server` listens. Docker exposes the host as host.docker.internal and
     * Podman as host.containers.internal, so both are tried as well.
     *
     * @return list<string>
     */
    public static function endpointsToTry(string $configuredEndpoint, bool $insideContainer): array
    {
        $configured = rtrim($configuredEndpoint, '/');
        if ($configured === '') {
            return [];
        }
        $host = parse_url($configured, PHP_URL_HOST);
        if (!$insideContainer || !in_array($host, ['localhost', '127.0.0.1'], true)) {
            return [$configured];
        }
        $candidates = [$configured];
        foreach (['host.docker.internal', 'host.containers.internal'] as $alias) {
            $candidates[] = preg_replace('#://' . preg_quote($host, '#') . '(?=[:/]|$)#', '://' . $alias, $configured, 1)
                ?? $configured;
        }
        return array_values(array_unique($candidates));
    }

    /**
     * Whether a path names a resource of the agentation-mcp API: no scheme,
     * no host, no dot segments (encoded ones included), no empty segments, no
     * control characters, only URL-safe characters.
     */
    public static function isApiPath(string $path): bool
    {
        return preg_match(self::PATH_PATTERN, $path) === 1
            && preg_match('/%(2e|[01][0-9a-f]|7f)/i', $path) !== 1;
    }

    /**
     * The URL for an API path below an endpoint, or null when the result
     * would leave the endpoint (another scheme, host, port or base path).
     */
    public static function target(string $base, string $path): ?string
    {
        $url = rtrim($base, '/') . $path;
        $baseParts = parse_url(rtrim($base, '/'));
        $urlParts = parse_url($url);
        if (!is_array($baseParts) || !is_array($urlParts)) {
            return null;
        }
        foreach (['scheme', 'host', 'port', 'user', 'pass'] as $part) {
            if (($baseParts[$part] ?? null) !== ($urlParts[$part] ?? null)) {
                return null;
            }
        }
        $basePath = $baseParts['path'] ?? '';
        $path = $urlParts['path'] ?? '';
        return str_starts_with($path, $basePath . '/') && preg_match('#/\.\.?(/|$)#', $path) !== 1 ? $url : null;
    }

    /**
     * The body of an upstream answer, or null when it exceeds the response
     * limit.
     */
    public static function bodyOf(ResponseInterface $response): ?string
    {
        return self::readLimited($response->getBody(), self::MAX_RESPONSE_BYTES);
    }

    private static function isInsideContainer(): bool
    {
        return file_exists('/.dockerenv')
            || getenv('DDEV_HOSTNAME') !== false
            || getenv('DDEV_PROJECT') !== false;
    }

    /**
     * The stream's content, or null when it is longer than the limit.
     */
    private static function readLimited(StreamInterface $stream, int $limit): ?string
    {
        if ($stream->isSeekable()) {
            $stream->rewind();
        }
        $content = '';
        while (!$stream->eof()) {
            $chunk = $stream->read(65536);
            if ($chunk === '') {
                break;
            }
            $content .= $chunk;
            if (strlen($content) > $limit) {
                return null;
            }
        }
        return $content;
    }

    public static function error(string $code, int $status): JsonResponse
    {
        return new JsonResponse(['error' => $code], $status);
    }
}
