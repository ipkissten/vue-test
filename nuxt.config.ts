// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      title: 'Vue Test',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [

      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  imports: {
    autoImport: true,
    dirs: [
      './types'
    ]
  },
  css: [
    'assets/styles/global.scss',
    'assets/styles/fonts.scss'
  ]
})
