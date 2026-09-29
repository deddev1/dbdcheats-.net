export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/**
 * UI locales (language switcher / `/{lang}/…` routes).
 * All locales are included in sitemaps and indexable.
 * @see `seoIndexableLocales`, `includeLocaleUrlsInSitemap`
 */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Spain & Latin America' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'France & Africa' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Germany & DACH' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Brazil & Portugal' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Italy' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Netherlands & Belgium' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Poland' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Russia & CIS' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Turkey' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Middle East & North Africa' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Japan' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'South Korea' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'China & Singapore' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'India' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Indonesia' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Thailand' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Vietnam' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Ukraine' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Czech Republic' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Romania' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Sweden & Nordics' },
];

/** Official / canonical locale — English global pages at site root. */
export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

/** All locales are indexable and listed in per-locale sitemaps. */
export const seoIndexableLocales: readonly LocaleCode[] = localeCodes;

/** Include localized URLs in per-locale sitemaps and sitemap-i18n.xml. */
export const includeLocaleUrlsInSitemap = true;

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Dead by Daylight Cheats Blog | ESP, Aimbot & Setup Guides',
		blogDescription:
			'Dead by Daylight cheats blog — undetected ESP, wallhack, radar, aimbot setup, pricing, anti-cheat maintenance, and vendor comparisons for Windows PC.',
		blogH1: 'Dead by Daylight Cheats Blog',
		blogIntro:
			'Guides for Dead by Daylight cheats buyers: ESP and wallhack explainers, radar and aimbot settings, undetected anti-cheat notes, pricing breakdowns, and setup walkthroughs — plus The Fog game tips when you need them.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Dead by Daylight guides',
		allPosts: 'All blog posts',
		home: 'Dead by Daylight Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Dead by Daylight Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Dead by Daylight en PC Windows.',
		blogH1: 'Blog Dead by Daylight Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Dead by Daylight indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Dead by Daylight anti-cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Dead by Daylight relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Dead by Daylight Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Dead by Daylight Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Dead by Daylight sur PC Windows.',
		blogH1: 'Blog Dead by Daylight Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Dead by Daylight indétectables, ESP wallhack, radar hack, Aimbot et Dead by Daylight anti-cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Dead by Daylight associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Dead by Daylight Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Dead by Daylight Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Dead by Daylight Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Dead by Daylight auf Windows PC.',
		blogH1: 'Dead by Daylight Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Dead by Daylight Cheats, ESP Wallhack, Radar Hack, Aimbot und Dead by Daylight anti-cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Dead by Daylight Guides',
		allPosts: 'Alle Beiträge',
		home: 'Dead by Daylight Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Dead by Daylight Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Dead by Daylight no PC.',
		blogH1: 'Blog Dead by Daylight Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Dead by Daylight indetectáveis, ESP wallhack, radar hack, Aimbot e Dead by Daylight anti-cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Dead by Daylight relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Dead by Daylight Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Dead by Daylight Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Dead by Daylight su PC Windows.',
		blogH1: 'Blog Dead by Daylight Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Dead by Daylight indetectable, ESP wallhack, radar hack, Aimbot e Dead by Daylight anti-cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Dead by Daylight correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Dead by Daylight Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Dead by Daylight Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Dead by Daylight Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Dead by Daylight op Windows PC.',
		blogH1: 'Dead by Daylight Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Dead by Daylight cheats, ESP wallhack, radar hack, Aimbot en Dead by Daylight anti-cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Dead by Daylight gidsen',
		allPosts: 'Alle posts',
		home: 'Dead by Daylight Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Dead by Daylight Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Dead by Daylight na PC.',
		blogH1: 'Blog Dead by Daylight Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Dead by Daylight, ESP wallhack, radar hack, Aimbot i Dead by Daylight anti-cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Dead by Daylight',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Dead by Daylight Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Dead by Daylight Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Dead by Daylight Cheats: undetected ESP, wallhack, radar и Aimbot для Dead by Daylight на Windows PC.',
		blogH1: 'Блог Dead by Daylight Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Dead by Daylight, ESP wallhack, radar hack, Aimbot и Dead by Daylight anti-cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Dead by Daylight',
		allPosts: 'Все статьи',
		home: 'Главная Dead by Daylight Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Dead by Daylight Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Dead by Daylight Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Dead by Daylight Windows PC.',
		blogH1: 'Dead by Daylight Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Dead by Daylight hileleri, ESP wallhack, radar hack, Aimbot ve Dead by Daylight anti-cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Dead by Daylight rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Dead by Daylight Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Dead by Daylight Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Dead by Daylight Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Dead by Daylight على Windows PC.',
		blogH1: 'مدونة Dead by Daylight Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Dead by Daylight undetected وESP wallhack ورadar hack وAimbot وDead by Daylight anti-cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Dead by Daylight ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Dead by Daylight Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Dead by Daylight Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Dead by Daylight Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Dead by Daylight Windows PC向け。',
		blogH1: 'Dead by Daylight Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Dead by Daylightチート、ESP wallhack、radar hack、Aimbot、Dead by Daylight anti-cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Dead by Daylightガイド',
		allPosts: 'すべての記事',
		home: 'Dead by Daylight Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Dead by Daylight Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Dead by Daylight Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Dead by Daylight Windows PC.',
		blogH1: 'Dead by Daylight Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Dead by Daylight 치트, ESP wallhack, radar hack, Aimbot, Dead by Daylight anti-cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Dead by Daylight 가이드',
		allPosts: '모든 게시물',
		home: 'Dead by Daylight Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Dead by Daylight Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Dead by Daylight Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Dead by Daylight Windows PC。',
		blogH1: 'Dead by Daylight Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Dead by Daylight作弊、ESP wallhack、radar hack、Aimbot和Dead by Daylight anti-cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Dead by Daylight指南',
		allPosts: '所有文章',
		home: 'Dead by Daylight Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Dead by Daylight Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Dead by Daylight Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Dead by Daylight Windows PC के लिए।',
		blogH1: 'Dead by Daylight Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Dead by Daylight cheats, ESP wallhack, radar hack, Aimbot और Dead by Daylight anti-cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Dead by Daylight गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Dead by Daylight Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Dead by Daylight Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Dead by Daylight di PC Windows.',
		blogH1: 'Blog Dead by Daylight Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Dead by Daylight undetected, ESP wallhack, radar hack, Aimbot dan Dead by Daylight anti-cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Dead by Daylight terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Dead by Daylight Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Dead by Daylight Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Dead by Daylight Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Dead by Daylight บน PC',
		blogH1: 'บล็อก Dead by Daylight Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Dead by Daylight undetected, ESP wallhack, radar hack, Aimbot และ Dead by Daylight anti-cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Dead by Daylight ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Dead by Daylight Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Dead by Daylight Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Dead by Daylight trên PC.',
		blogH1: 'Blog Dead by Daylight Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Dead by Daylight undetected, ESP wallhack, radar hack, Aimbot và Dead by Daylight anti-cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Dead by Daylight liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Dead by Daylight Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Dead by Daylight Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Dead by Daylight Cheats: undetected ESP, wallhack, radar та Aimbot для Dead by Daylight на Windows PC.',
		blogH1: 'Блог Dead by Daylight Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Dead by Daylight, ESP wallhack, radar hack, Aimbot та Dead by Daylight anti-cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Dead by Daylight",
		allPosts: 'Усі статті',
		home: 'Головна Dead by Daylight Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Dead by Daylight Cheats: undetected ESP, wallhack, radar a Aimbot pro Dead by Daylight na Windows PC.',
		blogH1: 'Blog Dead by Daylight Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Dead by Daylight cheaty, ESP wallhack, radar hack, Aimbot a Dead by Daylight anti-cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Dead by Daylight průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Dead by Daylight Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Dead by Daylight Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Dead by Daylight Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Dead by Daylight pe PC.',
		blogH1: 'Blog Dead by Daylight Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Dead by Daylight undetected, ESP wallhack, radar hack, Aimbot și Dead by Daylight anti-cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Dead by Daylight related',
		allPosts: 'Toate articolele',
		home: 'Acasă Dead by Daylight Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Dead by Daylight Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Dead by Daylight Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Dead by Daylight på PC.',
		blogH1: 'Dead by Daylight Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Dead by Daylight cheats, ESP wallhack, radar hack, Aimbot och Dead by Daylight anti-cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Dead by Daylight guider',
		allPosts: 'Alla inlägg',
		home: 'Dead by Daylight Cheats hem',
		language: 'Språk',
	},
};
