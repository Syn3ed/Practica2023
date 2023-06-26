//import { defineNuxtConfig } from 'nuxt/config'
//import { config } from 'process';
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'DISK',
      meta: [
        { name: '', content: '' }
      ],
    }
  },
   css: ['vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/settings.scss',
    '~/assets/css/main.css'],
  /*routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  },*/
  modules: [
    "@nuxtjs/google-fonts",
    '@sidebase/nuxt-auth',

    /*'@nuxtjs/axios',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    }*/
  ],
  /*auth: {
    enableGlobalAppMiddleware: true
  },*/
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    },
  },
 
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    download: false,
    useStylesheet: true,
  }
})


/*
vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify({
          styles: { configFile: new URL('assets/settings.scss', import.meta.url).pathname }
        })
      ))
    }
  ],
  */

/*axios: {
  baseURL: 'http://localhost:5001/', 
},

auth: {
  strategies: {
    local: {
      token: {
        property: 'access_token',
        required: true,
        type: 'Bearer'
      },
      user: {
        property: false, 
        autoFetch: true
      },
      endpoints: {
        login: { url: '/auth/login', method: 'post' },
        logout: { url: '/auth/logout', method: 'post' },
        user: { url: '/user', method: 'get' }
      }
    }
  } 
},*/
