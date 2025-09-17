# Nuxt 4 Todo List

A compact Todo app built with **Nuxt 4**, **Vue 3**, **Pinia**, **TailwindCSS**, **shadcn-vue**, **TanStack Table**, and **Nuxt ECharts**.

## Run the project
```bash
# install
pnpm install

# dev (http://localhost:3000)
pnpm dev

# build & preview
pnpm build && pnpm preview
```
> Requires Node 18+ and pnpm.

## AI usage
This project was **AI-assisted during development** (architecture, scaffolding, and refactors).
AIs used in this project is Perplexity for fast research, and ChatGPT 5.0 as a fast and intelligent pair-programmer.

## Possible improvements
- **Persistence**: save todos to localStorage or a backend API.
- **CRUD**: edit/delete items, bulk actions, undo/redo.
- **Filters & search**: by status/tag; table sorting.
- **Validation & a11y**: form rules, keyboard testing, color contrast pass.
- **Tests & CI**: unit/e2e (Vitest/Playwright), lint/format in CI.
- **Deployment**: Vercel/Netlify adapter and preview environments.
- **Analytics/Telemetry**: basic usage metrics (opt-in).

## My Approach and Final Thoughts About The Project

1. Starting the development, since it's been a very long time since my last Nuxt project, I used Perplexity AI to lead me to the important latest documentation of each necessary technology used in this project.
2. Aware of the recent "npm hacked" fiasco, i opted to use pnpm instead.
3. I avoided relying on AI for setting up the project from scratch, instead I opted in following each dependency's documentation carefully.
4. I know the requirements said to keep it simple, but I got stuck in a development rabbit hole which resulted in a full-fledged app instead.
5. Since it turned into a very big app with a lot of components, I was not able to meet the "3 Vue components" requirement since that is already restrictive.
6. The requirement also encouraged minimal AI usage. I don't know how much "minimal AI" is in each person's perspective, but I use an AI coder as a very fast and intelligent pair-programmer. I'm still not into vibe-coding.
7. Main reason the development took quite some time is because of shadcdn-vue's Datatable component. :hurtrealbad:

I enjoyed every bit of experience in building this app even at the cost of two night's sleep. :shipit:
