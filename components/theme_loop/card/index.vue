<script setup>
defineProps({
  permalink: {
    type: String,
  },
  title: {
    type: String,
  },
  slotCounter: {
    type: [Number, String],
  },
});
</script>

<template>
  <NuxtLink :to="permalink" class="card">
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__count">Games: {{ slotCounter }}</p>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  padding: 20px 22px;
  background: #fff;
  border: 1px solid #1a1a1a;
  border-radius: 16px;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  border-color: #5e40b5;
  box-shadow: 0 4px 16px rgba(94, 64, 181, 0.12);
}
.card__title {
  margin: 0 0 12px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: #000;
  text-align: left;
}
.card__count {
  margin: 0;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #888;
  text-align: left;
}
</style>
