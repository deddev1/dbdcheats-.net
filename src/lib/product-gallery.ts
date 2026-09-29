/** Shared product/pricing screenshot gallery: thumbs + arrows (no autoplay). */

export function initProductGalleries(scope: ParentNode = document) {
	scope.querySelectorAll<HTMLElement>('[data-product]').forEach(initGallery);
}

function scrollThumbInStrip(thumb: HTMLElement) {
	const strip = thumb.parentElement;
	if (!strip) return;

	const left = thumb.offsetLeft;
	const right = left + thumb.offsetWidth;
	const viewLeft = strip.scrollLeft;
	const viewRight = viewLeft + strip.clientWidth;
	const pad = 8;

	if (left < viewLeft) {
		strip.scrollTo({ left: Math.max(0, left - pad), behavior: 'smooth' });
	} else if (right > viewRight) {
		strip.scrollTo({ left: right - strip.clientWidth + pad, behavior: 'smooth' });
	}
}

function initGallery(root: HTMLElement) {
	const mainImage = root.querySelector<HTMLImageElement>('[data-main-image]');
	const thumbs = [...root.querySelectorAll<HTMLElement>('[data-thumb]')];
	const prev = root.querySelector<HTMLButtonElement>('[data-gallery-prev]');
	const next = root.querySelector<HTMLButtonElement>('[data-gallery-next]');
	if (!mainImage || thumbs.length === 0) return;

	// Prevent browser scroll anchoring from yanking the page when images swap.
	root.style.overflowAnchor = 'none';

	let index = Math.max(
		0,
		thumbs.findIndex((thumb) => thumb.classList.contains('is-active')),
	);

	const show = (nextIndex: number, syncStrip = false) => {
		index = (nextIndex + thumbs.length) % thumbs.length;
		const thumb = thumbs[index];
		const src = thumb.getAttribute('data-src');
		const srcset = thumb.getAttribute('data-srcset');
		const alt = thumb.getAttribute('data-alt');
		if (src) mainImage.src = src;
		if (srcset) mainImage.srcset = srcset;
		else mainImage.removeAttribute('srcset');
		if (alt) mainImage.alt = alt;

		thumbs.forEach((item, i) => {
			const active = i === index;
			item.classList.toggle('is-active', active);
			item.setAttribute('aria-pressed', active ? 'true' : 'false');
		});

		if (syncStrip) scrollThumbInStrip(thumb);
	};

	thumbs.forEach((thumb, i) => {
		thumb.addEventListener('click', () => show(i, true));
	});

	prev?.addEventListener('click', () => show(index - 1, true));
	next?.addEventListener('click', () => show(index + 1, true));

	show(index);
}
