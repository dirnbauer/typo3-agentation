<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Settings;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use Webconsulting\Agentation\Enum\ContextGate;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class ExtensionSettingsTest extends AgentationTestCase
{
    protected bool $backupEnvironment = true;

    #[Test]
    public function defaultsApplyWhenTheExtensionIsNotConfiguredYet(): void
    {
        $extensionConfiguration = self::createStub(ExtensionConfiguration::class);
        $extensionConfiguration->method('get')->willThrowException(new ExtensionConfigurationExtensionNotConfiguredException());
        $settings = new ExtensionSettings($extensionConfiguration);

        self::assertSame('', $settings->apiKey);
        self::assertSame('', $settings->workspaceId);
        self::assertSame('http://localhost:4747', $settings->syncEndpoint);
        self::assertTrue($settings->frontendEnabled);
        self::assertTrue($settings->backendEnabled);
        self::assertFalse($settings->defaultOptIn);
        self::assertSame(ContextGate::Development, $settings->contextGate);
        self::assertSame(ToolbarPosition::BottomRight, $settings->toolbarPosition);
        self::assertSame('', $settings->webhookUrl);
        self::assertSame([], $settings->additionalOptions);
    }

    #[Test]
    public function defaultsApplyForAnEmptyConfiguration(): void
    {
        $settings = $this->extensionSettings([]);

        self::assertTrue($settings->frontendEnabled);
        self::assertFalse($settings->defaultOptIn);
        self::assertSame(ContextGate::Development, $settings->contextGate);
    }

    #[Test]
    public function stringSettingsAreTrimmed(): void
    {
        $settings = $this->extensionSettings(['apiKey' => '  secret ', 'workspaceId' => "ws-1\n", 'webhookUrl' => ' https://hooks.example/x ']);

        self::assertSame('secret', $settings->apiKey);
        self::assertSame('ws-1', $settings->workspaceId);
        self::assertSame('https://hooks.example/x', $settings->webhookUrl);
    }

    /**
     * @return iterable<string, array{string, string, string}>
     */
    public static function endpoints(): iterable
    {
        yield 'explicit endpoint wins' => ['key', 'https://sync.example/api', 'https://sync.example/api'];
        yield 'api key selects the cloud endpoint' => ['key', '', 'https://agentation-mcp-cloud.vercel.app/api'];
        yield 'no api key selects the local server' => ['', '', 'http://localhost:4747'];
    }

    #[Test]
    #[DataProvider('endpoints')]
    public function syncEndpointIsExplicitOrAutoSelected(string $apiKey, string $syncEndpoint, string $expected): void
    {
        self::assertSame($expected, $this->extensionSettings(['apiKey' => $apiKey, 'syncEndpoint' => $syncEndpoint])->syncEndpoint);
    }

    /**
     * @return iterable<string, array{mixed, bool}>
     */
    public static function booleanSpellings(): iterable
    {
        yield 'string one' => ['1', true];
        yield 'string zero' => ['0', false];
        yield 'string false' => ['false', false];
        yield 'string off' => ['off', false];
        yield 'string yes' => ['yes', true];
        yield 'string on' => ['on', true];
        yield 'empty string' => ['', false];
        yield 'bool true' => [true, true];
        yield 'bool false' => [false, false];
        yield 'int zero' => [0, false];
        yield 'int one' => [1, true];
        yield 'null keeps the default' => [null, true];
        yield 'array keeps the default' => [['nested'], true];
    }

    #[Test]
    #[DataProvider('booleanSpellings')]
    public function booleanSettingsAcceptCheckboxSpellings(mixed $value, bool $expected): void
    {
        self::assertSame($expected, $this->extensionSettings(['frontendEnabled' => $value])->frontendEnabled);
    }

    #[Test]
    public function toolbarPositionAndContextGateAreParsedIntoEnums(): void
    {
        $settings = $this->extensionSettings(['toolbarPosition' => 'top-left', 'contextGate' => 'All contexts']);
        self::assertSame(ToolbarPosition::TopLeft, $settings->toolbarPosition);
        self::assertSame(ContextGate::AllContexts, $settings->contextGate);

        $settings = $this->extensionSettings(['toolbarPosition' => 'nowhere', 'contextGate' => 'garbage']);
        self::assertSame(ToolbarPosition::BottomRight, $settings->toolbarPosition);
        self::assertSame(ContextGate::Development, $settings->contextGate);
    }

    /**
     * @return iterable<string, array{string, array<string, mixed>}>
     */
    public static function additionalOptions(): iterable
    {
        yield 'object' => ['{"theme":"dark","maxAnnotations":5}', ['theme' => 'dark', 'maxAnnotations' => 5]];
        yield 'nested object' => ['{"labels":{"submit":"Send"}}', ['labels' => ['submit' => 'Send']]];
        yield 'list is not an options object' => ['[1,2]', []];
        yield 'scalar is not an options object' => ['"dark"', []];
        yield 'invalid json' => ['{theme: dark}', []];
        yield 'empty' => ['', []];
        yield 'whitespace' => ["  \n ", []];
    }

    /**
     * @param array<string, mixed> $expected
     */
    #[Test]
    #[DataProvider('additionalOptions')]
    public function additionalOptionsAreDecodedFromJson(string $raw, array $expected): void
    {
        self::assertSame($expected, $this->extensionSettings(['additionalOptions' => $raw])->additionalOptions);
    }

    /**
     * @return iterable<string, array{string, string, bool}>
     */
    public static function contextGates(): iterable
    {
        yield 'Development gate in Development' => ['Development', 'Development', true];
        yield 'Development gate in Development/Local' => ['Development', 'Development/Local', true];
        yield 'Development gate in Testing' => ['Development', 'Testing', false];
        yield 'Development gate in Production' => ['Development', 'Production', false];
        yield 'Dev+Testing gate in Testing' => ['Development and Testing', 'Testing', true];
        yield 'Dev+Testing gate in Production' => ['Development and Testing', 'Production', false];
        yield 'All contexts gate in Production' => ['All contexts', 'Production', true];
    }

    #[Test]
    #[DataProvider('contextGates')]
    public function contextAllowedIsEvaluatedAgainstTheApplicationContext(string $gate, string $context, bool $expected): void
    {
        self::switchApplicationContext($context);

        self::assertSame($expected, $this->extensionSettings(['contextGate' => $gate])->contextAllowed);
    }
}
