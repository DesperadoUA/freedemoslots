<template>
  <main class="mx-auto py-10 pl-2 pr-2">
    <title_h1 :text="mainHeading" />
    <short_desc :text="desc" />
    <section_title text="New slots" />
    <slider_slots v-if="newSlots.length" :posts="newSlots" />
    <section_title text="All Providers" />
    <slider_vendors v-if="allVendors.length" :posts="allVendors" />
    <page_content :text="pageContent" />
  </main>
</template>
<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const lang = useLang();
const { data } = await useFetch(
  () => `${apiUrl}/${lang.value}/page/main`,
  { key: () => `main-${lang.value}` }
);
const mainHeading = ref("");
const desc = ref("");
const newSlots = ref([]);
const allVendors = ref([]);
const pageContent = ref("");
if (data.value) {
  if (data.value.status === "ok") {
    const { description, meta_title, h1, short_desc, slots, vendors, content } =
      data.value.body;
    mainHeading.value = h1;
    desc.value = short_desc;
    newSlots.value = slots;
    allVendors.value = vendors;
    pageContent.value = content || "";
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
}
</script>