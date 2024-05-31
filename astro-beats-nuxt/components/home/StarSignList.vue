<script setup lang="ts">
import { StarSigns } from "../../constants/starsign-constants";

const router = useRouter();
</script>

<template>
  <div class="w-[90%] lg:w-3/4 mx-auto">
    <h2 class="text-4xl !text-white lg:my-3 font-bold" id="starsign-list">
      Star Signs
    </h2>
    <p class="text-lg text-white py-2 mb-6">
      Discover the sound of your horoscope for the day
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 pb-20">
      <NewStarCard
        v-for="sign in StarSigns"
        :key="sign.id"
        @click="router.push(`/${sign.name.toLowerCase()}`)"
        class="col-span-1 p-12"
        :name="sign.name.charAt(0).toUpperCase() + sign.name.slice(1)"
        :description="sign.description"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
