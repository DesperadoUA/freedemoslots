<script setup>
const { $getLangLink } = useNuxtApp();
const { data } = await useSettings();

const links = computed(() => {
  if (!data.value || data.value.status !== "ok" || !Array.isArray(data.value.body)) {
    return [];
  }
  const footerMenu = data.value.body.find((item) => item.key === "footer_menu");
  if (!footerMenu?.value || !Array.isArray(footerMenu.value)) {
    return [];
  }
  return footerMenu.value.map((item) => ({
    title: String(item.value_1 || "").trim(),
    link: $getLangLink(String(item.value_2 || "/")),
  }));
});

const footerText = computed(() => {
  if (!data.value || data.value.status !== "ok" || !Array.isArray(data.value.body)) {
    return "";
  }
  const textItem = data.value.body.find((item) => item.key === "footer_text");
  if (!textItem?.value) {
    return "";
  }
  return String(textItem.value).trim();
});
</script>
<template>
  <footer class="site-footer">
    <div class="container">
      <nav v-if="links.length" class="footer_nav">
        <ul class="footer_menu">
          <li v-for="(item, index) in links" :key="index">
            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div v-if="footerText" class="site_info" v-html="footerText"></div>
    </div>
  </footer>
</template>
<style scoped>
.site-footer {
  padding: 32px 0;
  background-color: #8e2de2;
  border-top: 3px solid #4a00e0;
  box-shadow: 1px -1px 10px rgba(0, 0, 0, 0.507);
  color: #fff;
  font-family: "Unbounded", Arial, sans-serif;
}
.footer_nav {
  margin-bottom: 24px;
}
.footer_menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer_menu a {
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  transition: opacity 0.2s ease;
}
.footer_menu a:hover {
  opacity: 0.85;
  text-decoration: underline;
}
.site_info {
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
}
.site_info :deep(a) {
  color: #fff;
}
</style>
