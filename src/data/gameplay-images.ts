/** Supabase-hosted Dead by Daylight cheat gameplay screenshots. */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dbd';

export type GameplayImage = {
	src: string;
	alt: string;
	title: string;
};

const shot = (file: string): string => `${SUPABASE_GAMEPLAY_BASE}/${file}`;

const hero: GameplayImage = {
	src: '/images/dbd-cheats-hero.webp',
	alt: 'Dead by Daylight cheat gameplay — ESP survivor outlines through walls, purple scratch marks, and in-match overlays',
	title: 'Dead by Daylight Cheats hero — ESP gameplay',
};

const espSurvivorsThroughTrees: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200334.png'),
	alt: 'Dead by Daylight killer-view ESP wallhack — green survivor silhouettes and boxes visible through trees with distance markers',
	title: 'Dead by Daylight wallhack ESP through trees',
};

const espKillerGenerators: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200343.png'),
	alt: 'Dead by Daylight killer ESP — green survivor boxes, red and yellow generator progress overlays, and pallet markers through fog and buildings',
	title: 'Dead by Daylight killer ESP with generator progress',
};

const espKillerTracking: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200351.png'),
	alt: 'Dead by Daylight survivor ESP — red killer boxes for Spirit and Executioner plus yellow generator percentage and distance labels',
	title: 'Dead by Daylight killer tracking ESP',
};

const espFullMapLabels: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200432.png'),
	alt: 'Dead by Daylight full ESP overlay — survivor bone boxes, Nemesis killer marker, and labeled generators, pallets, windows, hooks, totems, and chests with distances',
	title: 'Dead by Daylight full-map ESP labels',
};

const espBoneAimTarget: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200443.png'),
	alt: 'Dead by Daylight bone ESP on a hooked survivor with green skeleton overlay, name tag, level info, and nearby generator and pallet distances',
	title: 'Dead by Daylight bone ESP aim target',
};

const espSkeletonObjectLabels: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200536.png'),
	alt: 'Dead by Daylight killer ESP — white survivor skeleton through a pallet plus labeled closets, pallets, totems, and chests across the map',
	title: 'Dead by Daylight skeleton ESP and object labels',
};

const espObjectDistanceIcons: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200632.png'),
	alt: 'Dead by Daylight object ESP — hook, pallet, and generator icons with meter distance readouts from the killer first-person view',
	title: 'Dead by Daylight object distance ESP icons',
};

const espPalletsGensHooks: GameplayImage = {
	src: shot('Screenshot%202026-08-17%20200646.png'),
	alt: 'Dead by Daylight ESP wallhack — pink pallet markers, yellow generator progress, red hooks, green survivor boxes, hatch and exit-gate labels through the Fog',
	title: 'Dead by Daylight pallet generator and hook ESP',
};

/** Live cheat gameplay shots used site-wide — no old-game assets. */
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
	/** Stable aliases for existing page/gallery imports. */
	gameplayStreetCombat: espSurvivorsThroughTrees,
	gameplayHordeDefense: espKillerGenerators,
	gameplayLootRun: espPalletsGensHooks,
	cheatMenuUi: espFullMapLabels,
	cheatClientPanel: espSkeletonObjectLabels,
	cheatEspOverlay: espSurvivorsThroughTrees,
} as const satisfies Record<string, GameplayImage>;
