<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Service;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Backend\Module\ModuleInterface;
use TYPO3\CMS\Backend\Routing\Route;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Context\Context;
use TYPO3\CMS\Core\Http\ApplicationType;
use Webconsulting\Agentation\Enum\InjectionScope;
use Webconsulting\Agentation\Settings\ExtensionSettings;
use Webconsulting\Agentation\Settings\ToolbarSettings;

/**
 * Decides whether the toolbar belongs on the response to a request, and in
 * which scope. The asset listener, the page-cache bypass and the CSP
 * listener all ask this one question, so they can never disagree.
 *
 * In order:
 *   - the application-context gate passes (Development by default)
 *   - a backend user is logged in
 *   - frontend: the global frontend switch is on, the page is not rendered
 *     inside a backend preview frame, and the user switched the toolbar on
 *     in User Settings and in the Admin Panel section
 *   - backend: the global backend switch is on, the request renders a
 *     backend module other than System > Agentation, and the user switched
 *     the backend toolbar on in User Settings
 */
final readonly class ToolbarGate
{
    private const string OWN_MODULE = 'agentation';

    public function __construct(
        private ExtensionSettings $settings,
        private ToolbarSettings $toolbar,
        private Context $context,
    ) {}

    public function scopeFor(ServerRequestInterface $request): ?InjectionScope
    {
        $user = $this->loggedInBackendUser();
        if (!$this->settings->contextAllowed || $user === null) {
            return null;
        }

        return match ($this->candidateScope($request)) {
            InjectionScope::Frontend => $this->toolbar->isFrontendToolbarActive($user) ? InjectionScope::Frontend : null,
            InjectionScope::Backend => $this->toolbar->isBackendToolbarEnabled($user) ? InjectionScope::Backend : null,
            null => null,
        };
    }

    /**
     * Both applications keep the authenticated backend user in the global;
     * the Context aspect tells whether that user is actually logged in.
     */
    public function loggedInBackendUser(): ?BackendUserAuthentication
    {
        if ($this->context->getPropertyFromAspect('backend.user', 'isLoggedIn', false) !== true) {
            return null;
        }
        $user = $GLOBALS['BE_USER'] ?? null;

        return $user instanceof BackendUserAuthentication ? $user : null;
    }

    private function candidateScope(ServerRequestInterface $request): ?InjectionScope
    {
        if (!is_int($request->getAttribute('applicationType'))) {
            return null;
        }
        $type = ApplicationType::fromRequest($request);
        if ($type->isFrontend()) {
            return $this->settings->frontendEnabled && !self::isRenderedInsideBackendFrame($request)
                ? InjectionScope::Frontend
                : null;
        }
        if ($type->isBackend()) {
            return $this->settings->backendEnabled && self::rendersForeignModule($request)
                ? InjectionScope::Backend
                : null;
        }

        return null;
    }

    /**
     * TYPO3 renders two documents per backend navigation: the shell and the
     * module content frame. React cannot portal across iframes, so the
     * toolbar mounts only into module frames, where the user edits. Its own
     * management module is excluded: the toolbar's localStorage/EventSource
     * sync would re-push annotations right after the module deleted them.
     */
    private static function rendersForeignModule(ServerRequestInterface $request): bool
    {
        $route = $request->getAttribute('route');
        $module = $route instanceof Route ? $route->getOption('module') : null;

        return $module instanceof ModuleInterface
            && $module->getIdentifier() !== self::OWN_MODULE
            && $module->getParentIdentifier() !== self::OWN_MODULE;
    }

    /**
     * A frontend render served inside a backend preview iframe (visual
     * editor canvas, Page module preview panes, ...) carries the backend
     * URL as same-origin Referer.
     */
    private static function isRenderedInsideBackendFrame(ServerRequestInterface $request): bool
    {
        $referer = $request->getHeaderLine('Referer');
        $host = $request->getUri()->getHost();
        if ($referer === '' || $host === '') {
            return false;
        }
        $port = $request->getUri()->getPort();

        return str_contains($referer, '://' . $host . '/typo3/')
            || ($port !== null && str_contains($referer, '://' . $host . ':' . $port . '/typo3/'));
    }
}
