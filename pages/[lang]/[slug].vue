<template>
  <PagesSingleSlot v-if="isGameRoute" />
  <PagesStaticPage v-else />
</template>

<script setup>
import { SITE_LANGS } from '@/constants'

const route = useRoute()

const isGameRoute = computed(() => {
  const lang = route.params.lang ? String(route.params.lang) : ''
  return lang && !SITE_LANGS.has(lang)
})
</script>
