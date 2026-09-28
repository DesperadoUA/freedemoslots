<script setup lang="ts">
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap",
    },
  ],
});

const { $getLangLink } = useNuxtApp();
const { data } = await useSettings();

const links = computed(() => {
  if (!data.value || data.value.status !== "ok" || !Array.isArray(data.value.body)) {
    return [];
  }
  const headerMenu = data.value.body.find((item) => item.key === "header_menu");
  if (!headerMenu?.value || !Array.isArray(headerMenu.value)) {
    return [];
  }
  return headerMenu.value.map((item) => ({
    title: String(item.value_1 || "").trim(),
    link: $getLangLink(String(item.value_2 || "/")),
  }));
});
</script>
<template>
  <header class="header">
    <div class="container header_container">
      <NuxtLink :to="$getLangLink('/')">
        <img src="/img/freedemoslots-logo.webp" class="logo" alt="Home page" />
      </NuxtLink>
      <nav v-if="links.length">
        <ul class="menu">
          <li v-for="(item, index) in links" :key="index">
            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #ffe5ea;
  border-bottom: 3px solid #ff002f;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.507);
}
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
}
.menu a {
  font-family: "Unbounded", Arial, sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  position: relative;
}
.menu li a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #ff002f;
  transition: width 0.3s ease-in-out;
  position: absolute;
}
.menu li a:hover::after {
  width: 100%;
  transition: width 0.3s ease-in-out;
}
.menu li a:hover {
  color: #ff002f;
  transition: all 0.3s ease-in-out;
}
.logo {
  width: 120px;
}
</style>
