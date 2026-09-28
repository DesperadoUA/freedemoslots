<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <volatility_slots_grid
      :title="`Best ${volatilityTitle} Slots`"
      :posts="bestGames"
    />
    <volatility_slots_grid
      :title="`Latest ${volatilityTitle} Releases`"
      :posts="newGames"
    />
    <volatility_all_slots
      :title="`All ${volatilityTitle} Slots`"
      :posts="slots"
      :total-items="totalPosts"
      :items-per-page="POST_LIMIT"
      :volatility-slug="slug"
      v-model="currentPage"
    />
    <page_content :text="pageContent" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { VOLATILITY_ROOT_SLUG } from "@/constants";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

const page = Number(route.params.page_number) || 1;
const POST_LIMIT = 24;

const { data } = await useFetch(
  `${apiUrl}/${lang.value}/volatility/${route.params.slug}?limit=${POST_LIMIT}&offset=${
    POST_LIMIT * (page - 1)
  }`,
  { key: `volatility-${lang.value}-${route.params.slug}-${page}` }
);

const mainHeading = ref("");
const volatilityTitle = ref("");
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
  volatilityTitle.value = title;
  totalPosts.value = total;
  slots.value = posts;
  bestGames.value = best_games || [];
  newGames.value = latest_games || [];
  pageContent.value = content || "";

  breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
  breadcrumb.value.push({
    title: "Volatilities",
    permalink: $getLangLink(`/${VOLATILITY_ROOT_SLUG}`),
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
