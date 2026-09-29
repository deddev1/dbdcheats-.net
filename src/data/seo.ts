/**
 * Site-wide SEO keyword cluster — optimized for dbdcheat.net
 */
export const primaryKeyword = 'Dead by Daylight Cheats';

export const siteBrand = 'Dead by Daylight Cheats';
export const siteDomain = 'dbdcheat.net';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Dead by Daylight Cheats',
	'dbd cheats',
	'dbd hacks',
	'dbd hack',
	'dead by daylight esp',
	'dead by daylight aimbot',
	'dead by daylight wallhack',
	'dbd radar hack',
	'undetected dead by daylight cheats',
	'dead by daylight cheats 2026',
	'dbd cheats pc',
	'dbd soft aim',
	'dbd mod menu',
	'buy dbd cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Dead by Daylight Cheats 2026 | ESP, Aimbot & Hacks for PC';
export const defaultDescription =
	'Dead by Daylight cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Dead by Daylight Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | dbdcheat.net`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('dbd')) return lead.slice(0, 160);
	return `Dead by Daylight cheats — ${lead}`.slice(0, 160);
}
