<?php

declare(strict_types=1);

namespace Webconsulting\Agentation\Tests\Functional;

use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Crypto\HashService;
use TYPO3\CMS\Core\Http\MiddlewareStackResolver;
use TYPO3\CMS\Core\Http\Response;
use TYPO3\CMS\Core\Http\ServerRequest;
use TYPO3\TestingFramework\Core\Functional\FunctionalTestCase;
use Webconsulting\Agentation\Middleware\FrontendSyncProxy;
use Webconsulting\Agentation\Service\ProxyToken;

/**
 * The frontend proxy in a real TYPO3 instance: registered in the frontend
 * middleware stack where it sees the backend user and answers before page
 * resolution, and wired so a logged-in user's call really goes out to the
 * configured sync endpoint (unreachable on purpose here).
 */
final class FrontendSyncProxyTest extends FunctionalTestCase
{
    private const int ADMIN_UID = 1;
    private const string UNREACHABLE_ENDPOINT = 'http://127.0.0.1:9';

    protected array $coreExtensionsToLoad = ['adminpanel'];

    protected array $testExtensionsToLoad = ['webconsulting/agentation'];

    protected array $configurationToUseInTestInstance = [
        'EXTENSIONS' => [
            'agentation' => [
                'defaultOptIn' => '1',
                'contextGate' => 'Development and Testing',
                'syncEndpoint' => self::UNREACHABLE_ENDPOINT,
            ],
        ],
    ];

    #[\Override]
    protected function setUp(): void
    {
        parent::setUp();
        $settings = ['agentation_frontend_enabled' => 1, 'agentation_backend_enabled' => 1];
        $this->getConnectionPool()->getConnectionForTable('be_users')->insert('be_users', [
            'uid' => self::ADMIN_UID,
            'username' => 'admin',
            'admin' => 1,
            'uc' => serialize($settings),
            'user_settings' => json_encode($settings, JSON_THROW_ON_ERROR),
        ]);
    }

    #[Test]
    public function theProxyRunsAfterTheBackendUserIsKnownAndBeforeAnyPageIsResolved(): void
    {
        // The resolver lists the stack last-in-first-out; reversed, it is the order of execution.
        $stack = array_reverse(array_keys($this->get(MiddlewareStackResolver::class)->resolve('frontend')->getArrayCopy()));
        $position = array_search('webconsulting/agentation/frontend-sync-proxy', $stack, true);

        self::assertIsInt($position, 'registered in the frontend stack');
        self::assertGreaterThan(array_search('typo3/cms-frontend/backend-user-authentication', $stack, true), $position);
        foreach (['typo3/cms-frontend/base-redirect-resolver', 'typo3/cms-frontend/static-route-resolver', 'typo3/cms-frontend/page-resolver'] as $later) {
            self::assertLessThan(array_search($later, $stack, true), $position, $later);
        }
    }

    #[Test]
    public function withoutABackendUserTheProxyRefusesAndNoPageIsRendered(): void
    {
        $response = $this->get(FrontendSyncProxy::class)->process($this->request(['path' => '/sessions', 'token' => 'guess']), $this->pageHandler());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame('{"error":"notAllowed"}', (string)$response->getBody());
        self::assertSame('no-store', $response->getHeaderLine('Cache-Control'));
    }

    #[Test]
    public function aLoggedInUsersCallGoesToTheConfiguredEndpoint(): void
    {
        $user = $this->setUpBackendUser(self::ADMIN_UID);
        $token = $this->token($user);

        $response = $this->get(FrontendSyncProxy::class)->process($this->request(['path' => '/health', 'token' => $token]), $this->pageHandler());

        self::assertSame(502, $response->getStatusCode());
        $body = json_decode((string)$response->getBody(), true, 8, JSON_THROW_ON_ERROR);
        self::assertIsArray($body);
        self::assertSame('syncUnreachable', $body['error'] ?? null);
        self::assertSame(self::UNREACHABLE_ENDPOINT, $body['endpoint'] ?? null);
        self::assertIsArray($body['tried'] ?? null);
        self::assertSame(self::UNREACHABLE_ENDPOINT, $body['tried'][0] ?? null, 'the configured endpoint first, container aliases after it');
    }

    #[Test]
    public function aLoggedInUserWithoutTheSessionTokenIsRefused(): void
    {
        $this->setUpBackendUser(self::ADMIN_UID);

        $response = $this->get(FrontendSyncProxy::class)->process($this->request(['path' => '/health', 'token' => str_repeat('0', 64)]), $this->pageHandler());

        self::assertSame(403, $response->getStatusCode());
        self::assertSame('{"error":"invalidToken"}', (string)$response->getBody());
    }

    #[Test]
    public function otherPathsReachThePage(): void
    {
        $request = (new ServerRequest('https://typo3-testing.local/about'))
            ->withAttribute('applicationType', SystemEnvironmentBuilder::REQUESTTYPE_FE);

        $response = $this->get(FrontendSyncProxy::class)->process($request, $this->pageHandler());

        self::assertSame('page', $response->getHeaderLine('X-Handled-By'), 'the page handler answered');
    }

    /**
     * The token the toolbar of this user's session carries: what
     * InjectToolbarAssets puts into its proxy URL.
     */
    private function token(BackendUserAuthentication $user): string
    {
        return (new ProxyToken($this->get(HashService::class)))->for($user);
    }

    /**
     * @param array<string, string> $query
     */
    private function request(array $query): ServerRequestInterface
    {
        return (new ServerRequest('https://typo3-testing.local/_agentation/api/proxy?' . http_build_query($query)))
            ->withQueryParams($query)
            ->withAttribute('applicationType', SystemEnvironmentBuilder::REQUESTTYPE_FE);
    }

    /**
     * Stands in for the rest of the frontend stack.
     */
    private function pageHandler(): RequestHandlerInterface
    {
        return new class implements RequestHandlerInterface {
            #[\Override]
            public function handle(ServerRequestInterface $request): ResponseInterface
            {
                return new Response('php://temp', 200, ['X-Handled-By' => 'page']);
            }
        };
    }
}
