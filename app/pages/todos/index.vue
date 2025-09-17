<script setup lang="ts">
import { columns } from '@/components/todos/columns'
import DataTable from '@/components/todos/data-table.vue'
import DataTablePagination from '@/components/todos/data-table-pagination.vue'

useHead({ title: 'Todos - JHM' })
definePageMeta({ showNav: true, showNewTodo: true })

const store = useTodosStore()
const dataTableRef = ref<InstanceType<typeof DataTable> | null>(null)
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="mx-auto max-w-6xl">
      <div class="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500">
        <Card class="rounded-[calc(theme(borderRadius.2xl)-1px)] shadow-lg min-h-[652px]">
          <CardHeader class="pb-3">
            <div class="flex items-start justify-between gap-4">
              <div>
                <CardTitle class="text-2xl">
                  Todos
                </CardTitle>
                <CardDescription>
                  {{ dataTableRef?.table.getState().pagination.pageSize }} items per page
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                class="rounded-full px-2 py-1"
              >
                {{ store.total }} items
              </Badge>
            </div>
          </CardHeader>

          <CardContent class="pt-0">
            <DataTable
              ref="dataTableRef"
              :columns="columns"
              :data="store.items"
            />
          </CardContent>

          <CardFooter class="pt-4 mt-auto">
            <DataTablePagination
              v-if="dataTableRef?.table"
              :table="dataTableRef.table"
              class="w-full"
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
