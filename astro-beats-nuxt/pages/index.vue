<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>

<template>
  <h1>Welcome</h1>
  <div class="flex flex-wrap">
    <div
      v-for="sign in StarSigns"
      :key="sign.id"
      class="p-4"
      @click="router.push(`/${sign.name}`)"
    >
      <h2>{{ sign.name }}</h2>
      <p>{{ sign.description }}</p>
    </div>
  </div>
</template>
