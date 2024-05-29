<script setup lang="ts">
import HeroBackground from "@/assets/svg/moon-and-clouds.svg";

const router = useRouter();
</script>

<template>
  <div class="relative w-full h-full bg-background">
    <div class="absolute h-full w-full z-10">
      <img
        :src="HeroBackground"
        alt="Luna Tunes Background Image"
        class="fade h-full w-full object-cover"
      />
    </div>

    <div
      class="hero h-screen lg:h-fit lg:min-h-[55vh] content-center items-center z-50 relative"
    >
      <div
        class="content w-full items-center content-center max-w-[650px] lg:w-[55vw] mx-auto"
      >
        <h1 class="hidden">Luna Tunes</h1>
        <h1 class="text-8xl font-bold p-2">Luna</h1>
        <h1 class="text-8xl font-bold p-2 text-right">Tunes</h1>
      </div>

      <div
        class="secondary-content flex flex-col px-6 lg:px-28 mt-[15vh] max-w-[650px] mx-auto"
      >
        <p class="text-lg text-white text-center">
          Your one-stop shop for all things astrology and music
        </p>
        <button
          @click="router.push('/starsigns')"
          class="mt-4 px-4 py-2 text-white bg-primary rounded-md"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.fade {
  display: block;
  -webkit-mask-image: linear-gradient(to bottom, white, transparent);
  mask-image: linear-gradient(to bottom, white, transparent);
}
</style>
