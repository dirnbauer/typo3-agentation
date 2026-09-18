<?php

declare(strict_types=1);

/*
 * Functional test bootstrap for typo3/testing-framework. Each test case
 * builds its own TYPO3 instance below .Build/public/typo3temp/var/tests/.
 */

use TYPO3\TestingFramework\Core\Testbase;

(static function (): void {
    $projectRoot = dirname(__DIR__, 2);
    if (getenv('TYPO3_PATH_ROOT') === false) {
        putenv('TYPO3_PATH_ROOT=' . $projectRoot . '/.Build/public');
    }
    require $projectRoot . '/.Build/vendor/autoload.php';

    $testbase = new Testbase();
    $testbase->defineOriginalRootPath();
    $testbase->createDirectory(ORIGINAL_ROOT . 'typo3temp/var/tests');
    $testbase->createDirectory(ORIGINAL_ROOT . 'typo3temp/var/transient');
})();
