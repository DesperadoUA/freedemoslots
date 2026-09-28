<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <breadcrumbs v-if="breadcrumb?.length" :value="breadcrumb" />
    <page_content :text="pageContent" />
  </main>
</template>

<script setup>
import { RESERVED_ROUTE_SLUGS } from "@/constants";

const props = defineProps({
  permalink: {
    type: String,
    default: "",
  },
});

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

const mainHeading = ref("");
const pageContent = ref("");
const breadcrumb = ref([]);

const slug = computed(() => {
  const fromProps = props.permalink?.trim();
  if (fromProps) return fromProps;
  const param = route.params.slug;
  return typeof param === "string" ? param : "";
});

if (!slug.value || RESERVED_ROUTE_SLUGS.includes(slug.value)) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const { data } = await useFetch(
  () => `${apiUrl}/${lang.value}/page/${slug.value}`,
  { key: `static-page-${lang.value}-${slug.value}` }
);

if (data.value?.status === "ok") {
  const { h1, title, meta_title, description, content } = data.value.body;
  mainHeading.value = h1 || title || "";
  pageContent.value = content || "";
  breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
  breadcrumb.value.push({ title: title || mainHeading.value, permalink: "" });
  useHead({
    title: meta_title || title || mainHeading.value,
    meta: description ? [{ name: "description", content: description }] : [],
  });
} else {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>
