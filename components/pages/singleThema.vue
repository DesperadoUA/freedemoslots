<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <theme_slots_grid
      :title="`Best ${themeTitle} Slots`"
      :posts="bestGames"
    />
    <theme_slots_grid
      :title="`New ${themeTitle} Slots`"
      :posts="newGames"
    />
    <theme_all_slots
      :title="`All ${themeTitle} Slots`"
      :posts="slots"
      :total-items="totalPosts"
      :items-per-page="POST_LIMIT"
      :theme-slug="slug"
      v-model="currentPage"
    />
    <page_content :text="pageContent" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { THEMES_ROOT_SLUG } from "@/constants";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

const page = Number(route.params.page_number) || 1;
const POST_LIMIT = 24;

const { data } = await useFetch(
  `${apiUrl}/${lang.value}/theme/${route.params.slug}?limit=${POST_LIMIT}&offset=${
    POST_LIMIT * (page - 1)
  }`,
  { key: `theme-${lang.value}-${route.params.slug}-${page}` }
);

const mainHeading = ref("");
const themeTitle = ref("");
const totalPosts = ref(0);
const slots = ref([]);
const bestGames = ref([]);
const newGames = ref([]);
const breadcrumb = ref([]);
const pageContent = ref("");
const slug = ref(route.params.slug);
const currentPage = ref(page);

if (data.value?.status === "ok") {
  const {
    description,
    meta_title,
    h1,
    posts,
    title,
    total,
    best_games,
    latest_games,
    content,
  } = data.value.body;

  mainHeading.value = h1;
  themeTitle.value = title;
  totalPosts.value = total;
  slots.value = posts;
  bestGames.value = best_games || [];
  newGames.value = latest_games || [];
  pageContent.value = content || "";

  breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
  breadcrumb.value.push({
    title: "Themes",
    permalink: $getLangLink(`/${THEMES_ROOT_SLUG}`),
  });
  breadcrumb.value.push({ title: title, permalink: "" });

  useHead({
    title: page > 1 ? `${meta_title} Page ${page}` : meta_title,
    meta: [
      {
        name: "description",
        content: page > 1 ? `${description} Page ${page}` : description,
      },
    ],
  });
}
</script>
