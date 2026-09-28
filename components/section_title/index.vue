<script setup>
defineProps({
  text: {
    type: String,
  },
});
</script>
<template>
  <section class="title_container">
    <div class="container">
      <h2 class="title">{{ text }}</h2>
    </div>
  </section>
</template>
<style scoped>
.title {
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}
.title_container {
  padding-top: 28px;
  padding-bottom: 8px;
}
.title_container .container {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 767px) {
  .title {
    font-size: 22px;
  }
  .title_container .container {
    width: calc(100% - 32px);
  }
}
</style>