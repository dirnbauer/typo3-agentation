<?php

declare(strict_types=1);

use WebConsulting\Agentation\Controller\Backend\ModuleController;

return [
    'agentation' => [
        'parent' => 'system',
        'position' => ['after' => 'content_security_policy'],
        'labels' => 'LLL:EXT:agentation/Resources/Private/Language/locallang_mod.xlf',
        'iconIdentifier' => 'agentation-module',
        'access' => 'admin',
        'workspaces' => 'live',
        'path' => '/module/system/agentation',
        'routes' => [
            '_default' => [
                'target' => ModuleController::class . '::indexAction',
            ],
        ],
    ],
];
