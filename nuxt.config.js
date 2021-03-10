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

  pwa: {
    manifest: {
      name: process.env.npm_package_name || '',
      lang: 'ja',
      short_name: process.env.npm_package_name || '',
      title: process.env.npm_package_name || '',
      'og:title': process.env.npm_package_name || '',
      description: process.env.npm_package_description || '',
      'og:description': process.env.npm_package_description || '',
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
    }
  }
}
