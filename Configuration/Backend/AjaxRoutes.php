<?php

declare(strict_types=1);

use WebConsulting\Agentation\Controller\Backend\ApiProxyController;

/*
 * Same-origin AJAX proxy for the agentation-mcp HTTP API.
 *
 * The browser cannot call http://localhost:4747 directly from an HTTPS
 * backend (mixed content). These routes give the JS in the backend
 * module a same-origin HTTPS endpoint and forward to the configured
 * sync endpoint server-side, so admins can list and delete stored
 * annotations from the TYPO3 backend regardless of transport.
 */
return [
    'agentation_api_list' => [
        'path' => '/agentation/api/list',
        'target' => ApiProxyController::class . '::listAction',
        'methods' => ['GET'],
    ],
    'agentation_api_sessions' => [
        'path' => '/agentation/api/sessions',
        'target' => ApiProxyController::class . '::sessionsAction',
        'methods' => ['GET'],
    ],
    'agentation_api_delete' => [
        'path' => '/agentation/api/delete',
        'target' => ApiProxyController::class . '::deleteAction',
        'methods' => ['POST'],
    ],
    'agentation_api_delete_all' => [
        'path' => '/agentation/api/delete-all',
        'target' => ApiProxyController::class . '::deleteAllAction',
        'methods' => ['POST'],
    ],
    // Generic same-origin forward used by the widget itself to escape
    // the HTTPS → http://localhost:4747 mixed-content trap. The widget's
    // monkey-patched fetch rewrites every call to the agentation-mcp
    // HTTP API into `?path=/sessions/...` against this route.
    'agentation_api_proxy' => [
        'path' => '/agentation/api/proxy',
        'target' => ApiProxyController::class . '::proxyAction',
        'methods' => ['GET', 'POST', 'PATCH', 'DELETE'],
    ],
];
