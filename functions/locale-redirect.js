const LOCALE_COOKIE = 'fc_locale';
const DEFAULT_LOCALE = 'en';
const LOCALE_CODES = new Set([
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
]);

/** Crawlers must always receive the canonical English homepage (no soft geo redirects). */
function isCrawler(headers) {
	const ua = headers.get('user-agent') || '';
	return /googlebot|google-inspectiontool|storebot-google|adsbot-google|apis-google|bingbot|bingpreview|slurp|duckduckbot|baiduspider|yandex|sogou|facebookexternalhit|facebot|twitterbot|linkedinbot|embedly|quora link preview|pinterest|redditbot|applebot|semrush|ahrefs|dotbot|rogerbot|gptbot|claudebot|perplexity|bytespider|petalbot|crawler|spider|bot\b/i.test(
		ua,
	);
}

/**
 * Redirect homepage visitors to their locale folder when appropriate.
 * Full path mapping for inner pages is handled client-side via LocaleSuggest.
 *
 * SEO: never redirect crawlers. Never geo/Accept-Language redirect first visits —
 * those caused Google Search Console "Page fetch / Redirect error" on `/`.
 * Only honor an explicit `fc_locale` cookie (user already chose a language).
 */
export function getHomeLocaleRedirect(pathname, search, headers) {
	if (pathname !== '/' && pathname !== '') return null;
	if (search && new URLSearchParams(search).has('noredirect')) return null;
	if (isCrawler(headers)) return null;

	const cookie = headers.get('cookie');
	const cookieMatch = cookie?.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]+)`));
	const cookieLocale = cookieMatch?.[1]?.trim();
	if (cookieLocale && LOCALE_CODES.has(cookieLocale)) {
		if (cookieLocale === DEFAULT_LOCALE) return null;
		return `/${cookieLocale}/`;
	}

	return null;
}
