import { siteConfig } from './site';
import { dbdImages } from './dbd';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(dbdImages.hero, 'Dead by Daylight Cheats', 'Dead by Daylight Cheats homepage hero'),
		img(dbdImages.espWallhack, 'Dead by Daylight ESP', 'Dead by Daylight ESP wallhack overlay'),
		img(dbdImages.aimbotCombat, 'Dead by Daylight Aimbot', 'Dead by Daylight Aimbot combat preview'),
	],
	hacks: [
		img(dbdImages.battleRoyaleCombat, 'Dead by Daylight Cheats', 'Dead by Daylight cheats survivor trial fight preview'),
		img(dbdImages.espWallhack, 'Dead by Daylight Cheats ESP', 'Dead by Daylight wallhack ESP on killers and survivors'),
	],
	'dbd-esp': [
		img(dbdImages.espWallhack, 'Dead by Daylight ESP', 'Dead by Daylight ESP wallhack overlay'),
		img(dbdImages.playerEsp, 'Dead by Daylight Killer ESP', 'Dead by Daylight Killer ESP markers'),
	],
	'dbd-aimbot': [
		img(dbdImages.aimbotCombat, 'Dead by Daylight Aimbot', 'Dead by Daylight Aimbot combat preview'),
		img(dbdImages.squadFight, 'Dead by Daylight Aimbot group fight', 'Dead by Daylight Aimbot in squad combat'),
	],
	wallhack: [
		img(dbdImages.espWallhack, 'Dead by Daylight Wallhack', 'Dead by Daylight wallhack ESP view'),
		img(dbdImages.cover, 'Dead by Daylight Wallhack overlay', 'Dead by Daylight ESP boxes through terrain'),
	],
	radar: [
		img(dbdImages.radarHack, 'Dead by Daylight Radar Hack', 'Dead by Daylight radar hack minimap overlay'),
		img(dbdImages.rebootFight, 'Dead by Daylight Radar Hack overlay', 'Dead by Daylight 2D radar for flank detection'),
	],
	features: [
		img(dbdImages.loadoutBuilder, 'Dead by Daylight Cheats Features', 'Dead by Daylight Cheats feature overview'),
		img(dbdImages.cheatsPackage, 'Dead by Daylight Cheats menu', 'Dead by Daylight Cheats in-client controls'),
	],
	pricing: [
		img(dbdImages.cover, 'Dead by Daylight Cheats Pricing', 'Dead by Daylight Cheats license plans'),
		img(dbdImages.cheatsPackage, 'Dead by Daylight Cheats package', 'Dead by Daylight Cheats product package'),
	],
	setup: [
		img(dbdImages.squadFight, 'Dead by Daylight Cheats Setup', 'Dead by Daylight Cheats installation guide'),
	],
	updates: [
		img(dbdImages.headerArt, 'Dead by Daylight Cheats Updates', 'Dead by Daylight Cheats patch status'),
	],
	faq: [
		img(dbdImages.loadoutBuilder, 'Dead by Daylight Cheats FAQ', 'Dead by Daylight Cheats frequently asked questions'),
	],
	support: [
		img(dbdImages.headerArt, 'Dead by Daylight Cheats Support', 'Dead by Daylight Cheats help center'),
	],
	privacy: [
		img(dbdImages.cover, 'Dead by Daylight Cheats Privacy Policy', 'Dead by Daylight Cheats privacy policy'),
	],
	refund: [
		img(dbdImages.cover, 'Dead by Daylight Cheats Refund Policy', 'Dead by Daylight Cheats refund policy'),
	],
	terms: [
		img(dbdImages.squadFight, 'Dead by Daylight Cheats Terms', 'Dead by Daylight Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core dbd-cheats URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = dbdImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
