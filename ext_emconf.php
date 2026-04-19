<?php

defined('TYPO3') or die();

/** @var array<string, array<string, mixed>> $EM_CONF */
$EM_CONF ??= [];
$EM_CONF['agentation'] = [
    'title' => 'Agentation',
    'description' => 'Visual UI annotations for AI coding agents — in TYPO3 frontend (Admin Panel) and backend. Framework-agnostic.',
    'category' => 'module',
    'author' => 'webconsulting',
    'author_email' => 'office@webconsulting.at',
    'state' => 'beta',
    'version' => '0.1.0',
    'constraints' => [
        'depends' => [
            'typo3' => '14.0.0-14.99.99',
            'adminpanel' => '14.0.0-14.99.99',
            'php' => '8.2.0-8.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
