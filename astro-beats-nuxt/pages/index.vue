<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>

<template>
  <h1 class="text-center text-5xl my-3">AstroBeats</h1>
  <p class="text-center text-xl my-3">
    Click on a star sign to see your horoscope, and explore your horoscope's
    musical vibe for today ✨
  </p>
  <div class="flex flex-wrap justify-center">
    <div
      v-for="sign in StarSigns"
      :key="sign.id"
      class="border text-center cursor-pointer p-4 flex flex-col justify-center items-center m-2"
      @click="router.push(`/${sign.name.toLowerCase()}`)"
      style="flex: 1 0 20em"
    >
      <h1 class="text-3xl">{{ sign.img }}</h1>
      <h2 class="text-2xl">{{ sign.name }}</h2>
      <p>{{ sign.description }}</p>
    </div>
  </div>
</template>
