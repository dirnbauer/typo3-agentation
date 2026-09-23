<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Core\Http\NormalizedParams;
use Webconsulting\Agentation\Service\ProxyToken;
use Webconsulting\Agentation\Service\SyncProxy;
use Webconsulting\Agentation\Service\ToolbarGate;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * The frontend twin of the backend AJAX proxy: the toolbar on an HTTPS
 * frontend page cannot call http://localhost:4747 either (mixed content), so
 * its sync calls go to `<site path>_agentation/api/proxy?token=…&path=…` on
 * the page's own origin, and PHP forwards them to the configured sync
 * endpoint through {@see SyncProxy}.
 *
 * It answers only a logged-in backend user for whom the frontend toolbar is
 * on (context gate, global switch, User Settings and Admin Panel, exactly
 * what renders the toolbar) and only with the token of that user's session,
 * which {@see ProxyToken} puts into the toolbar's proxy URL. Every other
 * request passes through untouched. It runs after the frontend backend-user
 * authentication and before page resolution, so the fixed path works on every
 * site of the installation.
 */
#[Autoconfigure(public: true)]
final readonly class FrontendSyncProxy implements MiddlewareInterface
{
    /** Below the site path of the installation, usually "/". */
    public const string PATH = '_agentation/api/proxy';

    public function __construct(
        private ExtensionSettings $settings,
        private ToolbarSettings $toolbar,
        private ToolbarGate $gate,
        private ProxyToken $token,
        private SyncProxy $proxy,
    ) {}

    #[\Override]
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        if ($request->getUri()->getPath() !== self::path($request)) {
            return $handler->handle($request);
        }

        $user = $this->gate->loggedInBackendUser();
        if (!$this->settings->contextAllowed || !$this->settings->frontendEnabled || $user === null) {
            return self::noStore(SyncProxy::error('notAllowed', 403));
        }
        if (!$this->toolbar->isFrontendToolbarActive($user)) {
            return self::noStore(SyncProxy::error('toolbarDisabled', 403));
        }
        $token = $request->getQueryParams()['token'] ?? '';
        if (!is_string($token) || !$this->token->isValid($token, $user)) {
            return self::noStore(SyncProxy::error('invalidToken', 403));
        }

        return self::noStore($this->proxy->forwardWidgetCall($request));
    }

    /**
     * The proxy's path on this installation: the site path TYPO3 runs below
     * plus {@see PATH}.
     */
    public static function path(ServerRequestInterface $request): string
    {
        $normalizedParams = $request->getAttribute('normalizedParams');
        $sitePath = $normalizedParams instanceof NormalizedParams ? $normalizedParams->getSitePath() : '/';
        return rtrim($sitePath, '/') . '/' . self::PATH;
    }

    private static function noStore(ResponseInterface $response): ResponseInterface
    {
        return $response->withHeader('Cache-Control', 'no-store')->withHeader('X-Robots-Tag', 'noindex');
    }
}
