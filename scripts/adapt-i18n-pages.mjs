#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'dbd-esp'],
	['warzone-aimbot', 'dbd-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-dbd'],
	['undetected-warzone-cheats', 'undetected-dbd-cheats'],
	['warzone-wallhack', 'dbd-wallhack'],
	['warzone-radar-hack', 'dbd-radar-hack'],
	['warzone-cheats-2026', 'dbd-cheats-2026'],
	['call-of-duty-warzone-cheats', 'dbd-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Dead by Daylight'],
	['Call of Duty Warzone', 'Dead by Daylight'],
	['Warzone Cheats', 'Dead by Daylight Cheats'],
	['Warzone cheats', 'Dead by Daylight cheats'],
	['Warzone cheat', 'Dead by Daylight cheat'],
	['Warzone ESP', 'Dead by Daylight ESP'],
	['Warzone Aimbot', 'Dead by Daylight Aimbot'],
	['Warzone wallhack', 'Dead by Daylight wallhack'],
	['Warzone radar', 'Dead by Daylight radar'],
	['Warzone firefights', 'Dead by Daylight combat'],
	['Warzone combat', 'Dead by Daylight combat'],
	['Warzone patches', 'Dead by Daylight patches'],
	['Warzone updates', 'Dead by Daylight updates'],
	['Warzone setup', 'Dead by Daylight setup'],
	['Warzone license', 'Dead by Daylight license'],
	['Warzone licenses', 'Dead by Daylight licenses'],
	['Warzone sessions', 'Dead by Daylight matches'],
	['in Warzone', 'in Dead by Daylight'],
	['for Warzone', 'for Dead by Daylight'],
	['Warzone on', 'Dead by Daylight on'],
	['Warzone or', 'Dead by Daylight or'],
	['Warzone\'s', 'Dead by Daylight\'s'],
	['Warzone ', 'Dead by Daylight '],
	['Ricochet anti-cheat', 'Dead by Daylight anti-cheat (EAC)'],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet bypass', 'anti-cheat bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Dead by Daylight anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@dbdcheat.net'],
	['Verdansk, Urzikstan, and Rebirth Island', 'generator objectives, extraction routes, and ranked seasons'],
	['Verdansk, Urzikstan and Rebirth Island', 'generator objectives, extraction routes and ranked seasons'],
	['gulag fights', 'map rotations'],
	['gulag fight', 'extraction route fight'],
	['gulag rounds', 'rekiller spawn rounds'],
	['gulag', 'control point'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and generator routes', 'generator objectives and raids'],
	['BR and Resurgence', 'Fog map exploration and generator routes'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Embark\''],
	['Call of Duty combat pace', 'Dead by Daylight combat pace'],
	['COD', 'Dead by Daylight'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Dead by Daylight Cheats',
	game: 'Dead by Daylight',
	checkout: 'Zadeyo',
	eac: 'Dead by Daylight anti-cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'generator objectives, extraction routes, and ranked seasons'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
