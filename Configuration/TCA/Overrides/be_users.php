<?php

declare(strict_types=1);

defined('TYPO3') or die();

use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

(static function (): void {
    $defaultOptIn = false;
    try {
        $configuration = GeneralUtility::makeInstance(ExtensionConfiguration::class)->get('agentation');
        $defaultOptIn = is_array($configuration) && (bool)($configuration['defaultOptIn'] ?? false);
    } catch (\Throwable) {
        // Extension configuration may be unavailable during early setup.
    }

    ExtensionManagementUtility::addUserSetting(
        'agentation_backend_enabled',
        [
            'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.backend.enabled',
            'config' => [
                'type' => 'check',
                'renderType' => 'checkboxToggle',
                'default' => $defaultOptIn ? 1 : 0,
            ],
        ]
    );

    ExtensionManagementUtility::addUserSetting(
        'agentation_frontend_enabled',
        [
            'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.frontend.enabled',
            'config' => [
                'type' => 'check',
                'renderType' => 'checkboxToggle',
                'default' => $defaultOptIn ? 1 : 0,
            ],
        ]
    );

    // Prepend a tab divider so both fields land on their own "Agentation"
    // tab in the User Settings module instead of appending to whatever
    // tab happens to be last.
    $current = (string)($GLOBALS['TCA']['be_users']['columns']['user_settings']['showitem'] ?? '');
    $divider = '--div--;LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.tab';
    if (!str_contains($current, $divider)) {
        $current = preg_replace(
            '/,?\s*agentation_backend_enabled/',
            '',
            $current
        ) ?? $current;
        $current = preg_replace(
            '/,?\s*agentation_frontend_enabled/',
            '',
            $current
        ) ?? $current;
        $GLOBALS['TCA']['be_users']['columns']['user_settings']['showitem'] =
            rtrim($current, ', ')
            . ',' . $divider
            . ',agentation_backend_enabled,agentation_frontend_enabled';
    }
})();
