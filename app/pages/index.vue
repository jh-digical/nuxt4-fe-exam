<script setup lang="ts">
// import { useCounterStore } from '@/stores/counter'

// const counter = useCounterStore()
</script>

<template>
  <section class="flex flex-col items-center gap-4">
    <h1 class="text-3xl font-semibold">
      Todo List
    </h1>
    <Button>
      Count
    </Button>
    <Input
      type="email"
      placeholder="Email"
    />
  </section>
</template>
