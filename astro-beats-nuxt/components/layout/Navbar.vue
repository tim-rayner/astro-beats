<script setup lang="ts">
import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const { headerText, currentPath } = storeToRefs(useUiStore());

const isHome = computed(() => currentPath.value === "/");

const navbarColor = ref("transparent");

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

const updateNavbarColor = () => {
  navbarColor.value = window.scrollY > 550 ? "bg-background" : "transparent";
};

onMounted(() => {
  window.addEventListener("scroll", updateNavbarColor);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbarColor);
});
</script>

<template>
  <nav
    :class="[
      'navbar w-full sticky top-0 z-50 h-[65px] items-center content-center',
      navbarColor,
    ]"
  >
    <div class="flex flex-container p-3">
      <router-link to="/" class="navbar-item flex items-center h-full mx-2">
        <h2 class="text-lg !text-white">LunaTunes</h2>
      </router-link>

      <router-link
        to="/"
        class="navbar-item flex items-center h-full mx-2 my-auto ml-auto"
      >
        <font-awesome-icon icon="fas fa-home" class="text-xl" />
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  z-index: 100;
}
</style>
