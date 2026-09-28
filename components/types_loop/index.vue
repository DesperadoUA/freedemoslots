<script setup>
import { TYPE_SLUG } from "@/constants";

const { $getLangLink } = useNuxtApp();

defineProps({
  posts: Array,
});
</script>

<template>
  <section class="types_loop">
    <div class="types_loop__inner">
      <div class="types_container">
        <div class="item" v-for="(post, idx) in posts" :key="idx">
          <ThemeLoopCard
            :title="post.title"
            :permalink="$getLangLink(`/${TYPE_SLUG}/${post.permalink}`)"
            :slotCounter="post.slotCounter"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.types_loop {
  font-family: "Unbounded", Arial, sans-serif;
  padding-bottom: 32px;
}
.types_loop__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}
.types_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.item {
  width: calc(25% - 15px);
}
@media (max-width: 1200px) {
  .item {
    width: calc(33.333% - 14px);
  }
}
@media (max-width: 992px) {
  .item {
    width: calc(50% - 10px);
  }
}
@media (max-width: 767px) {
  .types_loop__inner {
    width: calc(100% - 32px);
  }
  .item {
    width: 100%;
  }
}
</style>
