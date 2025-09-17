<script setup lang="ts">
const route = useRoute()
const showNav = computed(() => !!route.meta.showNav)
</script>

<template>
  <div>
    <AppNav v-if="showNav" />
    <NuxtPage />
  </div>
</template>
