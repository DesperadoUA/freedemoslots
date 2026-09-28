<template>
  <section v-if="text" class="short_desc">
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

.short_desc .content_container {
  margin-top: 0;
  padding-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
