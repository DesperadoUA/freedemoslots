import { SITE_LANGS } from '@/constants'

export const DEFAULT_LANG = 'en'

export function resolveLangFromRoute(route) {
  const param = route?.params?.lang
  if (param && SITE_LANGS.has(String(param))) {
    return String(param)
  }
  return DEFAULT_LANG
}

export function setAppLang(lang) {
  const langState = useState('app-lang', () => DEFAULT_LANG)
  const value = lang && SITE_LANGS.has(String(lang)) ? String(lang) : DEFAULT_LANG
  langState.value = value
  const nuxtApp = useNuxtApp()
  nuxtApp.$lang = value
  return value
}

/** Текущий язык API (en, de, …), всегда строка, не undefined */
export function useLang() {
  const langState = useState('app-lang', () => DEFAULT_LANG)
  return computed(() => langState.value || DEFAULT_LANG)
}
