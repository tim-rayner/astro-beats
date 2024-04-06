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
