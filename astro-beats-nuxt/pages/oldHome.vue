<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>
<template>
  <HomeHero />
  <div
    class="transition duration-300 ease-in-out grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-3"
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
