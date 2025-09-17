import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

export type Todo = {
  id: number
  title: string
  done: boolean
  tag: string
}

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'done',
    meta: { widthPct: 10 },
    header: () => h('div', { class: 'whitespace-nowrap' }, 'Status'),
    cell: ({ row }) => {
      const store = useTodosStore()
      const t = row.original
      return h('div', { class: 'flex items-center' }, [
        h(Checkbox, {
          'modelValue': t.done,
          'onUpdate:modelValue': (val: boolean) => store.toggleDone(t.id, val),
          'aria-label': 'Todo status',
          'class': [
            'h-5 w-5 rounded bg-background',
            'border-2 border-foreground/40 dark:border-foreground/30',
            'ring-1 ring-inset ring-foreground/10',
            'data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600',
            'data-[state=checked]:ring-emerald-500/40 data-[state=checked]:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
            'transition-colors duration-200',
          ],
        }),
      ])
    },
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    meta: { widthPct: 55 },
    header: () => h('div', { class: 'whitespace-nowrap' }, 'Title'),
    cell: ({ row }) =>
      h(
        'span',
        {
          class: [
            'block max-w-[48ch] truncate sm:max-w-[64ch] md:max-w-none',
            row.original.done && 'line-through text-muted-foreground',
          ],
        },
        row.original.title,
      ),
    enableSorting: false,
  },
  {
    accessorKey: 'tag',
    meta: { widthPct: 15 },
    header: () => h('div', { class: 'text-right whitespace-nowrap' }, 'Tag'),
    cell: ({ row }) =>
      h('div', { class: 'text-right' }, [
        h(
          'span',
          {
            'class':
              'inline-flex items-center rounded-md bg-primary text-primary-foreground px-2 py-0.5 text-xs capitalize',
            'aria-label': `Tag: ${row.original.tag}`,
          },
          row.original.tag,
        ),
      ]),
    enableSorting: false,
  },
  {
    id: 'state',
    meta: { widthPct: 20 },
    header: () => h('div', { class: 'text-right whitespace-nowrap' }, 'State'),
    cell: ({ row }) => {
      const done = row.original.done
      return h(
        'div',
        { class: 'text-right' },
        h(
          'span',
          {
            'class': [
              'inline-flex items-center rounded-md px-2 py-0.5 text-xs',
              done
                ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300'
                : 'border border-amber-500/30 bg-amber-500/15 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-300',
            ],
            'aria-label': `Status: ${done ? 'Done' : 'Not done'}`,
          },
          done ? 'Done' : 'Not done',
        ),
      )
    },
    enableSorting: false,
  },
]
