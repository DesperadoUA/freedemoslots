// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  runtimeConfig: {
    public: {
      // apiUrl: 'http://127.0.0.1:7000/api'
      apiUrl: 'https://api.freedemoslots.net/api'
    }
  },
})