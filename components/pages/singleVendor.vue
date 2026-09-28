<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <vendor_preview :src="src" :alt="vendorTitle" />
    <vendor_stats :rows="statsRows" />
    <vendor_slots_grid
      :title="`Best ${vendorTitle} Slots`"
      :posts="bestGames"
    />
    <vendor_slots_grid
      :title="`New ${vendorTitle} Slots`"
      :posts="newGames"
    />
    <vendor_all_slots
      :title="`All ${vendorTitle} Slots`"
      :posts="slots"
      :total-items="totalPosts"
      :items-per-page="POST_LIMIT"
      :vendor-slug="slug"
      v-model="currentPage"
    />
    <page_content :text="pageContent" />
  </main>
</template>
<script setup>
import { ref } from "vue";
import { VENDORS_ROOT_SLUG, VENDOR_SLUG, TYPE_SLUG } from "@/constants";
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();
const page = Number(route.params.page_number) || 1;
const POST_LIMIT = 24;
const { data } = await useFetch(
  `${apiUrl}/${lang.value}/vendor/${route.params.slug}?limit=${POST_LIMIT}&offset=${
    POST_LIMIT * (page - 1)
  }`,
  { key: `vendor-${lang.value}-${route.params.slug}-${page}` }
);
const mainHeading = ref("");
const src = ref("");
const vendorTitle = ref("");
const totalPosts = ref(0);
const slots = ref([]);
const bestGames = ref([]);
const newGames = ref([]);
const breadcrumb = ref([]);
const statsRows = ref([]);
const pageContent = ref("");
const slug = ref(route.params.slug);
const currentPage = ref(page);
if (data.value) {
  if (data.value.status === "ok") {
    const {
      description,
      meta_title,
      h1,
      thumbnail,
      posts,
      title,
      total,
      game_types,
      permalink,
      best_games,
      latest_games,
      content,
    } = data.value.body;
    mainHeading.value = h1;
    vendorTitle.value = title;
    totalPosts.value = total;
    src.value = thumbnail;
    slots.value = posts;
    bestGames.value = best_games || [];
    newGames.value = latest_games || [];
    pageContent.value = content || "";
    statsRows.value = [
      {
        label: "Provider Name",
        links: [
          {
            title,
            permalink: $getLangLink(`/${VENDOR_SLUG}/${permalink}`),
          },
        ],
      },
      {
        label: "Total Games",
        value: total ?? 0,
      },
    ];
    if (game_types?.length) {
      statsRows.value.push({
        label: "Game Types",
        links: game_types.map((type) => ({
          title: type.title,
          permalink: $getLangLink(`/${TYPE_SLUG}/${type.permalink}`),
        })),
      });
    }
    breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
    breadcrumb.value.push({
      title: "Providers",
      permalink: $getLangLink(`/${VENDORS_ROOT_SLUG}`),
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
}
</script>