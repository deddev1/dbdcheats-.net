#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const packageName = JSON.parse(readFileSync('package.json', 'utf8')).name;
let commit = 'unknown';

try {
	commit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
} catch {
	// Ignore outside git checkouts.
}

console.log(`[verify-build] commit=${commit} package=${packageName}`);

const stalePackages = new Set(['warframe-cheats', 'project-zomboid-cheats', 'project-zomboid-cheats-com']);
if (stalePackages.has(packageName)) {
	console.error(
		`[verify-build] Cloudflare is building a stale package (${packageName}). Cancel retry and deploy latest main with dbd-cheats.`,
	);
	process.exit(1);
}

if (!existsSync('src/components/DbdAuthorityLinks.astro')) {
	console.error(
		'[verify-build] Missing src/components/DbdAuthorityLinks.astro. Deploy latest main instead of retrying an old failed build.',
	);
	process.exit(1);
}
