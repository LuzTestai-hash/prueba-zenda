export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: process.env.PORT || 3002,
  },
  head: {
    title: 'Zenda | Performance & Growth',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Somos un equipo de especialistas en performance y crecimiento con una simple creencia: Conectar a las marcas con sus clientes en los momentos que importan.',
      },
      { hid: 'og:title', property: 'og:title', content: 'Somos Zenza' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Hacemos Performance & Growth en serio.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://image-URL',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://zenda.com.ar',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', alt: 'icon' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/stylesheets/Stylesheets.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-check-view.js',
    { src: '~/plugins/vue-kinesis.js', mode: 'client' },
    { src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/svg',
    'vue-scrollto/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://zenda-api.herokuapp.com'
        : 'https://zenda-api-dev.herokuapp.com',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
      },
      {
        code: 'es',
        file: 'es.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
  },

  bootstrapVue: {
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
