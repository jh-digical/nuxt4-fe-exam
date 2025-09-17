<script setup lang="ts">
import { columns } from '@/components/todos/columns'
import { todosData } from '@/components/todos/data/todos'
import DataTable from '@/components/todos/data-table.vue'
import DataTablePagination from '@/components/todos/data-table-pagination.vue'

useHead({ title: 'Todos - JHM' })

const pageSize = 10
const dataTableRef = ref<InstanceType<typeof DataTable> | null>(null)
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="mx-auto max-w-6xl">
      <!-- Subtle fancy accent -->
      <div class="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500">
        <Card class="rounded-[calc(theme(borderRadius.2xl)-1px)] shadow-lg">
          <CardHeader class="pb-3">
            <div class="flex items-start justify-between gap-4">
              <div>
                <CardTitle class="text-2xl">
                  Todos
                </CardTitle>
                <CardDescription>Static mock data • 10 items per page</CardDescription>
              </div>
              <Badge
                variant="secondary"
                class="rounded-full px-2 py-1"
              >
                {{ todosData.length }} items
              </Badge>
            </div>
          </CardHeader>

          <CardContent class="pt-0">
            <DataTable
              ref="dataTableRef"
              :columns="columns"
              :data="todosData"
              :page-size="pageSize"
            />
          </CardContent>

          <CardFooter class="pt-4">
            <!-- Pass the exposed table from DataTable to the Pagination -->
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
