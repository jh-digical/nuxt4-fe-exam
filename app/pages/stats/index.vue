<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'

useHead({ title: 'Stats - JHM' })
definePageMeta({ showNav: true })

const store = useTodosStore()

const doneCount = computed(() => store.items.filter(t => t.done).length)
const notDoneCount = computed(() => store.items.length - doneCount.value)

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: {
    bottom: 0,
    icon: 'circle',
    itemWidth: 10,
    textStyle: { fontSize: 12 },
  },
  color: ['#059669', '#f59e0b'],
  grid: { left: 8, right: 8, top: 24, bottom: 48, containLabel: true },
  xAxis: {
    type: 'category',
    data: ['Todos'],
    axisTick: { alignWithLabel: true },
    axisLine: { lineStyle: { color: 'rgba(120, 120, 128, 0.25)' } },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(120, 120, 128, 0.15)' } },
  },
  series: [
    {
      name: 'Done',
      type: 'bar',
      barWidth: '40%',
      data: [doneCount.value],
      label: { show: true, position: 'top', formatter: '{c}' },
      itemStyle: { borderRadius: [6, 6, 0, 0] },
    },
    {
      name: 'Not done',
      type: 'bar',
      barWidth: '40%',
      data: [notDoneCount.value],
      label: { show: true, position: 'top', formatter: '{c}' },
      itemStyle: { borderRadius: [6, 6, 0, 0] },
    },
  ],
  media: [
    {
      query: { maxWidth: 480 },
      option: {
        grid: { top: 16, bottom: 52 },
        legend: { textStyle: { fontSize: 10 } },
        series: [{ label: { fontSize: 10 } }, { label: { fontSize: 10 } }],
      },
    },
    {
      query: { minWidth: 1024 },
      option: {
        series: [{ barWidth: '35%' }, { barWidth: '35%' }],
      },
    },
  ],
}))
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="mx-auto max-w-6xl">
      <div class="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500">
        <Card class="rounded-[calc(theme(borderRadius.2xl)-1px)] shadow-lg">
          <CardHeader class="pb-3">
            <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <CardTitle class="text-2xl">
                  Stats
                </CardTitle>
                <CardDescription>Overview of your todos at a glance</CardDescription>
              </div>
              <div class="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  class="rounded-full px-2 py-1"
                >
                  Total: {{ store.items.length }}
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-full px-2 py-1"
                >
                  Done: {{ doneCount }}
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-full px-2 py-1"
                >
                  Not done: {{ notDoneCount }}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent class="pt-0">
            <ClientOnly>
              <div class="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] rounded-lg border bg-card">
                <VChart
                  :option="option"
                  autoresize
                  class="absolute inset-0"
                  role="img"
                  aria-label="Bar chart of done versus not done todos"
                />
              </div>

              <template #fallback>
                <div class="relative w-full aspect-[16/9] rounded-lg border bg-card grid place-items-center">
                  <p class="text-sm text-muted-foreground">
                    Loading chart…
                  </p>
                </div>
              </template>
            </ClientOnly>
          </CardContent>

          <CardFooter class="pt-4">
            <div class="text-xs text-muted-foreground">
              Chart updates automatically when you add or toggle todos.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
