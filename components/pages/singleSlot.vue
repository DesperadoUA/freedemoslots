<template>
  <main v-if="pageData" class="mx-auto py-10 pl-2 pr-2">
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <game_intro
      :image="src"
      :title="mainHeading"
      :published="publishedAt"
      :updated="updatedAt"
      :description="shortDesc"
    />
    <div class="container game_row">
      <div class="game_row__left">
        <Demo v-if="src" :thumbnail="src" :demo="demoLink" :title="titleSlot" />
      </div>
      <div class="game_row__right">
        <vendor_stats :rows="gameStatsRows" variant="aside" />
        <slot_tags_block title="Themes" :items="themeTags" variant="aside" />
        <slot_tags_block title="Features" :items="featureTags" variant="aside" />
      </div>
    </div>
    <slot_games_grid
      :title="`Best ${providerTitle} Games`"
      :posts="relativeSlots"
    />
    <page_content :text="pageContent" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  VENDOR_SLUG,
  THEME_SLUG,
  FEATURE_SLUG,
  VOLATILITY_SLUG,
  TYPE_SLUG,
  SITE_LANGS,
} from "@/constants";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

const routeLang = route.params.lang ? String(route.params.lang) : '';
const providerSlug = String(
  route.params.provider ||
    (routeLang && !SITE_LANGS.has(routeLang) ? routeLang : '')
);
const gameSlug = String(route.params.slug || '');

const pageData = ref(null);
const mainHeading = ref("");
const src = ref("");
const relativeSlots = ref([]);
const demoLink = ref("");
const titleSlot = ref("");
const providerTitle = ref("");
const gameStatsRows = ref([]);
const themeTags = ref([]);
const featureTags = ref([]);
const pageContent = ref("");
const breadcrumb = ref([]);
const publishedAt = ref("");
const updatedAt = ref("");
const shortDesc = ref("");

const isEmpty = (val) =>
  val === undefined || val === null || val === "" || val === "N/A";

if (!providerSlug || !gameSlug) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const { data } = await useFetch(
  `${apiUrl}/${lang.value}/${providerSlug}/${gameSlug}?limit=24`,
  {
    key: `slot-${lang.value}-${providerSlug}-${gameSlug}`,
  }
);

if (!data.value || data.value.status !== "ok") {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const body = data.value.body;
pageData.value = body;

const {
  description,
  meta_title,
  h1,
  thumbnail,
  demo: demoUrl,
  title,
  provider,
  vendor,
  release_date,
  rtp,
  volatility,
  layout,
  paylines,
  reels,
  min_bet,
  max_bet,
  max_win,
  game_type,
  slots,
  themes,
  features,
  content,
  short_desc,
  created_at,
  updated_at,
} = body;

const prov = provider || vendor;

mainHeading.value = h1 || "";
src.value = thumbnail || "";
demoLink.value = demoUrl || "";
titleSlot.value = title || "";
providerTitle.value = prov?.title || "";
relativeSlots.value = slots || [];
pageContent.value = content || "";
publishedAt.value = created_at || "";
updatedAt.value = updated_at || "";
shortDesc.value = short_desc || description || "";

const rows = [];

if (prov?.title) {
  rows.push({
    label: "Software",
    links: [
      {
        title: prov.title,
        permalink: $getLangLink(`/${VENDOR_SLUG}/${prov.permalink}`),
      },
    ],
  });
}
if (!isEmpty(paylines)) rows.push({ label: "Paylines", value: paylines });
if (!isEmpty(min_bet)) rows.push({ label: "Min Bet", value: min_bet });
if (!isEmpty(max_bet)) rows.push({ label: "Max Bet", value: max_bet });
if (volatility?.title) {
  rows.push({
    label: "Volatility",
    links: volatility.permalink
      ? [
          {
            title: volatility.title,
            permalink: $getLangLink(
              `/${VOLATILITY_SLUG}/${volatility.permalink}`
            ),
          },
        ]
      : [{ title: volatility.title, permalink: "" }],
  });
}
if (!isEmpty(release_date)) {
  rows.push({ label: "Release Date", value: release_date });
}
if (!isEmpty(rtp)) rows.push({ label: "RTP", value: rtp });
if (game_type?.title) {
  rows.push({
    label: "Type",
    links: game_type.permalink
      ? [
          {
            title: game_type.title,
            permalink: $getLangLink(`/${TYPE_SLUG}/${game_type.permalink}`),
          },
        ]
      : [{ title: game_type.title, permalink: "" }],
  });
}
if (!isEmpty(reels)) rows.push({ label: "Reels", value: reels });
if (!isEmpty(layout)) rows.push({ label: "Layout", value: layout });
if (!isEmpty(max_win)) rows.push({ label: "Max Win", value: max_win });

gameStatsRows.value = rows;

themeTags.value = (themes || []).map((item) => ({
  title: item.title,
  permalink: $getLangLink(`/${THEME_SLUG}/${item.permalink}`),
}));

featureTags.value = (features || []).map((item) => ({
  title: item.title,
  permalink: $getLangLink(`/${FEATURE_SLUG}/${item.permalink}`),
}));

breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
if (prov?.title) {
  breadcrumb.value.push({
    title: prov.title,
    permalink: $getLangLink(`/${VENDOR_SLUG}/${prov.permalink}`),
  });
}
breadcrumb.value.push({ title: title || "", permalink: "" });

useHead({
  title: meta_title,
  meta: [{ name: "description", content: description }],
});
</script>

<style scoped lang="scss">
.game_row {
  display: flex;
  gap: 20px;
  align-items: stretch;
  margin-bottom: 24px;
}

.game_row__left {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.game_row__right {
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

@media (max-width: 1024px) {
  .game_row {
    flex-direction: column;
  }

  .game_row__right {
    flex: none;
    width: 100%;
  }
}
</style>
