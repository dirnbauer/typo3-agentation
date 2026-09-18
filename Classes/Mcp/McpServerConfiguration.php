<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Mcp;

use Webconsulting\Agentation\Settings\ExtensionSettings;

/**
 * The `agentation-mcp` server entry a coding agent needs, in the three
 * formats System > Agentation offers: an MCP JSON block, a Cursor deep
 * link and a `claude mcp add` command.
 *
 * The MCP server is the separate npm package `agentation-mcp` (not a
 * subcommand of `agentation`); its binary runs as `agentation-mcp server`.
 */
final readonly class McpServerConfiguration
{
    public const string NAME = 'agentation';

    private const string COMMAND = 'npx';
    private const array ARGUMENTS = ['-y', 'agentation-mcp', 'server'];

    public function __construct(
        private ExtensionSettings $settings,
    ) {}

    /**
     * @return array{command: string, args: list<string>, env?: array<string, string>}
     */
    public function serverEntry(): array
    {
        $entry = ['command' => self::COMMAND, 'args' => self::ARGUMENTS];
        $env = array_filter([
            'AGENTATION_API_KEY' => $this->settings->apiKey,
            'AGENTATION_WORKSPACE' => $this->settings->workspaceId,
        ], static fn(string $value): bool => $value !== '');
        if ($env !== []) {
            $entry['env'] = $env;
        }
        return $entry;
    }

    /**
     * Pretty-printed `mcpServers` block for .mcp.json / Cursor / Windsurf.
     */
    public function json(): string
    {
        return json_encode(
            ['mcpServers' => [self::NAME => $this->serverEntry()]],
            JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR
        );
    }

    public function cursorDeepLink(): string
    {
        $config = json_encode($this->serverEntry(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        return 'cursor://anysphere.cursor-deeplink/mcp/install?name=' . self::NAME
            . '&config=' . rawurlencode(base64_encode($config));
    }

    public function claudeCodeCommand(): string
    {
        $entry = $this->serverEntry();
        $parts = ['claude mcp add ' . self::NAME];
        foreach ($entry['env'] ?? [] as $key => $value) {
            $parts[] = '--env ' . escapeshellarg($key . '=' . $value);
        }
        $parts[] = '--';
        $parts[] = escapeshellarg($entry['command']);
        foreach ($entry['args'] as $argument) {
            $parts[] = escapeshellarg($argument);
        }
        return implode(' ', $parts);
    }
}
