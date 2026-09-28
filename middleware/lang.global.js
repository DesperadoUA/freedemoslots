import { resolveLangFromRoute, setAppLang } from '@/composables/useLang'

export default defineNuxtRouteMiddleware((to) => {
  setAppLang(resolveLangFromRoute(to))
})
