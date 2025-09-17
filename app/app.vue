<script setup lang="ts">
const route = useRoute()
const showNav = computed(() => !!route.meta.showNav)

const newTodoOpen = ref(false)
function handleAddTodo(title: string) {
  // TODO: replace with Pinia action later
  console.info('[New Todo]', title)
}
</script>

<template>
  <div>
    <AppNav
      v-if="showNav"
      @new-todo="newTodoOpen = true"
    />
    <NuxtPage />

    <!-- Global dialog (renders on pages with nav; harmless elsewhere) -->
    <NewTodoDialog
      v-model:open="newTodoOpen"
      @submit="handleAddTodo"
    />
  </div>
</template>
