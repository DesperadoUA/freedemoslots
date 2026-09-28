<template>
  <nav v-if="value?.length" class="breadcrumbs" aria-label="Breadcrumb">
    <div class="breadcrumbs__inner">
      <div class="wrapper">
        <ol
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
          class="breadcrumb-list"
        >
          <li
            v-for="(item, index) in value"
            :key="index"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            class="breadcrumb-item"
          >
            <span
              v-if="item.permalink === ''"
              itemprop="item"
              itemscope
              itemtype="https://schema.org/Thing"
              class="breadcrumb-item__current"
            >
              <span itemprop="name">{{ item.title }}</span>
            </span>
            <NuxtLink
              v-else
              :to="item.permalink"
              itemprop="item"
              itemscope
              itemtype="https://schema.org/Thing"
              class="breadcrumb-item__link"
            >
              <span itemprop="name">{{ item.title }}</span>
            </NuxtLink>
            <span
              v-if="index < value.length - 1"
              class="spliter"
              aria-hidden="true"
            ></span>
            <meta itemprop="position" :content="String(index + 1)" />
          </li>
        </ol>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  value: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.breadcrumbs {
  padding: 28px 0 20px;
  font-family: "Unbounded", Arial, sans-serif;
}

.breadcrumbs__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 6px;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 4px;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
}

.breadcrumb-item__link {
  color: #5e40b5;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-item__link:hover {
  color: #8e2de2;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.breadcrumb-item__current {
  color: #111;
  font-weight: 600;
}

.spliter {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 10px;
  border-right: 1.5px solid #c4c4d0;
  border-bottom: 1.5px solid #c4c4d0;
  transform: rotate(-45deg);
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .breadcrumbs__inner {
    width: calc(100% - 32px);
  }
}
</style>
