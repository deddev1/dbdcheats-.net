import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Dead by Daylight indetectables para Dead by Daylight en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Dead by Daylight anti-cheat. Entrega digital instantánea.', h1: 'Dead by Daylight Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Dead by Daylight en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Dead by Daylight anti-cheat tras cada parche.', imageAlt: 'Hero dbd-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Dead by Daylight Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Dead by Daylight Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y public lobbies.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Dead by Daylight indétectables pour Dead by Daylight sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Dead by Daylight anti-cheat. Livraison numérique instantanée.', h1: 'Dead by Daylight Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Dead by Daylight sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Dead by Daylight anti-cheat après chaque patch.', imageAlt: 'Hero dbd-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Dead by Daylight Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Dead by Daylight Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer killers et survivors en survie, multijoueur et coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dead by Daylight Cheats für Dead by Daylight auf PC. ESP Wallhack, Radar Hack und Aimbot mit Dead by Daylight anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Dead by Daylight: ESP Wallhack, Radar und Aimbot mit Dead by Daylight anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Dead by Daylight-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Dead by Daylight Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Dead by Daylight Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und public lobbies zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Dead by Daylight indetectáveis para Dead by Daylight no PC. ESP wallhack, radar hack e Aimbot com manutenção Dead by Daylight anti-cheat. Entrega digital instantánea.', h1: 'Dead by Daylight Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Dead by Daylight no Windows PC: ESP wallhack, radar e Aimbot com manutenção Dead by Daylight anti-cheat após cada patch.', imageAlt: 'Hero dbd-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Dead by Daylight Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Dead by Daylight Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em survival e public lobbies.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Dead by Daylight indetectable per Dead by Daylight su PC. ESP wallhack, radar hack e Aimbot con manutenzione Dead by Daylight anti-cheat. Consegna digitale istantanea.', h1: 'Dead by Daylight Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Dead by Daylight su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Dead by Daylight anti-cheat dopo ogni patch.', imageAlt: 'Hero dbd-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Dead by Daylight Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Dead by Daylight Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e public lobbies.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dead by Daylight cheats voor Dead by Daylight op PC. ESP wallhack, radar hack en Aimbot met Dead by Daylight anti-cheat-onderhoud. Directe digitale levering.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Dead by Daylight: ESP wallhack, radar en Aimbot met Dead by Daylight anti-cheat-onderhoud na elke patch.', imageAlt: 'Dead by Daylight-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Dead by Daylight Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Dead by Daylight Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en public lobbies.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Dead by Daylight dla Dead by Daylight na PC. ESP wallhack, radar hack i Aimbot z konserwacją Dead by Daylight anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Dead by Daylight na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Dead by Daylight anti-cheat po każdym patchu.', imageAlt: 'Hero dbd-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Dead by Daylight Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Dead by Daylight Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i public lobbies.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Dead by Daylight anti-cheat. Мгновенная цифровая доставка.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Dead by Daylight anti-cheat после патчей.', imageAlt: 'Hero dbd-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Dead by Daylight Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Dead by Daylight Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в survival и public lobbies.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Dead by Daylight için undetected hileler. ESP wallhack, radar hack ve Aimbot — Dead by Daylight anti-cheat bakımı. Anında dijital teslimat.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Dead by Daylight Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Dead by Daylight anti-cheat bakımı dahil.', imageAlt: 'Dead by Daylight-cheats player ESP wallhack ve Aimbot undetected', gallery: 'Dead by Daylight Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Dead by Daylight Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve public lobbies\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Dead by Daylight Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Dead by Daylight undetected لـ Dead by Daylight على PC. ESP wallhack ورadar hack وAimbot مع صيانة Dead by Daylight anti-cheat. تسليم رقمي فوري.', h1: 'Dead by Daylight Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Dead by Daylight على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Dead by Daylight Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Dead by Daylight Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وpublic lobbies.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Dead by Daylight Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Dead by Daylight向けundetectedチート。ESP wallhack、radar hack、Aimbot、Dead by Daylight anti-cheatメンテナンス。即時デジタル配信。', h1: 'Dead by Daylight Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Dead by Daylight Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Dead by Daylight anti-cheatメンテナンス付き。', imageAlt: 'dbd-cheats player ESP wallhackとAimbot undetected', gallery: 'Dead by Daylight Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDead by Daylight Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとpublic lobbiesで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Dead by Daylight undetected 치트. ESP wallhack, radar hack, Aimbot, Dead by Daylight anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Dead by Daylight Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Dead by Daylight anti-cheat 유지보수 포함.', imageAlt: 'dbd-cheats player ESP wallhack 및 Aimbot undetected', gallery: 'Dead by Daylight Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Dead by Daylight Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 public lobbies에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Dead by Daylight Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Dead by Daylight undetected作弊。ESP wallhack、radar hack、Aimbot、Dead by Daylight anti-cheat维护。即时数字交付。', h1: 'Dead by Daylight Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Dead by Daylight Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Dead by Daylight anti-cheat维护。', imageAlt: 'dbd-cheats player ESP wallhack与Aimbot undetected', gallery: 'Dead by Daylight Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Dead by Daylight Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在生存和public lobbies中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Dead by Daylight undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Dead by Daylight Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'dbd-cheats player ESP wallhack और Aimbot undetected', gallery: 'Dead by Daylight Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Dead by Daylight Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और public lobbies में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected untuk Dead by Daylight di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Dead by Daylight anti-cheat. Pengiriman digital instan.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Dead by Daylight di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Dead by Daylight Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan public lobbies.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Dead by Daylight undetected สำหรับ Dead by Daylight บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Dead by Daylight บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero dbd-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Dead by Daylight Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ public lobbies', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected cho Dead by Daylight trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Dead by Daylight anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Dead by Daylight trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Dead by Daylight Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và public lobbies.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack, Aimbot, обслуговування Dead by Daylight anti-cheat. Мгновенная цифровая доставка.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Dead by Daylight Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і public lobbies.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Dead by Daylight cheaty pro Dead by Daylight na PC. ESP wallhack, radar hack, Aimbot, údržba Dead by Daylight anti-cheat. Okamžité digitální doručení.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Dead by Daylight na Windows PC: ESP wallhack, radar, Aimbot s údržbou Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Dead by Daylight Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a public lobbies.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Dead by Daylight undetected pentru Dead by Daylight pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Dead by Daylight anti-cheat. Livrare digitală instantă.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Dead by Daylight pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Dead by Daylight anti-cheat.', imageAlt: 'Hero dbd-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Dead by Daylight Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Dead by Daylight Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și public lobbies.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Dead by Daylight Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dead by Daylight cheats för Dead by Daylight på PC. ESP wallhack, radar hack, Aimbot, Dead by Daylight anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Dead by Daylight på Windows PC: ESP wallhack, radar, Aimbot med Dead by Daylight anti-cheat-underhåll.', imageAlt: 'Dead by Daylight-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Dead by Daylight Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Dead by Daylight Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och public lobbies.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'dbd-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, chest or totem markers, and wallhack overlays' },
	'dbd-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Dead by Daylight anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Dead by Daylight Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Dead by Daylight cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Dead by Daylight Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Dead by Daylight cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Dead by Daylight' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Dead by Daylight Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Dead by Daylight Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Dead by Daylight. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `dbd-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Dead by Daylight Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read killers and survivors with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for open-world Fog map looping.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'dbd-esp': { en: 'Dead by Daylight ESP', es: 'Dead by Daylight ESP', fr: 'Dead by Daylight ESP', de: 'Dead by Daylight ESP', pt: 'Dead by Daylight ESP', it: 'Dead by Daylight ESP', nl: 'Dead by Daylight ESP', pl: 'Dead by Daylight ESP', ru: 'Dead by Daylight ESP', tr: 'Dead by Daylight ESP', ar: 'Dead by Daylight ESP', ja: 'Dead by Daylight ESP', ko: 'Dead by Daylight ESP', zh: 'Dead by Daylight ESP', hi: 'Dead by Daylight ESP', id: 'Dead by Daylight ESP', th: 'Dead by Daylight ESP', vi: 'Dead by Daylight ESP', uk: 'Dead by Daylight ESP', cs: 'Dead by Daylight ESP', ro: 'Dead by Daylight ESP', sv: 'Dead by Daylight ESP' },
	'dbd-aimbot': { en: 'Dead by Daylight Aimbot', es: 'Dead by Daylight Aimbot', fr: 'Dead by Daylight Aimbot', de: 'Dead by Daylight Aimbot', pt: 'Dead by Daylight Aimbot', it: 'Dead by Daylight Aimbot', nl: 'Dead by Daylight Aimbot', pl: 'Dead by Daylight Aimbot', ru: 'Dead by Daylight Aimbot', tr: 'Dead by Daylight Aimbot', ar: 'Dead by Daylight Aimbot', ja: 'Dead by Daylight Aimbot', ko: 'Dead by Daylight Aimbot', zh: 'Dead by Daylight Aimbot', hi: 'Dead by Daylight Aimbot', id: 'Dead by Daylight Aimbot', th: 'Dead by Daylight Aimbot', vi: 'Dead by Daylight Aimbot', uk: 'Dead by Daylight Aimbot', cs: 'Dead by Daylight Aimbot', ro: 'Dead by Daylight Aimbot', sv: 'Dead by Daylight Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Dead by Daylight Wallhack', es: 'Dead by Daylight Wallhack', fr: 'Dead by Daylight Wallhack', de: 'Dead by Daylight Wallhack', pt: 'Dead by Daylight Wallhack', it: 'Dead by Daylight Wallhack', nl: 'Dead by Daylight Wallhack', pl: 'Dead by Daylight Wallhack', ru: 'Dead by Daylight Wallhack', tr: 'Dead by Daylight Wallhack', ar: 'Dead by Daylight Wallhack', ja: 'Dead by Daylight Wallhack', ko: 'Dead by Daylight Wallhack', zh: 'Dead by Daylight Wallhack', hi: 'Dead by Daylight Wallhack', id: 'Dead by Daylight Wallhack', th: 'Dead by Daylight Wallhack', vi: 'Dead by Daylight Wallhack', uk: 'Dead by Daylight Wallhack', cs: 'Dead by Daylight Wallhack', ro: 'Dead by Daylight Wallhack', sv: 'Dead by Daylight Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Dead by Daylight anti-cheat', fr: 'Bypass Dead by Daylight anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Dead by Daylight anti-cheat', it: 'Bypass Dead by Daylight anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Dead by Daylight anti-cheat', ru: 'Bypass Dead by Daylight anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Dead by Daylight anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Dead by Daylight anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Dead by Daylight anti-cheat', uk: 'Bypass Dead by Daylight anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Dead by Daylight anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Dead by Daylight Cheats 2026', es: 'Dead by Daylight Cheats 2026', fr: 'Dead by Daylight Cheats 2026', de: 'Dead by Daylight Cheats 2026', pt: 'Dead by Daylight Cheats 2026', it: 'Dead by Daylight Cheats 2026', nl: 'Dead by Daylight Cheats 2026', pl: 'Dead by Daylight Cheats 2026', ru: 'Dead by Daylight Cheats 2026', tr: 'Dead by Daylight Cheats 2026', ar: 'Dead by Daylight Cheats 2026', ja: 'Dead by Daylight Cheats 2026', ko: 'Dead by Daylight Cheats 2026', zh: 'Dead by Daylight Cheats 2026', hi: 'Dead by Daylight Cheats 2026', id: 'Dead by Daylight Cheats 2026', th: 'Dead by Daylight Cheats 2026', vi: 'Dead by Daylight Cheats 2026', uk: 'Dead by Daylight Cheats 2026', cs: 'Dead by Daylight Cheats 2026', ro: 'Dead by Daylight Cheats 2026', sv: 'Dead by Daylight Cheats 2026' },
	hacks: { en: 'Dead by Daylight Cheats', es: 'Dead by Daylight Cheats', fr: 'Dead by Daylight Cheats', de: 'Dead by Daylight Cheats', pt: 'Dead by Daylight Cheats', it: 'Dead by Daylight Cheats', nl: 'Dead by Daylight Cheats', pl: 'Dead by Daylight Cheats', ru: 'Dead by Daylight Cheats', tr: 'Dead by Daylight Cheats', ar: 'Dead by Daylight Cheats', ja: 'Dead by Daylight Cheats', ko: 'Dead by Daylight Cheats', zh: 'Dead by Daylight Cheats', hi: 'Dead by Daylight Cheats', id: 'Dead by Daylight Cheats', th: 'Dead by Daylight Cheats', vi: 'Dead by Daylight Cheats', uk: 'Dead by Daylight Cheats', cs: 'Dead by Daylight Cheats', ro: 'Dead by Daylight Cheats', sv: 'Dead by Daylight Cheats' },
	'cheat-download': { en: 'Dead by Daylight Cheats Download', es: 'Descarga Dead by Daylight Cheats', fr: 'Téléchargement Dead by Daylight Cheats', de: 'Dead by Daylight Cheats Download', pt: 'Download Dead by Daylight Cheats', it: 'Download Dead by Daylight Cheats', nl: 'Dead by Daylight Cheats Download', pl: 'Pobieranie Dead by Daylight Cheats', ru: 'Скачать Dead by Daylight Cheats', tr: 'Dead by Daylight Hile İndir', ar: 'Dead by Daylight Cheats Download', ja: 'Dead by Daylight Cheats Download', ko: 'Dead by Daylight Cheats Download', zh: 'Dead by Daylight Cheats Download', hi: 'Dead by Daylight Cheats Download', id: 'Dead by Daylight Cheats Download', th: 'Dead by Daylight Cheats Download', vi: 'Dead by Daylight Cheats Download', uk: 'Завантаження Dead by Daylight Cheats', cs: 'Dead by Daylight Cheats Download', ro: 'Descărcare Dead by Daylight Cheats', sv: 'Dead by Daylight Cheats Download' },
	'mod-menu': { en: 'Dead by Daylight Mod Menu', es: 'Dead by Daylight Mod Menu', fr: 'Dead by Daylight Mod Menu', de: 'Dead by Daylight Mod Menu', pt: 'Dead by Daylight Mod Menu', it: 'Dead by Daylight Mod Menu', nl: 'Dead by Daylight Mod Menu', pl: 'Dead by Daylight Mod Menu', ru: 'Dead by Daylight Mod Menu', tr: 'Dead by Daylight Mod Menu', ar: 'Dead by Daylight Mod Menu', ja: 'Dead by Daylight Mod Menu', ko: 'Dead by Daylight Mod Menu', zh: 'Dead by Daylight Mod Menu', hi: 'Dead by Daylight Mod Menu', id: 'Dead by Daylight Mod Menu', th: 'Dead by Daylight Mod Menu', vi: 'Dead by Daylight Mod Menu', uk: 'Dead by Daylight Mod Menu', cs: 'Dead by Daylight Mod Menu', ro: 'Dead by Daylight Mod Menu', sv: 'Dead by Daylight Mod Menu' },
	'soft-aim': { en: 'Dead by Daylight Soft Aim', es: 'Dead by Daylight Soft Aim', fr: 'Dead by Daylight Soft Aim', de: 'Dead by Daylight Soft Aim', pt: 'Dead by Daylight Soft Aim', it: 'Dead by Daylight Soft Aim', nl: 'Dead by Daylight Soft Aim', pl: 'Dead by Daylight Soft Aim', ru: 'Dead by Daylight Soft Aim', tr: 'Dead by Daylight Soft Aim', ar: 'Dead by Daylight Soft Aim', ja: 'Dead by Daylight Soft Aim', ko: 'Dead by Daylight Soft Aim', zh: 'Dead by Daylight Soft Aim', hi: 'Dead by Daylight Soft Aim', id: 'Dead by Daylight Soft Aim', th: 'Dead by Daylight Soft Aim', vi: 'Dead by Daylight Soft Aim', uk: 'Dead by Daylight Soft Aim', cs: 'Dead by Daylight Soft Aim', ro: 'Dead by Daylight Soft Aim', sv: 'Dead by Daylight Soft Aim' },
	'best-cheats': { en: 'Best Dead by Daylight Cheats', es: 'Mejores Dead by Daylight Cheats', fr: 'Meilleures Dead by Daylight Cheats', de: 'Beste Dead by Daylight Cheats', pt: 'Melhores Dead by Daylight Cheats', it: 'Migliori Dead by Daylight Cheats', nl: 'Beste Dead by Daylight Cheats', pl: 'Najlepsze Dead by Daylight Cheats', ru: 'Лучшие Dead by Daylight Cheats', tr: 'En İyi Dead by Daylight Hileleri', ar: 'Best Dead by Daylight Cheats', ja: 'Best Dead by Daylight Cheats', ko: 'Best Dead by Daylight Cheats', zh: 'Best Dead by Daylight Cheats', hi: 'Best Dead by Daylight Cheats', id: 'Best Dead by Daylight Cheats', th: 'Best Dead by Daylight Cheats', vi: 'Best Dead by Daylight Cheats', uk: 'Найкращі Dead by Daylight Cheats', cs: 'Nejlepší Dead by Daylight Cheats', ro: 'Cele mai bune Dead by Daylight Cheats', sv: 'Bästa Dead by Daylight Cheats' },
	'aimbot-hack': { en: 'Dead by Daylight Aimbot Hack', es: 'Dead by Daylight Aimbot Hack', fr: 'Dead by Daylight Aimbot Hack', de: 'Dead by Daylight Aimbot Hack', pt: 'Dead by Daylight Aimbot Hack', it: 'Dead by Daylight Aimbot Hack', nl: 'Dead by Daylight Aimbot Hack', pl: 'Dead by Daylight Aimbot Hack', ru: 'Dead by Daylight Aimbot Hack', tr: 'Dead by Daylight Aimbot Hack', ar: 'Dead by Daylight Aimbot Hack', ja: 'Dead by Daylight Aimbot Hack', ko: 'Dead by Daylight Aimbot Hack', zh: 'Dead by Daylight Aimbot Hack', hi: 'Dead by Daylight Aimbot Hack', id: 'Dead by Daylight Aimbot Hack', th: 'Dead by Daylight Aimbot Hack', vi: 'Dead by Daylight Aimbot Hack', uk: 'Dead by Daylight Aimbot Hack', cs: 'Dead by Daylight Aimbot Hack', ro: 'Dead by Daylight Aimbot Hack', sv: 'Dead by Daylight Aimbot Hack' },
	'esp-hack': { en: 'Dead by Daylight ESP Hack', es: 'Dead by Daylight ESP Hack', fr: 'Dead by Daylight ESP Hack', de: 'Dead by Daylight ESP Hack', pt: 'Dead by Daylight ESP Hack', it: 'Dead by Daylight ESP Hack', nl: 'Dead by Daylight ESP Hack', pl: 'Dead by Daylight ESP Hack', ru: 'Dead by Daylight ESP Hack', tr: 'Dead by Daylight ESP Hack', ar: 'Dead by Daylight ESP Hack', ja: 'Dead by Daylight ESP Hack', ko: 'Dead by Daylight ESP Hack', zh: 'Dead by Daylight ESP Hack', hi: 'Dead by Daylight ESP Hack', id: 'Dead by Daylight ESP Hack', th: 'Dead by Daylight ESP Hack', vi: 'Dead by Daylight ESP Hack', uk: 'Dead by Daylight ESP Hack', cs: 'Dead by Daylight ESP Hack', ro: 'Dead by Daylight ESP Hack', sv: 'Dead by Daylight ESP Hack' },
	'unlock-all': { en: 'Dead by Daylight Unlock All', es: 'Dead by Daylight Unlock All', fr: 'Dead by Daylight Unlock All', de: 'Dead by Daylight Unlock All', pt: 'Dead by Daylight Unlock All', it: 'Dead by Daylight Unlock All', nl: 'Dead by Daylight Unlock All', pl: 'Dead by Daylight Unlock All', ru: 'Dead by Daylight Unlock All', tr: 'Dead by Daylight Unlock All', ar: 'Dead by Daylight Unlock All', ja: 'Dead by Daylight Unlock All', ko: 'Dead by Daylight Unlock All', zh: 'Dead by Daylight Unlock All', hi: 'Dead by Daylight Unlock All', id: 'Dead by Daylight Unlock All', th: 'Dead by Daylight Unlock All', vi: 'Dead by Daylight Unlock All', uk: 'Dead by Daylight Unlock All', cs: 'Dead by Daylight Unlock All', ro: 'Dead by Daylight Unlock All', sv: 'Dead by Daylight Unlock All' },
};

const CTA2_HREF = {
	'dbd-esp': '/dbd-wallhack/',
	'dbd-aimbot': '/dbd-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/dbd-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/dbd-cheats/',
	wallhack: '/dbd-esp/',
	radar: '/dbd-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/dbd-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/dbd-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/dbd-aimbot/',
	'esp-hack': '/dbd-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Dead by Daylight Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Dead by Daylight Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for dbdcheat.net and Dead by Daylight licenses.`),
		imageAlt: `dbd-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Dead by Daylight Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on dbdcheat.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Dead by Daylight terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@dbdcheat.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
