<script setup>
import { VENDOR_SLUG } from "@/constants";
const { $getLangLink } = useNuxtApp();
defineProps({
  posts: Array,
});
</script>
<template>
  <section class="provider_loop">
    <div class="provider_loop__inner">
      <div class="provider_container">
        <div class="item" v-for="(post, idx) in posts" :key="idx">
          <ProviderLoopCard
            :title="post.title"
            :permalink="$getLangLink(`/${VENDOR_SLUG}/${post.permalink}`)"
            :src="post.thumbnail"
            :slotCounter="post.slotCounter"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.provider_loop {
  font-family: "Unbounded", Arial, sans-serif;
  padding-bottom: 32px;
}
.provider_loop__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}
.provider_container {
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
  .provider_loop__inner {
    width: calc(100% - 32px);
  }
  .item {
    width: 100%;
  }
}
</style>
