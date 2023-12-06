import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/api/**': { ssr: false },
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: [
      'vuetify',
    ],
  },
  modules: [
    // Vuetify vite module
    // https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    // Eslint module
    '@nuxtjs/eslint-module',
    // VueUse
    '@vueuse/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
