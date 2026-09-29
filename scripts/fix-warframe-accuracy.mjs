#!/usr/bin/env node
/**
 * Normalize copy for Dead by Daylight — removes Fortnite/Rust/Epic/EAC leftovers.
 * Run: node scripts/fix-dbd-accuracy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type {[string | RegExp, string][]} */
const RULES = [
	[/Epic services/gi, 'Dead by Daylight servers'],
	[/Epic platform/gi, 'Dead by Daylight launcher'],
	[/Epic's rules/gi, "Behaviour Interactive's Terms of Service"],
	[/Epic terms/gi, 'Behaviour Interactive terms'],
	[/If Epic services/gi, 'If Dead by Daylight servers'],
	[/Embark' anti-cheat/gi, 'Dead by Daylight anti-cheat'],
	[/Dead by Daylight or EAC patch/gi, 'Dead by Daylight or anti-cheat patch'],
	[/and EAC questions/gi, 'and anti-cheat questions'],
	[/EAC patch/gi, 'anti-cheat patch'],
	[/EAC history/gi, 'anti-cheat history'],
	[/EAC comparison/gi, 'anti-cheat comparison'],
	[/Battle royale fights happen in three dimensions — rooftops, windows, and flanks\./gi,
		'Multi-floor map zones stack vertical fights — catwalks, doorways, and side killer spawns.'],
	[/extraction loop/gi, 'mission loop'],
	[/extraction phase rounds/gi, 'chase pressure and match modifiers'],
	[/extraction phase/gi, 'chase pressure'],
	[/extraction route/gi, 'killer chase route'],
	[/endgame circles/gi, 'chase pressure'],
	[/ranked combat encounter/gi, 'survivor trial fight'],
	[/ranked objective fight/gi, 'generator routes objective fight'],
	[/ranked-critical/gi, 'session-critical'],
	[/ranked lobbies/gi, 'multiplayer squads'],
	[/ranked block/gi, 'game session'],
	[/before ranked/gi, 'before generator routes'],
	[/Built for ranked pressure/gi, 'Built for chase pressure'],
	[/before a third party/gi, 'before a flank wave'],
	[/third parties/gi, 'flank waves'],
	[/third-party flanks/gi, 'flank waves'],
	[/enemy squads/gi, 'killers and survivors'],
	[/enemy player/gi, 'killer or survivor'],
	[/enemy players/gi, 'killers and survivors'],
	[/closest player/gi, 'closest enemy'],
	[/vehicles, loot, chests/gi, 'lockers, chests and totems, and pickups'],
	[/vehicles and chests/gi, 'containers and chests and totems'],
	[/loot and chest/gi, 'pickups and lockers'],
	[/loot chests/gi, 'chests and totems'],
	[/supply-drop/gi, 'pickup'],
	[/mid-match/gi, 'mid-session'],
	[/map rotations/gi, 'map zone rotations'],
	[/map rotation/gi, 'map zone rotation'],
	[/POIs/g, 'map zones'],
	[/POI/g, 'map zone area'],
	[/loot routes/gi, 'farm routes'],
	[/drop path/gi, 'farm route'],
	[/track players and containers/gi, 'track enemies and containers'],
	[/track players/gi, 'track enemies'],
	[/player threats/gi, 'enemy threats'],
	[/killer or survivors/gi, 'killers and survivors'],
	[/killer or survivor/gi, 'killer or survivor'],
	[/Dead by Daylight' live seasons/gi, "Dead by Daylight's live updates"],
	[/season updates from/gi, 'game updates from'],
	[/season calendars/gi, 'update calendars'],
	[/season notes from/gi, 'patch notes from'],
	[/season messaging/gi, 'official patch messaging'],
	[/season maps/gi, 'map zone updates'],
	[/for ranked/gi, 'for generator routes'],
	[/in ranked/gi, 'in generator routes'],
	[/ranked loadout/gi, 'mission loadout'],
	[/ranked climb/gi, 'generator routes progression'],
	[/ranked grinders/gi, 'generator routes players'],
	[/ranked/gi, 'generator routes'],
	[/FNCS/gi, 'killer chase'],
	[/vbucks/gi, 'Platinum'],
	[/V-Bucks/gi, 'Platinum'],
	[/Bugha/gi, 'pro Tenno'],
	[/zero-build/gi, 'ability-only'],
	[/Battle Pass/gi, 'Prime Access'],
	[/Embark/gi, 'Behaviour Interactive's],
	[/Epic patch/gi, 'Dead by Daylight patch'],
	[/every Epic patch/gi, 'every Dead by Daylight patch'],
	[/Epic health/gi, 'server status'],
	[/Cheats are flanking tools/gi, 'Cheats are third-party tools'],
	[/for Embark bans/gi, 'for game bans'],
	[/notice vehicles before/gi, 'spot killers before'],
	[/mark chests worth/gi, 'mark chests and totems worth'],
	[/players, loot, and vehicles/gi, 'enemies, pickups, and lockers'],
	[/loot, chests, and vehicles/gi, 'pickups, lockers, and caches'],
	[/see players, loot, vehicles/gi, 'see enemies, pickups, and lockers'],
	[/live matches/gi, 'live missions'],
	[/in BR —/gi, 'in co-op —'],
	[/\bBR loop\b/gi, 'mission loop'],
	[/\bBR players\b/gi, 'generator routes players'],
	[/\bBR stack\b/gi, 'full cheat stack'],
	[/\bin BR\b/gi, 'in missions'],
	[/in BR and/gi, 'in killer chases and'],
	[/ghostware rust/gi, 'ghostware dbd'],
	[/rust wallhack/gi, 'dead by daylight wallhack'],
	[/loot esp/gi, 'resource esp'],
	[/wipe-to-raid/gi, 'mission-to-rewards'],
	[/OW2/gi, 'Dead by Daylight'],
	[/payload corners/gi, 'objective corners'],
	[/payload escorts/gi, 'chase pressure'],
	[/per-hero/gi, 'per-weapon'],
	[/hitscan and projectile/gi, 'primaries and secondaries'],
	[/AK, SMG, and bolt/gi, 'flashlights, toolboxes, and medkits'],
	[/AK, SMG ve bolt/gi, 'rifle, shotgun ve sniper'],
	[/Hammer AR/gi, 'Soma Prime'],
	[/hammer ar/gi, 'soma prime'],
	[/box fights/gi, 'close-quarters fights'],
	[/creative 1v1s/gi, 'Simulacrum testing'],
	[/Creative warmup/gi, 'Simulacrum warmup'],
	[/Creative Mode/gi, 'Simulacrum'],
	[/island codes/gi, 'training scenarios'],
	[/Reboot Van/gi, 'hook defense objective'],
	[/control point/gi, 'hook defense objective'],
	[/battle royale/gi, 'generator routes'],
	[/generator objectives/gi, 'public lobbies'],
	[/Player, vehicle, and ability/gi, 'Enemy, killers, and ability'],
	[/vehicle threat cues/gi, 'killers threat cues'],
	[/vehicle cues/gi, 'killers cues'],
	[/vehicle pushes/gi, 'killers pushes'],
	[/vehicle ESP/gi, 'killers ESP'],
	[/vehicle and pickup/gi, 'killers and pickup'],
	[/vehicle positions/gi, 'killers positions'],
	[/building clears/gi, 'map zone clears'],
	[/pub lobbies/gi, 'public lobbies'],
	[/pubs\b/gi, 'public lobbies'],
	[/playlists/gi, 'gameplay modes'],
	[/assault rifles/gi, 'rifles'],
	[/long-range AR /gi, 'long-range rifle '],
	[/AR beams/gi, 'rifle shots'],
	[/AR fights/gi, 'rifle fights'],
	[/AR and SMG/gi, 'flashlight and toolbox'],
	[/AR \//gi, 'rifle/'],
	[/ SMG /gi, ' shotgun '],
	[/SMGs/gi, 'shotguns'],
	[/SMG profile/gi, 'shotgun profile'],
	[/SMG profiles/gi, 'shotgun profiles'],
	[/SMG tracking/gi, 'shotgun tracking'],
	[/SMG pushes/gi, 'shotgun pushes'],
	[/SMG in/gi, 'shotgun in'],
	[/first AR/gi, 'first rifle'],
	[/Dead by Daylight itself is published by/gi, 'Dead by Daylight is developed and published by'],
	[/generator routes lobbies/gi, 'generator routes'],
	[/Fog map exploration and generator routes play/gi, 'The Fog and generator routes'],
	[/shows players, loot/gi, 'shows enemies, loot'],
	[/player ESP wallhack/gi, 'killer ESP wallhack'],
	[/Player ESP/gi, 'Killer ESP'],
	[/player ESP/gi, 'killer ESP'],
	[/player outlines/gi, 'enemy outlines'],
	[/Player ESP boxes/gi, 'Killer & survivor ESP boxes'],
	[/player boxes/gi, 'enemy boxes'],
	[/Player boxes/gi, 'Enemy boxes'],
	[/player ESP in/gi, 'killer ESP in'],
	[/only need player ESP/gi, 'only need killer ESP'],
	[/player ESP —/gi, 'killer ESP —'],
	[/ability-only-meta-broken-aggressive-strategies/gi, 'dbd-cheats-complete-guide-2026'],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'src/data/site.ts',
	'scripts/generate-blog-posts.mjs',
	'src/data/schema.ts',
	'src/components/HomeSeo.astro',
	'src/data/i18n/gallery-ui.ts',
	'src/data/dbd.ts',
	'src/components/Gallery.astro',
	'src/data/page-sitemap.ts',
];

function applyRules(text) {
	let out = text;
	for (const [from, to] of RULES) {
		out = out.replace(from, to);
	}
	return out;
}

for (const rel of FILES) {
	const path = join(ROOT, rel);
	const next = applyRules(readFileSync(path, 'utf8'));
	writeFileSync(path, next);
	console.log('✓', rel);
}

// English UI image alts — canonical Dead by Daylight terminology
const uiPath = join(ROOT, 'scripts/i18n-data/ui-strings-part1.mjs');
let ui = readFileSync(uiPath, 'utf8');
ui = ui.replace(
	/aimbotCombat: '[^']+'/,
	"aimbotCombat: 'Dead by Daylight aimbot targeting a killers during a survivor trial'",
);
ui = ui.replace(
	/squadFight: '[^']+'/,
	"squadFight: 'Dead by Daylight squad co-op fight with ESP and aimbot active in a killer chase'",
);
ui = ui.replace(
	/battleRoyale: '[^']+'/,
	"battleRoyale: 'Dead by Daylight generator routes fight with undetected ESP overlays'",
);
ui = ui.replace(
	/battleRoyaleIsland: '[^']+'/,
	"battleRoyaleIsland: 'Dead by Daylight cheats menu with per-weapon aimbot profiles'",
);
ui = ui.replace(
	/espWallhack: '[^']+'/,
	"espWallhack: 'Dead by Daylight ESP overlay highlighting killers and survivors through walls'",
);
ui = ui.replace(
	/playerEsp: '[^']+'/,
	"playerEsp: 'Dead by Daylight wallhack ESP boxes on killers and survivors in generator routes'",
);
ui = ui.replace(
	/rebootFight: '[^']+'/,
	"rebootFight: 'Dead by Daylight radar hack 2D minimap showing killer chase spawn routes in a killer chase'",
);
writeFileSync(uiPath, ui);
console.log('✓ scripts/i18n-data/ui-strings-part1.mjs (en image alts)');

// Normalize rebootFight alts across all locale UI files (remove BR leftovers)
for (const part of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	const partPath = join(ROOT, 'scripts/i18n-data', part);
	let partUi = readFileSync(partPath, 'utf8');
	partUi = partUi.replace(/rebootFight: '[^']*'/g, "rebootFight: 'Dead by Daylight killer chase hook defense fight with aimbot cheats active'");
	writeFileSync(partPath, partUi);
	console.log('✓ scripts/i18n-data/' + part);
}

console.log('Done. Run: npm run generate:i18n && node scripts/generate-blog-posts.mjs');
