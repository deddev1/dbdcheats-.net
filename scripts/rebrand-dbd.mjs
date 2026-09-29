#!/usr/bin/env node
/**
 * Bulk rebrand Project Zomboid Cheats → Dead by Daylight / DBD Cheats (dbdcheat.net)
 */
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'rebrand-dbd.mjs',
	'rebrand-project-zomboid.mjs',
	'rebrand-warframe.mjs',
	'rebrand-war-thunder.mjs',
	'rebrand-overwatch.mjs',
	'rebrand-arc-raiders.mjs',
]);

/** Longest / most specific replacements first. */
const REPLACEMENTS = [
	// Domain & email
	['https://www.projectzomboidcheats.com', 'https://dbdcheat.net'],
	['https://projectzomboidcheats.com', 'https://dbdcheat.net'],
	['http://www.projectzomboidcheats.com', 'https://dbdcheat.net'],
	['http://projectzomboidcheats.com', 'https://dbdcheat.net'],
	['www.projectzomboidcheats.com', 'www.dbdcheat.net'],
	['projectzomboidcheats.com', 'dbdcheat.net'],
	['support@projectzomboidcheats.com', 'support@dbdcheat.net'],
	['support@dbdcheat.net', 'support@dbdcheat.net'],

	// Canonical URL paths (with trailing slash first)
	['/project-zomboid-wallhack/', '/dbd-wallhack/'],
	['/project-zomboid-aimbot/', '/dbd-aimbot/'],
	['/project-zomboid-radar/', '/dbd-radar/'],
	['/project-zomboid-esp/', '/dbd-esp/'],
	['/project-zomboid-cheats/', '/dbd-cheats/'],
	['/project-zomboid-wallhack', '/dbd-wallhack'],
	['/project-zomboid-aimbot', '/dbd-aimbot'],
	['/project-zomboid-radar', '/dbd-radar'],
	['/project-zomboid-esp', '/dbd-esp'],
	['/project-zomboid-cheats', '/dbd-cheats'],

	// Assets & scripts
	['data-zomboid-cheats-video', 'data-dbd-cheats-video'],
	['zomboid-cheats-bg-video.js', 'dbd-cheats-bg-video.js'],
	['zomboid-survival.webp', 'dbd-trial.webp'],
	['zomboid-esp-modules.webp', 'dbd-esp-modules.webp'],
	['zomboid-esp-zombies.webp', 'dbd-esp-killers.webp'],
	['zomboid-esp-overlay.webp', 'dbd-esp-overlay.webp'],
	['zomboid-aimbot-menu.webp', 'dbd-aimbot-menu.webp'],
	['zomboid-radar-hack.webp', 'dbd-radar-hack.webp'],
	['zomboid-cheats-hero.webp', 'dbd-cheats-hero.webp'],
	['zomboid-cheats-video-poster.webp', 'dbd-cheats-video-poster.webp'],
	['zomboid-cheats-preview.mp4', 'dbd-cheats-preview.mp4'],
	['zomboid-esp-wallhack-overlay.webp', 'dbd-esp-wallhack-overlay.webp'],
	['zomboid-esp-zombie-boxes.webp', 'dbd-esp-player-boxes.webp'],
	['zomboid-aimbot-targeting-menu.webp', 'dbd-aimbot-targeting-menu.webp'],
	['zomboid-radar-hack-minimap.webp', 'dbd-radar-hack-minimap.webp'],
	['zomboid-cheats-combat-esp.webp', 'dbd-cheats-combat-esp.webp'],
	['zomboid-horde-esp.webp', 'dbd-chase-esp.webp'],
	['zomboid-aimbot-combat.webp', 'dbd-aimbot-combat.webp'],
	['zomboid-open-world-radar.webp', 'dbd-map-radar.webp'],
	['zomboid-loot-pickup-esp.webp', 'dbd-totem-item-esp.webp'],
	['zomboid-cheats-settings-panel.webp', 'dbd-cheats-settings-panel.webp'],
	['zomboid-cheats-main-menu.webp', 'dbd-cheats-main-menu.webp'],
	['zomboid-wingman.webp', 'dbd-wingman.webp'],
	['zomboid-wingman-source.jpg', 'dbd-wingman-source.jpg'],
	['zomboid-cheats-hero-1400w', 'dbd-cheats-hero-1400w'],
	['zomboid-cheats-hero-960w', 'dbd-cheats-hero-960w'],
	['zomboid-cheats-hero-640w', 'dbd-cheats-hero-640w'],
	['zomboid-cheats-hero-480w', 'dbd-cheats-hero-480w'],
	['/images/zomboid', '/images/dbd'],
	['/videos/zomboid', '/videos/dbd'],

	// Page IDs & slugs / blog
	['zomboid-unlock-all', 'dbd-unlock-all'],
	['project-zomboid-wallhack', 'dbd-wallhack'],
	['project-zomboid-aimbot-hack', 'dbd-aimbot-hack'],
	['project-zomboid-esp-hack', 'dbd-esp-hack'],
	['zomboid-cheat-download', 'dbd-cheat-download'],
	['project-zomboid-cheats-2026', 'dbd-cheats-2026'],
	['zomboid-mod-menu', 'dbd-mod-menu'],
	['project-zomboid-soft-aim', 'dbd-soft-aim'],
	['best-project-zomboid-cheats', 'best-dbd-cheats'],
	['undetected-project-zomboid-cheats', 'undetected-dbd-cheats'],
	['eac-bypass-project-zomboid', 'eac-bypass-dbd'],
	['project-zomboid-aimbot', 'dbd-aimbot'],
	['project-zomboid-radar-hack', 'dbd-radar-hack'],
	['project-zomboid-radar', 'dbd-radar'],
	['project-zomboid-esp', 'dbd-esp'],
	['project-zomboid-cheats', 'dbd-cheats'],

	// Localized slug patterns
	['eac-bypass-zomboid-trucos-zomboid', 'eac-bypass-dbd-trucos-dbd'],
	['eac-bypass-zomboid-triche-zomboid', 'eac-bypass-dbd-triche-dbd'],
	['eac-bypass-zomboid-cheats-zomboid', 'eac-bypass-dbd-cheats-dbd'],
	['eac-bypass-zomboid-chity-zomboid', 'eac-bypass-dbd-chity-dbd'],
	['nedecektiruemye-chity-zomboid', 'nedecektiruemye-chity-dbd'],
	['nedecektovani-chity-zomboid', 'nedecektovani-chity-dbd'],
	['tespit-edilemeyen-zomboid-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['niewykrywalne-cheats-zomboid', 'niewykrywalne-cheats-dbd'],
	['unentdeckte-project-zomboid-cheats', 'unentdeckte-dbd-cheats'],
	['cheats-zomboid-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-zomboid-indetectabili', 'trucchi-dbd-indetectabili'],
	['cheats-zomboid-nedetectabile', 'cheats-dbd-nedetectabile'],
	['trucos-zomboid', 'trucos-dbd'],
	['triche-zomboid', 'triche-dbd'],
	['cheats-zomboid', 'cheats-dbd'],
	['trucchi-zomboid', 'trucchi-dbd'],
	['cheaty-zomboid', 'cheaty-dbd'],
	['chity-zomboid', 'chity-dbd'],
	['chitov-zomboid', 'chitov-dbd'],
	['cheatow-zomboid', 'cheatow-dbd'],
	['hile-zomboid', 'hile-dbd'],
	['zomboid-hile', 'dbd-hile'],
	['hacks-trucos-zomboid', 'hacks-trucos-dbd'],
	['hacks-triche-zomboid', 'hacks-triche-dbd'],
	['hacks-cheats-zomboid', 'hacks-cheats-dbd'],
	['hacks-trucchi-zomboid', 'hacks-trucchi-dbd'],
	['hacks-cheatow-zomboid', 'hacks-cheatow-dbd'],
	['haksy-chity-zomboid', 'haksy-chity-dbd'],
	['zomboid-hile-hacks', 'dbd-hile-hacks'],

	// Review slugs
	['project-zomboid-soft-aim-review', 'dbd-soft-aim-review'],
	['project-zomboid-esp-realistic-review', 'dbd-esp-realistic-review'],
	['zomboid-cloud-dma-review', 'dbd-cloud-dma-review'],
	['zomboid-controller-aimbot-review', 'dbd-controller-aimbot-review'],
	['zomboid-cheat-setup-review', 'dbd-cheat-setup-review'],
	['zomboid-loot-esp-review', 'dbd-totem-esp-review'],
	['project-zomboid-aimbot-realistic-review', 'dbd-aimbot-realistic-review'],
	['project-zomboid-radar-hack-review', 'dbd-radar-hack-review'],
	['zomboid-anti-cheat-update-review', 'dbd-anti-cheat-update-review'],
	['zomboid-sniper-aimbot-review', 'dbd-sniper-aimbot-review'],
	['zomboid-monthly-sub-review', 'dbd-monthly-sub-review'],
	['zomboid-lifetime-key-review', 'dbd-lifetime-key-review'],
	['zomboid-squad-play-review', 'dbd-squad-play-review'],

	// Blog / guide slugs
	['project-zomboid-cheats-complete-guide-2026', 'dbd-cheats-complete-guide-2026'],
	['project-zomboid-cheats-buyers-guide', 'dbd-cheats-buyers-guide'],
	['project-zomboid-cheats-2026-whats-new', 'dbd-cheats-2026-whats-new'],
	['project-zomboid-aimbot-settings-guide', 'dbd-aimbot-settings-guide'],
	['project-zomboid-esp-wallhack-explained', 'dbd-esp-wallhack-explained'],
	['undetected-project-zomboid-cheats-eac', 'undetected-dbd-cheats-eac'],
	['project-zomboid-cheats-vs-cheatvault-comparison', 'dbd-cheats-vs-cheatvault-comparison'],
	['voidcheats-vs-project-zomboid-cheats-two-week-test', 'voidcheats-vs-dbd-cheats-two-week-test'],
	['project-zomboid-cheats-vs-ghostware-features-pricing', 'dbd-cheats-vs-ghostware-features-pricing'],
	['project-zomboid-survival-beginners-guide', 'dbd-survivor-beginners-guide'],
	['project-zomboid-loot-farming-guide', 'dbd-totem-generator-guide'],
	['project-zomboid-zombie-types-guide', 'dbd-killer-roster-guide'],
	['project-zomboid-gameplay-modes-explained', 'dbd-game-modes-explained'],
	['project-zomboid-patch-notes-guide', 'dbd-patch-notes-guide'],
	['project-zomboid-new-player-guide', 'dbd-new-player-guide'],

	// Checkout & external
	['/products/project-zomboid-cheats', '/products/dead-by-daylight'],
	['/products/project-zomboid', '/products/dead-by-daylight'],
	['https://projectzomboid.com/blog/', 'https://forum.deadbydaylight.com/en/categories/patch-notes'],
	['https://projectzomboid.com/game-guide', 'https://deadbydaylight.com/'],
	['https://projectzomboid.com/', 'https://deadbydaylight.com/'],
	['https://store.steampowered.com/app/108600/Project_Zomboid/', 'https://store.steampowered.com/app/381210/Dead_by_Daylight/'],
	['https://steamcommunity.com/app/108600', 'https://steamcommunity.com/app/381210'],
	['https://pzwiki.net/wiki/Main_Page', 'https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki'],
	['projectzomboid.com/blog', 'forum.deadbydaylight.com/en/categories/patch-notes'],
	['projectzomboid.com', 'deadbydaylight.com'],
	['pzwiki.net', 'deadbydaylight.fandom.com'],

	// Locations & modes
	['Knox County, Riverside, and West Point', 'MacMillan Estate, Autohaven Wreckers, and Coldwind Farm'],
	['Knox County and Riverside', 'MacMillan Estate and Autohaven Wreckers'],
	['Knox County and West Point', 'MacMillan Estate and Coldwind Farm'],
	['Muldraugh, West Point, and Riverside', 'MacMillan Estate, Autohaven Wreckers, and Coldwind Farm'],
	['Muldraugh', 'MacMillan Estate'],
	['West Point', 'Coldwind Farm'],
	['Riverside', 'Autohaven Wreckers'],
	['Knox County map', 'Dead by Daylight map roster'],
	['Knox County exploration', 'Fog map exploration'],
	['Knox County looting', 'Fog map looping'],
	['Knox County loot runs', 'generator and totem routes'],
	['Knox County loot routes', 'generator and totem routes'],
	['Knox County towns', 'Dead by Daylight maps'],
	['Knox County streets', 'Fog map tiles'],
	['Knox County', 'The Fog'],
	['Survival & horde presets', 'Survivor & killer presets'],
	['survival & horde presets', 'survivor & killer presets'],
	['survival and horde presets', 'survivor and killer presets'],
	['survival runs and horde events', 'survivor trials and killer chases'],
	['survival runs, horde events, and Knox County exploration', 'survivor trials, killer chases, and Fog map exploration'],
	['survival runs, horde events, and The Fog', 'survivor trials, killer chases, and Fog maps'],
	['survival runs and Fog map exploration', 'survivor trials and Fog map looping'],
	['survival runs and open world', 'survivor trials and Fog maps'],
	['horde events and hardcore modifiers', 'ranked matches and modifier offerings'],
	['horde events and Fog map exploration', 'killer chases and Fog map looping'],
	['horde events and', 'killer chases and'],
	['horde events', 'killer chases'],
	['horde event', 'killer chase'],
	['horde waves', 'chase pressure'],
	['horde wave', 'chase pressure'],
	['horde pushes', 'chase pressures'],
	['horde push', 'chase pressure'],
	['horde clusters', 'hook zones'],
	['horde defense', 'hook defense'],
	['horde density', 'chase pressure'],
	['horde of zombies', 'killer pressure'],
	['zombie horde', 'killer chase'],
	['horde spawn', 'killer spawn'],
	['zombie spawn routes', 'killer approach routes'],
	['safehouse perimeters', 'exit-gate zones'],
	['safehouse perimeter', 'exit-gate zone'],
	['safe house', 'exit gate'],
	['safehouse', 'exit gate'],
	['survival runs', 'survivor trials'],
	['survival run', 'survivor trial'],
	['loot runs', 'generator routes'],
	['loot run', 'generator route'],
	['loot trips', 'map loops'],
	['loot trip', 'map loop'],
	['loot objectives', 'generator objectives'],
	['loot containers', 'chests and totems'],
	['loot tracking', 'totem and chest tracking'],
	['Loot & container markers', 'Totem & chest markers'],
	['loot and container markers', 'totem and chest markers'],
	['containers and crates', 'chests and totems'],
	['town looting, warehouse runs, and The Fog routes', 'generator routes, totem hunts, and Fog map loops'],
	['warehouse runs', 'generator routes'],

	// Studio / anti-cheat
	['The Indie Stone Project Zomboid status', 'Behaviour Interactive Dead by Daylight status'],
	['The Indie Stone Project Zomboid', 'Behaviour Interactive Dead by Daylight'],
	['The Indie Stone and Project Zomboid patches', 'Behaviour Interactive and Dead by Daylight patches'],
	['The Indie Stone and', 'Behaviour Interactive and'],
	['The Indie Stone', 'Behaviour Interactive'],
	['Project Zomboid anti-cheat', 'Dead by Daylight anti-cheat'],
	['Project Zomboid update log', 'Dead by Daylight update log'],
	['Project Zomboid patch notes', 'Dead by Daylight patch notes'],
	['Project Zomboid patches', 'Dead by Daylight patches'],
	['Project Zomboid patch', 'Dead by Daylight patch'],
	['Project Zomboid live updates', 'Dead by Daylight live updates'],
	['PZ Wiki', 'Dead by Daylight Wiki'],

	// Entities & ESP wording
	['Zombie, survivor & loot ESP', 'Killer, survivor & totem ESP'],
	['zombies, survivors, and special infected', 'killers and survivors'],
	['zombies and survivors', 'killers and survivors'],
	['zombie or survivor', 'killer or survivor'],
	['zombie walkers, runners, crawlers, and sprinters', 'killers, survivors, totems, and pallets'],
	['walkers, runners, crawlers, and sprinters', 'killers, survivors, totems, and pallets'],
	['Boss zombie & special infected ESP', 'Killer & special ability ESP'],
	['special infected, boss zombies, and horde leaders', 'killers, power states, and chase threats'],
	['special infected and boss zombies', 'killers and power states'],
	['boss zombie fights', 'killer chases'],
	['boss zombies', 'killers'],
	['special infected fights', 'killer power fights'],
	['special infected', 'killers'],
	['tough infected fights', 'tough killer chases'],
	['tough zombies', 'tough killers'],
	['Player & zombie ESP', 'Killer & survivor ESP'],
	['player & zombie ESP', 'killer & survivor ESP'],
	['Zombie ESP boxes', 'Killer & survivor ESP boxes'],
	['Zombie ESP', 'Killer ESP'],
	['zombie ESP', 'killer ESP'],
	['Zombie, survivor, and loot ESP', 'Killer, survivor, and totem ESP'],
	['Zombie bounding boxes', 'Player bounding boxes'],
	['Zombie facing indicator', 'Player facing indicator'],
	['Entity name labels', 'Player name labels'],
	['medical supplies, food, and ammo', 'chests, totems, and items'],
	['medical supplies', 'chests and totems'],
	['medical supply', 'chest or totem'],
	['stamina and status tracking', 'status and cooldown tracking'],
	['Stamina and status tracking', 'Status and cooldown tracking'],
	['stamina cooldowns', 'status cooldowns'],
	['building cover', 'map cover'],
	['building walls', 'walls and structure'],
	['melee weapons, firearms, and shotguns', 'survivor items, killer powers, and flashlights'],
	['pistols, shotguns, and rifles', 'flashlights, toolboxes, and medkits'],
	['pistol, shotgun, and rifle profiles', 'flashlight, toolbox, and medkit profiles'],
	['pistol and shotgun', 'flashlight and toolbox'],
	['rifles and shotguns', 'flashlights and toolboxes'],
	['rifles and I have', 'flashlights and I have'],
	['duo survival runs', 'duo survivor trials'],
	['multiplayer servers', 'public lobbies'],
	['public servers', 'public lobbies'],
	['sandbox population settings', 'matchmaking and rank settings'],
	['abandoned buildings', 'Fog map tiles'],
	['wrecked van roof as a zombie horde reaches upward in a rain-soaked ruined city', 'Fog trial atmosphere with survivors facing a killer chase'],
	['survivor facing a zombie horde', 'survivors facing a killer chase'],
	['survivor fighting zombies on The Fog streets with melee and firearms', 'survivors looping a killer across Fog map tiles'],
	['horde of zombies surrounding a survivor near abandoned buildings', 'killer applying chase pressure near generators'],
	['survivor looting supplies while zombies approach in The Fog', 'survivors repairing generators while a killer approaches'],
	['zombie boxes, loot markers, and distance readouts', 'killer and survivor boxes, totem markers, and distance readouts'],

	// Brand / product strings
	['Project Zomboid Cheats logo', 'DBD Cheats logo'],
	['Project Zomboid Game Guides', 'Dead by Daylight Game Guides'],
	['Project Zomboid game guides', 'Dead by Daylight game guides'],
	['Project Zomboid game guide', 'Dead by Daylight game guide'],
	['Project Zomboid zombie types', 'Dead by Daylight killers'],
	['Project Zomboid gameplay modes', 'Dead by Daylight game modes'],
	['Project Zomboid Intel', 'DBD Intel'],
	['project zomboid intel', 'dbd intel'],
	['Project Zomboid mixes', 'Dead by Daylight mixes'],
	['Project Zomboid punishes', 'Dead by Daylight punishes'],
	['Project Zomboid sessions punish', 'Dead by Daylight matches punish'],
	['Project Zomboid combat', 'Dead by Daylight combat'],
	['Project Zomboid combat pace', 'Dead by Daylight combat pace'],
	['Project Zomboid sessions', 'Dead by Daylight matches'],
	['live Project Zomboid sessions', 'live Dead by Daylight matches'],
	['Project Zomboid on Windows PC', 'Dead by Daylight on Windows PC'],
	['Project Zomboid on Steam', 'Dead by Daylight on Steam'],
	['Project Zomboid Steam community hub', 'Dead by Daylight Steam community hub'],
	['Official Project Zomboid website', 'Official Dead by Daylight website'],
	['Project Zomboid wallhack', 'Dead by Daylight wallhack'],
	['Project Zomboid Wallhack', 'Dead by Daylight Wallhack'],
	['Project Zomboid radar', 'Dead by Daylight radar'],
	['Project Zomboid Radar', 'Dead by Daylight Radar'],
	['Project Zomboid aimbot', 'Dead by Daylight aimbot'],
	['Project Zomboid Aimbot', 'Dead by Daylight Aimbot'],
	['Project Zomboid esp', 'Dead by Daylight esp'],
	['Project Zomboid ESP', 'Dead by Daylight ESP'],
	['Project Zomboid cheats', 'Dead by Daylight cheats'],
	['Project Zomboid Cheats', 'Dead by Daylight Cheats'],
	['Project Zomboid cheat', 'Dead by Daylight cheat'],
	['Buy Project Zomboid Cheats', 'Buy Dead by Daylight Cheats'],
	['undetected project zomboid cheats', 'undetected dead by daylight cheats'],
	['project zomboid wallhack', 'dead by daylight wallhack'],
	['project zomboid aimbot', 'dead by daylight aimbot'],
	['project zomboid esp', 'dead by daylight esp'],
	['project zomboid cheats 2026', 'dead by daylight cheats 2026'],
	['best project zomboid cheats', 'best dead by daylight cheats'],
	['Project Zomboid atmosphere', 'Dead by Daylight atmosphere'],
	['Project Zomboid', 'Dead by Daylight'],
	['project zomboid', 'dead by daylight'],

	// Identifiers / code symbols
	['project-name=project-zomboidcheats', 'project-name=dbdcheat'],
	['project-name=projectzomboidcheats', 'project-name=dbdcheat'],
	['name = "projectzomboidcheats"', 'name = "dbdcheat"'],
	['name = "project-zomboid-cheats-net"', 'name = "dbdcheat-net"'],
	['name = "project-zomboid-cheats"', 'name = "dbd-cheats"'],
	['"project-zomboid-cheats"', '"dbd-cheats"'],
	['project-zomboidcheats', 'dbdcheat'],
	["const APEX_HOST = 'projectzomboidcheats.com'", "const APEX_HOST = 'dbdcheat.net'"],
	["const WWW_HOST = 'www.projectzomboidcheats.com'", "const WWW_HOST = 'www.dbdcheat.net'"],
	["const CANONICAL_ORIGIN = 'https://projectzomboidcheats.com'", "const CANONICAL_ORIGIN = 'https://dbdcheat.net'"],
	["if (lead.toLowerCase().includes('project zomboid'))", "if (lead.toLowerCase().includes('dead by daylight') || lead.toLowerCase().includes('dbd'))"],
	['return `Project Zomboid cheats — ${lead}`', 'return `Dead by Daylight cheats — ${lead}`'],
	['optimized for projectzomboidcheats.com', 'optimized for dbdcheat.net'],
	['| projectzomboidcheats.com', '| dbdcheat.net'],
	['| Project Zomboid Cheats', '| Dead by Daylight Cheats'],
	["shortName: 'PZ'", "shortName: 'DBD'"],
	["game: 'Project Zomboid'", "game: 'Dead by Daylight'"],
	['zomboidImages', 'dbdImages'],
	['zomboidHeroVideo', 'dbdHeroVideo'],
	['zomboidVideo', 'dbdVideo'],
	['zomboidHeroImage', 'dbdHeroImage'],
	['zomboidScreenshots', 'dbdScreenshots'],
	['ZomboidScreenshot', 'DbdScreenshot'],
	['zomboidAuthorityLinks', 'dbdAuthorityLinks'],
	['ZomboidAuthorityLinks', 'DbdAuthorityLinks'],
	['getNativeZomboidGuides', 'getNativeDbdGuides'],
	["from './zomboid'", "from './dbd'"],
	["from '../data/zomboid'", "from '../data/dbd'"],
	['project-zomboid-authority-title', 'dbd-authority-title'],
	['/storage/v1/object/public/zomby', '/storage/v1/object/public/dbd'],

	// Remaining slug / identifier cleanup
	['project-zomboid', 'dbd'],
	['ProjectZomboid', 'DeadByDaylight'],
	['zomboid-cheats', 'dbd-cheats'],
	['zomboid', 'dbd'],
	['Zomboid', 'DBD'],
	['ZOMBOID', 'DBD'],
];

const PAGE_DIR_RENAMES = [
	['project-zomboid-cheats', 'dbd-cheats'],
	['project-zomboid-esp', 'dbd-esp'],
	['project-zomboid-aimbot', 'dbd-aimbot'],
	['project-zomboid-wallhack', 'dbd-wallhack'],
	['project-zomboid-radar', 'dbd-radar'],
];

function walk(dir, files = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

function apply(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

function renamePageDirs() {
	for (const [from, to] of PAGE_DIR_RENAMES) {
		const src = join(root, 'src', 'pages', from);
		const dest = join(root, 'src', 'pages', to);
		if (existsSync(src)) {
			renameSync(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		}
	}
}

function renameDataFile() {
	const src = join(root, 'src', 'data', 'zomboid.ts');
	const dest = join(root, 'src', 'data', 'dbd.ts');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed src/data/zomboid.ts → dbd.ts');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameComponent() {
	const src = join(root, 'src', 'components', 'ZomboidAuthorityLinks.astro');
	const dest = join(root, 'src', 'components', 'DbdAuthorityLinks.astro');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed ZomboidAuthorityLinks.astro → DbdAuthorityLinks.astro');
	}
}

function renameBgVideoScript() {
	const src = join(root, 'public', 'scripts', 'zomboid-cheats-bg-video.js');
	const dest = join(root, 'public', 'scripts', 'dbd-cheats-bg-video.js');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed zomboid-cheats-bg-video.js → dbd-cheats-bg-video.js');
	}
}

function renamePublicAssets() {
	const dirs = [join(root, 'public', 'images'), join(root, 'public', 'videos')];
	for (const dir of dirs) {
		if (!existsSync(dir)) continue;
		for (const name of readdirSync(dir)) {
			if (!name.includes('zomboid')) continue;
			const src = join(dir, name);
			const dest = join(dir, name.split('zomboid').join('dbd'));
			if (existsSync(src) && src !== dest) {
				renameSync(src, dest);
				console.log(`Renamed asset: ${name} → ${basename(dest)}`);
			}
		}
	}
}

function transformFiles() {
	const files = walk(root);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXTENSIONS.has(extname(file))) continue;
		if (SKIP_FILES.has(file.split(/[/\\]/).pop())) continue;
		const original = readFileSync(file, 'utf8');
		const updated = apply(original);
		if (updated !== original) {
			writeFileSync(file, updated);
			changed++;
		}
	}
	console.log(`\nTransformed ${changed} files`);
}

