<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Unit\Service;

use PHPUnit\Framework\Attributes\Test;
use Webconsulting\Agentation\Tests\Unit\AgentationTestCase;

/**
 * The frontend proxy token belongs to one backend session.
 */
final class ProxyTokenTest extends AgentationTestCase
{
    #[Test]
    public function theTokenIsStableForOneSessionAndDiffersBetweenSessions(): void
    {
        $tokens = $this->proxyToken();
        $user = $this->backendUser(sessionId: 'session-a');

        $token = $tokens->for($user);

        self::assertMatchesRegularExpression('/^[0-9a-f]{64}$/', $token);
        self::assertSame($token, $tokens->for($this->backendUser(sessionId: 'session-a')));
        self::assertNotSame($token, $tokens->for($this->backendUser(sessionId: 'session-b')));
        self::assertStringNotContainsString('session-a', $token, 'The session id never leaves the server.');
    }

    #[Test]
    public function onlyTheTokenOfTheCurrentSessionIsValid(): void
    {
        $tokens = $this->proxyToken();
        $user = $this->backendUser(sessionId: 'session-a');

        self::assertTrue($tokens->isValid($tokens->for($user), $user));
        self::assertFalse($tokens->isValid($tokens->for($this->backendUser(sessionId: 'session-b')), $user));
        self::assertFalse($tokens->isValid('', $user));
        self::assertFalse($tokens->isValid(strtoupper($tokens->for($user)), $user));
    }

    #[Test]
    public function aUserWithoutASessionGetsNoToken(): void
    {
        $tokens = $this->proxyToken();
        $user = $this->backendUser(sessionId: '');

        self::assertSame('', $tokens->for($user));
        self::assertFalse($tokens->isValid('', $user));
    }
}
