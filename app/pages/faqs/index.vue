<script setup lang="ts">
useHead({ title: 'FAQs - JHM' })
definePageMeta({ showNav: true })

const faqs = [
  {
    id: 'item-1',
    q: 'Explain the difference between reactive() and ref() in Vue 3.',
    a: 'In Vue 3, both reactive() and ref() are used to create reactive state, but they serve different purposes and have different behaviors. For example, ref() creates a reactive reference to a single value or primitive (like a string, number, boolean) while reactive() creates a reactive proxy for an entire object or array and tracks all nested properties deeply, so you can reactively work with complex state. Use ref() for single values or when you need to replace the whole value and use reactive() for managing objects or arrays with multiple reactive properties.',
  },
  {
    id: 'item-2',
    q: 'What is the role of Pinia compared to Vuex? Why was it chosen for Nuxt 4?',
    a: 'Pinia is chosen for Nuxt 4 primarily because it is the official state management library designed for Vue 3, offering a modern, simpler, and more developer-friendly alternative compared to Vuex. Pinia offers a more streamlined and productive approach to state management in Nuxt 4, aligning with modern Vue 3 features and development practices, which is why it is preferred over Vuex in Nuxt 4 projects.',
  },
  {
    id: 'item-3',
    q: 'How would you structure components to avoid prop drilling in larger projects?',
    a: 'There are several ways, the commonly used practices are: Using provide/inject for passing data across component trees without props. Using Pinia for centralized reactive state management. Using events for simple sibling-to-sibling or child-to-parent communication. Structuring components with clear separation of concerns and reuse composition functions. Doing these helps keep components independent and reduces tedious prop drilling in Vue 3 apps.',
  },
  {
    id: 'item-4',
    q: 'What is linting in frontend projects and why is it important?',
    a: 'Linting in frontend projects is the automated process of analyzing source code to detect stylistic issues, programming errors, and potential bugs before the code is executed or deployed. It ensures the code adheres to predefined coding standards and best practices using specialized tools called linters (e.g., ESLint for JavaScript/TypeScript, Stylelint for CSS). It is a vital practice in frontend development for maintaining high-quality, readable, and error-resistant code, improving collaboration and project outcomes.',
  },
  {
    id: 'item-5',
    q: 'How would you ensure consistent styling and coding conventions across a frontend team?',
    a: 'Several best practices to ensure consistent styling and coding conventions across a frontend team are: Establishing clear coding standards and style guides. Include naming conventions, indentation, spacing, file organization, comment practices, and component design. Integrate automated linting and formatting tools in the project space. Require pull request reviews focusing on code quality and style adherence, encouraging knowledge sharing and learning around best practices. By combining clear coding standards with automation and team discipline, frontend teams can deliver consistent, high-quality, maintainable code efficiently.',
  },
  {
    id: 'item-6',
    q: 'If a bug only appears in production but not in local dev, how would you approach debugging it?',
    a: 'A systematic approach to solve the issue would be to: Reproduce production environment locally or staging. Use production logging, monitoring, and error tracking. Inspect with browser dev tools and analyze network and console. Compare environment and build differences. Isolate the problem and test incrementally. Verify for typical production-only issues like timing or config discrepancies.These steps will help identify and fix subtle issues that manifest only in production.',
  },
]
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="mx-auto max-w-5xl">
      <div class="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500">
        <Card class="rounded-[calc(theme(borderRadius.2xl)-1px)] shadow-lg">
          <CardHeader class="pb-3">
            <div class="flex items-start justify-between gap-4">
              <div>
                <CardTitle class="text-2xl">
                  Technical Questions
                </CardTitle>
                <CardDescription>Answers to the Technical Questions in the PDF Spec File</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent class="pt-0">
            <Accordion
              type="single"
              collapsible
              class="w-full"
            >
              <AccordionItem
                v-for="item in faqs"
                :key="item.id"
                :value="item.id"
              >
                <AccordionTrigger class="text-left">
                  {{ item.q }}
                </AccordionTrigger>
                <AccordionContent>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    {{ item.a }}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
