//const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static', // default is 'server'
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    script: [
      { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=', async: true },
    ],
    //https://material.io/design/material-studies/about-our-material-studies.html
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Lilita+One&display=swap"},
      //{ rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Lilita+One&display=swap"},
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href:
      //     "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
      // }
    ]
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  //components: true,
  
  router: {
    base: '/',
    middleware: ['class', 'stats'], // logging stats
    // middleware: ['auth', 'stats'],
  },
  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: ["~/assets/css/stars_radial.css"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    //new VuetifyLoaderPlugin()
    //'~/plugins/typer.js'
    { src: '~/plugins/typer.js', mode: 'client' }, // only on client side
  ],
  /*
   ** importing a custom loader. this will overwrite the default loader above
   */
  loading: '~/components/spinners/LoadingBar03.vue',
  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
  ],
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      },
      //progressiveImages: true
      progressiveImages: {
        size: 12, // Use higher-resolution previews
        sharp: true // Use sharp instead of ImageMagick
      }
    }])
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: "~/vuetify.options.js"
  },
  i18n: {
    locale: 'en',
    fallbackLocale: 'en',
    localeDir: 'locales',
    enableInSFC: true
  },
  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
};
