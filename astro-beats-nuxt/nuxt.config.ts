// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-primevue", "@pinia/nuxt"],
  runtimeConfig: {
    // Keys within runtimeConfig are exposed client-side
    apiBase: "/api",
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  },
  primevue: {
    /* Options */
    components: {
      prefix: "Prime",
      include: ["Button"],
    },
  },
});
