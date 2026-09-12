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
use TYPO3\CMS\Core\Localization\LanguageServiceFactory;
use Webconsulting\Agentation\Service\ConfigurationService;
use Webconsulting\Agentation\Service\UserToolbarSettingsService;

/**
 * Same-origin proxy for the agentation-mcp HTTP API.
 *
 * Browsers block fetch() from an HTTPS backend to http://localhost:4747 as
 * mixed content. The backend module and the widget talk to these routes
 * instead and PHP forwards to the configured sync endpoint. The API key
 * (when configured) is injected here so it never leaves the server.
 */
#[Autoconfigure(public: true)]
final readonly class ApiProxyController
{
    private const float TIMEOUT_SECONDS = 4.0;
    private const string LANGUAGE_DOMAIN = 'agentation.mod:';

    public function __construct(
        private ConfigurationService $configuration,
        private UserToolbarSettingsService $userToolbarSettings,
        private RequestFactory $requestFactory,
        private LanguageServiceFactory $languageServiceFactory,
    ) {}

    public function listAction(ServerRequestInterface $request): ResponseInterface
    {
        return $this->forwardJson('GET', '/pending');
    }

    public function sessionsAction(ServerRequestInterface $request): ResponseInterface
    {
        return $this->forwardJson('GET', '/sessions');
    }

    public function deleteAction(ServerRequestInterface $request): ResponseInterface
    {
        $body = $this->decodeJsonBody($request);
        $id = is_string($body['id'] ?? null) ? trim($body['id']) : '';
        if ($id === '') {
            return new JsonResponse(['error' => $this->translate('module.errors.missingAnnotationId')], 400);
        }
        return $this->forwardJson(
            'DELETE',
            '/annotations/' . rawurlencode($id),
            expectJson: false,
        );
    }

    /**
     * Forward any widget-originated call (GET/POST/PATCH/DELETE) to the
     * real agentation-mcp server.
     *
     * The widget's patched fetch() sends the original path in the `path`
     * query parameter, so one route covers sessions, annotations, pending,
     * events and health. Method, headers and body are forwarded and the
     * upstream status and body mirrored back.
     */
    public function proxyAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->userToolbarSettings->isBackendToolbarEnabled()) {
            return new JsonResponse(['error' => $this->translate('module.errors.toolbarDisabled')], 403);
        }

        $params = $request->getQueryParams();
        $path = is_string($params['path'] ?? null) ? $params['path'] : '';
        if ($path === '' || !str_starts_with($path, '/')) {
            return new JsonResponse(['error' => $this->translate('module.errors.invalidPath')], 400);
        }

        $method = strtoupper($request->getMethod());
        $body = (string)$request->getBody();
        $headers = $this->upstreamHeaders();
        $contentType = $request->getHeaderLine('Content-Type');
        if ($contentType !== '') {
            $headers['Content-Type'] = $contentType;
        }

        foreach ($this->candidateEndpoints() as $base) {
            try {
                $upstream = $this->requestFactory->request($base . $path, $method, [
                    'headers' => $headers,
                    'body' => $body !== '' ? $body : null,
                    'timeout' => self::TIMEOUT_SECONDS,
                    'connect_timeout' => self::TIMEOUT_SECONDS,
                    'http_errors' => false,
                ]);
            } catch (\Throwable) {
                continue;
            }
            $response = new Response($upstream->getBody(), $upstream->getStatusCode());
            $upstreamType = $upstream->getHeaderLine('Content-Type');
            if ($upstreamType !== '') {
                $response = $response->withHeader('Content-Type', $upstreamType);
            }
            return $response;
        }

        return $this->unreachableResponse();
    }

    public function deleteAllAction(ServerRequestInterface $request): ResponseInterface
    {
        $listResponse = $this->call('GET', '/pending');
        if ($listResponse === null) {
            return $this->unreachableResponse();
        }
        $annotations = $this->extractAnnotations($this->decodeBody($listResponse));

        $deleted = 0;
        $failed = 0;
        $failures = [];
        foreach ($annotations as $annotation) {
            $id = is_string($annotation['id'] ?? null) ? $annotation['id'] : '';
            if ($id === '') {
                continue;
            }
            $delResponse = $this->call('DELETE', '/annotations/' . rawurlencode($id));
            if ($delResponse !== null && $delResponse->getStatusCode() < 400) {
                $deleted++;
            } else {
                $failed++;
                $failures[] = $id;
            }
        }

        return new JsonResponse([
            'deleted' => $deleted,
            'failed' => $failed,
            'failures' => $failures,
            'total' => $deleted + $failed,
        ]);
    }

    private function forwardJson(string $method, string $path, bool $expectJson = true): ResponseInterface
    {
        $response = $this->call($method, $path);
        if ($response === null) {
            return $this->unreachableResponse();
        }
        $status = $response->getStatusCode();
        if (!$expectJson) {
            return new JsonResponse(['ok' => $status < 400, 'status' => $status], $status);
        }
        return new JsonResponse($this->decodeBody($response), $status);
    }

    private function unreachableResponse(): JsonResponse
    {
        return new JsonResponse(
            [
                'error' => $this->translate('module.errors.syncUnreachable'),
                'endpoint' => $this->configuration->getSyncEndpoint(),
                'tried' => $this->candidateEndpoints(),
            ],
            502,
        );
    }

    private function call(string $method, string $path): ?ResponseInterface
    {
        foreach ($this->candidateEndpoints() as $candidate) {
            $response = $this->doCall($method, $candidate . $path);
            if ($response !== null) {
                return $response;
            }
        }
        return null;
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
    private function candidateEndpoints(): array
    {
        $configured = rtrim($this->configuration->getSyncEndpoint(), '/');
        if ($configured === '') {
            return [];
        }
        $candidates = [$configured];

        $parsedHost = parse_url($configured, PHP_URL_HOST);
        $host = is_string($parsedHost) ? $parsedHost : '';
        if (!$this->isInsideContainer() || !in_array($host, ['localhost', '127.0.0.1'], true)) {
            return $candidates;
        }
        foreach (['host.docker.internal', 'host.containers.internal'] as $alias) {
            $rewritten = preg_replace(
                '#://' . preg_quote($host, '#') . '(?=[:/]|$)#',
                '://' . $alias,
                $configured,
                1,
            );
            if (is_string($rewritten) && $rewritten !== $configured) {
                $candidates[] = $rewritten;
            }
        }
        return $candidates;
    }

    private function isInsideContainer(): bool
    {
        return file_exists('/.dockerenv')
            || getenv('DDEV_HOSTNAME') !== false
            || getenv('DDEV_PROJECT') !== false;
    }

    private function doCall(string $method, string $url): ?ResponseInterface
    {
        try {
            return $this->requestFactory->request($url, $method, [
                'headers' => $this->upstreamHeaders(),
                'timeout' => self::TIMEOUT_SECONDS,
                'connect_timeout' => self::TIMEOUT_SECONDS,
                'http_errors' => false,
            ]);
        } catch (\Throwable) {
            return null;
        }
    }

    /**
     * @return array<string, string>
     */
    private function upstreamHeaders(): array
    {
        $headers = ['Accept' => 'application/json'];
        $apiKey = $this->configuration->getApiKey();
        if ($apiKey !== '') {
            $headers['x-api-key'] = $apiKey;
        }
        return $headers;
    }

    private function translate(string $key): string
    {
        $backendUser = $GLOBALS['BE_USER'] ?? null;
        $languageService = $this->languageServiceFactory->createFromUserPreferences(
            $backendUser instanceof BackendUserAuthentication ? $backendUser : null
        );
        $label = $languageService->sL(self::LANGUAGE_DOMAIN . $key);
        return $label !== '' ? $label : $key;
    }

    /**
     * @return array<int|string, mixed>
     */
    private function decodeBody(ResponseInterface $response): array
    {
        return self::decodeJson((string)$response->getBody(), 32);
    }

    /**
     * @return array<int|string, mixed>
     */
    private function decodeJsonBody(ServerRequestInterface $request): array
    {
        $parsed = $request->getParsedBody();
        if (is_array($parsed) && $parsed !== []) {
            return $parsed;
        }
        return self::decodeJson((string)$request->getBody(), 16);
    }

    /**
     * @param positive-int $depth
     * @return array<int|string, mixed>
     */
    private static function decodeJson(string $raw, int $depth): array
    {
        if ($raw === '') {
            return [];
        }
        try {
            $decoded = json_decode($raw, true, $depth, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return is_array($decoded) ? $decoded : [];
    }

    /**
     * @param array<int|string, mixed> $payload
     * @return list<array<int|string, mixed>>
     */
    private function extractAnnotations(array $payload): array
    {
        $candidate = $payload['annotations'] ?? $payload;
        if (!is_array($candidate)) {
            return [];
        }
        $out = [];
        foreach ($candidate as $entry) {
            if (is_array($entry) && isset($entry['id'])) {
                $out[] = $entry;
            }
        }
        return $out;
    }
}
