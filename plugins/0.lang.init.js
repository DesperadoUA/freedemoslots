import { resolveLangFromRoute, setAppLang } from '@/composables/useLang'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  setAppLang(resolveLangFromRoute(route))
})
