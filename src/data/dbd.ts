import { siteConfig } from './site';
import { gameplayImages } from './gameplay-images';

const g = gameplayImages;

export const dbdHeroImage = g.hero.src;

export type DbdScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** Dead by Daylight cheat gameplay screenshots — hosted on Supabase CDN. */
export const dbdScreenshots = {
	mainMenu: g.espFullMapLabels,
	espOverlay: g.espSurvivorsThroughTrees,
	espBoxes: g.espSurvivorsThroughTrees,
	aimbotMenu: g.espBoneAimTarget,
	radarMinimap: g.espObjectDistanceIcons,
	combatEsp: g.espKillerGenerators,
	survivalEsp: g.espPalletsGensHooks,
	aimbotCombat: g.espKillerTracking,
	openWorldRadar: g.espSkeletonObjectLabels,
	lootEsp: g.espPalletsGensHooks,
	settingsPanel: g.espFullMapLabels,
} as const satisfies Record<string, DbdScreenshot>;

/** Pricing gallery — main viewer + thumbnail strip (no video). */
export const pricingGallery: DbdScreenshot[] = [
	dbdScreenshots.combatEsp,
	dbdScreenshots.espBoxes,
	dbdScreenshots.aimbotCombat,
	dbdScreenshots.mainMenu,
	dbdScreenshots.aimbotMenu,
	dbdScreenshots.openWorldRadar,
	dbdScreenshots.radarMinimap,
	dbdScreenshots.survivalEsp,
];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', DbdScreenshot> = {
	aimbot: dbdScreenshots.aimbotMenu,
	visual: dbdScreenshots.espBoxes,
	misc: dbdScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: DbdScreenshot[] = [
	dbdScreenshots.espBoxes,
	dbdScreenshots.combatEsp,
	dbdScreenshots.aimbotCombat,
	dbdScreenshots.aimbotMenu,
	dbdScreenshots.openWorldRadar,
	dbdScreenshots.radarMinimap,
	dbdScreenshots.survivalEsp,
	dbdScreenshots.mainMenu,
];

const s = dbdScreenshots;

export const dbdImages = {
	hero: dbdHeroImage,
	cover: s.espBoxes.src,
	logo: siteConfig.logo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.aimbotCombat.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.combatEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espBoxes.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.openWorldRadar.src,
	product: [
		{ src: s.espBoxes.src, alt: s.espBoxes.alt },
		{ src: s.combatEsp.src, alt: s.combatEsp.alt },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, alt: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt },
	],
	gallery: [
		{ src: s.espBoxes.src, alt: s.espBoxes.alt, href: '/dbd-esp/' },
		{ src: s.combatEsp.src, alt: s.combatEsp.alt, href: '/dbd-wallhack/' },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt, href: '/dbd-aimbot/' },
		{ src: s.aimbotMenu.src, alt: s.aimbotMenu.alt, href: '/features/' },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt, href: '/dbd-radar/' },
		{ src: s.survivalEsp.src, alt: s.survivalEsp.alt, href: '/dbd-cheats/' },
		{ src: s.openWorldRadar.src, alt: s.openWorldRadar.alt, href: '/features/' },
		{ src: s.mainMenu.src, alt: s.mainMenu.alt, href: '/pricing/' },
	],
	sitemap: [
		{ src: s.espBoxes.src, title: 'Dead by Daylight ESP wallhack through trees', caption: s.espBoxes.alt },
		{ src: s.combatEsp.src, title: 'Dead by Daylight killer ESP generators', caption: s.combatEsp.alt },
		{ src: s.aimbotCombat.src, title: 'Dead by Daylight killer tracking ESP', caption: s.aimbotCombat.alt },
		{ src: s.mainMenu.src, title: 'Dead by Daylight full-map ESP labels', caption: s.mainMenu.alt },
		{ src: s.aimbotMenu.src, title: 'Dead by Daylight bone ESP aim target', caption: s.aimbotMenu.alt },
		{ src: s.openWorldRadar.src, title: 'Dead by Daylight skeleton ESP object labels', caption: s.openWorldRadar.alt },
		{ src: s.radarMinimap.src, title: 'Dead by Daylight object distance ESP', caption: s.radarMinimap.alt },
		{ src: s.survivalEsp.src, title: 'Dead by Daylight pallet generator hook ESP', caption: s.survivalEsp.alt },
	],
} as const;