function patchMiddlewareRedirects() {
	const file = join(root, 'functions', '_middleware.js');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);

	if (!content.includes("'projectzomboidcheats.com'") && !content.includes("'projectzomboidcheats.com'")) {
		// Add old PZ host as legacy after warframe hosts if present
	}
	if (!content.includes("'projectzomboidcheats.com'")) {
		content = content.replace(
			"'www.warframecheats.net',",
			"'www.warframecheats.net',\n\t'projectzomboidcheats.com',\n\t'www.projectzomboidcheats.com',",
		);
	}

	const extraRedirects = {
		'/project-zomboid-cheats': '/dbd-cheats/',
		'/project-zomboid-cheats/': '/dbd-cheats/',
		'/project-zomboid-esp': '/dbd-esp/',
		'/project-zomboid-esp/': '/dbd-esp/',
		'/project-zomboid-aimbot': '/dbd-aimbot/',
		'/project-zomboid-aimbot/': '/dbd-aimbot/',
		'/project-zomboid-wallhack': '/dbd-wallhack/',
		'/project-zomboid-wallhack/': '/dbd-wallhack/',
		'/project-zomboid-radar': '/dbd-radar/',
		'/project-zomboid-radar/': '/dbd-radar/',
		'/warframe-cheats': '/dbd-cheats/',
		'/warframe-cheats/': '/dbd-cheats/',
		'/warframe-esp': '/dbd-esp/',
		'/warframe-esp/': '/dbd-esp/',
		'/warframe-aimbot': '/dbd-aimbot/',
		'/warframe-aimbot/': '/dbd-aimbot/',
		'/warframe-wallhack': '/dbd-wallhack/',
		'/warframe-wallhack/': '/dbd-wallhack/',
		'/warframe-radar': '/dbd-radar/',
		'/warframe-radar/': '/dbd-radar/',
	};
	for (const [from, to] of Object.entries(extraRedirects)) {
		const key = `'${from}': '${to}'`;
		if (!content.includes(`'${from}':`)) {
			content = content.replace(
				'const PATH_REDIRECTS = {',
				`const PATH_REDIRECTS = {\n\t'${from}': '${to}',`,
			);
		} else {
			// Force update existing redirect targets that still point at PZ paths
			content = content.replace(new RegExp(`('${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*')[^']+(')`), `$1${to}$2`);
		}
	}
	writeFileSync(file, content);
	console.log('Patched functions/_middleware.js redirects');
}

