<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <short_desc :text="desc" />
    <breadcrumbs v-if="breadcrumb.length" :value="breadcrumb" />
    <volatility_loop v-if="volatilityPosts.length" :posts="volatilityPosts" />
    <pagination_block
      v-if="totalPosts > POST_LIMIT"
      v-model="currentPage"
      :total-items="totalPosts"
      :items-per-page="POST_LIMIT"
      :link-url="`/${VOLATILITY_ROOT_SLUG}/page/[page]`"
      @click="onClickHandler"
    />
  </main>
</template>

<script setup>
import { VOLATILITY_API_PAGE_SLUG, VOLATILITY_ROOT_SLUG } from "@/constants";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const router = useRouter();
const lang = useLang();

const { $getLangLink } = useNuxtApp();

const mainHeading = ref("");
const desc = ref("");
const volatilityPosts = ref([]);
const breadcrumb = ref([]);
const page = Number(route.params.page_number) || 1;
const POST_LIMIT = 40;
const totalPosts = ref(0);
const currentPage = ref(page);

const { data } = await useFetch(
  `${apiUrl}/${lang.value}/page/${VOLATILITY_API_PAGE_SLUG}?limit=${POST_LIMIT}&offset=${
    POST_LIMIT * (page - 1)
  }`,
  { key: `volatility-${lang.value}-${page}` }
);

const onClickHandler = (p) => {
  if (Number(p) === 1) {
    router.push($getLangLink(`/${VOLATILITY_ROOT_SLUG}`));
  } else {
    router.push($getLangLink(`/${VOLATILITY_ROOT_SLUG}/page/${p}`));
  }
};

if (data.value?.status === "ok") {
  const { description, meta_title, h1, short_desc, volatilities, title, total } =
    data.value.body;
  mainHeading.value = h1;
  desc.value = short_desc;
  volatilityPosts.value = volatilities || [];
  totalPosts.value = total || 0;
  breadcrumb.value.push({ title: "Home", permalink: $getLangLink("/") });
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
