<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params); // { name: 'spongebob' }

const { starsign } = route.params;
</script>

<template>
  <h1>Sign Page</h1>
  <h2>for {{ starsign }}</h2>
</template>
