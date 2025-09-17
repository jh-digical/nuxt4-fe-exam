import { defineStore } from 'pinia'

export type Todo = {
  id: number
  title: string
  done: boolean
  tag: string
}

const defaultTodos: Todo[] = [
  { id: 1, title: 'Make coffee', done: true, tag: 'home' },
  { id: 2, title: 'Water the plants', done: true, tag: 'home' },
  { id: 3, title: 'Check and reply to emails', done: false, tag: 'work' },
  { id: 4, title: 'Buy groceries', done: false, tag: 'errands' },
  { id: 5, title: '30-min workout', done: false, tag: 'health' },
  { id: 6, title: 'Call mom', done: false, tag: 'personal' },
  { id: 7, title: 'Schedule dentist appointment', done: false, tag: 'health' },
  { id: 8, title: 'Pay electricity bill', done: false, tag: 'urgent' },
  { id: 9, title: 'Prepare meeting notes', done: false, tag: 'work' },
  { id: 10, title: 'Tidy desk', done: true, tag: 'home' },
  { id: 11, title: 'Walk the dog', done: false, tag: 'home' },
  { id: 12, title: 'Meal prep for tomorrow', done: false, tag: 'home' },
  { id: 13, title: 'Review pull requests', done: false, tag: 'work' },
  { id: 14, title: 'Read 10 pages', done: false, tag: 'personal' },
  { id: 15, title: 'Laundry', done: true, tag: 'home' },
  { id: 16, title: 'Refill water jug', done: true, tag: 'home' },
  { id: 17, title: 'Update budget sheet', done: false, tag: 'personal' },
  { id: 18, title: 'Plan weekend errand route', done: false, tag: 'errands' },
  { id: 19, title: 'Water balcony herbs', done: false, tag: 'home' },
  { id: 20, title: 'Backup photos', done: false, tag: 'personal' },
]

export const useTodosStore = defineStore('todos', {
  state: () => ({
    items: defaultTodos.map(t => ({ ...t })) as Todo[],
    loading: false as boolean,
    error: null as string | null,
  }),
  getters: {
    total: s => s.items.length,
  },
  actions: {
    addTodo(title: string, tag = 'misc') {
      const id = this.items.length ? Math.max(...this.items.map(t => t.id)) + 1 : 1
      const newItem: Todo = { id, title, tag, done: false }
      this.items = [newItem, ...this.items]
    },
    removeTodo(id: number) {
      this.items = this.items.filter(t => t.id !== id)
    },
    toggleDone(id: number, value?: boolean) {
      const t = this.items.find(t => t.id === id)
      if (t) t.done = typeof value === 'boolean' ? value : !t.done
    },
  },
})
