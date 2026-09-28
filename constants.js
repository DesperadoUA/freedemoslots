/** Языковые префиксы в URL (/de/...) */
export const SITE_LANGS = new Set([
  'en',
  'ua',
  'de',
  'es',
  'fr',
  'ru',
  'ch',
  'pt',
  'it',
  'tr',
  'nl',
  'pl',
  'ro',
  'el',
  'cs',
  'sv',
  'fi',
  'hu',
  'sr',
  'hi',
])

/** slug с отдельными page-роутами — не отдавать в catch-all статики */
export const RESERVED_ROUTE_SLUGS = [
  'providers',
  'slot-themes',
  'slot-features',
  'volatility-rate',
  'volatillity-rate',
  'casino-games',
  'casino-game-series',
  'live-casino-games',
  'theme',
  'feature',
  'vendor',
  'volatility',
  'type',
  'series',
  'live-casino',
  'blog',
  'main',
]

export const SLOT_SLUG = 'slot'
export const VENDOR_SLUG = 'vendor'
export const THEME_SLUG = 'theme'
export const FEATURE_SLUG = 'feature'
export const VOLATILITY_SLUG = 'volatility'
export const VENDORS_ROOT_SLUG = 'providers'
export const THEMES_ROOT_SLUG = 'slot-themes'
export const FEATURE_ROOT_SLUG = 'slot-features'
export const LIVE_CASINO_SLUG = 'live-casino'
export const LIVE_CASINO_GAMES_ROOT_SLUG = 'live-casino-games'
export const TYPE_SLUG = 'type'
export const CASINO_GAMES_ROOT_SLUG = 'casino-games'
export const SERIES_SLUG = 'series'
export const SERIES_ROOT_SLUG = 'casino-game-series'
export const VOLATILITY_ROOT_SLUG = 'volatility-rate'
/** permalink страницы в API (опечатка в БД) */
export const VOLATILITY_API_PAGE_SLUG = 'volatillity-rate'
/** @deprecated используй VOLATILITY_ROOT_SLUG */
export const VOLATILLITY_ROOT_SLUG = VOLATILITY_ROOT_SLUG

/** Рефка кнопки Play for Real Money на странице слота */
export const PLAY_REAL_REF =
  'https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979'