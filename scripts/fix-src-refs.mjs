#!/usr/bin/env node
/** Final pass: fix remaining Warzone references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['warzoneImages', 'dbdImages'],
	["from '../data/warzone'", "from '../data/dbd'"],
	["from './warzone'", "from './dbd'"],
	['/undetected-warzone-cheats/', '/dbd-cheats/'],
	['/warzone-wallhack/', '/dbd-wallhack/'],
	['/warzone-radar-hack/', '/dbd-radar/'],
	['/ricochet-bypass/', '/dbd-cheats/'],
	['/warzone-cheats-2026/', '/dbd-cheats/'],
	['/warzone-aimbot/', '/dbd-aimbot/'],
	['/warzone-esp/', '/dbd-esp/'],
	['/warzone-hacks/', '/dbd-esp/'],
	['Warzone Cheats', 'Dead by Daylight Cheats'],
	['Warzone cheats', 'Dead by Daylight cheats'],
	['Warzone wallhack', 'Dead by Daylight wallhack'],
	['Warzone radar', 'Dead by Daylight radar'],
	['Warzone Aimbot', 'Dead by Daylight Aimbot'],
	['Warzone ESP', 'Dead by Daylight ESP'],
	['Call of Duty: Warzone', 'Dead by Daylight'],
	['Ricochet', 'Dead by Daylight anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['warzonescheats.net', 'dbdcheat.net'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
