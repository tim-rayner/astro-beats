<script setup lang="ts">
import favicon from "~/assets/favicon.png";

import "primevue/resources/themes/aura-light-green/theme.css";

useHead({
  title: "LunaTunes",
  meta: [
    {
      name: "description",
      content:
        "Welcome to LunaTunes, where you can find the perfect song to match your horoscope! Updates daily. 🌙🎶",
    },
  ],
  script: [
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7323452179395649",
      crossorigin: "anonymous",
    },
  ],

  link: [{ rel: "icon", type: "image/png", href: favicon }],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <LoaderIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
