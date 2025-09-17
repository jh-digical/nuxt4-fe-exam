<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef } from '@tanstack/vue-table'
import { FlexRender, getCoreRowModel, getPaginationRowModel, useVueTable } from '@tanstack/vue-table'

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageSize?: number
}>()

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getRowId: (row: any) => String(row.id),
  initialState: {
    pagination: {
      pageIndex: 0,
      pageSize: props.pageSize ?? 10,
    },
  },
})

defineExpose({ table })
</script>

<template>
  <div class="rounded-md border">
    <Table class="w-full table-fixed min-w-[640px]">
      <colgroup>
        <col
          v-for="col in table.getAllLeafColumns()"
          :key="col.id"
          :style="{
            width:
              ((col.columnDef as any).meta?.widthPct
                ?? 100 / table.getAllLeafColumns().length) + '%',
          }"
        >
      </colgroup>

      <TableHeader>
        <TableRow
          v-for="hg in table.getHeaderGroups()"
          :key="hg.id"
        >
          <TableHead
            v-for="header in hg.headers"
            :key="header.id"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
          >
            <TableCell
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>

        <template v-else>
          <TableRow>
            <TableCell
              :colspan="props.columns.length"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped>
:deep([data-state='checked'] svg) {
  color: #fff;
}
</style>
