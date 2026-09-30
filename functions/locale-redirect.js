/**
 * Homepage locale soft-redirects are disabled.
 * Auto Accept-Language / geo / cookie redirects caused Google Search Console
 * "Page fetch: Redirect error" and blocked indexing of https://dbdcheat.net/.
 * Locale choice stays client-side via the language switcher only.
 */
export function getHomeLocaleRedirect(_pathname, _search, _headers) {
	return null;
}
