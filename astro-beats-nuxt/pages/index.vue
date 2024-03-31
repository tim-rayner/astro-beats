<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>

<template>
  <h1>Welcome</h1>
  <div class="flex flex-wrap justify-center">
    <div
      v-for="sign in StarSigns"
      :key="sign.id"
      class="border text-center cursor-pointer p-4 flex flex-col justify-center items-center m-2"
      @click="router.push(`/${sign.name}`)"
      style="flex: 1 0 20em"
    >
      <h1 class="text-3xl">{{ sign.img }}</h1>
      <h2>{{ sign.name }}</h2>
      <p>{{ sign.description }}</p>
    </div>
  </div>
</template>
