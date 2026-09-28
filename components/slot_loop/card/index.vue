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
    type: String,
  },
});
</script>

<template>
  <div class="card">
    <div class="card__item-wraper">
      <div class="card__image">
        <img width="361" height="231" :src="src" class="" alt="" />
        <NuxtLink class="posts__btn" :to="permalink">See Slots</NuxtLink>
      </div>
      <div class="posts__item-title">
        <NuxtLink :to="permalink">{{ title }}</NuxtLink>
      </div>
      <div class="slotCounter">
        <span>{{ slotCounter }} slots</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: translateY(20px);
}
.card__image {
  aspect-ratio: 167/104;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.473);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.posts__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #8e2de2;
  color: #fff !important;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  padding: 10px 25px;
}
.card:hover .posts__btn {
  opacity: 1;
}
.card__image img {
  width: 100%;
  height: auto;
  display: block;
}
.posts__item-title {
  display: flex;
  justify-content: center;
  padding: 5px;
}
.posts__item-title a {
  color: #000;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
}
.slotCounter {
  padding: 12px;
  color: #4a00e0;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slotCounter span {
  background: #eee;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
}
</style>