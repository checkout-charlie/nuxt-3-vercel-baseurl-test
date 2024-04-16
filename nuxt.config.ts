// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/subdir/',
    buildAssetsDir: '/subdir/_nuxt/'
  },
})
