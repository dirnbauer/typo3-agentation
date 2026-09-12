<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Core\ApplicationContext;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\TestingFramework\Core\Unit\UnitTestCase;
use Webconsulting\Agentation\Enum\ContextGate;
use Webconsulting\Agentation\Enum\ToolbarPosition;
use Webconsulting\Agentation\Service\ConfigurationService;

final class ConfigurationServiceTest extends UnitTestCase
{
    protected bool $backupEnvironment = true;

    #[Test]
    public function defaultsApplyWhenTheExtensionIsNotConfiguredYet(): void
    {
        $extensionConfiguration = $this->createMock(ExtensionConfiguration::class);
        $extensionConfiguration->method('get')->willThrowException(new ExtensionConfigurationExtensionNotConfiguredException());
        $service = new ConfigurationService($extensionConfiguration);

        self::assertSame('', $service->getApiKey());
        self::assertSame('', $service->getWorkspaceId());
        self::assertSame('http://localhost:4747', $service->getSyncEndpoint());
        self::assertTrue($service->isFrontendEnabled());
        self::assertTrue($service->isBackendEnabled());
        self::assertFalse($service->isDefaultOptIn());
        self::assertSame(ContextGate::Development, $service->getContextGate());
        self::assertSame(ToolbarPosition::BottomRight, $service->getToolbarPosition());
        self::assertSame('', $service->getWebhookUrl());
        self::assertSame([], $service->getAdditionalOptions());
    }

    #[Test]
    public function defaultsApplyForAnEmptyConfiguration(): void
    {
        $service = $this->service([]);

        self::assertTrue($service->isFrontendEnabled());
        self::assertFalse($service->isDefaultOptIn());
        self::assertSame(ContextGate::Development, $service->getContextGate());
    }

    #[Test]
    public function stringSettingsAreTrimmed(): void
    {
        $service = $this->service(['apiKey' => '  secret ', 'workspaceId' => "ws-1\n", 'webhookUrl' => ' https://hooks.example/x ']);

        self::assertSame('secret', $service->getApiKey());
        self::assertSame('ws-1', $service->getWorkspaceId());
        self::assertSame('https://hooks.example/x', $service->getWebhookUrl());
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
        $service = $this->service(['apiKey' => $apiKey, 'syncEndpoint' => $syncEndpoint]);

        self::assertSame($expected, $service->getSyncEndpoint());
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
        yield 'bool true' => [true, true];
        yield 'bool false' => [false, false];
        yield 'int zero' => [0, false];
        yield 'int one' => [1, true];
        yield 'null keeps the default' => [null, true];
    }

    #[Test]
    #[DataProvider('booleanSpellings')]
    public function booleanSettingsAcceptCommonSpellings(mixed $value, bool $expected): void
    {
        $service = $this->service(['frontendEnabled' => $value]);

        self::assertSame($expected, $service->isFrontendEnabled());
    }

    #[Test]
    public function toolbarPositionAndContextGateAreParsedIntoEnums(): void
    {
        $service = $this->service(['toolbarPosition' => 'top-left', 'contextGate' => 'All contexts']);
        self::assertSame(ToolbarPosition::TopLeft, $service->getToolbarPosition());
        self::assertSame(ContextGate::AllContexts, $service->getContextGate());

        $service = $this->service(['toolbarPosition' => 'nowhere', 'contextGate' => 'garbage']);
        self::assertSame(ToolbarPosition::BottomRight, $service->getToolbarPosition());
        self::assertSame(ContextGate::Development, $service->getContextGate());
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
        $service = $this->service(['additionalOptions' => $raw]);

        self::assertSame($expected, $service->getAdditionalOptions());
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
    public function contextGateIsEvaluatedAgainstTheApplicationContext(string $gate, string $context, bool $expected): void
    {
        $this->switchApplicationContext($context);
        $service = $this->service(['contextGate' => $gate]);

        self::assertSame($expected, $service->isContextAllowed());
    }

    /**
     * @param array<string, mixed> $configuration
     */
    private function service(array $configuration): ConfigurationService
    {
        $extensionConfiguration = $this->createMock(ExtensionConfiguration::class);
        $extensionConfiguration->method('get')->with('agentation')->willReturn($configuration);
        return new ConfigurationService($extensionConfiguration);
    }

    private function switchApplicationContext(string $context): void
    {
        Environment::initialize(
            new ApplicationContext($context),
            Environment::isCli(),
            Environment::isComposerMode(),
            Environment::getProjectPath(),
            Environment::getPublicPath(),
            Environment::getVarPath(),
            Environment::getConfigPath(),
            Environment::getCurrentScript(),
            Environment::isWindows() ? 'WINDOWS' : 'UNIX'
        );
    }
}
