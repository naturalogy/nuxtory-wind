import Fiber from 'fibers'
import Sass from 'sass'

export default {
  target: 'static',

  head: {
    titleTemplate: '%s | ' + process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://kit-free.fontawesome.com/releases/latest/css/free.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {},

  storybook: {},

  tailwindcss: {},

  pwa: {
    manifest: {
      name: 'nuxtory-wind',
      lang: 'en',
      short_name: 'nuxtory-wind',
      title: 'nuxtory-wind',
      'og:title': 'nuxtory-wind',
      description: 'A Nuxt.js PWA starter with Tailwind CSS, Dart Sass and Storybook.',
      'og:description': 'A Nuxt.js PWA starter with Tailwind CSS, Dart Sass and Storybook.',
      theme_color: '#f5df4d',
      background_color: '#fff'
    },
  },

  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
