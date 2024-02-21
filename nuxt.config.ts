import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  routeRules: {
    '/*/**': { ssr: false },
    '/api/**': { ssr: true },
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '20',
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: [
      'vuetify',
    ],
  },
  imports: {
    dirs: [
      'store/*.ts',
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
    // Pinia
    '@pinia/nuxt',
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
    emulators: process.env.MODE === 'development' || process.env.NODE_ENV === 'development',
    appCheck: {
      debug: process.env.NODE_ENV !== 'production',
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaEnterprise',
      key: process.env.FIREBASE_RECAPTCHA_KEY as string,
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
});
