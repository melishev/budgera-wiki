// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-studio"],
  studio: {
    // Studio admin login route
    route: '/_studio', // default
    // Your configuration
    repository: {
      provider: 'github', // default: only GitHub supported currently
      owner: 'melishev', // your GitHub owner
      repo: 'docus', // your GitHub repository name
      branch: 'main',
      rootDir: '' // optional: location of your content app
    }
  }
})