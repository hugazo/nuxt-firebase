import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  routeRules: {
    '/': { ssr: false },
    '/api/**': { ssr: true },
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
    // Vuefire
    'nuxt-vuefire',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    emulators: process.env.NODE_ENV === 'development',
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      //  firebaseRecaptchaKey: process.env.FIREBASE_RECAPTCHA_KEY,
      //  appCheckDebugToken: process.env.FIREBASE_APPCHECK_DEBUG_TOKEN,
    },
  },
});
