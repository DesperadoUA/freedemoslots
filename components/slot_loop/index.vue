<script setup>
import { VENDOR_SLUG } from "@/constants";
const { $getLangLink } = useNuxtApp();
const { getSlotPermalink } = useSlotPermalink();
const props = defineProps({
  posts: Array,
});
</script>
<template>
  <section class="slot_loop">
    <div class="container slot_container">
      <div class="item" v-for="(post, idx) in posts" :key="idx">
        <SliderSlotsCard
          :title="post.title"
          :permalink="getSlotPermalink(post)"
          :src="post.thumbnail"
          :providerTitle="post.vendor.title"
          :providerPermalink="
            $getLangLink(`/${VENDOR_SLUG}/${post.vendor.permalink}`)
          "
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.slot_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.item {
  width: calc(25% - 15px);
}
</style>