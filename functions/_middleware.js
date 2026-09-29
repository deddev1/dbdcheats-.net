import { getHomeLocaleRedirect } from './locale-redirect.js';

const CANONICAL_ORIGIN = 'https://dbdcheat.net';
const APEX_HOST = 'dbdcheat.net';
const WWW_HOST = 'www.dbdcheat.net';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'overwatchhacks.com',
	'www.overwatchhacks.com',
	'warthunderhacks.net',
	'www.warthunderhacks.net',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warframecheats.net',
	'www.warframecheats.net',
	'projectzomboidcheats.com',
	'www.projectzomboidcheats.com',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/project-zomboid-radar/': '/dbd-radar/',
	'/project-zomboid-radar': '/dbd-radar/',
	'/project-zomboid-wallhack/': '/dbd-wallhack/',
	'/project-zomboid-wallhack': '/dbd-wallhack/',
	'/project-zomboid-aimbot/': '/dbd-aimbot/',
	'/project-zomboid-aimbot': '/dbd-aimbot/',
	'/project-zomboid-esp/': '/dbd-esp/',
	'/project-zomboid-esp': '/dbd-esp/',
	'/project-zomboid-cheats/': '/dbd-cheats/',
	'/project-zomboid-cheats': '/dbd-cheats/',
	'/warframe-radar/': '/dbd-radar/',
	'/warframe-radar': '/dbd-radar/',
	'/warframe-wallhack/': '/dbd-wallhack/',
	'/warframe-wallhack': '/dbd-wallhack/',
	'/warframe-aimbot/': '/dbd-aimbot/',
	'/warframe-aimbot': '/dbd-aimbot/',
	'/warframe-esp/': '/dbd-esp/',
	'/warframe-esp': '/dbd-esp/',
	'/warframe-cheats/': '/dbd-cheats/',
	'/warframe-cheats': '/dbd-cheats/',
	'/sitemap-0.xml': '/sitemap.xml',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/dbd-cheats/',
	'/fortnite-hacks/': '/dbd-cheats/',
	'/fortnite-aimbot': '/dbd-aimbot/',
	'/fortnite-aimbot/': '/dbd-aimbot/',
	'/fortnite-esp': '/dbd-esp/',
	'/fortnite-esp/': '/dbd-esp/',
	'/fortnite-wallhack': '/dbd-wallhack/',
	'/fortnite-wallhack/': '/dbd-wallhack/',
	'/undetected-fortnite-cheats': '/dbd-cheats/',
	'/undetected-fortnite-cheats/': '/dbd-cheats/',
	'/eac-bypass-fortnite': '/dbd-cheats/',
	'/eac-bypass-fortnite/': '/dbd-cheats/',
	'/eac-bypass': '/dbd-cheats/',
	'/eac-bypass/': '/dbd-cheats/',
	'/warzone-aimbot': '/dbd-aimbot/',
	'/warzone-aimbot/': '/dbd-aimbot/',
	'/warzone-esp': '/dbd-esp/',
	'/warzone-esp/': '/dbd-esp/',
	'/ricochet-bypass': '/dbd-cheats/',
	'/ricochet-bypass/': '/dbd-cheats/',
	'/arc-raiders-hacks': '/dbd-cheats/',
	'/arc-raiders-hacks/': '/dbd-cheats/',
	'/arc-raiders-esp': '/dbd-esp/',
	'/arc-raiders-esp/': '/dbd-esp/',
	'/arc-raiders-aimbot': '/dbd-aimbot/',
	'/arc-raiders-aimbot/': '/dbd-aimbot/',
	'/arc-raiders-wallhack': '/dbd-wallhack/',
	'/arc-raiders-wallhack/': '/dbd-wallhack/',
	'/arc-raiders-radar': '/dbd-radar/',
	'/arc-raiders-radar/': '/dbd-radar/',
	'/overwatch-hacks': '/dbd-cheats/',
	'/overwatch-hacks/': '/dbd-cheats/',
	'/overwatch-esp': '/dbd-esp/',
	'/overwatch-esp/': '/dbd-esp/',
	'/overwatch-aimbot': '/dbd-aimbot/',
	'/overwatch-aimbot/': '/dbd-aimbot/',
	'/overwatch-wallhack': '/dbd-wallhack/',
	'/overwatch-wallhack/': '/dbd-wallhack/',
	'/overwatch-radar': '/dbd-radar/',
	'/overwatch-radar/': '/dbd-radar/',
	'/war-thunder-hacks': '/dbd-cheats/',
	'/war-thunder-hacks/': '/dbd-cheats/',
	'/war-thunder-esp': '/dbd-esp/',
	'/war-thunder-esp/': '/dbd-esp/',
	'/war-thunder-aimbot': '/dbd-aimbot/',
	'/war-thunder-aimbot/': '/dbd-aimbot/',
	'/war-thunder-wallhack': '/dbd-wallhack/',
	'/war-thunder-wallhack/': '/dbd-wallhack/',
	'/war-thunder-radar': '/dbd-radar/',
	'/war-thunder-radar/': '/dbd-radar/',
	'/rust-hacks': '/dbd-cheats/',
	'/rust-hacks/': '/dbd-cheats/',
	'/rust-aimbot': '/dbd-aimbot/',
	'/rust-aimbot/': '/dbd-aimbot/',
	'/rust-esp': '/dbd-esp/',
	'/rust-esp/': '/dbd-esp/',
	'/dbd-cheats': '/dbd-cheats/',
	'/dbd-esp': '/dbd-esp/',
	'/dbd-aimbot': '/dbd-aimbot/',
	'/dbd-wallhack': '/dbd-wallhack/',
	'/dbd-radar': '/dbd-radar/',
	'/dbd-radar-hack': '/dbd-radar/',
	'/dbd-radar-hack/': '/dbd-radar/',
	'/undetected-dbd-cheats': '/dbd-cheats/',
	'/undetected-dbd-cheats/': '/dbd-cheats/',
	'/eac-bypass-dbd': '/dbd-cheats/',
	'/eac-bypass-dbd/': '/dbd-cheats/',
	'/dbd-cheats-2026': '/dbd-cheats/',
	'/dbd-cheats-2026/': '/dbd-cheats/',
	'/best-dbd-cheats': '/dbd-cheats/',
	'/best-dbd-cheats/': '/dbd-cheats/',
	'/dbd-cheat-download': '/pricing/',
	'/dbd-cheat-download/': '/pricing/',
	'/dbd-mod-menu': '/features/',
	'/dbd-mod-menu/': '/features/',
	'/dbd-soft-aim': '/dbd-aimbot/',
	'/dbd-soft-aim/': '/dbd-aimbot/',
	'/dbd-aimbot-hack': '/dbd-aimbot/',
	'/dbd-aimbot-hack/': '/dbd-aimbot/',
	'/dbd-esp-hack': '/dbd-esp/',
	'/dbd-esp-hack/': '/dbd-esp/',
	'/dbd-unlock-all': '/features/',
	'/dbd-unlock-all/': '/features/',
	'/blog/elitefn-vs-dbd-cheats-two-week-test': '/blog/voidcheats-vs-dbd-cheats-two-week-test/',
	'/blog/elitefn-vs-dbd-cheats-two-week-test/': '/blog/voidcheats-vs-dbd-cheats-two-week-test/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self'",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self' 'unsafe-inline'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const homeLocaleRedirect = getHomeLocaleRedirect(
		url.pathname,
		url.search,
		context.request.headers,
	);
	if (homeLocaleRedirect) {
		const headers = new Headers({
			Location: new URL(homeLocaleRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 302, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
