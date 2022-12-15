<script setup lang="ts">
defineProps<{ msg: string }>()
ElMessage.success('vite + vue')
</script>

<template>
  <h1>{{ msg }}</h1>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
