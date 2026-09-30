import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="70" y1="70" x2="440" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6D28D9"/>
      <stop offset="1" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="108" fill="#07070A"/>
  <rect x="28" y="28" width="456" height="456" rx="92" fill="none" stroke="url(#g)" stroke-width="22"/>
  <g fill="url(#g)" transform="translate(256 256) scale(0.82) translate(-200 -108)">
    <path d="M0 0h70c58 0 100 40 100 108S128 216 70 216H0V0zm48 44v128h22c30 0 52-26 52-64s-22-64-52-64H48z"/>
    <path d="M148 0h72c32 0 56 18 56 48 0 20-10 36-30 44 24 8 42 28 42 56 0 34-28 56-66 56h-74V0zm48 40v50h22c14 0 24-8 24-22s-10-28-24-28h-22zm0 90v52h28c16 0 30-10 30-26s-14-26-30-26h-28z"/>
    <path d="M296 0h70c58 0 100 40 100 108s-42 108-100 108h-70V0zm48 44v128h22c30 0 52-26 52-64s-22-64-52-64h-22z"/>
  </g>
</svg>`;

await writeFile('public/favicon-source.svg', svg);
const svgBuf = Buffer.from(svg);

const sizes = [
	{ file: 'public/favicon-16x16.png', size: 16 },
	{ file: 'public/favicon-32x32.png', size: 32 },
	{ file: 'public/favicon-48x48.png', size: 48 },
	{ file: 'public/apple-touch-icon.png', size: 180 },
	{ file: 'public/favicon.png', size: 192 },
	{ file: 'public/android-chrome-512x512.png', size: 512 },
];

for (const { file, size } of sizes) {
	await sharp(svgBuf).resize(size, size).png({ compressionLevel: 9 }).toFile(file);
	console.log('wrote', file);
}

await sharp(svgBuf).resize(32, 32).png().toFile('public/favicon.ico');
console.log('wrote public/favicon.ico');
