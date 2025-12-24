// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  studio: {
    // Studio admin login route
    route: '/_studio', // default
    // Your configuration
    repository: {
      private: false,
      provider: 'github', // default: only GitHub supported currently
      owner: 'melishev', // your GitHub owner
      repo: 'budgera-wiki', // your GitHub repository name
      branch: 'master',
      rootDir: '', // optional: location of your content app
    },
  },
})
