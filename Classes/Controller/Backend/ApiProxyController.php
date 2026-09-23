<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Controller\Backend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Http\JsonResponse;
use Webconsulting\Agentation\Service\SyncProxy;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Same-origin proxy for the agentation-mcp HTTP API, backend side.
 *
 * Browsers block fetch() from an HTTPS backend to http://localhost:4747 as
 * mixed content. The toolbar widget and System > Agentation call these
 * routes instead; {@see SyncProxy} forwards to the configured sync endpoint
 * and injects the API key, which therefore never leaves the server. The
 * frontend toolbar uses the same forwarding through
 * {@see \Webconsulting\Agentation\Middleware\FrontendSyncProxy}.
 *
 * Errors are returned as machine-readable codes (`{"error": "<code>"}`);
 * the module's JavaScript translates them (module.errors.* labels).
 */
#[Autoconfigure(public: true)]
final readonly class ApiProxyController
{
    private const string PENDING_PATH = '/pending';
    private const string ANNOTATION_PATH = '/annotations/';

    public function __construct(
        private ToolbarSettings $toolbar,
        private SyncProxy $proxy,
    ) {}

    /**
     * System > Agentation: pending annotations stored on the sync server.
     */
    public function listAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->backendUser()->isAdmin()) {
            return SyncProxy::error('adminOnly', 403);
        }
        $upstream = $this->proxy->forward('GET', self::PENDING_PATH);
        if ($upstream === null) {
            return $this->proxy->unreachable();
        }
        $body = SyncProxy::bodyOf($upstream);
        return $body === null
            ? SyncProxy::error('responseTooLarge', 502)
            : new JsonResponse(self::decodeJson($body), $upstream->getStatusCode());
    }

    /**
     * System > Agentation: delete one annotation by id (JSON body `{"id": "..."}`).
     */
    public function deleteAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->backendUser()->isAdmin()) {
            return SyncProxy::error('adminOnly', 403);
        }
        $id = self::requestedAnnotationId($request);
        if ($id === '') {
            return SyncProxy::error('missingAnnotationId', 400);
        }
        $upstream = $this->proxy->forward('DELETE', self::ANNOTATION_PATH . rawurlencode($id));
        if ($upstream === null) {
            return $this->proxy->unreachable();
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
            return SyncProxy::error('adminOnly', 403);
        }
        $pending = $this->proxy->forward('GET', self::PENDING_PATH);
        if ($pending === null) {
            return $this->proxy->unreachable();
        }

        $deleted = [];
        $failed = [];
        foreach (self::annotationIds(self::decodeJson(SyncProxy::bodyOf($pending) ?? '')) as $id) {
            $upstream = $this->proxy->forward('DELETE', self::ANNOTATION_PATH . rawurlencode($id));
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
     * Generic forward for the toolbar widget (GET/POST/PATCH/DELETE): its
     * patched fetch() sends the original API path in the `path` query
     * parameter; {@see SyncProxy::forwardWidgetCall()} validates and forwards it.
     */
    public function proxyAction(ServerRequestInterface $request): ResponseInterface
    {
        if (!$this->toolbar->isBackendToolbarEnabled($this->backendUser())) {
            return SyncProxy::error('toolbarDisabled', 403);
        }
        return $this->proxy->forwardWidgetCall($request);
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
