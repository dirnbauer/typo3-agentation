<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\RequestFactory;
use TYPO3\CMS\Core\Http\Response;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Same-origin proxy for the agentation-mcp HTTP API.
 *
 * Browsers block fetch() from an HTTPS backend to http://localhost:4747 as
 * mixed content. The toolbar widget and System > Agentation call these
 * routes instead; PHP forwards to the configured sync endpoint and injects
 * the API key, which therefore never leaves the server.
 *
 * Errors are returned as machine-readable codes (`{"error": "<code>"}`);
 * the module's JavaScript translates them (module.errors.* labels).
 */
#[Autoconfigure(public: true)]
final readonly class ApiProxyController
{
    private const float TIMEOUT_SECONDS = 4.0;
    private const string PENDING_PATH = '/pending';
    private const string ANNOTATION_PATH = '/annotations/';

    public function __construct(
        private ExtensionSettings $settings,
        private ToolbarSettings $toolbar,
        private RequestFactory $requestFactory,
    ) {}

    /**
     * System > Agentation: pending annotations stored on the sync server.
     */
    public function listAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->backendUser()->isAdmin()) {
            return self::error('adminOnly', 403);
        }
        $upstream = $this->forward('GET', self::PENDING_PATH);
        return $upstream === null
            ? $this->unreachable()
            : new JsonResponse(self::decodeJson((string)$upstream->getBody()), $upstream->getStatusCode());
    }

    /**
     * System > Agentation: delete one annotation by id (JSON body `{"id": "..."}`).
     */
    public function deleteAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->backendUser()->isAdmin()) {
            return self::error('adminOnly', 403);
        }
        $id = self::requestedAnnotationId($request);
        if ($id === '') {
            return self::error('missingAnnotationId', 400);
        }
        $upstream = $this->forward('DELETE', self::ANNOTATION_PATH . rawurlencode($id));
        if ($upstream === null) {
            return $this->unreachable();
        }
        $status = $upstream->getStatusCode();
        return new JsonResponse(['ok' => $status < 400, 'status' => $status], $status);
    }

    /**
     * System > Agentation: delete every pending annotation on the sync server.
     */
    public function deleteAllAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->backendUser()->isAdmin()) {
            return self::error('adminOnly', 403);
        }
        $pending = $this->forward('GET', self::PENDING_PATH);
        if ($pending === null) {
            return $this->unreachable();
        }

        $deleted = [];
        $failed = [];
        foreach (self::annotationIds(self::decodeJson((string)$pending->getBody())) as $id) {
            $upstream = $this->forward('DELETE', self::ANNOTATION_PATH . rawurlencode($id));
            if ($upstream !== null && $upstream->getStatusCode() < 400) {
                $deleted[] = $id;
            } else {
                $failed[] = $id;
            }
        }

        return new JsonResponse([
            'deleted' => count($deleted),
            'failed' => count($failed),
            'failures' => $failed,
            'total' => count($deleted) + count($failed),
        ]);
    }

    /**
     * Generic forward for the toolbar widget (GET/POST/PATCH/DELETE).
     *
     * The widget's patched fetch() sends the original API path in the `path`
     * query parameter, so one route covers sessions, annotations, pending,
     * events and health. Method, content type and body are forwarded; the
     * upstream status, body and content type are mirrored back.
     */
    public function proxyAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->toolbar->isBackendToolbarEnabled($this->backendUser())) {
            return self::error('toolbarDisabled', 403);
        }
        $path = $request->getQueryParams()['path'] ?? '';
        if (!is_string($path) || !str_starts_with($path, '/')) {
            return self::error('invalidPath', 400);
        }

        $contentType = $request->getHeaderLine('Content-Type');
        $upstream = $this->forward(
            strtoupper($request->getMethod()),
            $path,
            $contentType !== '' ? ['Content-Type' => $contentType] : [],
            (string)$request->getBody(),
        );
        if ($upstream === null) {
            return $this->unreachable();
        }

        $response = new Response($upstream->getBody(), $upstream->getStatusCode());
        $upstreamType = $upstream->getHeaderLine('Content-Type');
        return $upstreamType !== '' ? $response->withHeader('Content-Type', $upstreamType) : $response;
    }

    /**
     * Sends one request to the first reachable candidate endpoint. Upstream
     * HTTP errors (4xx/5xx) are responses, not failures; only transport
     * failures move on to the next candidate.
     *
     * @param array<string, string> $headers
     */
    private function forward(string $method, string $path, array $headers = [], string $body = ''): ?ResponseInterface
    {
        $headers += ['Accept' => 'application/json'];
        if ($this->settings->apiKey !== '') {
            $headers['x-api-key'] = $this->settings->apiKey;
        }
        foreach ($this->candidateEndpoints() as $base) {
            try {
                return $this->requestFactory->request($base . $path, $method, [
                    'headers' => $headers,
                    'body' => $body !== '' ? $body : null,
                    'timeout' => self::TIMEOUT_SECONDS,
                    'connect_timeout' => self::TIMEOUT_SECONDS,
                    'http_errors' => false,
                ]);
            } catch (\Throwable) {
                continue;
            }
        }
        return null;
    }

    /**
     * @return list<string>
     */
    private function candidateEndpoints(): array
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

    private static function isInsideContainer(): bool
    {
        return file_exists('/.dockerenv')
            || getenv('DDEV_HOSTNAME') !== false
            || getenv('DDEV_PROJECT') !== false;
    }

    private function unreachable(): JsonResponse
    {
        return new JsonResponse([
            'error' => 'syncUnreachable',
            'endpoint' => $this->settings->syncEndpoint,
            'tried' => $this->candidateEndpoints(),
        ], 502);
    }

    private static function error(string $code, int $status): JsonResponse
    {
        return new JsonResponse(['error' => $code], $status);
    }

    /**
     * Backend AJAX routes are authenticated by the backend middleware, which
     * always provides the user in the global.
     */
    private function backendUser(): BackendUserAuthentication
    {
        $user = $GLOBALS['BE_USER'] ?? null;
        return $user instanceof BackendUserAuthentication
            ? $user
            : throw new \RuntimeException('Backend user missing on an authenticated AJAX route.', 1758196800);
    }

    private static function requestedAnnotationId(ServerRequestInterface $request): string
    {
        $body = $request->getParsedBody();
        if (!is_array($body) || $body === []) {
            $body = self::decodeJson((string)$request->getBody());
        }
        $id = $body['id'] ?? null;
        return is_string($id) ? trim($id) : '';
    }

    /**
     * The pending list is either a bare array of annotations or wrapped in
     * `{"annotations": [...]}`.
     *
     * @param array<int|string, mixed> $payload
     * @return list<string>
     */
    private static function annotationIds(array $payload): array
    {
        $annotations = $payload['annotations'] ?? $payload;
        $ids = [];
        foreach (is_array($annotations) ? $annotations : [] as $annotation) {
            $id = is_array($annotation) ? ($annotation['id'] ?? null) : null;
            if (is_string($id) && $id !== '') {
                $ids[] = $id;
            }
        }
        return $ids;
    }

    /**
     * @return array<int|string, mixed>
     */
    private static function decodeJson(string $json): array
    {
        if ($json === '') {
            return [];
        }
        try {
            $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return is_array($decoded) ? $decoded : [];
    }
}
