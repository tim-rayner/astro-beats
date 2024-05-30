<script setup lang="ts">
const router = useRouter();

definePageMeta({
  layout: "home",
});
</script>
<template>
  <!-- offset the hero to ensure navbar overlaps -->
  <HomeHero class="-mt-[65px]" />
  <HomeStarSignList />
  <HomeStarSignFinder />
</template>
