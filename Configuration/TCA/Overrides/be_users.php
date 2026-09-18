<?php

declare(strict_types=1);

defined('TYPO3') or die();

use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationPathDoesNotExistException;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/*
 * User Settings > Agentation: one toggle per application. The checkbox
 * default mirrors the extension's `defaultOptIn`, which ToolbarSettings
 * also applies to users who never saved the settings.
 */
(static function (): void {
    $defaultOptIn = false;
    try {
        $defaultOptIn = filter_var(
            GeneralUtility::makeInstance(ExtensionConfiguration::class)->get('agentation', 'defaultOptIn'),
            FILTER_VALIDATE_BOOLEAN
        );
    } catch (ExtensionConfigurationExtensionNotConfiguredException|ExtensionConfigurationPathDoesNotExistException) {
        // Fresh install without saved configuration: the default applies.
    }

    $toggle = static fn(string $label): array => [
        'label' => 'LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:' . $label,
        'config' => [
            'type' => 'check',
            'renderType' => 'checkboxToggle',
            'default' => $defaultOptIn ? 1 : 0,
        ],
    ];

    $userSettings = &$GLOBALS['TCA']['be_users']['columns']['user_settings'];
    $userSettings['columns']['agentation_backend_enabled'] = $toggle('setup.backend.enabled');
    $userSettings['columns']['agentation_frontend_enabled'] = $toggle('setup.frontend.enabled');
    $userSettings['showitem'] = rtrim((string)($userSettings['showitem'] ?? ''), ", \n")
        . ',--div--;LLL:EXT:agentation/Resources/Private/Language/locallang.xlf:setup.tab'
        . ',agentation_backend_enabled,agentation_frontend_enabled';
})();
