<template>
  <section v-if="text" class="page_content">
    <div
      class="content_container"
      :class="{ 'content_container--toc': tocItems.length }"
    >
      <div class="page_content__body">
        <div ref="cmsEl" class="cms" v-html="text"></div>
      </div>
      <nav
        v-if="tocItems.length"
        class="page_content__toc"
        aria-label="Table of contents"
      >
        <a
          v-for="item in tocItems"
          :key="item.id"
          class="page_content__toc-link"
          :class="{
            'is-active': item.id === activeId,
            'is-h3': Number(item.level) === 3,
          }"
          :href="`#${item.id}`"
          @click.prevent="scrollToHeading(item.id)"
        >
          {{ item.text }}
        </a>
      </nav>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  toc: {
    type: Array,
    default: () => [],
  },
});

const cmsEl = ref(null);
const activeId = ref("");
let observer = null;

const tocItems = computed(() =>
  (props.toc || []).filter((item) => item?.id && item?.text)
);

const headingSelector = (id) => `#${CSS.escape(id)}`;

function scrollToHeading(id) {
  const el = cmsEl.value?.querySelector(headingSelector(id));
  if (!el) return;
  activeId.value = id;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindObserver() {
  observer?.disconnect();
  observer = null;
  if (!import.meta.client || !cmsEl.value || !tocItems.value.length) return;

  const headings = tocItems.value
    .map((item) => cmsEl.value.querySelector(headingSelector(item.id)))
    .filter(Boolean);
  if (!headings.length) return;

  if (!activeId.value) activeId.value = tocItems.value[0].id;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target?.id) activeId.value = visible[0].target.id;
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
  );
  headings.forEach((el) => observer.observe(el));
}

onMounted(() => nextTick(bindObserver));
watch(
  () => [props.text, tocItems.value.length],
  () => nextTick(bindObserver)
);
onBeforeUnmount(() => observer?.disconnect());

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap",
    },
  ],
});
</script>
<style scoped lang="scss">
@use "~/assets/styles/cms-content.scss" as *;

.page_content {
  padding-top: 20px;
  padding-bottom: 24px;
  margin-bottom: 20px;
}

.content_container--toc {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.page_content__body {
  flex: 1 1 0;
  min-width: 0;
}

.cms :deep(h2),
.cms :deep(h3) {
  scroll-margin-top: 24px;
}

.page_content__toc {
  box-sizing: border-box;
  flex: 0 0 280px;
  position: sticky;
  top: 24px;
  max-height: calc(100vh - 48px);
  overflow: auto;
  padding: 12px 10px;
  background: #fff;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
  font-family: "Unbounded", Arial, sans-serif;
}

.page_content__toc-link {
  display: block;
  color: #111;
  text-decoration: none;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 500;
  padding: 8px 14px;
  border: 2px solid transparent;
  border-radius: 999px;
  margin-bottom: 4px;
}

.page_content__toc-link.is-h3 {
  font-size: 14px;
  font-weight: 400;
  padding-left: 28px;
  color: #333;
}

.page_content__toc-link.is-active {
  border-color: #111;
}

@media (max-width: 1024px) {
  .content_container--toc {
    flex-direction: column;
  }

  .page_content__toc {
    flex: none;
    width: 100%;
    position: static;
    max-height: none;
  }
}

@media (max-width: 767px) {
  .page_content {
    padding-top: 20px;
    padding-bottom: 12px;
  }
}
</style>
