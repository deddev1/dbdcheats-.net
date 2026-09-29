import { HERO_IMAGES, PAGE_IMAGE_ALTS, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Dead by Daylight Cheats 2026 | ESP, Aimbot & Hacks for PC',
		description:
			'Dead by Daylight cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.',
		h1: 'Dead by Daylight Cheats',
		intro:
			'A focused Windows PC package for Dead by Daylight: Killer ESP, aimbot controls, and wallhack overlays with Dead by Daylight anti-cheat maintenance after major patches.',
		imageAlt: 'Dead by Daylight cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Dead by Daylight Cheats visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for chase pressure',
				'Dead by Daylight punishes incomplete information. Dead by Daylight Cheats puts ESP, wallhack, and aimbot in one license so you can read public lobbies, flank pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/dbd-cheats/">Dead by Daylight Cheats guide</a>, <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/dbd-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get Killer ESP, chest or totem markers, radar cues, and aimbot profiles in a single package aimed at Fog trials and generator routes.',
				'Details live on the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'dbd-esp': {
		title: 'Dead by Daylight ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Dead by Daylight ESP wallhack — enemy boxes, health bars, loot markers & distance readouts. Bundled with aimbot & radar in one license.',
		h1: 'Dead by Daylight ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Dead by Daylight. Read killers and survivors, lockers, chests and totems, and pickups, and distance before you commit to a fight — with toggleable ESP wallhack overlays for open-world Fog map looping.',
		imageAlt: 'Dead by Daylight ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Dead by Daylight ESP overlay visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Dead by Daylight wallhack guide',
		ctaSecondaryHref: '/dbd-wallhack/',
		sections: [
			section(
				'What Dead by Daylight ESP solves in combat',
				'Dead by Daylight matches punish incomplete information. Dead by Daylight Cheats ESP wallhack helps you spot killers and survivors early, spot killers before they push your position, and mark chests and totems worth the detour.',
				'In towns, public lobbies, and open-world runs, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Dead by Daylight live updates and map zone changes are published by ${EXT.epic}. When map zones or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Enemy, killers, and player ESP wallhack categories',
				'Toggle killer or survivor outlines, killers threat cues, pickup awareness markers, and loot or chest pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports public lobbies and multiplayer squads alike.',
				'Compare category detail on the <a href="/dbd-wallhack/">wallhack page</a> and pair visibility with the <a href="/dbd-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'killer or survivor ESP outlines with distance',
					'totem and chest markers for faster rotations',
					'killers and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Dead by Daylight Cheats ESP wallhack is maintained for Dead by Daylight with rebuilds after Dead by Daylight anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/dbd-cheats/">anti-cheat maintenance maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first game session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/dbd-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/dbd-cheats/">best Dead by Daylight cheats guide</a> and <a href="/dbd-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'dbd-aimbot': {
		title: 'Dead by Daylight Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Dead by Daylight aimbot with FOV, smoothing & headshot targeting. Per-weapon profiles for rifles, shotguns & snipers. Windows PC.',
		h1: 'Dead by Daylight Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Dead by Daylight combat. Smoothness, FOV, head priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dead by Daylight cheats cheat menu with soft aim, FOV slider, and head priority settings',
		galleryTitle: 'Dead by Daylight Aimbot combat previews',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Aimbot tuned for Dead by Daylight combat pace',
				'Dead by Daylight mixes long-range firearm fights with close-quarters shotgun pushes. Dead by Daylight Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-session.',
				'Head priority and target selection options cover closest enemy, lowest health, or highest-threat targets during group fights and chase pressure and match modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill time windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for flashlights, toolboxes, and medkits. Switch between long-range rifle shots and close-quarters room clears without reopening menus every killer spawn.',
				'Prefer softer tracking? Read the <a href="/dbd-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/dbd-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-radar/">2D radar</a> in the same Dead by Daylight Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Head priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-session',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Dead by Daylight Cheats rebuilds Aimbot behavior when Dead by Daylight anti-cheat or major Dead by Daylight patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/dbd-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Dead by Daylight Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Dead by Daylight cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Dead by Daylight Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Dead by Daylight Cheats package for Dead by Daylight on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Dead by Daylight ESP overlay with killer and survivor boxes and health bars',
		galleryTitle: 'Dead by Daylight Cheats feature gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'killer or survivor ESP wallhack, killers and pickup threat cues, totem and chest markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports public lobbies and survivor trials. Deep-dive the <a href="/dbd-esp/">ESP page</a> and <a href="/dbd-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when map zones rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and hook zones, plus Aimbot smoothness, FOV, head priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Dead by Daylight matches. See <a href="/dbd-radar/">radar</a> and <a href="/dbd-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-session toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@dbdcheat.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/dbd-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Dead by Daylight Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Dead by Daylight cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Dead by Daylight Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Dead by Daylight Cheats — ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Dead by Daylight wallhack ESP showing killers and survivors and killers through objective corners',
		galleryTitle: 'Dead by Daylight Cheats package visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Dead by Daylight Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Dead by Daylight Cheats package — ideal if you play Dead by Daylight regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'killer ESP wallhack, chest or totem markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Dead by Daylight anti-cheat or major Dead by Daylight patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/dbd-cheats/">best Dead by Daylight cheats</a>, <a href="/dbd-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Dead by Daylight Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Dead by Daylight cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Dead by Daylight Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Dead by Daylight Cheats for Dead by Daylight on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Dead by Daylight aimbot hitbox lock on killer or survivor during survivor trial fight',
		galleryTitle: 'Dead by Daylight Cheats setup visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Dead by Daylight Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Dead by Daylight.',
				`Also glance at ${EXT.status} if Dead by Daylight servers look unstable on patch day — a platform outage is not a license fault.`,
				'Dead by Daylight Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemies, pickups, and lockers — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-session. Details for each module live on <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/dbd-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Dead by Daylight or Dead by Daylight anti-cheat patches',
				'When Behaviour Interactive ships a major Dead by Daylight update or Dead by Daylight anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/dbd-cheats/">anti-cheat maintenance page</a> and <a href="/dbd-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Dead by Daylight Cheats Updates | Patch Status Log 2026',
		description:
			'Check Dead by Daylight Cheats patch status for Windows PC. ESP, aimbot & radar rebuild notes after game and anti-cheat updates — verify before you queue.',
		h1: 'Dead by Daylight Cheats Update Log',
		intro:
			'Official maintenance log for Dead by Daylight Cheats on Windows PC. Track ESP, aimbot, and radar rebuild status after Behaviour Interactive patches and anti-cheat updates — check here before you launch.',
		imageAlt:
			'Dead by Daylight Cheats update status screen showing ESP, aimbot, and radar maintenance after a game patch on Windows PC',
		galleryTitle: 'Dead by Daylight cheat maintenance and patch-day visuals',
		ctaPrimary: 'Get Dead by Daylight Cheats',
		ctaSecondary: 'Undetected cheats guide',
		ctaSecondaryHref: '/dbd-cheats/',
		sections: [
			section(
				'Why check Dead by Daylight cheat updates before playing?',
				'Dead by Daylight and its anti-cheat receive regular patches from Behaviour Interactive. When a build changes, ESP wallhack overlays, radar cues, and aimbot profiles may need a maintenance rebuild.',
				`Use ${EXT.status} for launcher health and this page for Dead by Daylight Cheats build status — both matter on patch day.`,
				'Checking the update log before you queue in survivor or killer matches avoids loading an outdated client after major The Fog updates.',
			),
			section(
				'What each maintenance update includes',
				'Entries cover anti-cheat compatibility status, rebuilt ESP wallhack modules, radar range fixes, aimbot tuning after weapon balance changes, and delivery of new builds to active monthly and lifetime licenses.',
				'Lifetime ($150) and monthly ($35) subscribers receive rebuild access during an active license. See <a href="/pricing/">Pricing</a> to renew or upgrade.',
				'For background on why rebuilds happen, read the <a href="/dbd-cheats/">undetected Dead by Daylight cheats guide</a> and <a href="/setup/">Setup</a> walkthrough.',
			),
			section(
				'How to stay undetected after a Dead by Daylight patch',
				'No cheat can guarantee permanent undetected status. Pair maintenance rebuilds with conservative in-game settings and patch-day awareness.',
				`Follow official notes from ${EXT.rust}, then confirm our rebuild is live on this page before you load in.`,
				'Questions after an anti-cheat update? Contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Dead by Daylight Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Dead by Daylight cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Dead by Daylight Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Dead by Daylight Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Dead by Daylight compatibility on Windows PC.',
		imageAlt: 'Dead by Daylight radar hack 2D minimap overlay showing killer chase spawn routes and killers and survivors and killers',
		galleryTitle: 'Dead by Daylight Cheats FAQ visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Dead by Daylight Cheats?',
				'Dead by Daylight Cheats is an undetected cheat package for Dead by Daylight on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover survivor and killer lobbies. Explore <a href="/features/">Features</a> for the full control list and <a href="/dbd-esp/">ESP</a> / <a href="/dbd-aimbot/">Aimbot</a> for module detail.',
				`Dead by Daylight is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate Behaviour Interactive's Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Dead by Daylight Cheats undetected in 2026?',
				'Dead by Daylight Cheats is maintained with rebuilds after Dead by Daylight anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/dbd-cheats/">undetected Dead by Daylight cheats</a> and the <a href="/dbd-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@dbdcheat.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Dead by Daylight Cheats Support | Contact & Help',
		description:
			'Contact Dead by Daylight Cheats support for licenses, setup & billing. Email support@dbdcheat.net with your order ID.',
		h1: 'Dead by Daylight Cheats Support — Contact Us',
		intro:
			'Get help with Dead by Daylight Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Dead by Daylight on Windows PC.',
		imageAlt: 'Dead by Daylight cheats generator routes objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Dead by Daylight Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Dead by Daylight Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Behaviour Interactive bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/dbd-cheats/">Dead by Daylight anti-cheat page</a>.',
				'Email: support@dbdcheat.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Dead by Daylight Cheats 2026 | Anti-cheat safe',
		description:
			'Undetected Dead by Daylight Cheats with anti-cheat maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected Dead by Daylight Cheats — Anti-cheat maintenance',
		intro:
			'How Dead by Daylight Cheats stays maintained for Dead by Daylight after Dead by Daylight anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Dead by Daylight wallhack ESP skeleton boxes on killers and survivors and killers through map geometry',
		galleryTitle: 'Undetected Dead by Daylight Cheats visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/dbd-cheats/',
		sections: [
			section(
				'What undetected means for Dead by Daylight Cheats',
				'Undetected Dead by Daylight Cheats means the package is actively maintained against Dead by Daylight anti-cheat and major Dead by Daylight patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Dead by Daylight anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Dead by Daylight client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Dead by Daylight anti-cheat or Dead by Daylight updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Dead by Daylight outages that can look like product failures.`,
				'Deep technical workflow: <a href="/dbd-cheats/">anti-cheat maintenance Dead by Daylight guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/dbd-cheats/">Dead by Daylight cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Dead by Daylight Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Dead by Daylight wallhack ESP highlights killers and survivors through cover. Toggle categories for trials & The Fog.',
		h1: 'Dead by Daylight Wallhack — ESP Boxes & Visibility',
		intro:
			'Dead by Daylight wallhack ESP for Dead by Daylight — see enemies, pickups, and lockers through toggleable wallhack overlays built for open-world Fog map looping.',
		imageAlt: 'Dead by Daylight wallhack ESP skeleton boxes on killer or survivor hero in Dead by Daylight',
		galleryTitle: 'Dead by Daylight wallhack ESP gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Dead by Daylight ESP page',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Dead by Daylight wallhack focuses on information — enemy outlines, loot pins, killers threat cues — rather than automatic aiming. Dead by Daylight Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and chase pressure.',
				'For the broader ESP keyword page see <a href="/dbd-esp/">Dead by Daylight ESP</a>; for combat assist see <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support generator routes, public lobbies, and generator routes with distance readouts and snaplines for engagement control.',
				`map zone updates and map zone area changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/dbd-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Dead by Daylight anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/dbd-cheats/">undetected Dead by Daylight cheats</a> and <a href="/dbd-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/dbd-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Dead by Daylight Radar Hack 2026 | 2D Minimap for Dead by Daylight',
		description:
			'Dead by Daylight radar hack shows off-screen enemies on a 2D minimap. Directional cues for hook defense, survivor & killer matches.',
		h1: 'Dead by Daylight Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Dead by Daylight — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Dead by Daylight ESP distance markers and killer and survivor health readouts in Dead by Daylight',
		galleryTitle: 'Dead by Daylight radar hack visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Why radar hack matters in Dead by Daylight',
				'Multi-floor map zones stack vertical fights — catwalks, doorways, and side killer spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Dead by Daylight Cheats radar complements <a href="/dbd-esp/">ESP wallhack</a> markers during chase pressures and hook zones.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight chase pressure. Directional cues highlight flanks during building clears and killers pushes across generator routes and public lobbies.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live missions — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/dbd-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Dead by Daylight Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Dead by Daylight patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/dbd-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'Dead by Daylight Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Dead by Daylight Cheats rebuild after Dead by Daylight anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Dead by Daylight Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Dead by Daylight anti-cheat maintenance for Dead by Daylight Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Dead by Daylight security updates.',
		imageAlt: 'Dead by Daylight undetected hacks status with ESP overlay on killers and survivors and killers',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Dead by Daylight anti-cheat overview',
				`Dead by Daylight anti-cheat is Behaviour Interactive’ anti-cheat for Dead by Daylight on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Dead by Daylight Cheats monitors anti-cheat patch notes and Dead by Daylight seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Dead by Daylight service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/dbd-cheats/">undetected Dead by Daylight cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'anti-cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Dead by Daylight Cheats 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best Dead by Daylight cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected Dead by Daylight Cheats with anti-cheat maintenance — compare and buy.',
		h1: 'Dead by Daylight Cheats 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 Dead by Daylight Cheats package for Dead by Daylight — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Dead by Daylight cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Dead by Daylight Cheats 2026 gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Dead by Daylight Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Dead by Daylight anti-cheat updates. Dead by Daylight Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover survivor and killer matches loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'killer ESP wallhack, chest or totem markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/dbd-cheats/">Dead by Daylight Cheats pillar</a>, <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-wallhack/">wallhack</a>, <a href="/dbd-radar/">radar</a>, <a href="/dbd-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/dbd-cheats/">Dead by Daylight Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/dbd-cheats/">best Dead by Daylight cheats</a> checklist, <a href="/blog/dbd-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@dbdcheat.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Undetected Dead by Daylight Cheats 2026 | PC Hacks Guide',
		description:
			'Undetected Dead by Daylight cheats with ESP, aimbot & wallhack for PC. Maintenance after patches, pricing & setup — no permanent undetected promises.',
		h1: 'Dead by Daylight Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Dead by Daylight cheats and hacks for survivor trials, killer matches, and The Fog combine ESP wallhack visibility, 2D radar threat cues, and aimbot controls in one Windows PC license — maintained after Dead by Daylight anti-cheat patches. This is the pillar guide for Dead by Daylight Cheats in 2026.',
		imageAlt: 'Dead by Daylight cheats generator routes objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Dead by Daylight Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/dbd-cheats/',
		sections: [
			section(
				'What Dead by Daylight Cheats include in 2026',
				'Players searching for Dead by Daylight Cheats usually want visibility and combat tools without stacking separate downloads. Dead by Daylight Cheats bundles killer ESP wallhack, chest or totem markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Dead by Daylight cheats.',
				'Coverage spans generator routes and public lobbies with in-client toggles for live missions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Dead by Daylight Cheats vs Dead by Daylight cheats — same stack, clear pages',
				'Searchers use Dead by Daylight Cheats and Dead by Daylight cheats interchangeably. This pillar focuses on hacks language; the <a href="/dbd-cheats/">Dead by Daylight cheats 2026</a> and <a href="/dbd-cheats/">best Dead by Daylight cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/dbd-esp/">Dead by Daylight ESP</a>, <a href="/dbd-aimbot/">Dead by Daylight Aimbot</a>, <a href="/dbd-wallhack/">wallhack</a>, <a href="/dbd-radar/">radar hack</a>, and <a href="/dbd-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/dbd-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/dbd-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-dbd-cheats-eac/">undetected anti-cheat notes</a>.',
			),
			section(
				'Dead by Daylight Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Dead by Daylight Cheats maps the full mission loop: read killers and survivors, track containers and chests and totems, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/dbd-aimbot/">aimbot hack</a>, <a href="/dbd-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Dead by Daylight Cheats with anti-cheat maintenance',
				'Undetected Dead by Daylight Cheats require rebuilds after Dead by Daylight anti-cheat and major Dead by Daylight patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/dbd-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/dbd-cheats/">undetected Dead by Daylight cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Dead by Daylight Hack Download 2026 | Instant Access',
		description:
			'Dead by Daylight cheat download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Dead by Daylight Hack Download — Instant License Delivery',
		intro:
			'How Dead by Daylight cheat download works for Dead by Daylight — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Dead by Daylight wallhack ESP showing killers and survivors and killers through objective corners',
		galleryTitle: 'Dead by Daylight cheat download visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Dead by Daylight cheat download delivery works',
				'After checkout confirms payment, Dead by Daylight Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Dead by Daylight servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Dead by Daylight cheat download includes killer ESP wallhack, totem and chest markers, 2D radar overlays, Aimbot profiles, and in-client toggles for open-world Fog map looping.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Dead by Daylight or Dead by Daylight anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/dbd-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Dead by Daylight Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Dead by Daylight mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected Dead by Daylight Cheats package.',
		h1: 'Dead by Daylight Mod Menu — In-Client Control Panel',
		intro:
			'Dead by Daylight mod menu controls for Dead by Daylight — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-session without leaving your character session on Windows PC.',
		imageAlt: 'Dead by Daylight cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Dead by Daylight mod menu gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Dead by Daylight mod menu controls',
				'A Dead by Daylight mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live missions. Dead by Daylight Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, chest or totem markers, killers cues, and per-weapon Aimbot settings without alt-tabbing out of Dead by Daylight.',
				'Control deep-dives: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for open-world Fog map looping',
				'Separate ESP wallhack categories for players, pickups, lockers, and caches let you reduce overlay noise during rotations and chase pressure.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Dead by Daylight balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/dbd-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Dead by Daylight mod menu behavior is rebuilt when Dead by Daylight anti-cheat or major Dead by Daylight updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/dbd-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Dead by Daylight Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Dead by Daylight aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and head priority — included in our Dead by Daylight Cheats with ESP boxes.',
		h1: 'Dead by Daylight Soft Aim — Smooth Aimbot Controls',
		intro:
			'Dead by Daylight aimbot settings for Dead by Daylight — configurable Aimbot smoothness, FOV, head priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dead by Daylight aimbot ESP boxes and FOV circle on killers and survivors and killers in open-world The Fog',
		galleryTitle: 'Dead by Daylight aimbot gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'What Dead by Daylight aimbot means',
				'Dead by Daylight aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Dead by Daylight Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Head priority and target selection cover closest enemy, lowest health, or highest-threat targets during group fights.',
				'Full Aimbot documentation: <a href="/dbd-aimbot/">Dead by Daylight Aimbot</a>. Alternate wording: <a href="/dbd-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for flashlights, toolboxes, and medkits. Switch between long-range rifle shots and close-quarters room clears with hotkeys mid-session.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Dead by Daylight anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Dead by Daylight Cheats 2026 | Buyer Guide',
		description:
			'Best Dead by Daylight Cheats for 2026: ESP boxes, soft aim, cloud DMA, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Dead by Daylight Cheats — 2026 Buyer Guide',
		intro:
			'Compare the best Dead by Daylight cheats for Dead by Daylight in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Dead by Daylight anti-cheat rebuilds and instant delivery.',
		imageAlt: 'Dead by Daylight wallhack ESP showing killers and survivors and killers through objective corners',
		galleryTitle: 'Best Dead by Daylight cheats gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Dead by Daylight cheats in 2026',
				'The best Dead by Daylight cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Dead by Daylight Cheats covers generator routes and public lobbies with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Dead by Daylight cheats feature checklist',
				'Look for killer ESP wallhack, chest or totem markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Dead by Daylight patches.',
				'Review <a href="/features/">Features</a>, <a href="/dbd-cheats/">undetected status</a>, and <a href="/dbd-cheats/">Dead by Daylight cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Dead by Daylight cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Behaviour Interactive terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Dead by Daylight Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Dead by Daylight aimbot hack with soft aim for PC and controllers. FOV, head priority, and hotkeys — bundled with ESP boxes in our Dead by Daylight Cheats package.',
		h1: 'Dead by Daylight Aimbot Hack — Soft Aim Assist',
		intro:
			'Dead by Daylight aimbot hack tools for Dead by Daylight — smoothness, FOV, head priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dead by Daylight aimbot hack menu with silent aim and head priority toggles',
		galleryTitle: 'Dead by Daylight aimbot hack gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'Dead by Daylight aimbot hack vs visibility tools',
				'A Dead by Daylight aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Dead by Daylight Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Dead by Daylight combat pace across open-world Fog map looping.',
				'Prefer softer tracking language? See <a href="/dbd-aimbot/">soft aim</a>. Full settings: <a href="/dbd-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Head priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-session without opening menus during rotations or hook zones.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Dead by Daylight anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/dbd-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/dbd-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Dead by Daylight ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Dead by Daylight ESP hack with enemy boxes and chest or totem markers for PC and controllers. Undetected Dead by Daylight cheats with cloud DMA — see overlays and buy.',
		h1: 'Dead by Daylight ESP Hack — enemy boxes Guide',
		intro:
			'Dead by Daylight ESP hack overlays for Dead by Daylight — enemy outlines, killers threat cues, totem and chest markers with distance readouts across generator routes and public lobbies.',
		imageAlt: 'Dead by Daylight ESP hack with player skeleton, bounding box, and status tracking labels',
		galleryTitle: 'Dead by Daylight ESP hack gallery',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'What a Dead by Daylight ESP hack shows',
				'A Dead by Daylight ESP hack renders killer or survivor outlines, killers positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during chase pressures and flanking scenarios.',
				'Canonical visibility guide: <a href="/dbd-esp/">Dead by Daylight ESP</a>. Wallhack wording: <a href="/dbd-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for trials',
				'Toggle Killer ESP hack, chest or totem markers, chest pins, and killers cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports public lobbies and survivor trials.',
				`map zone area and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Dead by Daylight anti-cheat and Dead by Daylight patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/dbd-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/dbd-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Dead by Daylight Unlock All 2026 | What It Really Means',
		description:
			'Dead by Daylight unlock all explained vs real Dead by Daylight Cheats — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Dead by Daylight Unlock All — What Players Search For',
		intro:
			'Dead by Daylight unlock all is a common search term for Dead by Daylight — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Dead by Daylight Cheats actually provides on Windows PC.',
		imageAlt: 'Dead by Daylight ESP boxes and distances on killers and survivors and killers in survivor trial',
		galleryTitle: 'Dead by Daylight unlock all guide visuals',
		ctaPrimary: 'Buy Dead by Daylight Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Dead by Daylight unlock all usually means',
				'Dead by Daylight unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Dead by Daylight Cheats focuses on in-match awareness — Killer ESP, chest or totem markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot killers and survivors, lockers, and chests and totems during live missions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, totem and chest markers speed BR rotations — see the <a href="/dbd-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/dbd-cheats/">Dead by Daylight Cheats</a> and <a href="/dbd-cheats/">best Dead by Daylight cheats</a>.',
			),
			section(
				'Buying Dead by Daylight Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Dead by Daylight anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Dead by Daylight Cheats',
		description:
			'Privacy policy for Dead by Daylight Cheats. How we handle support emails, order data, and checkout for Dead by Daylight cheats licenses on dbdcheat.net.',
		h1: 'Dead by Daylight Cheats Privacy Policy',
		intro: 'How Dead by Daylight Cheats handles information when you browse dbdcheat.net or contact support about a Dead by Daylight license.',
		imageAlt: 'Dead by Daylight ESP overlay visual for privacy policy page',
		galleryTitle: 'Dead by Daylight Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Dead by Daylight Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@dbdcheat.net with your request details.',
				'Policy updates publish on this page. Continued use of dbdcheat.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Dead by Daylight Cheats',
		description:
			'Refund policy for Dead by Daylight Cheats. Digital delivery terms and eligibility for Dead by Daylight Cheats packages with ESP, soft aim, and cloud DMA.',
		h1: 'Dead by Daylight Cheats Refund Policy',
		intro:
			'Refund terms for Dead by Daylight Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Dead by Daylight.',
		imageAlt: 'Dead by Daylight ESP overlay visual for refund policy page',
		galleryTitle: 'Dead by Daylight Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Dead by Daylight Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@dbdcheat.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Dead by Daylight Cheats Rules',
		description:
			'Terms of use for dbdcheat.net and Dead by Daylight Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Dead by Daylight Cheats Terms of Use',
		intro: 'Terms governing use of dbdcheat.net and Dead by Daylight Cheats licenses for Dead by Daylight on Windows PC.',
		imageAlt: 'Dead by Daylight ESP overlay visual for terms of use page',
		galleryTitle: 'Dead by Daylight Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Dead by Daylight Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Dead by Daylight on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Dead by Daylight may violate Behaviour Interactive terms and result in account penalties. Dead by Daylight Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/dbd-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@dbdcheat.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
		imageAlt: PAGE_IMAGE_ALTS[pageId] ?? page.imageAlt,
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
