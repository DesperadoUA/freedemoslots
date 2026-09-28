<template>
  <section
    v-if="items?.length"
    class="slot_tags_block"
    :class="{ 'slot_tags_block--aside': variant === 'aside' }"
  >
    <div
      :class="
        variant === 'aside'
          ? 'slot_tags_block__panel'
          : 'content_container content_container--tags'
      "
    >
      <h3 class="slot_tags_block__title">{{ title }}</h3>
      <div class="slot_tags_block__list">
        <template v-for="(item, idx) in items" :key="idx">
          <NuxtLink
            v-if="item.permalink"
            :to="item.permalink"
            class="slot_tags_block__link"
          >
            {{ item.title }}
          </NuxtLink>
          <span v-else class="slot_tags_block__text">{{ item.title }}</span>
          <span
            v-if="idx < (items?.length ?? 0) - 1"
            class="slot_tags_block__sep"
            >,
          </span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: "default",
  },
});
</script>

<style scoped lang="scss">
@use "~/assets/styles/cms-content.scss" as *;

.content_container--tags {
  padding: 18px 40px;
  margin-bottom: 16px;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
}

.slot_tags_block__title {
  margin: 0 0 12px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #111;
}

.slot_tags_block__list {
  font-size: 15px;
  line-height: 1.6;
}

.slot_tags_block__link {
  color: #5e40b5;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #8e2de2;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.slot_tags_block__text {
  color: #111;
}

.slot_tags_block__sep {
  color: #111;
}

.slot_tags_block--aside {
  flex: 0 0 auto;
  min-height: 0;
}

.slot_tags_block__panel {
  box-sizing: border-box;
  height: 100%;
  padding: 16px 20px;
  overflow: auto;
  background: #fff;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
  font-family: "Unbounded", Arial, sans-serif;
}

.slot_tags_block--aside .slot_tags_block__list {
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 767px) {
  .content_container--tags {
    padding: 16px 22px;
  }

  .slot_tags_block__panel {
    padding: 14px 16px;
  }
}
</style>
