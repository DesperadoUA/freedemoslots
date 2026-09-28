<script setup>
defineProps({
  permalink: {
    type: String,
  },
  title: {
    type: String,
  },
  src: {
    type: String,
  },
  slotCounter: {
    type: [Number, String],
  },
});
</script>

<template>
  <div class="card">
    <div class="card__item-wraper">
      <div class="card__image">
        <img width="361" height="231" :src="src" :alt="title" />
        <NuxtLink class="posts__btn" :to="permalink">See Slots</NuxtLink>
      </div>
      <div class="posts__item-title">
        <NuxtLink :to="permalink">{{ title }}</NuxtLink>
      </div>
      <div v-if="slotCounter" class="slotCounter">{{ slotCounter }} slots</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #ececf0;
  background: #fff;
  margin-top: 4px;
  margin-bottom: 4px;
  height: 100%;
}
.card__image {
  aspect-ratio: 167/104;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #fff;
  padding: 12px;
}
.posts__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #8e2de2;
  color: #fff !important;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  padding: 10px 20px;
}
.card:hover .posts__btn {
  opacity: 1;
}
.posts__btn:hover {
  background-color: #5e40b5;
}
.card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.posts__item-title {
  display: block;
  padding: 12px 12px 6px;
  overflow: hidden;
}
.posts__item-title a {
  display: block;
  color: #000;
  text-decoration: none;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slotCounter {
  padding: 0 12px 12px;
  text-align: center;
  color: #5e40b5;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 13px;
  font-weight: 500;
}
</style>
