<script setup>
import { TYPE_SLUG, VENDOR_SLUG } from "@/constants";

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
  typeSlug: {
    type: String,
    default: "",
  },
});

const currentPage = defineModel({ type: Number, required: true });

const onPageClick = (page) => {
  if (Number(page) === 1) {
    navigateTo($getLangLink(`/${TYPE_SLUG}/${props.typeSlug}`));
  } else {
    navigateTo($getLangLink(`/${TYPE_SLUG}/${props.typeSlug}/page/${page}`));
  }
};
</script>

<template>
  <section v-if="title" class="type_all_slots">
    <div class="type_all_slots__inner">
      <h2 class="type_all_slots__title">{{ title }}</h2>
      <div v-if="posts?.length" class="type_all_slots__grid">
        <div
          v-for="(post, idx) in posts"
          :key="idx"
          class="type_all_slots__item"
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
        :link-url="`/${TYPE_SLUG}/${typeSlug}/page/[page]`"
        @click="onPageClick"
      />
    </div>
  </section>
</template>

<style scoped>
.type_all_slots {
  font-family: "Unbounded", Arial, sans-serif;
  padding: 32px 0 8px;
  margin-bottom: 20px;
}

.type_all_slots__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}

.type_all_slots__title {
  margin: 0 0 24px;
  font-size: 28px;
  font-weight: 600;
  color: #000;
  line-height: 1.3;
}

.type_all_slots__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 8px;
}

.type_all_slots__item {
  width: calc(16.666% - 17px);
}

.type_all_slots :deep(.pagination_block) {
  width: 100%;
  margin: 24px auto 16px;
}

@media (max-width: 1400px) {
  .type_all_slots__item {
    width: calc(20% - 16px);
  }
}

@media (max-width: 1200px) {
  .type_all_slots__item {
    width: calc(25% - 15px);
  }
}

@media (max-width: 992px) {
  .type_all_slots__item {
    width: calc(33.333% - 14px);
  }
}

@media (max-width: 767px) {
  .type_all_slots__inner {
    width: calc(100% - 32px);
  }

  .type_all_slots__title {
    font-size: 22px;
  }

  .type_all_slots__item {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .type_all_slots__item {
    width: 100%;
  }
}
</style>
