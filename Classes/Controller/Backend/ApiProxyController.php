<?php

declare(strict_types=1);

namespace WebConsulting\Agentation\Controller\Backend;

use Psr\Http\Client\ClientExceptionInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Http\JsonResponse;
use TYPO3\CMS\Core\Http\RequestFactory;
use WebConsulting\Agentation\Service\ConfigurationService;

/**
 * Same-origin proxy for the agentation-mcp HTTP API.
 *
 * Browsers block fetch() from an HTTPS backend to http://localhost:4747
 * as mixed content. The backend module talks to these routes instead
 * and we forward to the configured sync endpoint server-side. The API
 * key (when configured) is injected here so it never leaves PHP.
 */
final class ApiProxyController
{
    private const TIMEOUT_SECONDS = 4.0;

    public function __construct(
        private readonly ConfigurationService $configuration,
        private readonly RequestFactory $requestFactory,
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
            return new JsonResponse(['error' => 'Missing annotation id'], 400);
        }
        return $this->forwardJson(
            'DELETE',
            '/annotations/' . rawurlencode($id),
            expectJson: false,
        );
    }

    public function deleteAllAction(ServerRequestInterface $request): ResponseInterface
    {
        $listResponse = $this->call('GET', '/pending');
        if ($listResponse === null) {
            return new JsonResponse(
                [
                    'error' => 'Sync endpoint unreachable',
                    'endpoint' => $this->endpoint(),
                    'tried' => $this->candidateEndpoints(),
                ],
                502,
            );
        }
        $payload = $this->decodeBody($listResponse);
        $annotations = $this->extractAnnotations($payload);

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
            return new JsonResponse(
                [
                    'error' => 'Sync endpoint unreachable',
                    'endpoint' => $this->endpoint(),
                    'tried' => $this->candidateEndpoints(),
                ],
                502,
            );
        }
        $status = $response->getStatusCode();
        if (!$expectJson) {
            return new JsonResponse(['ok' => $status < 400, 'status' => $status], $status);
        }
        $payload = $this->decodeBody($response);
        return new JsonResponse($payload, $status);
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
     * Build the list of URLs to try for a given call, with container-aware
     * fallbacks.
     *
     * TYPO3 runs inside a Docker container when used via DDEV (or similar).
     * A configured endpoint like http://localhost:4747 points at the
     * container's own network namespace — which is NOT where the Mac's
     * `agentation-mcp server` is listening. Docker exposes the host under
     * `host.docker.internal` (and Podman under `host.containers.internal`),
     * so when we detect we're in a container + the endpoint uses a loopback
     * host, we also try those aliases.
     *
     * @return list<string>
     */
    private function candidateEndpoints(): array
    {
        $configured = $this->endpoint();
        if ($configured === '') {
            return [];
        }
        $configured = rtrim($configured, '/');
        $candidates = [$configured];

        $host = parse_url($configured, PHP_URL_HOST) ?: '';
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
        if (file_exists('/.dockerenv')) {
            return true;
        }
        if (getenv('DDEV_HOSTNAME') !== false || getenv('DDEV_PROJECT') !== false) {
            return true;
        }
        return false;
    }

    private function doCall(string $method, string $url): ?ResponseInterface
    {
        $headers = ['Accept' => 'application/json'];
        $apiKey = $this->configuration->getApiKey();
        if ($apiKey !== '') {
            $headers['x-api-key'] = $apiKey;
        }
        try {
            return $this->requestFactory->request($url, $method, [
                'headers' => $headers,
                'timeout' => self::TIMEOUT_SECONDS,
                'connect_timeout' => self::TIMEOUT_SECONDS,
                'http_errors' => false,
            ]);
        } catch (ClientExceptionInterface | \Throwable) {
            return null;
        }
    }

    private function endpoint(): string
    {
        return $this->configuration->getSyncEndpoint();
    }

    /**
     * @return array<int|string, mixed>
     */
    private function decodeBody(ResponseInterface $response): array
    {
        $body = (string)$response->getBody();
        if ($body === '') {
            return [];
        }
        try {
            $decoded = json_decode($body, true, 32, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return is_array($decoded) ? $decoded : [];
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
        $raw = (string)$request->getBody();
        if ($raw === '') {
            return [];
        }
        try {
            $decoded = json_decode($raw, true, 16, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return is_array($decoded) ? $decoded : [];
    }

    /**
     * @param array<int|string, mixed> $payload
     * @return list<array<string, mixed>>
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
