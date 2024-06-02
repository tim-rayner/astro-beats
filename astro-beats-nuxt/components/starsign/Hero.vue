<script setup lang="ts">
import HeroBackground from "@/assets/svg/moon-and-clouds.svg";

interface Props {
  starSign: string;
}

const { starSign } = defineProps<Props>();

const router = useRouter();

const scrollToStarsignList = () => {
  const element = document.querySelector("#starsign-list");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToStarSignFinder = () => {
  const element = document.querySelector("#starsign-finder");
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
      class="hero h-screen lg:h-fit lg:min-h-[30vh] xl:min-h-[35vh] content-center items-center z-50 relative"
    >
      <div
        class="content w-full items-center content-center max-w-[650px] lg:w-[55vw] mx-auto"
      >
        <h1 class="text-8xl font-bold p-2">{{ starSign }}</h1>
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
