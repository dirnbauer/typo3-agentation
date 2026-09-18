<?php

declare(strict_types=1);

/*
 * Unit test bootstrap: initialises TYPO3's Environment and a package
 * manager the way typo3/testing-framework expects, so services that touch
 * Environment (application context, public path) can be tested without a
 * full instance. Adapted from the testing-framework boilerplate in
 * Resources/Core/Build/UnitTestsBootstrap.php for TYPO3 v14 only.
 */

use TYPO3\CMS\Core\Cache\Backend\NullBackend;
use TYPO3\CMS\Core\Cache\Frontend\PhpFrontend;
use TYPO3\CMS\Core\Configuration\ConfigurationManager;
use TYPO3\CMS\Core\Core\Bootstrap;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Package\PackageManager;
use TYPO3\CMS\Core\Package\UnitTestPackageManager;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\TestingFramework\Core\SystemEnvironmentBuilder as TestingSystemEnvironmentBuilder;
use TYPO3\TestingFramework\Core\Testbase;

(static function (): void {
    $projectRoot = dirname(__DIR__, 2);
    // Point the testing framework at the Composer web directory so it does
    // not create typo3temp/ and typo3conf/ in the repository root.
    if (getenv('TYPO3_PATH_ROOT') === false) {
        putenv('TYPO3_PATH_ROOT=' . $projectRoot . '/.Build/public');
    }
    if (getenv('TYPO3_PATH_WEB') === false) {
        putenv('TYPO3_PATH_WEB=' . $projectRoot . '/.Build/public');
    }
    require $projectRoot . '/.Build/vendor/autoload.php';

    $testbase = new Testbase();
    $testbase->defineSitePath();
    TestingSystemEnvironmentBuilder::run(
        0,
        SystemEnvironmentBuilder::REQUESTTYPE_CLI,
        defined('TYPO3_COMPOSER_MODE') && TYPO3_COMPOSER_MODE === true
    );
    foreach (['/typo3conf/ext', '/typo3temp/assets', '/typo3temp/var/tests', '/typo3temp/var/transient'] as $directory) {
        $testbase->createDirectory(Environment::getPublicPath() . $directory);
    }

    $classLoader = require $testbase->getPackagesPath() . '/autoload.php';
    Bootstrap::initializeClassLoader($classLoader);

    $GLOBALS['TYPO3_CONF_VARS'] = (new ConfigurationManager())->getDefaultConfiguration();

    $packageManager = Bootstrap::createPackageManager(
        UnitTestPackageManager::class,
        Bootstrap::createPackageCache(new PhpFrontend('core', new NullBackend('production', [])))
    );
    GeneralUtility::setSingletonInstance(PackageManager::class, $packageManager);
    ExtensionManagementUtility::setPackageManager($packageManager);

    $testbase->dumpClassLoadingInformation();
    GeneralUtility::purgeInstances();
})();
