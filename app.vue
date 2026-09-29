<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { buildWebSiteJsonLd } from "@/utils/jsonLd";

const websiteLd = buildWebSiteJsonLd({ origin: useRequestURL().origin });

if (websiteLd) {
  useHead({
    script: [
      {
        key: "jsonld-website",
        type: "application/ld+json",
        innerHTML: JSON.stringify(websiteLd),
      },
    ],
  });
}
</script>
