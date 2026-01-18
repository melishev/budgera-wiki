// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: 'Budgera',
  },
  compatibilityDate: '2025-05-15',
  modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  studio: {
    // Studio admin login route
    route: '/admin', // default
    // Your configuration
    repository: {
      private: false,
      provider: 'github', // default: only GitHub supported currently
      owner: 'melishev', // your GitHub owner
      repo: 'budgera-wiki', // your GitHub repository name
      branch: 'master',
      rootDir: '', // optional: location of your content app
    },
    i18n: {
      defaultLocale: 'ru',
    },
  },
  ogImage: {
    fonts: ['Manrope:700']
  }
})
