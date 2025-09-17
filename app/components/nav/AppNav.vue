<script setup lang="ts">
import { useRoute } from '#imports'
import { Home, ListTodo, BarChart3, HelpCircle, Menu, Plus, ClipboardList } from 'lucide-vue-next'

type Link = { label: string, to: string, icon: any }

const links: Link[] = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Todos', to: '/todos', icon: ListTodo },
  { label: 'Stats', to: '/stats', icon: BarChart3 },
  { label: 'FAQs', to: '/faqs', icon: HelpCircle },
]

const route = useRoute()
const isActive = (to: string) => route.path === to || route.path.startsWith(to + '/')
const showNewTodo = computed(() => !!route.meta.showNewTodo)

const baseItem = 'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors'
const activeItem = 'bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 text-foreground border border-border/50 shadow-sm'
const idleItem = 'text-muted-foreground hover:text-foreground hover:bg-accent hover:text-accent-foreground'

const emit = defineEmits<{ (e: 'new-todo'): void }>()
</script>

<template>
  <header
    role="banner"
    class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
  >
    <div class="relative">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-full h-[2px] bg-gradient-to-r from-fuchsia-500/50 via-violet-500/50 to-indigo-500/50"
      />
    </div>

    <nav
      class="container mx-auto h-18 px-4 flex items-center justify-between gap-6"
      aria-label="Main"
    >
      <NuxtLink
        to="/todos"
        class="font-semibold tracking-tight hover:opacity-90"
      >
        <div class="flex items-center gap-2">
          TODO.CO
          <ClipboardList
            class="h-7 w-7"
            aria-hidden="true"
          />
        </div>
      </NuxtLink>

      <div class="hidden sm:flex items-center gap-3 ml-auto">
        <Button
          v-if="showNewTodo"
          class="gap-2"
          @click="emit('new-todo')"
        >
          <Plus
            class="h-4 w-4"
            aria-hidden="true"
          />
          New Todo
        </Button>

        <NavigationMenu>
          <NavigationMenuList class="gap-1">
            <NavigationMenuItem
              v-for="link in links"
              :key="link.to"
            >
              <NavigationMenuLink as-child>
                <NuxtLink
                  :to="link.to"
                  :aria-current="isActive(link.to) ? 'page' : undefined"
                  :class="[baseItem, isActive(link.to) ? activeItem : idleItem]"
                >
                  <component
                    :is="link.icon"
                    class="h-4 w-4"
                    aria-hidden="true"
                  />
                  <span>{{ link.label }}</span>
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>

      <div class="sm:hidden">
        <Drawer>
          <DrawerTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
            >
              <Menu class="h-5 w-5" />
            </Button>
          </DrawerTrigger>

          <DrawerContent class="px-0">
            <DrawerHeader class="px-4">
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Select a section</DrawerDescription>
            </DrawerHeader>

            <div class="px-3 pb-3 space-y-1">
              <div class="flex flex-col">
                <DrawerClose
                  v-for="link in links"
                  :key="link.to"
                  as-child
                >
                  <NuxtLink
                    :to="link.to"
                    :aria-current="isActive(link.to) ? 'page' : undefined"
                    class="flex items-center gap-2 rounded-md px-3 py-2 text-base"
                    :class="isActive(link.to) ? 'bg-muted text-foreground' : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'"
                  >
                    <component
                      :is="link.icon"
                      class="h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>{{ link.label }}</span>
                  </NuxtLink>
                </DrawerClose>
              </div>

              <Separator
                v-if="showNewTodo"
                class="my-2"
              />
              <DrawerClose
                v-if="showNewTodo"
                as-child
              >
                <Button
                  class="w-full gap-2"
                  @click="$emit('new-todo')"
                >
                  <Plus
                    class="h-4 w-4"
                    aria-hidden="true"
                  />
                  New Todo
                </Button>
              </DrawerClose>
            </div>

            <DrawerFooter class="px-4">
              <DrawerClose as-child>
                <Button
                  variant="secondary"
                  class="w-full"
                >
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  </header>
</template>
