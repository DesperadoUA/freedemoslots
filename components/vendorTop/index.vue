<template>
  <section class="vendor_top">
    <div class="container">
      <div class="info">
        <div class="info_left">
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="info_right">
          <img :src="src" class="thumbnail" />
          <div class="desc">
            <p>
              A complete collection of slots created by
              <strong>{{ title }}.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: {
    type: String,
  },
  src: {
    type: String,
  },
});
</script>
<style scoped>
.vendor_top {
  background-color: #e3e3e3;
  min-height: 350px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  gap: 30px;
}
.thumbnail {
  width: 300px;
}
.title {
  font-size: 52px;
  font-weight: 600;
  color: #000;
  line-height: 110%;
}
.info_left {
  max-width: 450px;
}
.desc {
  margin-top: 20px;
}
</style>