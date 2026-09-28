<script setup>
defineProps({
  permalink: {
    type: String,
  },
  title: {
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