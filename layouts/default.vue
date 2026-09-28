<script setup>
import { ref } from "vue";
const password = ref("");
const pass = "212007rf";
const auth = ref(true);
function check() {
  auth.value = password.value === pass;
  if(password.value === pass) {
      localStorage.setItem('pass', 'check')
  }
}
</script>
<template>
  <div v-if="!auth">
    <input type="text" v-model="password" />
    <button @click="check">Login</button>
  </div>
  <div v-else class="layout">
    <Header />
    <div class="layout__main">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<style>
:root {
  /* container width */
  --container-width: 1600px;

  /* Theme color */
  --cairo: #fff;
  --calgary: #00ea17;
  --cordoba: #b3b6c8;
  --callao: rgba(206, 210, 226, 0.2);
  --cucuta: #1b1831;
  --colombo: #08051a;
  --cancun: #232036;
  --cochin: #323234;
  --cardiff: rgba(0, 0, 0, 0.26);
  --cleveland: #5e40b5;
  --chicago: #da00ed;
  --xxs: 2px;
  --xs: 4px;
  --s: 8px;
  --m: 16px;
  --l: 32px;
  --xl: 64px;
  --side-gutters: 0px;

  /* Fonts */
  --base-line-height: 1.7;

  @media (max-width: 767px) {
    --base-font-size: 15px;
    --side-gutters: 20px;
  }
}
.container {
  margin-left: auto;
  margin-right: auto;
  width: var(--container-width);
  max-width: 90%;
}
* {
  margin: 0;
  padding: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__main {
  flex: 1 0 auto;
}
</style>