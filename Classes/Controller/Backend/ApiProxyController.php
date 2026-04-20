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
                ['error' => 'Sync endpoint unreachable', 'endpoint' => $this->endpoint()],
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
                ['error' => 'Sync endpoint unreachable', 'endpoint' => $this->endpoint()],
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
        $endpoint = $this->endpoint();
        if ($endpoint === '') {
            return null;
        }
        $url = rtrim($endpoint, '/') . $path;
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
