<script setup lang="ts">
const props = defineProps<{ table: any }>()

const pageIndex = computed(() => props.table.getState().pagination.pageIndex)
const pageSize = computed(() => props.table.getState().pagination.pageSize)
const total = computed(() => props.table.getCoreRowModel().rows.length)

const start = computed(() => pageIndex.value * pageSize.value + 1)
const end = computed(() => Math.min((pageIndex.value + 1) * pageSize.value, total.value))

function setPage(n: number) {
  props.table.setPageIndex(Math.max(0, Math.min(n - 1, props.table.getPageCount() - 1)))
}
</script>

<template>
  <!-- Layout mirrors the Tasks example: range text + right-aligned controls -->
  <div class="flex items-center justify-between">
    <p class="text-sm text-muted-foreground">
      Showing <span class="font-medium">{{ start }}</span>–<span class="font-medium">{{ end }}</span>
      of <span class="font-medium">{{ total }}</span> todos
    </p>

    <div class="ml-4">
      <!-- Compact, right-aligned shadcn-vue Pagination -->
      <Pagination
        v-slot="{ items }"
        :items-per-page="pageSize"
        :total="total"
        :sibling-count="1"
        :show-edges="true"
      >
        <PaginationContent>
          <PaginationPrevious
            :disabled="!props.table.getCanPreviousPage()"
            @click="props.table.previousPage()"
          />
          <template
            v-for="(item, index) in items"
            :key="index"
          >
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === (pageIndex + 1)"
              @click="setPage(item.value)"
            >
              {{ item.value }}
            </PaginationItem>
            <PaginationEllipsis
              v-else
              :index="index"
            />
          </template>
          <PaginationNext
            :disabled="!props.table.getCanNextPage()"
            @click="props.table.nextPage()"
          />
        </PaginationContent>
      </Pagination>
    </div>
  </div>
</template>
