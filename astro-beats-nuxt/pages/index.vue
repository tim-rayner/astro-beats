<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>
<template>
  <HomeHero />
  <div
    class="bob-animation transition duration-300 ease-in-out grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-3"
  >
    <StarCard
      v-for="sign in StarSigns"
      :key="sign.id"
      @click="router.push(`/${sign.name.toLowerCase()}`)"
      class="col-span-1"
      :name="sign.name.charAt(0).toUpperCase() + sign.name.slice(1)"
      :description="sign.description"
    />
  </div>
</template>

<style scoped>
/* @keyframes bob {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bob-animation {
  animation: bob 2s ease-in-out infinite;
  animation-delay: calc(0.3s * var(--i));
} */
</style>
