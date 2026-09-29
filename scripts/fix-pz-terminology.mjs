#!/usr/bin/env node
/** Bulk-replace leftover non–Dead by Daylight game terminology in source files. */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
	'src/data/site.ts',
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/gameplay-images.mjs',
];

const REPLACEMENTS = [
	['generator routes, killer chases, and Fog map exploration', 'survival, multiplayer, and Fog map looping'],
	['generator routes, killer chases, and The Fog', 'survival, multiplayer, and The Fog'],
	['generator routes and killer chases y mundo abierto', 'supervivencia, multijugador y mundo abierto'],
	['generator routes and killer chases et monde ouvert', 'survie, multijoueur et monde ouvert'],
	['generator routes and killer chases und Open World', 'Survival, Multiplayer und Open World'],
	['Fog map exploration and generator routes', 'open-world Fog map looping'],
	['Fog map exploration', 'open-world The Fog'],
	['for generator routes & The Fog', 'for survival & The Fog'],
	['What Dead by Daylight ESP solves in generator routes', 'What Dead by Daylight ESP solves in combat'],
	['On generator routes, public lobbies, and generator routes', 'In towns, public lobbies, and open-world runs'],
	['public lobbies and generator routes', 'public lobbies and survivor trials'],
	['before generator routes', 'before you load in'],
	['on generator routes and public lobbies', 'in survival and multiplayer'],
	['Packages cover generator routes and public lobbies', 'Packages cover survival and public lobbies'],
	['generator routes and public lobbies loops', 'survival and multiplayer loops'],
	['map zone clears', 'building clears'],
	['killer chases and multiplayer', 'killer chases and multiplayer'],
	['killer chases, survival', 'killer chases, survival'],
	['killer chases and The Fog', 'killer chases and The Fog'],
	['killer chase hook defense fight', 'killer chase base defense fight'],
	['Combate generator routes Dead by Daylight', 'Combate supervivencia Dead by Daylight'],
	['Combat generator routes Dead by Daylight', 'Combat survival Dead by Daylight'],
	['generator routes Kampf', 'Survival-Kampf'],
	['Walka generator routes Dead by Daylight', 'Walka survival Dead by Daylight'],
	['Бой generator routes Dead by Daylight', 'Бой survival Dead by Daylight'],
	['generator routes çatışması', 'survival çatışması'],
	['in generator routes', 'in Dead by Daylight'],
	['on generator routes', 'in survival'],
	['for generator routes', 'for survival'],
	['Soft aim on generator routes', 'Soft aim in survival'],
	['spotting heavies on ridges before pushing the objective', 'spotting hordes around corners before pushing into buildings'],
	['heavies on ridges', 'hordes around corners'],
	['frames and bosses', 'killers and survivors'],
	['Ability cooldown and health markers', 'Health and status markers'],
	['hook defense or survival objective', 'base defense or survival objective'],
	['before they hit the pod', 'before they reach your exit gate'],
	['killer chases, and Fog map exploration', 'killer chases, and Fog map looping'],
	['generator routes, factions, The Fog farming', 'survival tips, zombie types, generator and totem routes'],
	['aimed at The Fog and generator routes', 'aimed at The Fog survival and looting'],
	['during long survival and generator routes', 'during long survival and map loops'],
	['during generator routes, generator routes, and generator and totem routes', 'during generator routes, totem hunts, and Fog map loops'],
	['chase pressure and horde modifier stacks', 'chase pressure and matchmaking and rank settings'],
	['killer chases, survival, and generator routes', 'killer chases, survival, and map loops'],
	['hook defense, survival, and chase pressures', 'base defense, survival, and chase pressures'],
	['Does this work for generator routes, killer chases, and The Fog?', 'Does this work for survival, multiplayer, and The Fog?'],
	['enemy positions in generator routes and killer chases', 'enemy positions in survival and during hordes'],
	['map zones like MacMillan Estate, Autohaven Wreckers, and Coldwind Farm', 'towns like MacMillan Estate, Autohaven Wreckers, and Coldwind Farm'],
	['Dead by Daylight map roster zones like MacMillan Estate, Autohaven Wreckers, and Coldwind Farm', 'Dead by Daylight maps like MacMillan Estate, Autohaven Wreckers, and Coldwind Farm'],
	['Highlights enemy factions with boxes', 'Highlights killers and survivors with boxes'],
	['during melee combat and generator and totem routes', 'during melee combat and The Fog map loops'],
	['endgame content', 'late-game hordes'],
	['boss phases', 'tough killer chases'],
	['boss and killer chases', 'killer power fights'],
	['killers, killers, and boss phases', 'killers and tough killers'],
	['killers and killers', 'killers and tough killers'],
	['zombie walkers, runners, and crawlers, and more', 'killers, survivors, totems, and pallets'],
	['Digital-Extremes-Patches', 'Behaviour Interactive patches'],
	['operadores', 'supervivientes'],
	['operatörler', 'hayatta kalanlar'],
	['playerach', 'graczach'],
	['playeri', 'giocatori'],
	['playere', 'giocatori'],
	['playerach Dead by Daylight', 'survivors in Dead by Daylight'],
	['operadores em Dead by Daylight', 'survivors in Dead by Daylight'],
	['operadores Dead by Daylight', 'survivors in Dead by Daylight'],
	['operatörlerde Dead by Daylight', 'survivors in Dead by Daylight'],
];

for (const rel of TARGETS) {
	const file = join(ROOT, rel);
	let text = readFileSync(file, 'utf8');
	let changed = 0;
	for (const [from, to] of REPLACEMENTS) {
		if (text.includes(from)) {
			text = text.split(from).join(to);
			changed++;
		}
	}
	if (changed) {
		writeFileSync(file, text, 'utf8');
		console.log(`✓ ${rel} (${changed} replacement groups)`);
	} else {
		console.log(`· ${rel} (no changes)`);
	}
}
