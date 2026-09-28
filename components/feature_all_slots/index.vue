<script setup>
import { FEATURE_SLUG, VENDOR_SLUG } from "@/constants";

const { $getLangLink } = useNuxtApp();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  posts: {
    type: Array,
    default: () => [],
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  itemsPerPage: {
    type: Number,
    default: 24,
  },
  featureSlug: {
    type: String,
    default: "",
  },
});

const currentPage = defineModel({ type: Number, required: true });

const onPageClick = (page) => {
  if (Number(page) === 1) {
    navigateTo($getLangLink(`/${FEATURE_SLUG}/${props.featureSlug}`));
  } else {
    navigateTo(
      $getLangLink(`/${FEATURE_SLUG}/${props.featureSlug}/page/${page}`)
    );
  }
};
</script>

<template>
  <section v-if="title" class="feature_all_slots">
    <div class="feature_all_slots__inner">
      <h2 class="feature_all_slots__title">{{ title }}</h2>
      <div v-if="posts?.length" class="feature_all_slots__grid">
        <div
          v-for="(post, idx) in posts"
          :key="idx"
          class="feature_all_slots__item"
        >
          <SliderSlotsCard
            :title="post.title"
            :permalink="
              $getLangLink(`/${post.vendor.permalink}/${post.permalink}`)
            "
            :src="post.thumbnail"
            :providerTitle="post.vendor.title"
            :providerPermalink="
              $getLangLink(`/${VENDOR_SLUG}/${post.vendor.permalink}`)
            "
          />
        </div>
      </div>
      <pagination_block
        v-if="totalItems > itemsPerPage"
        v-model="currentPage"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        :link-url="`/${FEATURE_SLUG}/${featureSlug}/page/[page]`"
        @click="onPageClick"
      />
    </div>
  </section>
</template>

<style scoped>
.feature_all_slots {
  font-family: "Unbounded", Arial, sans-serif;
  padding: 32px 0 8px;
  margin-bottom: 20px;
}

.feature_all_slots__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}

.feature_all_slots__title {
  margin: 0 0 24px;
  font-size: 28px;
  font-weight: 600;
  color: #000;
  line-height: 1.3;
}

.feature_all_slots__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 8px;
}

.feature_all_slots__item {
  width: calc(16.666% - 17px);
}

.feature_all_slots :deep(.pagination_block) {
  width: 100%;
  margin: 24px auto 16px;
}

@media (max-width: 1400px) {
  .feature_all_slots__item {
    width: calc(20% - 16px);
  }
}

@media (max-width: 1200px) {
  .feature_all_slots__item {
    width: calc(25% - 15px);
  }
}

@media (max-width: 992px) {
  .feature_all_slots__item {
    width: calc(33.333% - 14px);
  }
}

@media (max-width: 767px) {
  .feature_all_slots__inner {
    width: calc(100% - 32px);
  }

  .feature_all_slots__title {
    font-size: 22px;
  }

  .feature_all_slots__item {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .feature_all_slots__item {
    width: 100%;
  }
}
</style>
