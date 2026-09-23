<?php

declare(strict_types=1);

return [
    'dependencies' => ['backend', 'core'],
    'imports' => [
        // System > Agentation: native ES modules, no build step.
        '@webconsulting/agentation/' => 'EXT:agentation/Resources/Public/JavaScript/',
    ],
];
