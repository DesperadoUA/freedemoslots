import { SITE_LANGS } from '@/constants'

export default defineNuxtPlugin(() => {
  const getLangLink = (url) => {
    const lang = useLang().value
    if (lang && lang !== 'en' && SITE_LANGS.has(lang)) {
      return `/${lang}${url}`
    }
    return url
  }
  return {
    provide: {
      getLangLink,
    },
  }
})
