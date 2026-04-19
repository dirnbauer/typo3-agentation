<?php

declare(strict_types=1);

use WebConsulting\Agentation\Controller\Backend\ModuleController;

return [
    'agentation' => [
        'labels' => 'LLL:EXT:agentation/Resources/Private/Language/locallang_mod.xlf',
        'iconIdentifier' => 'agentation-module',
        'position' => ['after' => 'system'],
        'access' => 'admin',
        'workspaces' => 'live',
        'path' => '/module/agentation',
        'routes' => [
            '_default' => [
                'target' => ModuleController::class . '::indexAction',
            ],
        ],
    ],
];
