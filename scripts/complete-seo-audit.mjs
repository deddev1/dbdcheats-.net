#!/usr/bin/env node
/**
 * Completes dbd-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'dbd-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'dbd-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'dbd-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'dbd-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-dbd-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'dbd-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'dbd-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'dbd-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'rust'],
	[/eac-bypass-dbd-warzone/g, 'eac-bypass-dbd'],
	[/Call of Duty: Warzone/g, 'Dead by Daylight'],
	[/Call of Duty Warzone/g, 'Dead by Daylight'],
	[/Call of Duty/g, 'Dead by Daylight'],
	[/Warzone Wallhack/g, 'Dead by Daylight Wallhack'],
	[/Warzone Radar Hack/g, 'Dead by Daylight Radar Hack'],
	[/Warzone Cheat Features/g, 'Dead by Daylight Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Dead by Daylight Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Dead by Daylight Cheat Setup'],
	[/Warzone Cheat Status/g, 'Dead by Daylight Cheat Status'],
	[/Warzone Cheat Support/g, 'Dead by Daylight Cheat Support'],
	[/Warzone group fight/g, 'Dead by Daylight group fight'],
	[/Warzone squad builder/g, 'Dead by Daylight loadout builder'],
	[/Warzone store header/g, 'Dead by Daylight header'],
	[/Warzone wasteland combat/g, 'Dead by Daylight generator routes combat'],
	[/Warzone loadout builder/g, 'Dead by Daylight loadout builder'],
	[/Warzone pricing/g, 'Dead by Daylight pricing'],
	[/Warzone Dead by Daylight anti-cheat/g, 'Dead by Daylight Dead by Daylight anti-cheat'],
	[/on Warzone/g, 'on Dead by Daylight'],
	[/for Warzone/g, 'for Dead by Daylight'],
	[/Warzone guides/g, 'Dead by Daylight guides'],
	[/Warzone guide/g, 'Dead by Daylight guide'],
	[/Warzone hileleri/g, 'Dead by Daylight hileleri'],
	[/Warzone hile/g, 'Dead by Daylight hile'],
	[/Warzone hileleri/g, 'Dead by Daylight hileleri'],
	[/cheatów Warzone/g, 'cheatów Dead by Daylight'],
	[/cheat Warzone/g, 'cheat Dead by Daylight'],
	[/cheats Warzone/g, 'cheats Dead by Daylight'],
	[/trucos Warzone/g, 'trucos Dead by Daylight'],
	[/triche Warzone/g, 'triche Dead by Daylight'],
	[/trucchi Warzone/g, 'trucchi Dead by Daylight'],
	[/Wallhack Warzone/g, 'Dead by Daylight Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Dead by Daylight undetected'],
	[/cheats Warzone undetected/g, 'cheats Dead by Daylight undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Dead by Daylight and generator objectives'],
	[/Verdansk, Urzikstan/g, 'Dead by Daylight, generator objectives'],
	[/generator routes and Resurgence/g, 'generator routes and generator objectives'],
	[/Activision's anti-cheat/g, "Embark' anti-cheat"],
	[/Activision anti-cheat/g, 'Embark anti-cheat'],
	[/Activision ships/g, 'Embark ships'],
	[/Activision security/g, 'Embark security'],
	[/Activision bans/g, 'Embark bans'],
	[/Activision/g, 'Embark'],
	[/ricochet/gi, 'eac'],
	[/Ricochet/g, 'Dead by Daylight anti-cheat (EAC)'],
	[/call-of-duty-warzone-cheats/g, 'dbd-cheats'],
	[/call-of-duty-warzone/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Dead by Daylight'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Dead by Daylight anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Dead by Daylight Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Dead by Daylight guides');
	content = content.replace(/Warzone guide/g, 'Dead by Daylight guide');
	content = content.replace(/Warzone hileleri/g, 'Dead by Daylight hileleri');
	content = content.replace(/Warzone hile/g, 'Dead by Daylight hile');
	content = content.replace(/cheat Warzone/g, 'cheat Dead by Daylight');
	content = content.replace(/cheats Warzone/g, 'cheats Dead by Daylight');
	content = content.replace(/trucos Warzone/g, 'trucos Dead by Daylight');
	content = content.replace(/triche Warzone/g, 'triche Dead by Daylight');
	content = content.replace(/trucchi Warzone/g, 'trucchi Dead by Daylight');
	content = content.replace(/cheatów Warzone/g, 'cheatów Dead by Daylight');
	content = content.replace(/читов Warzone/g, 'читов Dead by Daylight');
	content = content.replace(/читів Warzone/g, 'читів Dead by Daylight');
	content = content.replace(/Warzoneチート/g, 'Dead by Daylightチート');
	content = content.replace(/Warzone 치트/g, 'Dead by Daylight 치트');
	content = content.replace(/Warzone作弊/g, 'Dead by Daylight作弊');
	content = content.replace(/Warzone rehberleri/g, 'Dead by Daylight rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Dead by Daylight gidsen');
	content = content.replace(/Warzone průvodce/g, 'Dead by Daylight průvodce');
	content = content.replace(/Warzone guider/g, 'Dead by Daylight guider');
	content = content.replace(/Warzone related/g, 'Dead by Daylight related');
	content = content.replace(/Warzone ガイド/g, 'Dead by Daylight ガイド');
	content = content.replace(/Warzone 가이드/g, 'Dead by Daylight 가이드');
	content = content.replace(/Warzone指南/g, 'Dead by Daylight指南');
	content = content.replace(/Warzone गाइड/g, 'Dead by Daylight गाइड');
	content = content.replace(/Warzone panduan/g, 'Dead by Daylight panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Dead by Daylight คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Dead by Daylight hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Dead by Daylight Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
