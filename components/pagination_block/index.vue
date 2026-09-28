<template>
  <section class="pagination_block">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :max-pages-shown="maxPagesShown"
      v-model="currentPage"
      type="link"
      :link-url="linkUrl"
      :hide-prev-next="hidePrevNext"
      paginate-buttons-class="pagination_block__btn"
      active-page-class="pagination_block__btn--active"
      disabled-paginate-button-class="pagination_block__btn--disabled"
      pagination-container-class="pagination_block__container"
      starting-breakpoint-button-class="pagination_block__btn pagination_block__btn--dots"
      ending-breakpoint-button-class="pagination_block__btn pagination_block__btn--dots"
      disabled-breakpoint-button-class="pagination_block__btn--disabled"
      @click="onPageClick"
    />
  </section>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap",
    },
  ],
});

defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 },
  maxPagesShown: { type: Number, default: 5 },
  linkUrl: { type: String, required: true },
  hidePrevNext: { type: Boolean, default: true },
});

const currentPage = defineModel({ type: Number, required: true });

const emit = defineEmits(["click"]);

const onPageClick = (page) => {
  emit("click", page);
};
</script>

<style scoped lang="scss">
.pagination_block {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin: 32px auto 40px;
  display: flex;
  justify-content: center;
  font-family: "Unbounded", Arial, sans-serif;
}

.pagination_block__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination_block :deep(.pagination_block__btn),
.pagination_block :deep(.pagination_block__btn--active),
.pagination_block :deep(.pagination_block__btn--disabled) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(142, 45, 226, 0.35);
  background: #fff;
  color: #1b1831;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.pagination_block :deep(.pagination_block__btn:hover:not(.pagination_block__btn--active):not(.pagination_block__btn--disabled)) {
  background: rgba(142, 45, 226, 0.08);
  border-color: #8e2de2;
  color: #5e40b5;
}

.pagination_block :deep(.pagination_block__btn--active) {
  background: #8e2de2;
  border-color: #8e2de2;
  color: #fff;
  cursor: default;
}

.pagination_block :deep(.pagination_block__btn--active:hover) {
  background: #5e40b5;
  border-color: #5e40b5;
  color: #fff;
}

.pagination_block :deep(.pagination_block__btn--dots) {
  border-color: transparent;
  background: transparent;
  color: #b3b6c8;
  cursor: default;
  min-width: 32px;
  padding: 0 4px;
}

.pagination_block :deep(.pagination_block__btn--dots:hover) {
  background: transparent;
  border-color: transparent;
  color: #b3b6c8;
}

.pagination_block :deep(.pagination_block__btn--disabled) {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pagination_block {
    margin: 24px auto 32px;
  }

  .pagination_block :deep(.pagination_block__btn),
  .pagination_block :deep(.pagination_block__btn--active),
  .pagination_block :deep(.pagination_block__btn--disabled) {
    min-width: 36px;
    height: 36px;
    font-size: 13px;
    padding: 0 10px;
  }
}
</style>
