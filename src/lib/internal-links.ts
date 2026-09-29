import type { PageId } from '../data/i18n';
import { getLocalizedPath } from '../data/i18n/routing';
import type { LocaleCode } from '../data/i18n/locales';

export type InternalLink = {
	label: string;
	href: string;
};

type NavLabels = {
	esp: string;
	aimbot: string;
	features: string;
	setup: string;
	pricing: string;
	updates: string;
	faq: string;
};

/** Core product funnel links reused across pricing, reviews, and blog CTAs. */
export function getProductRelatedLinks(locale: LocaleCode, labels: NavLabels): InternalLink[] {
	return [
		{ label: labels.esp, href: getLocalizedPath('dbd-esp', locale) },
		{ label: labels.aimbot, href: getLocalizedPath('dbd-aimbot', locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale) },
		{ label: labels.setup, href: getLocalizedPath('setup', locale) },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale) },
	];
}

/** Homepage explore hub — deep links not duplicated in the primary navbar. */
export function getHomeExploreLinks(locale: LocaleCode): InternalLink[] {
	return [
		{ label: 'Dead by Daylight Cheats guide', href: getLocalizedPath('hacks', locale) },
		{ label: 'Dead by Daylight ESP', href: getLocalizedPath('dbd-esp', locale) },
		{ label: 'Dead by Daylight Aimbot', href: getLocalizedPath('dbd-aimbot', locale) },
		{ label: 'Dead by Daylight wallhack', href: getLocalizedPath('wallhack', locale) },
		{ label: 'Dead by Daylight radar', href: getLocalizedPath('radar', locale) },
		{ label: 'Setup guide', href: getLocalizedPath('setup', locale) },
		{ label: 'Guides hub', href: '/guides/' },
		{ label: 'Dead by Daylight blog', href: '/blog/' },
	];
}

/** Blog and review footer product shortcuts. */
export function getBlogProductLinks(locale: LocaleCode, labels: NavLabels): InternalLink[] {
	return [
		{ label: 'Dead by Daylight Cheats', href: getLocalizedPath('hacks', locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale) },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale) },
		{ label: 'Reviews', href: '/reviews/' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale) },
		{ label: labels.updates, href: getLocalizedPath('updates', locale) },
	];
}

/** Map review tags to the most relevant product or support page. */
export const reviewTagLinks: Record<string, string> = {
	'Soft aim': '/dbd-aimbot/',
	Extraction: '/dbd-esp/',
	'Open World': '/dbd-esp/',
	'generator routes': '/dbd-aimbot/',
	'Cloud DMA': '/dbd-cheats/',
	Controller: '/dbd-aimbot/',
	Setup: '/setup/',
	Ranked: '/dbd-aimbot/',
	Squads: '/dbd-radar/',
	Updates: '/updates/',
};

export function getReviewTagHref(tag: string | undefined): string | undefined {
	if (!tag) return undefined;
	return reviewTagLinks[tag];
}

/** Contextual related links for inner pages — extends the core funnel where relevant. */
export function getPageRelatedLinks(
	pageId: PageId,
	locale: LocaleCode,
	labels: NavLabels,
): InternalLink[] {
	const core = getProductRelatedLinks(locale, labels);
	const extras: Partial<Record<PageId, InternalLink[]>> = {
		hacks: [
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		'dbd-esp': [
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		'dbd-aimbot': [
			{ label: 'Soft aim', href: getLocalizedPath('soft-aim', locale) },
			{ label: 'ESP', href: getLocalizedPath('dbd-esp', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		wallhack: [
			{ label: 'ESP', href: getLocalizedPath('dbd-esp', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
		],
		radar: [
			{ label: 'ESP', href: getLocalizedPath('dbd-esp', locale) },
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
		],
		features: [{ label: 'Reviews', href: '/reviews/' }, { label: 'Blog', href: '/blog/' }],
		pricing: [
			{ label: labels.faq, href: getLocalizedPath('faq', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		setup: [
			{ label: labels.updates, href: getLocalizedPath('updates', locale) },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
		],
		updates: [
			{ label: 'Undetected guide', href: getLocalizedPath('undetected', locale) },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
		],
		faq: [
			{ label: 'Dead by Daylight guides', href: '/blog/' },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		support: [
			{ label: labels.faq, href: getLocalizedPath('faq', locale) },
			{ label: 'Refund policy', href: getLocalizedPath('refund', locale) },
		],
	};

	const merged = [...core, ...(extras[pageId] ?? [])];
	const seen = new Set<string>();
	return merged.filter((link) => {
		if (seen.has(link.href)) return false;
		seen.add(link.href);
		return true;
	});
}
