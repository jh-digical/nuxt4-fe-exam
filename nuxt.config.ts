// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'nuxt-echarts',
  ],
  ssr: false,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt4-fe-exam/', // user/org page => keep '/'
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'github_pages',
  },
  echarts: {
    renderer: 'canvas', // or 'svg' or both ['svg','canvas']
    charts: ['BarChart', 'LineChart', 'PieChart'], // only import charts you use
    components: ['TooltipComponent', 'GridComponent', 'DatasetComponent', 'LegendComponent'], // essential components
    features: ['LabelLayout', 'UniversalTransition'], // optional features
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
})
