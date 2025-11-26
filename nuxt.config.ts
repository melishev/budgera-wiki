// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxt/content", "nuxt-studio"],
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
      rootDir: '' // optional: location of your content app
    }
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'budgera-wiki',
            database_id: process.env.DB_ID
          }
        ]
      },
    },
  }
})