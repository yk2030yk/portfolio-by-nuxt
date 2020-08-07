const pkg = require('./package')

module.exports = {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  loading: { color: '#fff' },

  css: ['@/assets/scss/global.scss'],

  plugins: [
    '~plugins/error-handler.js',
    '~plugins/scroll-plugin.js',
    '~plugins/marked-plugin.js',
    '~plugins/firebase.js',
    '~plugins/croppa.js'
  ],

  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'GTM-KPFLVJG',
        pageTracking: true
      }
    ],
    'nuxt-babel'
  ],

  styleResources: {
    scss: ['./assets/scss/global.scss']
  }
}
