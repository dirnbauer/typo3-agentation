<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Crypto\HashAlgo;
use TYPO3\CMS\Core\Crypto\HashService;

/**
 * The token that ties calls to the frontend proxy to the backend user
 * session the toolbar was rendered for.
 *
 * The backend AJAX proxy is protected by the route token of the backend. The
 * frontend proxy answers on a fixed path of the site, so it carries its own:
 * an HMAC of the backend session id, handed to the toolbar in its proxy URL
 * and checked on every call. Another site cannot forge it, and it dies with
 * the session. The session id itself never leaves the server.
 */
final readonly class ProxyToken
{
    private const string PURPOSE = 'agentation-frontend-sync-proxy';

    public function __construct(
        private HashService $hashService,
    ) {}

    public function for(BackendUserAuthentication $user): string
    {
        $session = $user->getSession()->getIdentifier();
        return $session !== '' ? $this->hashService->hmac($session, self::PURPOSE, HashAlgo::SHA256) : '';
    }

    public function isValid(string $token, BackendUserAuthentication $user): bool
    {
        $expected = $this->for($user);
        return $expected !== '' && $token !== '' && hash_equals($expected, $token);
    }
}
