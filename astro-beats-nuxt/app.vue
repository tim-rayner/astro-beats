<script setup lang="ts">
import "primevue/resources/themes/aura-light-green/theme.css";

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
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
