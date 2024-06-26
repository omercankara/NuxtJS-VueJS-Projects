import { h } from "vue";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server:{
    host:"192.168.1.126"
  },
  head: {
    title: 'l',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' }
   


    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/reset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sweetalert.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }]
  ],
  toast: {
    timeout: 2000,
    closeOnClick: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://192.168.1.144:8080/',
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
