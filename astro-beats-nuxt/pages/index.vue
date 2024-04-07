<script setup lang="ts">
import { StarSigns } from "../constants/starsign-constants";

const router = useRouter();
</script>

<template>
  <HomeHero />
  <div class="transition duration-300 ease-in-out">
    <StarCard
      v-for="sign in StarSigns"
      :key="sign.id"
      @click="router.push(`/${sign.name.toLowerCase()}`)"
      style="flex: 1 0 20em"
      :name="sign.name.charAt(0).toUpperCase() + sign.name.slice(1)"
      :description="sign.description"
    />
  </div>
</template>
