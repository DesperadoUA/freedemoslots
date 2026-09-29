<template>
  <section v-if="title || image" class="game_intro">
    <div class="container">
      <div class="game_intro__card">
        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="game_intro__img"
          decoding="async"
        />
        <div class="game_intro__body">
          <h1 v-if="title" class="game_intro__title">{{ title }}</h1>
          <p v-if="ratingText" class="game_intro__rating">{{ ratingText }}</p>
          <p v-if="publishedDate || updatedDate" class="game_intro__meta">
            <span v-if="publishedDate"
              >Published date: {{ publishedDate }}</span
            >
            <span v-if="publishedDate && updatedDate" class="game_intro__sep"
              >|</span
            >
            <span v-if="updatedDate">Last Edited: {{ updatedDate }}</span>
          </p>
          <div
            v-if="description"
            class="game_intro__desc"
            v-html="description"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  published: {
    type: String,
    default: "",
  },
  updated: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  rating: {
    default: null,
  },
});

const formatDate = (value) => {
  if (!value) return "";
  const str = String(value);
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  const date = new Date(str);
  if (Number.isNaN(date.getTime())) return str.slice(0, 10);
  return date.toISOString().slice(0, 10);
};

const publishedDate = computed(() => formatDate(props.published));
const updatedDate = computed(() => formatDate(props.updated));

const ratingText = computed(() => {
  if (props.rating == null || props.rating === "") return "";
  const value = Number(props.rating);
  if (Number.isNaN(value)) return "";
  const label = Number.isInteger(value)
    ? String(value)
    : String(parseFloat(value.toFixed(1)));
  return `${label}/10`;
});
</script>

<style scoped lang="scss">
.game_intro {
  margin-bottom: 16px;
}

.game_intro__card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  min-width: 0;
  padding: 16px 20px;
  background: #fff;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
}

.game_intro__img {
  flex: 0 0 280px;
  width: 280px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.game_intro__body {
  min-width: 0;
  flex: 1 1 auto;
}

.game_intro__title {
  margin: 0 0 10px;
  overflow-wrap: anywhere;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #111;
}

.game_intro__rating {
  margin: 0 0 10px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #111;
}

.game_intro__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0 0 10px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  line-height: 1.5;
}

.game_intro__sep {
  color: #c4c4d0;
}

.game_intro__desc {
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.game_intro__desc :deep(p) {
  margin: 0 0 8px;
}

.game_intro__desc :deep(p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .game_intro__card {
    flex-direction: column;
    padding: 14px 16px;
  }

  .game_intro__img {
    width: 100%;
    max-width: 280px;
    height: 160px;
    flex-basis: auto;
  }

  .game_intro__title {
    font-size: 20px;
  }
}
</style>
