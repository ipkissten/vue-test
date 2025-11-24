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
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/manrope/Manrope-Bold.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/manrope/Manrope-Regular.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/manrope/Manrope-SemiBold.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/manrope/Manrope-Medium.woff2', crossorigin: '' },
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
  ],
  modules: [
    '@nuxt/image',
    'nuxt-viewport',
    '@pinia/nuxt',
  ]
})