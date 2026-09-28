<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <short_desc :text="desc" />
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <provider_loop v-if="vendorPosts.length" :posts="vendorPosts" />
    <page_content :text="pageContent" />
  </main>
</template>
<script setup>
import { VENDORS_ROOT_SLUG } from "@/constants";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

if (route.params.page_number) {
  await navigateTo($getLangLink(`/${VENDORS_ROOT_SLUG}`), { redirectCode: 301 });
}

const mainHeading = ref("");
const desc = ref("");
const vendorPosts = ref([]);
const pageContent = ref("");
const breadcrumb = ref([]);

const PROVIDERS_LIMIT = 200;

const { data } = await useFetch(
  `${apiUrl}/${lang.value}/page/${VENDORS_ROOT_SLUG}?limit=${PROVIDERS_LIMIT}&offset=0`,
  { key: `providers-${lang.value}` }
);

if (data.value?.status === "ok") {
  const { description, meta_title, h1, short_desc, vendors, title, content } =
    data.value.body;
  mainHeading.value = h1;
  desc.value = short_desc;
  vendorPosts.value = vendors || [];
  pageContent.value = content || "";
  breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
  breadcrumb.value.push({ title: title, permalink: "" });
  useHead({
    title: meta_title,
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  });
}
</script>
