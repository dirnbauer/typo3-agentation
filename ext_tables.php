<?php

declare(strict_types=1);

defined('TYPO3') or die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

(static function (): void {
    $GLOBALS['TYPO3_USER_SETTINGS']['columns']['agentation_backend_enabled'] = [
        'type' => 'check',
        'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.backend.enabled',
    ];
    $GLOBALS['TYPO3_USER_SETTINGS']['columns']['agentation_frontend_enabled'] = [
        'type' => 'check',
        'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.frontend.enabled',
    ];
    ExtensionManagementUtility::addFieldsToUserSettings(
        '--div--;LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.tab,'
        . 'agentation_backend_enabled,agentation_frontend_enabled',
        'after:startModule'
    );
})();
