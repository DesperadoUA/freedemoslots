<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const { $getLangLink } = useNuxtApp();

const statusCode = computed(() => props.error?.statusCode || 404);
const statusMessage = computed(() => {
  if (statusCode.value === 404) return "Page Not Found";
  return props.error?.statusMessage || "Something went wrong";
});

useHead({
  title: `${statusCode.value} - ${statusMessage.value}`,
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap",
    },
  ],
});

const goHome = () => {
  clearError({ redirect: $getLangLink("/") });
};
</script>

<template>
  <div class="error-layout">
    <Header />
    <main class="error-page">
      <div class="error-page__content">
        <h1 class="error-page__code">{{ statusCode }}</h1>
        <p class="error-page__title">{{ statusMessage }}</p>
        <button type="button" class="error-page__btn" @click="goHome">
          Go back home
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.error-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.error-page {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 48px 24px 120px;
}

.error-page__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.error-page__code {
  margin: 0 0 16px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: clamp(72px, 18vw, 140px);
  font-weight: 700;
  line-height: 1;
  color: #1b1831;
  letter-spacing: -0.02em;
}

.error-page__title {
  margin: 0 0 32px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: clamp(18px, 3vw, 28px);
  font-weight: 500;
  line-height: 1.3;
  color: #1b1831;
}

.error-page__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 12px 28px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1b1831;
  background: #fff;
  border: 1px solid #d9d9e3;
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.error-page__btn:hover {
  border-color: #8e2de2;
  color: #5e40b5;
  box-shadow: 0 4px 16px rgba(142, 45, 226, 0.15);
}

@media (max-width: 767px) {
  .error-page {
    padding-bottom: 100px;
  }

  .error-page__btn {
    min-width: 140px;
    padding: 10px 24px;
    font-size: 13px;
  }
}
</style>
