<template>
  <section v-if="text" class="title">
    <div class="content_container content_container--title">
      <h1>{{ text }}</h1>
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
</script>
<style scoped lang="scss">
@use "~/assets/styles/cms-content.scss" as *;

.title {
  padding-top: 8px;
}

.content_container--title {
  padding: 36px 40px 24px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

h1 {
  margin: 0;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  color: #000;
}

@media (max-width: 767px) {
  .content_container--title {
    padding: 28px 22px 22px;
  }

  h1 {
    font-size: 22px;
  }
}
</style>
