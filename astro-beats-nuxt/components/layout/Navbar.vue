<script setup lang="ts">
import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const { headerText, currentPath } = storeToRefs(useUiStore());

const isHome = computed(() => currentPath.value === "/");

const tweetText = `Check out the vibe for my horoscope (${headerText.value}) on LunaTunes! https://astro-beats.vercel.app${currentPath.value} 🌙 #LunaTunes #Horoscope`;
const encodedTweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  tweetText
)}`;

const scrollToTop = () => {
  const element = document.querySelector("#top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<!-- <template>
  <nav class="navbar w-full">
    <div class="flex flex-container p-3">
      <div class="flex-1">
        <router-link
          to="/"
          class="navbar-item flex items-center h-full"
          v-if="!isHome"
        >
          <font-awesome-icon icon="fas fa-home" class="text-2xl" />
        </router-link>
      </div>

      <div class="flex-1 text-center">
        <router-link to="/" class="navbar-item">
          <h1 class="text-5xl font-bold !text-[#ffff]">{{ headerText }}</h1>
        </router-link>
      </div>
      <div class="flex-1 text-right">
        <div class="flex items-center h-full">
   
          <a
            :href="encodedTweetUrl"
            target="_blank"
            class="navbar-item font-semibold flex ml-auto"
          >
            <font-awesome-icon icon="fab fa-twitter" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template> -->
<template>
  <nav
    class="navbar w-full sticky top-0 z-50 h-[65px] items-center content-center"
  >
    <div class="flex flex-container p-3">
      <router-link
        to="/"
        class="navbar-item flex items-center h-full"
        v-if="!isHome"
      >
        <h2 class="text-lg">LunaTunes</h2>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  z-index: 100;
}
</style>
