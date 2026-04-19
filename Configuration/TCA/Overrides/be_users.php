<?php

declare(strict_types=1);

defined('TYPO3') or die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

(static function (): void {
    ExtensionManagementUtility::addUserSetting(
        'agentation_backend_enabled',
        [
            'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.backend.enabled',
            'config' => [
                'type' => 'check',
                'renderType' => 'checkboxToggle',
            ],
        ],
        'after:startModule'
    );

    ExtensionManagementUtility::addUserSetting(
        'agentation_frontend_enabled',
        [
            'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.frontend.enabled',
            'config' => [
                'type' => 'check',
                'renderType' => 'checkboxToggle',
            ],
        ],
        'after:agentation_backend_enabled'
    );
})();
