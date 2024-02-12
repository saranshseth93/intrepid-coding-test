<script setup>
import { RouterView } from 'vue-router'
import IntrepidLogo from './components/IntrepidLogo.vue'
</script>

<template>
  <header class="l-container">
    <IntrepidLogo />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
