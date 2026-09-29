/** Supabase-hosted Dead by Daylight cheat gameplay screenshots — shared with src/data/gameplay-images.ts */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dbd';

const shot = (file) => `${SUPABASE_GAMEPLAY_BASE}/${file}`;

const hero = {
	src: shot('Screenshot%202026-08-17%20200326.png'),
	alt: 'Dead by Daylight ESP wallhack — green survivor boxes, yellow generator progress labels, pink pallet markers, and hatch distance readouts on a Fog map',
	title: 'Dead by Daylight Cheats ESP — survivors, generators, pallets, and hatch',
};

const espSurvivorsThroughTrees = {
	src: shot('Screenshot%202026-08-17%20200334.png'),
	alt: 'Dead by Daylight killer-view ESP wallhack — green survivor silhouettes and boxes visible through trees with distance markers',
	title: 'Dead by Daylight wallhack ESP through trees',
};

const espKillerGenerators = {
	src: shot('Screenshot%202026-08-17%20200343.png'),
	alt: 'Dead by Daylight killer ESP — green survivor boxes, red and yellow generator progress overlays, and pallet markers through fog and buildings',
	title: 'Dead by Daylight killer ESP with generator progress',
};

const espKillerTracking = {
	src: shot('Screenshot%202026-08-17%20200351.png'),
	alt: 'Dead by Daylight survivor ESP — red killer boxes for Spirit and Executioner plus yellow generator percentage and distance labels',
	title: 'Dead by Daylight killer tracking ESP',
};

const espFullMapLabels = {
	src: shot('Screenshot%202026-08-17%20200432.png'),
	alt: 'Dead by Daylight full ESP overlay — survivor bone boxes, Nemesis killer marker, and labeled generators, pallets, windows, hooks, totems, and chests with distances',
	title: 'Dead by Daylight full-map ESP labels',
};

const espBoneAimTarget = {
	src: shot('Screenshot%202026-08-17%20200443.png'),
	alt: 'Dead by Daylight bone ESP on a hooked survivor with green skeleton overlay, name tag, level info, and nearby generator and pallet distances',
	title: 'Dead by Daylight bone ESP aim target',
};

const espSkeletonObjectLabels = {
	src: shot('Screenshot%202026-08-17%20200536.png'),
	alt: 'Dead by Daylight killer ESP — white survivor skeleton through a pallet plus labeled closets, pallets, totems, and chests across the map',
	title: 'Dead by Daylight skeleton ESP and object labels',
};

const espObjectDistanceIcons = {
	src: shot('Screenshot%202026-08-17%20200632.png'),
	alt: 'Dead by Daylight object ESP — hook, pallet, and generator icons with meter distance readouts from the killer first-person view',
	title: 'Dead by Daylight object distance ESP icons',
};

const espPalletsGensHooks = {
	src: shot('Screenshot%202026-08-17%20200646.png'),
	alt: 'Dead by Daylight ESP wallhack — pink pallet markers, yellow generator progress, red hooks, green survivor boxes, hatch and exit-gate labels through the Fog',
	title: 'Dead by Daylight pallet generator and hook ESP',
};

export const gameplayImages = {
	hero,
	espSurvivorsThroughTrees,
	espKillerGenerators,
	espKillerTracking,
	espFullMapLabels,
	espBoneAimTarget,
	espSkeletonObjectLabels,
	espObjectDistanceIcons,
	espPalletsGensHooks,
	gameplayStreetCombat: espSurvivorsThroughTrees,
	gameplayHordeDefense: espKillerGenerators,
	gameplayLootRun: espPalletsGensHooks,
	cheatMenuUi: espFullMapLabels,
	cheatClientPanel: espSkeletonObjectLabels,
	cheatEspOverlay: hero,
};

const g = gameplayImages;

export const HERO_IMAGES = {
	home: g.hero.src,
	'dbd-esp': g.espSurvivorsThroughTrees.src,
	'dbd-aimbot': g.espBoneAimTarget.src,
	features: g.espFullMapLabels.src,
	pricing: g.espSkeletonObjectLabels.src,
	setup: g.espObjectDistanceIcons.src,
	updates: g.espPalletsGensHooks.src,
	faq: g.espFullMapLabels.src,
	support: g.espSkeletonObjectLabels.src,
	undetected: g.espKillerGenerators.src,
	wallhack: g.espSurvivorsThroughTrees.src,
	radar: g.espObjectDistanceIcons.src,
	'eac-bypass': g.espKillerGenerators.src,
	'cheats-2026': g.hero.src,
	hacks: g.espSurvivorsThroughTrees.src,
	'cheat-download': g.espSkeletonObjectLabels.src,
	'mod-menu': g.espFullMapLabels.src,
	'soft-aim': g.espBoneAimTarget.src,
	'best-cheats': g.hero.src,
	'aimbot-hack': g.espBoneAimTarget.src,
	'esp-hack': g.espSurvivorsThroughTrees.src,
	'unlock-all': g.espPalletsGensHooks.src,
	privacy: g.espPalletsGensHooks.src,
	refund: g.espPalletsGensHooks.src,
	terms: g.espPalletsGensHooks.src,
};

export const PAGE_IMAGE_ALTS = {
	home: g.hero.alt,
	'dbd-esp': g.espSurvivorsThroughTrees.alt,
	'dbd-aimbot': g.espBoneAimTarget.alt,
	features: g.espFullMapLabels.alt,
	pricing: g.espSkeletonObjectLabels.alt,
	setup: g.espObjectDistanceIcons.alt,
	updates: g.espPalletsGensHooks.alt,
	faq: g.espFullMapLabels.alt,
	support: g.espSkeletonObjectLabels.alt,
	undetected: g.espKillerGenerators.alt,
	wallhack: g.espSurvivorsThroughTrees.alt,
	radar: g.espObjectDistanceIcons.alt,
	'eac-bypass': g.espKillerGenerators.alt,
	'cheats-2026': g.hero.alt,
	hacks: g.espSurvivorsThroughTrees.alt,
	'cheat-download': g.espSkeletonObjectLabels.alt,
	'mod-menu': g.espFullMapLabels.alt,
	'soft-aim': g.espBoneAimTarget.alt,
	'best-cheats': g.hero.alt,
	'aimbot-hack': g.espBoneAimTarget.alt,
	'esp-hack': g.espSurvivorsThroughTrees.alt,
	'unlock-all': g.espPalletsGensHooks.alt,
	privacy: g.espPalletsGensHooks.alt,
	refund: g.espPalletsGensHooks.alt,
	terms: g.espPalletsGensHooks.alt,
};
