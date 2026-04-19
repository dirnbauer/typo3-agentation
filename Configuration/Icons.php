<?php

declare(strict_types=1);

use TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider;

return [
    'agentation-logo' => [
        'provider' => SvgIconProvider::class,
        'source' => 'EXT:agentation/Resources/Public/Icons/Extension.svg',
    ],
    'agentation-module' => [
        'provider' => SvgIconProvider::class,
        'source' => 'EXT:agentation/Resources/Public/Icons/module-agentation.svg',
    ],
];
