<script setup lang="ts">
const route = useRoute()
const showNav = computed(() => !!route.meta.showNav)

const newTodoOpen = ref(false)
const store = useTodosStore()

function handleAddTodo(title: string) {
  store.addTodo(title)
}
</script>

<template>
  <div>
    <AppNav
      v-if="showNav"
      @new-todo="newTodoOpen = true"
    />
    <NuxtPage />
    <NewTodoDialog
      v-model:open="newTodoOpen"
      @submit="handleAddTodo"
    />
  </div>
</template>
