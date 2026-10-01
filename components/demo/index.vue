<script setup>
import { PLAY_REAL_REF } from "@/constants";

defineProps({
  thumbnail: String,
  demo: String,
  title: String,
});

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

const { data: settingsData } = await useFetch(`${apiUrl}/en/settings`, {
  key: "settings-en",
});

const playRealRef = computed(() => {
  const row = (settingsData.value?.body || []).find(
    (item) => item.key === "play_real_ref"
  );
  const value = typeof row?.value === "string" ? row.value.trim() : "";
  return value || PLAY_REAL_REF;
});

const show = ref(false);
function play() {
  show.value = true;
}
function close() {
  show.value = false;
}
</script>
<template>
  <section class="demo">
    <div class="demo-block">
      <img
        decoding="async"
        :src="thumbnail"
        :alt="`${title} Game`"
        class="demo-block__img"
      />
      <div class="demo-block__wrap">
        <button class="demo-block__demo-btn" @click="play" v-if="demo">
          Play for Free
        </button>
        <a
          v-if="playRealRef"
          class="demo-block__real-btn"
          :href="playRealRef"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play for Real Money
        </a>
      </div>
      <div class="iframe" v-if="show">
        <div class="demo-block__close-btn" @click="close"></div>
        <iframe :src="demo" class="demo_box"> </iframe>
      </div>
    </div>
  </section>
</template>
<style scoped>
.demo {
  height: 100%;
  min-width: 0;
}
.demo-block {
  position: relative;
  height: 100%;
  background-color: #ff002f;
  min-height: 550px;
  padding: 5px 5px 2px 5px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.507);
}
.demo-block__wrap {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: min(720px, calc(100% - 24px));
}
.demo-block__demo-btn,
.demo-block__real-btn {
  flex: 1 1 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 56px;
  padding: 12px 20px;
  border: none;
  border-radius: 14px;
  font-family: "Unbounded", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.507);
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}
.demo-block__demo-btn {
  color: #ff002f;
  background-color: #fff;
  border: 2px solid #ff002f;
}
.demo-block__real-btn {
  color: #fff;
  background-color: #ff002f;
  border: 2px solid #ff002f;
}
.demo-block__demo-btn:hover,
.demo-block__real-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}
.demo-block__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px);
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
}
.iframe {
  position: absolute;
  inset: 0;
  z-index: 2;
}
.demo_box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.demo-block__close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid red;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 50;
}
.demo-block__close-btn::before,
.demo-block__close-btn::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 20px;
  background-color: red;
}
.demo-block__close-btn::before {
  transform: rotate(-45deg);
}
.demo-block__close-btn::after {
  transform: rotate(45deg);
}
</style>