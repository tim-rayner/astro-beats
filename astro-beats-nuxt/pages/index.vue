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
    <Card
      v-for="sign in StarSigns"
      :key="sign.id"
      :class="sign.name.toLowerCase()"
      @click="router.push(`/${sign.name.toLowerCase()}`)"
      style="flex: 1 0 20em"
      :icon="sign.img!"
    >
      <div class="m-auto">
        <h1 class="text-5xl text-center mb-3">{{ sign.img }}</h1>
        <h2 class="text-2xl text-center">{{ sign.name }}</h2>
        <p class="text-center">{{ sign.description }}</p>
      </div>
    </Card>
  </div>
</template>
