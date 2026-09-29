import { gameplayImages } from './gameplay-images';

export const siteConfig = {
	name: 'Dead by Daylight Cheats',
	url: 'https://dbdcheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@dbdcheat.net',
	logo: '/favicon.png',
	logoRaster: '/favicon.png',
	logoRasterWidth: 192,
	logoRasterHeight: 192,
	logoAlt: 'DBD Cheats logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fdead-by-daylight',
	defaultOgImage: gameplayImages.cheatMenuUi.src,
} as const;

export const productInfo = {
	name: 'Dead by Daylight Cheats',
	shortName: 'DBD',
	brand: 'Dead by Daylight Cheats',
	tagline: 'Dead by Daylight cheats for PC — ESP, aimbot, and wallhack with updates after anti-cheat patches',
	summary:
		'Dead by Daylight Cheats is a Windows PC package with ESP, aimbot, and wallhack for Dead by Daylight. It works in survivor trials, killer matches, and Fog map looping, and we update it after anti-cheat and game patches.',
	game: 'Dead by Daylight',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Dead by Daylight or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Killer & survivor ESP across survival, multiplayer, and Fog map looping',
			'Enemy unit, killers, and killers outlines through terrain and obstacles',
			'Health and status markers for killers and survivors',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for group fights',
		],
		aimbot: [
			'Smooth aim targeting for survivor items, killer powers, and flashlights',
			'Smoothness, FOV, and sensitivity controls',
			'Headshot priority and target selection options',
			'Hotkey toggles mid-combat without opening menus',
			'Per-weapon profiles for flashlights, toolboxes, and medkits',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and chase pressures',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Dead by Daylight patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Combat assist',
		columns: 1 as const,
		items: [
			'Line-of-sight visibility check',
			'Custom FOV arc',
			'FOV circle overlay',
			'Target snapline',
			'Custom aim hotkey',
			'Hold & toggle aim modes',
			'Aim smoothing slider',
			'Target type filter',
			'Headshot targeting',
			'Per-weapon profiles',
		],
	},
	{
		title: 'ESP & overlays',
		columns: 1 as const,
		items: [
			'Killer, survivor & totem ESP',
			'Outlines through terrain',
			'Player bounding boxes',
			'Headshot markers',
			'Player facing indicator',
			'Player name labels',
			'Distance readout',
			'ESP distance filter',
			'Health orb & pickup ESP',
			'Killer & special ability ESP',
		],
	},
	{
		title: 'Radar & mission tools',
		columns: 2 as const,
		items: [
			'2D off-screen radar',
			'Defense wave direction cues',
			'In-session hotkey toggles',
			'Hotkey profiles',
			'Controller support',
			'Patch maintenance status',
			'In-game mod menu',
			'Totem & chest markers',
			'Status and cooldown tracking',
			'Custom crosshair',
			'Squad colour coding',
			'Survivor & killer presets',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Combat assist',
		summary:
			'Configurable aim assistance for survivor items, killer powers, and flashlights — tuned for survival, multiplayer, and Fog map looping.',
		items: [
			{
				name: 'Line-of-sight visibility check',
				description:
					'Only locks onto enemies your character can actually hit — reduces obvious snaps through walls and walls and structure.',
			},
			{
				name: 'Custom FOV arc',
				description:
					'Set how wide the aimbot scans for killers and survivors so close fights and sniper lanes both feel natural.',
			},
			{
				name: 'FOV circle overlay',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning in killer chases and map loops.',
			},
			{
				name: 'Target snapline',
				description:
					'Snapline from crosshair to the current lock — useful for verifying headshot priority on killers and tough killers.',
			},
			{
				name: 'Custom aim hotkey',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings on Windows PC.',
			},
			{
				name: 'Hold & toggle aim modes',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim smoothing slider',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more natural in public lobbies.',
			},
			{
				name: 'Target type filter',
				description:
					'Prioritise closest enemy, lowest health, killers, or bosses like killers and power states.',
			},
			{
				name: 'Headshot targeting',
				description:
					'Bias locks toward headshot hitboxes on killers and survivors.',
			},
			{
				name: 'Per-weapon profiles',
				description:
					'Save separate aim settings for rifles, shotguns, snipers, and melee — swap mid-session without retuning.',
			},
		],
	},
	{
		id: 'visual',
		title: 'ESP & overlays',
		summary:
			'ESP and wallhack overlays that surface enemies, loot, and mission threats through terrain and map cover.',
		items: [
			{
				name: 'Killer, survivor & totem ESP',
				description:
					'Highlights killers and survivors with boxes, health bars, and distance readouts across the Dead by Daylight map roster.',
			},
			{
				name: 'Outlines through terrain',
				description:
					'Clean outlines on killers and survivors — even through smoke, cover, and map cover.',
			},
			{
				name: 'Player bounding boxes',
				description: 'Box ESP sized to each unit type for precise reads during melee combat and The Fog map loops.',
			},
			{
				name: 'Headshot markers',
				description: 'Mark headshot hitboxes for precision shots on killers, killers, and tough killer chases.',
			},
			{
				name: 'Player facing indicator',
				description: 'See which way an enemy is facing before you push a corridor or capture a exit-gate zone.',
			},
			{
				name: 'Player name labels',
				description: 'Display unit names above ESP boxes — killers, survivors, totems, and pallets.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or abilities.',
			},
			{
				name: 'ESP distance filter',
				description:
					'Hide far-away clutter — keep overlays readable in MacMillan Estate and Autohaven Wreckers, and chase pressure.',
			},
			{
				name: 'Health orb & pickup ESP',
				description: 'Mark chests, totems, and items during long survival and map loops.',
			},
			{
				name: 'Killer & special ability ESP',
				description:
					'Dedicated styling for killers, power states, and chase threats in endgame chases.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Radar & mission tools',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D off-screen radar',
				description: 'Minimap-style blips for enemies outside your camera — great for killer chases, survival, and generator routes.',
			},
			{
				name: 'Defense wave direction cues',
				description: 'Directional hints when new enemy waves push toward your base defense or survival objective.',
			},
			{
				name: 'In-session hotkey toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-session without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Patch maintenance status',
				description: 'Maintenance status published on Updates after Behaviour Interactive and Dead by Daylight patches.',
			},
			{
				name: 'In-game mod menu',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Totem & chest markers',
				description: 'Highlight resources, items, and containers during generator routes, totem hunts, and Fog map loops.',
			},
			{
				name: 'Status and cooldown tracking',
				description: 'Track enemy status timers and your own cooldowns during complex killer power fights.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Squad colour coding',
				description: 'Separate colours for your squad members, allies, and enemies in public lobbies.',
			},
			{
				name: 'Survivor & killer presets',
				description:
					'One-click ESP and radar profiles tuned for chase pressure and matchmaking and rank settings.',
			},
		],
	},
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Dead by Daylight Cheats is live for Dead by Daylight on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Dead by Daylight Cheats', href: '/dbd-cheats/' },
	{ label: 'Dead by Daylight ESP', href: '/dbd-esp/' },
	{ label: 'Dead by Daylight Aimbot', href: '/dbd-aimbot/' },
	{ label: 'Dead by Daylight wallhack', href: '/dbd-wallhack/' },
	{ label: 'Undetected status', href: '/dbd-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/dbd-cheats/' },
	{ label: 'Aimbot', href: '/dbd-aimbot/' },
	{ label: 'ESP', href: '/dbd-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Dead by Daylight update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Dead by Daylight Cheats', href: '/dbd-cheats/' },
	{ label: 'ESP', href: '/dbd-esp/' },
	{ label: 'Aimbot', href: '/dbd-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		category: 'Getting started',
		question: 'What is Dead by Daylight Cheats?',
		answer:
			'Dead by Daylight Cheats is a maintained Windows PC package for <a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">Dead by Daylight</a> with <a href="/dbd-esp/">ESP page</a>, <a href="/dbd-wallhack/">wallhack</a>, <a href="/dbd-radar/">radar</a>, and <a href="/dbd-aimbot/">aimbot</a> controls. One license covers the full feature set plus <a href="/setup/">setup help</a>.',
	},
	{
		category: 'Getting started',
		question: 'What is included in one license?',
		answer:
			'Killer & survivor ESP boxes, health and loot markers, 2D radar overlays, and configurable aim assist — including per-weapon profiles and optional cloud DMA. See the <a href="/features/">full feature list</a> and compare <a href="/pricing/">license plans</a>.',
	},
	{
		category: 'Getting started',
		question: 'How are licenses delivered after checkout?',
		answer:
			'Licenses are delivered digitally after payment clears. Delivery timing can vary slightly by payment method. Keep your order confirmation handy if you contact <a href="/support/">our support team</a>.',
	},
	{
		category: 'Features & gameplay',
		question: 'Does this work for survivor trials, killer matches, and The Fog?',
		answer:
			'Yes. ESP and radar help you read enemy positions in survivor trials and during chases, and <a href="/blog/dbd-totem-generator-guide/">The Fog</a> towns like MacMillan Estate, Autohaven Wreckers, and Coldwind Farm. Aim assist covers flashlight, toolbox, and medkit profiles for solo or multiplayer.',
	},
	{
		category: 'Features & gameplay',
		question: 'Can I use a controller?',
		answer:
			'Controller support is available on Windows PC with adjustable FOV and aim settings. Menu navigation with a pad takes a little practice — see the <a href="/setup/">setup guide</a> for baseline values and <a href="/reviews/">player reviews</a> from controller players.',
	},
	{
		category: 'Features & gameplay',
		question: 'What is cloud DMA and do I need it?',
		answer:
			'Cloud DMA is an optional setup path for buyers who want hardware-assisted isolation instead of a standard loader. Most players start with the regular package. Read the <a href="/dbd-cheats/">main guide</a> and ask <a href="/support/">support</a> before choosing DMA.',
	},
	{
		category: 'Updates & support',
		question: 'Is Dead by Daylight Cheats permanently undetected?',
		answer:
			'No tool can promise permanent undetected status. Dead by Daylight is maintained by <a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">Behaviour Interactive</a> and receives regular patches. We rebuild after anti-cheat updates and post status on the <a href="/updates/">status page</a> — check there before you load in.',
	},
	{
		category: 'Updates & support',
		question: 'Where do I check status after a Dead by Daylight patch?',
		answer:
			'Start with our <a href="/updates/">Updates page</a>, then cross-check <a href="https://forum.deadbydaylight.com/en/categories/patch-notes" target="_blank" rel="noopener noreferrer">official PC update notes</a>. For how patches affect gameplay, read our <a href="/blog/dbd-patch-notes-guide/">patch notes guide</a>.',
	},
	{
		category: 'Updates & support',
		question: 'How do I contact support?',
		answer:
			'Use the <a href="/support/">Support page</a> or email support@dbdcheat.net with your order ID, Windows version, and a short description of the issue. Refund questions are covered on the <a href="/refund-policy/">refund policy</a> page.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		category: 'Product details',
		question: 'What is a Dead by Daylight wallhack?',
		answer:
			'A Dead by Daylight wallhack is an ESP overlay that highlights killers and survivors through terrain. Dead by Daylight Cheats <a href="/dbd-wallhack/">wallhack</a> includes distance readouts, category toggles, and team colours for survival and open-world The Fog.',
	},
	{
		category: 'Product details',
		question: 'Does Dead by Daylight Cheats include a radar hack?',
		answer:
			'Yes. <a href="/dbd-radar/">2D radar overlays</a> show nearby threats outside your direct view — useful for reading flanks during base defense, survival, and chase pressures.',
	},
	{
		category: 'Product details',
		question: 'How does anti-cheat affect Dead by Daylight Cheats?',
		answer:
			'Anti-cheat monitors Dead by Daylight on Windows PC. After major patches we publish maintenance notes on <a href="/updates/">Updates</a>. Read the <a href="/dbd-cheats/">maintenance guide</a> and our <a href="/blog/undetected-dbd-cheats-eac/">anti-cheat explainer</a> for what to expect on patch day.',
	},
	{
		category: 'Product details',
		question: 'Where can I read Dead by Daylight game guides?',
		answer:
			'Our <a href="/blog/">blog</a> covers Dead by Daylight game modes, survivor tips, killer roster, generator and totem routes, and how to read official patch notes — with links to the <a href="https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki" target="_blank" rel="noopener noreferrer">Dead by Daylight Wiki</a> and <a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">official game guide</a>.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'krypt0_arc',
		title: 'Soft aim in survival',
		rating: 5,
		text: 'Using this for a few weeks in survival. Soft aim feels natural on flashlights and I have not had issues in public lobbies. Took me a bit to figure out the menu layout but after that it has been smooth.',
		short: 'Using this for a few weeks in survival. Soft aim feels natural on flashlights and I have not had issues in public lobbies.',
		slug: 'dbd-soft-aim-review-xkrypt0',
		seoTitle: 'Soft aim review by @krypt0_arc | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @krypt0_arc on soft aim for survival after setup on Windows PC.',
		date: '2026-03-14',
	},
	{
		handle: 'extractR4K',
		title: 'ESP on The Fog',
		rating: 4,
		text: 'ESP helps a lot on MacMillan Estate and Coldwind Farm when you are trying to spot killers around corners before pushing the objective. Radar could be a little bigger on 1080p. Still happy with it for what I paid.',
		short: 'ESP helps on MacMillan Estate and Coldwind Farm when spotting heavies before pushing the objective. Radar could be bigger on 1080p.',
		slug: 'dbd-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP review by @extractR4K | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @extractR4K on ESP boxes and radar during open-world The Fog.',
		date: '2026-02-08',
	},
	{
		handle: 'jakeDMA',
		title: 'Cloud DMA setup',
		rating: 5,
		text: 'I moved over from another tool that got flagged last patch. DMA setup sounded intimidating but support walked me through it on Discord in under an hour. Still running clean after the latest hotfix.',
		short: 'Moved from another tool that got flagged. Support walked me through DMA setup on Discord. Still running after the latest hotfix.',
		slug: 'dbd-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA review by @jakeDMA | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @jakeDMA on cloud DMA setup and patch-day stability.',
		date: '2026-01-22',
	},
	{
		handle: 'padWarMain',
		title: 'Controller support',
		rating: 4,
		text: 'Did not expect controller support to work this well. Aim assist needed some FOV tweaking with my Xbox pad. Opening the menu with a controller is clunky but playable.',
		short: 'Controller support works better than I expected. Needed some FOV tweaks with my Xbox pad.',
		slug: 'dbd-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller review by @padWarMain | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @padWarMain on aim assist and menu use with an Xbox controller.',
		date: '2026-04-02',
	},
	{
		handle: 'stormchaser07',
		title: 'Setup took patience',
		rating: 3,
		text: 'Features are solid once everything is running. First launch was annoying because Windows Defender flagged the loader. Not entirely their fault, but the setup guide could be clearer. Support replied in a couple hours with a fix. ESP and pickup markers work well in Dead by Daylight.',
		short: 'Solid once running. Setup guide could be clearer and Defender flagged the loader at first. Support helped same day.',
		slug: 'dbd-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup review by @stormchaser07 | Dead by Daylight Cheats',
		seoDescription:
			'Honest buyer review from @stormchaser07 on first-time setup and support response time.',
		date: '2026-05-19',
	},
	{
		handle: 'loot_goblin_42',
		title: 'Resource ESP',
		rating: 5,
		text: 'Mostly bought this for totem and chest tracking on long generator routes. Being able to see cooldowns and chests and totems without tabbing around saves a surprising amount of time.',
		short: 'Mostly bought for totem and chest tracking in survival. Cooldown and pickup markers save a lot of time.',
		slug: 'dbd-totem-esp-review-lootgoblinx',
		seoTitle: 'Resource ESP review by @loot_goblin_42 | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @loot_goblin_42 on resource ESP, cooldown markers, and generator routes.',
		date: '2026-06-11',
	},
	{
		handle: 'steelpath42',
		title: 'Weapon profiles',
		rating: 4,
		text: 'Been on this since early access. Separate profiles for flashlight and toolbox actually matter in tight map zones. Only gripe is waiting about a day for an update after one patch. Updates page helped at least.',
		short: 'Separate flashlight and toolbox profiles matter in tight map zones. Waited about a day for one patch update.',
		slug: 'dbd-aimbot-realistic-review-steelpathgrind42',
		seoTitle: 'Aim profiles review by @steelpath42 | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @steelpath42 on per-weapon aim profiles and post-patch update timing.',
		date: '2026-03-28',
	},
	{
		handle: 'vanlife_arc',
		title: 'Radar on hook defense',
		rating: 5,
		text: 'Radar makes chase pressure way less chaotic. Seeing flank routes before they reach your exit gate is huge when you are in a pub squad and nobody is calling killer spawns.',
		short: 'Radar makes chase pressure less chaotic. Seeing flank routes before they reach your exit gate is huge in pub squads.',
		slug: 'dbd-radar-hack-review-vanlifefn',
		seoTitle: 'Radar review by @vanlife_arc | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @vanlife_arc on radar during killer chases and multiplayer.',
		date: '2026-07-03',
	},
	{
		handle: 'patchdaymike',
		title: 'Patch day downtime',
		rating: 4,
		text: 'Every cheat goes down on patch day. Difference here is they posted a status update within a few hours and I was back the next morning. That is about all you can ask for.',
		short: 'Goes down on patch day like everything else. Status update within a few hours and back the next morning.',
		slug: 'dbd-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch day review by @patchdaymike | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @patchdaymike on downtime and communication after a Dead by Daylight patch.',
		date: '2026-02-27',
	},
	{
		handle: 'snipezonly',
		title: 'Sniper profile',
		rating: 5,
		text: 'Sniper profile plus ESP tags is exactly what I wanted for generator and totem routes. No complaints so far.',
		short: 'Sniper profile plus ESP tags is exactly what I wanted for generator and totem routes.',
		slug: 'dbd-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper profile review by @snipezonly | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @snipezonly on the sniper aim profile and ESP tagging.',
		date: '2026-07-21',
	},
	{
		handle: 'nightowl_pc',
		title: 'Monthly sub',
		rating: 4,
		text: 'Started on monthly to test it before committing. Performance has been stable enough that I will probably grab lifetime next sale. Menu is a little crowded but you get used to it.',
		short: 'Started monthly to test it. Stable enough that I will probably grab lifetime next sale.',
		slug: 'dbd-monthly-sub-review-nightowl',
		seoTitle: 'Monthly sub review by @nightowl_pc | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @nightowl_pc on trying the monthly plan before upgrading.',
		date: '2026-05-06',
	},
	{
		handle: 'oldvet_wf',
		title: 'Lifetime key',
		rating: 5,
		text: 'Picked up lifetime after bouncing between free menus for years. Having one package with ESP, aim assist, and radar that actually gets updated is worth it to me.',
		short: 'Picked up lifetime after years of bouncing between free menus. One package that actually gets updated.',
		slug: 'dbd-lifetime-key-review-oldvet',
		seoTitle: 'Lifetime key review by @oldvet_wf | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @oldvet_wf on switching to a lifetime Dead by Daylight Cheats key.',
		date: '2026-01-09',
	},
	{
		handle: 'duoqueue',
		title: 'Playing with a friend',
		rating: 4,
		text: 'Me and a friend both run it for duo survivor trials. ESP and radar make callouts way easier when we are on voice and not staring at the same screen. Wish there was a cleaner way to reset settings between missions.',
		short: 'Friend and I both run it for duo survivor trials. ESP and radar make callouts easier on voice.',
		slug: 'dbd-squad-play-review-duoqueue',
		seoTitle: 'Squad play review by @duoqueue | Dead by Daylight Cheats',
		seoDescription:
			'Buyer review from @duoqueue on using ESP and radar during duo survivor trials.',
		date: '2026-04-18',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating:
		Math.round(
			(customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length) * 10,
		) / 10,
	totalCount: customerReviews.length,
} as const;
