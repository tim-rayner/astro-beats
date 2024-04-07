<script setup lang="ts">
import "primevue/resources/themes/aura-light-green/theme.css";
import Loader from "./components/Loader.vue";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "This is the homepage",
    },
  ],
  script: [
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7323452179395649",
      crossorigin: "anonymous",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <LoaderIndicator />
      <Loader />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
