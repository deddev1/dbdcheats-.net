import { defineMiddleware } from 'astro:middleware';
import { applySecurityHeaders } from './lib/security-headers.js';

/**
 * Applies security headers during dev/preview.
 * Locale soft-redirects are intentionally disabled — they broke Google
 * Page fetch / indexing. Production host/path redirects stay in functions/_middleware.js.
 */
export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, {
		html: isHtml,
		dev: import.meta.env.DEV,
	});

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
});
