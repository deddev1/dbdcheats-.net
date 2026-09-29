#!/usr/bin/env node
/** Fix broken identifiers and content after bulk rebrand. */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'rebrand-warframe.mjs', 'rebrand-dbd.mjs']);

const FIXES = [
	// Broken imports / identifiers
	["from '../data/dbd'", "from '../data/dbd'"],
	["from './dbd'", "from './dbd'"],
	['project-dbdImages', 'dbdImages'],
	['project-dbdHeroImage', 'dbdHeroImage'],
	['project-dbdScreenshots', 'dbdScreenshots'],
	['Dead by DaylightScreenshot', 'DbdScreenshot'],
	['project-dbdHeroVideo', 'dbdHeroVideo'],
	['project-dbdVideo', 'dbdVideo'],
	// Warplayer typo from Frame ESP replacement
	['Warplayer ESP', 'Dead by Daylight ESP'],
	['Warplayer esp', 'Dead by Daylight esp'],
	['Warplayer', 'Dead by Daylight'],
	// Wrong URLs
	['https://www.digitalextremes.com/', 'https://deadbydaylight.com/'],
	['digitalextremes.com', 'deadbydaylight.com'],
	['forums.deadbydaylight.com', 'forum.deadbydaylight.com/en/categories/patch-notes'],
	// Remaining Warframe faction names
	['Grineer, Corpus, and killers', 'killers and survivors'],
	['Grineer and Corpus units', 'killers and survivors'],
	['Grineer, Corpus', 'zombies, survivors'],
	['Grineer heavy unit', 'killers'],
	['Corpus-heavy', 'killers-heavy'],
	['Corpus MOAs', 'zombie runners'],
	['Infested runners', 'zombie crawlers'],
	['hero boxes', 'zombie boxes'],
	['hero skeleton', 'zombie skeleton'],
	['hero health', 'zombie health'],
	['ult tracking', 'status tracking'],
	['final-circle scrims', 'hook zones'],
	['Behaviour Interactive\'', "Behaviour Interactive's"],
	// Image path consistency (dbd-* not dbd-* for filenames)
	['/images/dbd-cheats-', '/images/dbd-cheats-'],
	['/images/dbd-esp-', '/images/dbd-esp-'],
	['/images/dbd-aimbot-', '/images/dbd-aimbot-'],
	['/images/dbd-radar-', '/images/dbd-radar-'],
	['/images/dbd-esp-overlay', '/images/dbd-esp-overlay'],
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
	for (const [from, to] of FIXES) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

let changed = 0;
for (const file of walk(root)) {
	if (!TEXT_EXTENSIONS.has(extname(file))) continue;
	const original = readFileSync(file, 'utf8');
	const updated = apply(original);
	if (updated !== original) {
		writeFileSync(file, updated);
		changed++;
	}
}
console.log(`Fixed ${changed} files`);
