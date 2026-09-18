<?php

declare(strict_types=1);

use Webconsulting\Agentation\Controller\Backend\ApiProxyController;

/*
 * Same-origin AJAX proxy for the agentation-mcp HTTP API. The browser
 * cannot call http://localhost:4747 from an HTTPS backend (mixed content),
 * so both the toolbar widget and System > Agentation go through PHP.
 */
return [
    // System > Agentation (admin only): list and delete stored annotations.
    'agentation_api_list' => [
        'path' => '/agentation/api/list',
        'target' => ApiProxyController::class . '::listAction',
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
    // Toolbar widget: its patched fetch() rewrites every call to the
    // agentation-mcp API into `?path=/sessions/...` against this route.
    'agentation_api_proxy' => [
        'path' => '/agentation/api/proxy',
        'target' => ApiProxyController::class . '::proxyAction',
        'methods' => ['GET', 'POST', 'PATCH', 'DELETE'],
    ],
];
