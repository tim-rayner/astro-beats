<script setup lang="ts">
/**
 * @todo This layout needs to be styled so that it stands out - have dark stary vibe
 * @todo this layout also needs a navbar
 * @todo this layout needs a footer
 */

import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";
import Particles from "@/assets/json/particles.json";

import Navbar from "~/components/layout/Navbar.vue";

const { pageLoader } = storeToRefs(useUiStore());
</script>

<template>
  <div
    class="relative bg-background min-h-screen"
    :class="{ 'h-screen overflow-hidden': pageLoader }"
  >
    <div class="relative flex flex-col items-center justify-center">
      <NuxtParticles id="tsparticles" :options="Particles"></NuxtParticles>
      <div class="relative content w-full">
        <span id="top"></span>
        <Navbar />
        <slot />
      </div>
    </div>
  </div>
</template>
