<script setup>
import { VENDOR_SLUG } from "@/constants";
const { $getLangLink } = useNuxtApp();
const containerRef = ref(null);
const props = defineProps({
  posts: Array,
});
const slides = ref(props.posts);
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  spaceBetween: 24,
  centerMode: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 5,
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -400],
    },
    next: {
      shadow: false,
      translate: [0, 0, -400],
    },
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 16 },
    640: { slidesPerView: 2.2, spaceBetween: 16 },
    992: { slidesPerView: 3.2, spaceBetween: 20 },
    1200: { slidesPerView: 4, spaceBetween: 24 },
    1400: { slidesPerView: 5, spaceBetween: 24 },
  },
});
</script>

<template>
  <section class="slider_vendors">
    <div class="slider_vendors__inner">
      <div class="control_container">
        <button @click="swiper.prev()" class="slider__btn slider__btn-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
        <button @click="swiper.next()" class="slider__btn slider__btn-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
      <swiper-container ref="containerRef" class="slider_vendors__swiper">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
          <SliderVendorsCard
            :title="slide.title"
            :permalink="$getLangLink(`/${VENDOR_SLUG}/${slide.permalink}`)"
            :src="slide.thumbnail"
            :slotCounter="slide.slotCounter"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>
<style scoped>
.slider_vendors {
  font-family: "Unbounded", Arial, sans-serif;
  padding-bottom: 24px;
}
.slider_vendors__inner {
  width: 90%;
  max-width: var(--container-width, 1600px);
  margin-left: auto;
  margin-right: auto;
}
.slider_vendors__swiper {
  display: block;
  width: 100%;
  overflow: hidden;
}
.control_container {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
  gap: 12px;
}
.slider__btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #8e2de2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
}
.slider__btn:hover {
  background-color: #5e40b5;
}
.slider__btn svg {
  width: 20px;
  color: #fff;
}
.slider__btn-prev svg {
  transform: rotate(180deg);
}
@media (max-width: 767px) {
  .slider_vendors__inner {
    width: calc(100% - 32px);
  }
}
</style>
