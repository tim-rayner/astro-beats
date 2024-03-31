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
  modules: ["nuxt-primevue"],
  primevue: {
    /* Options */
    components: {
      prefix: "Prime",
      include: ["Button"],
    },
  },
});
