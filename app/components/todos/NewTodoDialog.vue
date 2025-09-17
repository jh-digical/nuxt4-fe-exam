<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{
  (e: 'update:open', v: boolean): void
  (e: 'submit', title: string): void
}>()

const title = ref('')
const canSubmit = computed(() => title.value.trim().length > 0)

watch(
  () => props.open,
  (o) => {
    if (!o) title.value = ''
  },
)

function close() {
  emit('update:open', false)
}

function onSubmit() {
  if (!canSubmit.value) return
  emit('submit', title.value.trim())
  title.value = ''
  close()
}
</script>

<template>
  <Dialog
    :open="open"
    @update:open="emit('update:open', $event)"
  >
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>New Todo</DialogTitle>
        <DialogDescription>Add a title for your new task.</DialogDescription>
      </DialogHeader>

      <div class="grid gap-2 py-2">
        <Label for="todo-title">Todo title</Label>
        <Input
          id="todo-title"
          v-model="title"
          placeholder="e.g. Pay electricity bill"
          autocomplete="off"
          autofocus
          @keyup.enter="onSubmit"
        />
      </div>

      <DialogFooter class="gap-2 sm:gap-0">
        <Button
          variant="secondary"
          @click="close"
        >
          Cancel
        </Button>
        <Button
          :disabled="!canSubmit"
          @click="onSubmit"
        >
          Add Todo
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