function patchPublicRedirects() {
	const file = join(root, 'public', '_redirects');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);
	const lines = [
		'/project-zomboid-cheats /dbd-cheats/ 301',
		'/project-zomboid-cheats/ /dbd-cheats/ 301',
		'/project-zomboid-esp /dbd-esp/ 301',
		'/project-zomboid-esp/ /dbd-esp/ 301',
		'/project-zomboid-aimbot /dbd-aimbot/ 301',
		'/project-zomboid-aimbot/ /dbd-aimbot/ 301',
		'/project-zomboid-wallhack /dbd-wallhack/ 301',
		'/project-zomboid-wallhack/ /dbd-wallhack/ 301',
		'/project-zomboid-radar /dbd-radar/ 301',
		'/project-zomboid-radar/ /dbd-radar/ 301',
	];
	for (const line of lines) {
		const from = line.split(' ')[0];
		if (!content.includes(`${from} `) && !content.includes(`${from}\t`)) {
			content += `\n${line}`;
		}
	}
	writeFileSync(file, content);
	console.log('Patched public/_redirects');
}

function patchVerifyBuild() {
	const file = join(root, 'scripts', 'verify-build-source.mjs');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = content
		.replaceAll('warframe-cheats', 'project-zomboid-cheats')
		.replaceAll('Warframe', 'Project Zomboid')
		.replaceAll('ZomboidAuthorityLinks', 'DbdAuthorityLinks')
		.replaceAll('project-zomboid-cheats', 'dbd-cheats')
		.replaceAll('Project Zomboid', 'Dead by Daylight');
	// Ensure component check points at DbdAuthorityLinks
	if (!content.includes('DbdAuthorityLinks.astro')) {
		content = content.replace(
			/Missing src\/components\/[A-Za-z]+AuthorityLinks\.astro/,
			'Missing src/components/DbdAuthorityLinks.astro',
		);
		content = content.replace(
			/existsSync\('src\/components\/[A-Za-z]+AuthorityLinks\.astro'\)/,
			"existsSync('src/components/DbdAuthorityLinks.astro')",
		);
	}
	writeFileSync(file, content);
	console.log('Patched scripts/verify-build-source.mjs');
}

function patchPackageName() {
	const file = join(root, 'package.json');
	let pkg = JSON.parse(readFileSync(file, 'utf8'));
	pkg.name = 'dbd-cheats';
	if (pkg.scripts?.['pages:deploy']) {
		pkg.scripts['pages:deploy'] = 'wrangler pages deploy dist --project-name=dbdcheat';
	}
	writeFileSync(file, `${JSON.stringify(pkg, null, '\t')}\n`);
	console.log('Patched package.json name/deploy');
}

console.log('Rebranding Project Zomboid Cheats → Dead by Daylight / DBD Cheats (dbdcheat.net)...\n');
renamePageDirs();
renameDataFile();
renameComponent();
renameBgVideoScript();
renamePublicAssets();
transformFiles();
patchMiddlewareRedirects();
patchPublicRedirects();
patchVerifyBuild();
patchPackageName();
console.log('\nRebrand complete. Next: npm run generate:i18n && npm run generate:blog');
