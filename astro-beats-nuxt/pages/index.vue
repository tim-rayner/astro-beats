<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";
</script>

<template>
  <h1>Welcome</h1>
  <div class="flex flex-wrap">
    <div v-for="sign in StarSigns" :key="sign.id" class="p-4">
      <h2>{{ sign.name }}</h2>
      <p>{{ sign.description }}</p>
    </div>
  </div>
</template>
