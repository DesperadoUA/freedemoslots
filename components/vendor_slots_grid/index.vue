<script setup>
import { VENDOR_SLUG } from "@/constants";

const { $getLangLink } = useNuxtApp();
const { getSlotPermalink } = useSlotPermalink();

defineProps({
  title: {
    type: String,
    default: "",
  },
  posts: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section v-if="title && posts?.length" class="vendor_slots_grid">
    <div class="vendor_slots_grid__inner">
      <h2 class="vendor_slots_grid__title">{{ title }}</h2>
      <div class="vendor_slots_grid__grid">
        <div
          v-for="(post, idx) in posts"
          :key="idx"
          class="vendor_slots_grid__item"
        >
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
    </div>
  </section>
</template>

<style scoped>
.vendor_slots_grid {
  font-family: "Unbounded", Arial, sans-serif;
  padding: 32px 0 8px;
}

.vendor_slots_grid__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}

.vendor_slots_grid__title {
  margin: 0 0 24px;
  font-size: 28px;
  font-weight: 600;
  color: #000;
  line-height: 1.3;
}

.vendor_slots_grid__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.vendor_slots_grid__item {
  width: calc(16.666% - 17px);
}

@media (max-width: 1400px) {
  .vendor_slots_grid__item {
    width: calc(20% - 16px);
  }
}

@media (max-width: 1200px) {
  .vendor_slots_grid__item {
    width: calc(25% - 15px);
  }
}

@media (max-width: 992px) {
  .vendor_slots_grid__item {
    width: calc(33.333% - 14px);
  }
}

@media (max-width: 767px) {
  .vendor_slots_grid__inner {
    width: calc(100% - 32px);
  }

  .vendor_slots_grid__title {
    font-size: 22px;
  }

  .vendor_slots_grid__item {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .vendor_slots_grid__item {
    width: 100%;
  }
}
</style>
