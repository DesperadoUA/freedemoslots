<template>
  <section
    v-if="rows?.length"
    class="vendor_stats"
    :class="{ 'vendor_stats--aside': variant === 'aside' }"
  >
    <div
      :class="
        variant === 'aside'
          ? 'vendor_stats__panel'
          : 'content_container content_container--stats'
      "
    >
      <h2 v-if="variant === 'aside'" class="vendor_stats__title">
        Game Information
      </h2>
      <dl class="vendor_stats__list">
        <div
          v-for="(row, index) in rows"
          :key="index"
          class="vendor_stats__row"
        >
          <dt class="vendor_stats__label">{{ row.label }}</dt>
          <dd class="vendor_stats__value">
            <template v-if="row.links?.length">
              <template v-for="(link, linkIdx) in row.links" :key="linkIdx">
                <NuxtLink
                  v-if="link.permalink"
                  :to="link.permalink"
                  class="vendor_stats__link"
                >
                  {{ link.title }}
                </NuxtLink>
                <span v-else>{{ link.title }}</span>
                <span
                  v-if="linkIdx < row.links.length - 1"
                  class="vendor_stats__sep"
                  >,
                </span>
              </template>
            </template>
            <span v-else>{{ row.value }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
defineProps({
  rows: {
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

.content_container--stats {
  padding: 0;
  margin-bottom: 24px;
  overflow: hidden;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
}

.vendor_stats {
  font-family: "Unbounded", Arial, sans-serif;
}

.vendor_stats__list {
  margin: 0;
}

.vendor_stats__row {
  display: grid;
  grid-template-columns: minmax(140px, 220px) 1fr;
  gap: 16px 24px;
  padding: 18px 40px;
  border-bottom: 1px solid #ececf0;

  &:last-child {
    border-bottom: none;
  }
}

.vendor_stats__label {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #888;
  line-height: 1.5;
}

.vendor_stats__value {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  line-height: 1.6;
}

.vendor_stats__link {
  color: #5e40b5;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #8e2de2;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.vendor_stats__sep {
  color: #111;
}

.vendor_stats--aside {
  flex: 0 0 auto;
  min-width: 0;
}

.vendor_stats__panel {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  overflow: auto;
  background: #fff;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
}

.vendor_stats__title {
  margin: 0;
  padding: 16px 20px;
  border-bottom: 1px solid #ececf0;
  color: #111;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.vendor_stats--aside .vendor_stats__row {
  grid-template-columns: minmax(110px, 1fr) minmax(0, 1.2fr);
  gap: 8px 12px;
  padding: 12px 20px;
}

.vendor_stats--aside .vendor_stats__label,
.vendor_stats--aside .vendor_stats__value {
  font-size: 13px;
}

@media (max-width: 767px) {
  .vendor_stats__row {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 16px 22px;
  }

  .vendor_stats--aside .vendor_stats__row {
    padding: 12px 16px;
  }
}
</style>
