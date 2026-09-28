<template>
  <section v-if="rows.length" class="theme_stats">
    <div class="content_container content_container--stats">
      <dl class="theme_stats__list">
        <div
          v-for="(row, index) in rows"
          :key="index"
          class="theme_stats__row"
        >
          <dt class="theme_stats__label">{{ row.label }}</dt>
          <dd class="theme_stats__value">
            <template v-if="row.links?.length">
              <template v-for="(link, linkIdx) in row.links" :key="linkIdx">
                <NuxtLink
                  v-if="link.permalink"
                  :to="link.permalink"
                  class="theme_stats__link"
                >
                  {{ link.title }}
                </NuxtLink>
                <span v-else>{{ link.title }}</span>
                <span
                  v-if="linkIdx < row.links.length - 1"
                  class="theme_stats__sep"
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

.theme_stats__list {
  margin: 0;
}

.theme_stats__row {
  display: grid;
  grid-template-columns: minmax(140px, 220px) 1fr;
  gap: 16px 24px;
  padding: 18px 40px;
  border-bottom: 1px solid #ececf0;

  &:last-child {
    border-bottom: none;
  }
}

.theme_stats__label {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #888;
  line-height: 1.5;
}

.theme_stats__value {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  line-height: 1.6;
}

.theme_stats__link {
  color: #5e40b5;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #8e2de2;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.theme_stats__sep {
  color: #111;
}

@media (max-width: 767px) {
  .theme_stats__row {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 16px 22px;
  }
}
</style>
