<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Enum;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use TYPO3\CMS\Core\Core\ApplicationContext;
use Webconsulting\Agentation\Enum\ContextGate;

final class ContextGateTest extends TestCase
{
    /**
     * @return iterable<string, array{string, ContextGate}>
     */
    public static function settings(): iterable
    {
        yield 'development' => ['Development', ContextGate::Development];
        yield 'development and testing' => ['Development and Testing', ContextGate::DevelopmentAndTesting];
        yield 'all contexts' => ['All contexts', ContextGate::AllContexts];
        yield 'surrounding whitespace' => ['  All contexts ', ContextGate::AllContexts];
        yield 'empty falls back to the safe default' => ['', ContextGate::Development];
        yield 'unknown falls back to the safe default' => ['Production', ContextGate::Development];
    }

    #[Test]
    #[DataProvider('settings')]
    public function fromSettingMapsTheOptionLabel(string $setting, ContextGate $expected): void
    {
        self::assertSame($expected, ContextGate::fromSetting($setting));
    }

    /**
     * @return iterable<string, array{ContextGate, string, bool}>
     */
    public static function contexts(): iterable
    {
        yield 'development allows Development' => [ContextGate::Development, 'Development', true];
        yield 'development allows Development sub-contexts' => [ContextGate::Development, 'Development/Local', true];
        yield 'development blocks Testing' => [ContextGate::Development, 'Testing', false];
        yield 'development blocks Production' => [ContextGate::Development, 'Production/Staging', false];
        yield 'dev+testing allows Testing' => [ContextGate::DevelopmentAndTesting, 'Testing', true];
        yield 'dev+testing allows Development' => [ContextGate::DevelopmentAndTesting, 'Development', true];
        yield 'dev+testing blocks Production' => [ContextGate::DevelopmentAndTesting, 'Production', false];
        yield 'all contexts allows Production' => [ContextGate::AllContexts, 'Production', true];
    }

    #[Test]
    #[DataProvider('contexts')]
    public function allowsEvaluatesTheRootContext(ContextGate $gate, string $context, bool $expected): void
    {
        self::assertSame($expected, $gate->allows(new ApplicationContext($context)));
    }
}
