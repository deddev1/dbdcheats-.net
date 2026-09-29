#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'dbd-esp'],
	['warzone-aimbot', 'dbd-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-dbd-cheats'],
	['warzone-wallhack', 'dbd-wallhack'],
	['warzone-radar-hack', 'dbd-radar-hack'],
	['warzone-cheats-2026', 'dbd-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-dbd'],
	['warzonescheats.net', 'dbdcheat.net'],
	['trucos-warzone', 'trucos-dbd'],
	['triche-warzone', 'triche-dbd'],
	['warzone-cheats', 'dbd-cheats'],
	['cheats-warzone', 'cheats-dbd'],
	['trucchi-warzone', 'trucchi-dbd'],
	['cheaty-warzone', 'cheaty-dbd'],
	['chity-warzone', 'chity-dbd'],
	['chitov-warzone', 'chitov-dbd'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-dbd'],
	['hile-warzone', 'hile-dbd'],
	['warzone-hile', 'dbd-hile'],
	['warzone-esp-chity', 'dbd-esp-chity'],
	['warzone-aimbot-chity', 'dbd-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-dbd-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-dbd-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-dbd'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-dbd'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-dbd'],
	['cheats-warzone-nedetectabile', 'cheats-dbd-nedetectabile'],
	['basta-warzone-cheats', 'basta-dbd-cheats'],
	['eac-bypass-dbd-trucos-warzone', 'eac-bypass-dbd-trucos-dbd'],
	['eac-bypass-dbd-triche-warzone', 'eac-bypass-dbd-triche-dbd'],
	['eac-bypass-dbd-cheats-warzone', 'eac-bypass-dbd-cheats-dbd'],
	['eac-bypass-dbd-chity-warzone', 'eac-bypass-dbd-chity-dbd'],
	['eac-bypass-dbd-warzone', 'eac-bypass-dbd'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich dbd-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/dbd-cheats-hero.webp',
	'dbd-esp': '/images/dbd-cheats-esp-wallhack.webp',
	'dbd-aimbot': '/images/dbd-cheats-aimbot-combat.webp',
	features: '/images/dbd-cheats-package.webp',
	pricing: '/images/dbd-cheats-cover.webp',
	setup: '/images/dbd-loadout-builder.webp',
	updates: '/images/dbd-header-art.webp',
	faq: '/images/dbd-squad-fight.webp',
	support: '/images/dbd-cheats-package.webp',
	undetected: '/images/dbd-battle-royale-combat.webp',
	wallhack: '/images/dbd-cheats-esp-wallhack.webp',
	radar: '/images/dbd-player-esp.webp',
	'eac-bypass': '/images/dbd-reboot-van-fight.webp',
	'cheats-2026': '/images/dbd-cheats-hero.webp',
	privacy: '/images/dbd-cheats-aimbot-combat.webp',
	refund: '/images/dbd-cheats-cover.webp',
	terms: '/images/dbd-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'dbd-esp', 'dbd-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
