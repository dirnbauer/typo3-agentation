<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Mcp;

use PHPUnit\Framework\Attributes\Test;
use Webconsulting\Agentation\Mcp\McpServerConfiguration;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

final class McpServerConfigurationTest extends AgentationTestCase
{
    #[Test]
    public function localModeNeedsNoEnvironment(): void
    {
        $mcp = new McpServerConfiguration($this->extensionSettings());

        self::assertSame(['command' => 'npx', 'args' => ['-y', 'agentation-mcp', 'server']], $mcp->serverEntry());
        self::assertSame("claude mcp add agentation -- 'npx' '-y' 'agentation-mcp' 'server'", $mcp->claudeCodeCommand());
        self::assertStringNotContainsString('env', $mcp->json());
    }

    #[Test]
    public function theApiKeyBecomesTheOnlyEnvironmentVariable(): void
    {
        $mcp = new McpServerConfiguration($this->extensionSettings(['apiKey' => 'k3y', 'workspaceId' => 'ws-1']));

        self::assertSame(['AGENTATION_API_KEY' => 'k3y'], $mcp->serverEntry()['env'] ?? null);
        self::assertSame(
            "claude mcp add agentation --env 'AGENTATION_API_KEY=k3y' -- 'npx' '-y' 'agentation-mcp' 'server'",
            $mcp->claudeCodeCommand()
        );
    }

    #[Test]
    public function theProjectIdentifierIsNotAnMcpSetting(): void
    {
        // agentation-mcp reads no workspace variable; the identifier only
        // travels with webhook submissions.
        $mcp = new McpServerConfiguration($this->extensionSettings(['workspaceId' => 'ws-1']));

        self::assertArrayNotHasKey('env', $mcp->serverEntry());
    }

    #[Test]
    public function jsonIsAPrettyPrintedMcpServersBlock(): void
    {
        $json = (new McpServerConfiguration($this->extensionSettings(['apiKey' => 'k3y'])))->json();

        self::assertStringContainsString("\n", $json);
        self::assertSame(
            ['mcpServers' => ['agentation' => ['command' => 'npx', 'args' => ['-y', 'agentation-mcp', 'server'], 'env' => ['AGENTATION_API_KEY' => 'k3y']]]],
            json_decode($json, true, 8, JSON_THROW_ON_ERROR)
        );
    }

    #[Test]
    public function cursorDeepLinkCarriesTheServerEntryBase64Encoded(): void
    {
        $mcp = new McpServerConfiguration($this->extensionSettings(['apiKey' => 'k3y']));
        $link = $mcp->cursorDeepLink();

        self::assertStringStartsWith('cursor://anysphere.cursor-deeplink/mcp/install?name=agentation&config=', $link);
        parse_str((string)parse_url($link, PHP_URL_QUERY), $query);
        self::assertIsString($query['config'] ?? null);
        self::assertSame($mcp->serverEntry(), json_decode((string)base64_decode($query['config'], true), true, 8, JSON_THROW_ON_ERROR));
    }
}
