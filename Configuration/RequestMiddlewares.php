<?php

declare(strict_types=1);

use Webconsulting\Agentation\Middleware\FrontendSyncProxy;

/*
 * The frontend twin of the backend AJAX proxy. It needs the backend user the
 * frontend authenticates, and it must answer before a site's page resolution
 * turns the fixed path into a 404.
 */
return [
    'frontend' => [
        'webconsulting/agentation/frontend-sync-proxy' => [
            'target' => FrontendSyncProxy::class,
            'after' => [
                'typo3/cms-frontend/backend-user-authentication',
            ],
            'before' => [
                'typo3/cms-frontend/base-redirect-resolver',
                'typo3/cms-frontend/static-route-resolver',
                'typo3/cms-frontend/page-resolver',
            ],
        ],
    ],
];
