<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

useHead({ title: 'Todo List Project - by JHM' })

const previewTodos = ref([
  { id: 1, title: 'Make coffee', done: true, tag: 'home' },
  { id: 2, title: 'Water the plants', done: true, tag: 'home' },
  { id: 3, title: 'Check and reply to emails', done: false, tag: 'work' },
  { id: 4, title: 'Buy groceries', done: false, tag: 'errands' },
  { id: 5, title: '30-min workout', done: false, tag: 'health' },
])
</script>

<template>
  <section class="relative isolate">
    <div
      aria-hidden="true"
      class="rainbow-veil fixed inset-0 z-0 pointer-events-none"
    />

    <div class="relative z-10 container mx-auto px-4 py-16 md:py-24">
      <Transition
        name="fade-up"
        appear
      >
        <div class="mx-auto max-w-4xl text-center">
          <p class="mb-2 text-xs uppercase tracking-widest text-muted-foreground/80">
            Welcome
          </p>

          <h1
            class="rainbow-text inline-block text-5xl md:text-6xl font-extrabold tracking-tight md:tracking-tighter leading-tight"
          >
            Todo List Project using
            <span class="animated-underline">Nuxt 4</span>
            and
            <span class="animated-underline">Pinia Store</span>
          </h1>

          <div class="mt-4 mx-auto max-w-2xl">
            <p class="text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
              Build faster with
              <span class="font-medium text-foreground">Vue 3</span>,
              <span class="font-medium text-foreground">Tailwind CSS</span>, and
              <span class="font-medium text-foreground whitespace-nowrap">shadcn&#8209;vue</span>
              — a clean, accessible UI kit you control.
            </p>

            <div class="mt-3 flex flex-wrap items-center justify-center gap-2">
              <Badge
                variant="secondary"
                class="rounded-full px-3"
              >
                Accessible
              </Badge>
              <Badge
                variant="secondary"
                class="rounded-full px-3"
              >
                Composable
              </Badge>
              <Badge
                variant="secondary"
                class="rounded-full px-3"
              >
                Themeable
              </Badge>
            </div>
          </div>

          <div class="mt-8 flex items-center justify-center">
            <NuxtLink
              to="/todos"
              aria-label="View All Todos"
              class="group"
            >
              <Button
                size="lg"
                class="relative overflow-hidden inline-flex items-center"
              >
                <span
                  class="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent
                         [mask-image:linear-gradient(90deg,transparent,black,transparent)] transition-transform duration-700
                         group-hover:translate-x-[120%]"
                />
                <span class="relative inline-flex items-center">
                  View All Todos
                  <ChevronRight
                    aria-hidden="true"
                    class="ml-2 h-4 w-4"
                  />
                </span>
              </Button>
            </NuxtLink>
          </div>
        </div>
      </Transition>

      <div
        role="separator"
        aria-orientation="horizontal"
        class="my-12 h-[1.5px] w-full rounded-full
               bg-gradient-to-r from-indigo-500/45 via-violet-500/45 to-fuchsia-500/45
               dark:from-indigo-400/40 dark:via-violet-400/40 dark:to-fuchsia-400/40
               shadow-[0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      />

      <Transition
        name="fade-up"
        appear
      >
        <div class="mx-auto max-w-3xl">
          <div class="rounded-xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500">
            <Card class="rounded-[calc(theme(borderRadius.xl)-1px)]">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                  A snapshot of your upcoming tasks. Navigate to <code>/todos</code> for full view.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul class="flex flex-col gap-3">
                  <li
                    v-for="todo in previewTodos"
                    :key="todo.id"
                    class="rounded-lg border bg-card p-3 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div class="flex items-start sm:items-center gap-3 min-w-0">
                      <Checkbox
                        :model-value="todo.done"
                        disabled
                        aria-label="Todo status"
                        class="h-5 w-5 rounded bg-background
                               border-2 border-foreground/40 dark:border-foreground/30
                               ring-1 ring-inset ring-foreground/10
                               data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600
                               data-[state=checked]:ring-emerald-500/40 data-[state=checked]:text-white
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                               disabled:opacity-100 transition-colors duration-200"
                      />
                      <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-center gap-2 min-w-0">
                          <span
                            class="text-sm md:text-base min-w-0 truncate"
                            :class="todo.done ? 'line-through text-muted-foreground' : ''"
                          >
                            {{ todo.title }}
                          </span>
                          <Badge
                            v-if="todo.tag"
                            variant="default"
                            class="hidden sm:inline-flex shrink-0 capitalize"
                          >
                            {{ todo.tag }}
                          </Badge>
                          <span class="sr-only">Tag: {{ todo.tag }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-1 sm:mt-0 sm:ml-4 flex items-center justify-end w-full sm:w-auto self-end sm:self-auto">
                      <Badge
                        :class="todo.done
                          ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300'
                          : 'border-amber-500/30 bg-amber-500/15 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-300'"
                      >
                        {{ todo.done ? 'Done' : 'Not done' }}
                      </Badge>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Transition>
    </div>

    <div
      role="note"
      aria-label="Author badge"
      class="fixed z-20 left-1/2 -translate-x-1/2
             bottom-[calc(theme(spacing.3)+env(safe-area-inset-bottom))]
             sm:left-auto sm:right-5 sm:translate-x-0
             sm:bottom-[calc(theme(spacing.5)+env(safe-area-inset-bottom))]
             max-w-[calc(100vw-1.5rem)]"
    >
      <div
        class="group inline-flex items-center gap-1.5 sm:gap-2
               rounded-full border border-foreground/10 bg-background/80
               px-2 py-1 sm:px-3 sm:py-1.5
               text-[11px] sm:text-xs font-medium text-foreground/80 shadow-sm
               backdrop-blur supports-[backdrop-filter]:backdrop-blur-md
               transition-colors hover:border-foreground/20 hover:text-foreground"
      >
        <span
          class="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-colors group-hover:bg-fuchsia-500"
          aria-hidden="true"
        />
        <span class="truncate">by John Harvey Mandal</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep([data-state='checked'] svg) { color: #fff; }

@keyframes rainbow-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.rainbow-text {
  background-image: linear-gradient(90deg, #ef4444, #f97316, #f59e0b, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #d946ef, #ef4444);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-shift 7s ease-in-out infinite;
}
@media (prefers-color-scheme: dark) {
  .rainbow-text {
    background-image: linear-gradient(90deg, #f87171, #fb923c, #fbbf24, #34d399, #22d3ee, #60a5fa, #a78bfa, #f472b6, #f87171);
  }
}
@media (prefers-reduced-motion: reduce) { .rainbow-text { animation: none; } }

@keyframes underline-shift {
  0%, 100% { background-position: 0 100%; }
  50% { background-position: 100% 100%; }
}
.animated-underline {
  background-image: linear-gradient(90deg, #ef4444, #f59e0b, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #d946ef);
  background-size: 200% 2px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: .08em;
  animation: underline-shift 6s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) { .animated-underline { animation: none; } }

.fade-up-enter-active { transition: all .25s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(6px); }

.rainbow-veil {
  background: linear-gradient(90deg, #ef4444, #f97316, #f59e0b, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #d946ef, #ef4444);
  background-size: 300% 100%;
  animation: rainbow-shift 8s ease-in-out infinite;
  filter: blur(36px) saturate(120%);
  opacity: 0.20;
  -webkit-mask-image: radial-gradient(140% 80% at 50% 35%, #000 55%, transparent 85%);
  mask-image: radial-gradient(140% 80% at 50% 35%, #000 55%, transparent 85%);
}
@media (prefers-color-scheme: dark) { .rainbow-veil { opacity: 0.14; } }
@media (prefers-reduced-motion: reduce) { .rainbow-veil { animation: none; } }
</style>
