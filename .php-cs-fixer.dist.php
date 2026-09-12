<?php

declare(strict_types=1);

use TYPO3\CodingStandards\CsFixerConfig;

$config = CsFixerConfig::create();
$config->setCacheFile(__DIR__ . '/.php-cs-fixer.cache');
$config->getFinder()
    ->in([
        __DIR__ . '/Build/phpunit',
        __DIR__ . '/Classes',
        __DIR__ . '/Configuration',
        __DIR__ . '/Tests',
    ])
    ->append([
        __DIR__ . '/ext_localconf.php',
        __DIR__ . '/.php-cs-fixer.dist.php',
    ]);

return $config;
