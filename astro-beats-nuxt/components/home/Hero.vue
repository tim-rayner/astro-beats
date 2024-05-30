<script setup lang="ts">
import HeroBackground from "@/assets/svg/moon-and-clouds.svg";

const router = useRouter();

const scrollToStarsignList = () => {
  const element = document.querySelector("#starsign-list");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
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
      class="hero h-screen lg:h-fit lg:min-h-[55vh] xl:min-h-[75vh] content-center items-center z-50 relative"
    >
      <div
        class="content w-full items-center content-center max-w-[650px] lg:w-[55vw] mx-auto"
      >
        <h1 class="hidden">Luna Tunes</h1>
        <h1 class="text-8xl font-bold p-2">Luna</h1>
        <h1 class="text-8xl font-bold p-2 text-right">Tunes</h1>
      </div>

      <div
        class="secondary-content flex flex-col px-6 lg:px-28 mt-[10vh] max-w-[650px] mx-auto"
      >
        <p class="text-lg text-white text-center py-2">
          Read your Horoscope for today, then listen to your stars ✨
        </p>
        <div
          class="button-group flex flex-col lg:flex-row items-center w-full justify-between"
        >
          <button
            @click="scrollToStarsignList"
            class="mt-4 px-4 py-2 text-white bg-primary rounded-md w-full mx-2"
          >
            Get Started
          </button>
          <button
            @click="router.push('/starsigns')"
            class="mt-4 px-4 py-2 text-white bg-primary rounded-md w-full mx-2"
          >
            What's my starsign?
          </button>
        </div>
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
