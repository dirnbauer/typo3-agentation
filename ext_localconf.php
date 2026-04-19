<?php

declare(strict_types=1);

defined('TYPO3') or die();

(static function (): void {
    $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['adminpanel']['modules']['agentation'] = [
        'module' => \WebConsulting\Agentation\AdminPanel\AgentationModule::class,
        'after' => ['info'],
    ];
})();
