<template>
  <section v-if="src" class="vendor_preview">
    <div class="content_container content_container--preview">
      <div class="vendor_preview__frame">
        <img
          :src="src"
          :alt="alt"
          class="vendor_preview__img"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
@use "~/assets/styles/cms-content.scss" as *;

.vendor_preview {
  padding-top: 0;
}

.content_container--preview {
  padding: 32px 40px;
  margin-bottom: 16px;
  border-radius: var(--m, 16px);
}

.vendor_preview__frame {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px 24px;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
  background: #fff;
}

.vendor_preview__img {
  max-width: 100%;
  max-height: 280px;
  width: auto;
  height: auto;
  object-fit: contain;
}

@media (max-width: 767px) {
  .content_container--preview {
    padding: 24px 22px;
  }

  .vendor_preview__frame {
    padding: 28px 16px;
    min-height: 160px;
  }
}
</style>
