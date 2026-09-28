<template>
  <section v-if="text" class="page_content">
    <div class="content_container">
      <div class="cms" v-html="text"></div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap",
    },
  ],
});
</script>
<style scoped lang="scss">
@use "~/assets/styles/cms-content.scss" as *;

.page_content {
  padding-top: 20px;
  padding-bottom: 24px;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  .page_content {
    padding-top: 20px;
    padding-bottom: 12px;
  }
}
</style>
