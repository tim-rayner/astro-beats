<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const navbarColor = ref("transparent");

const updateNavbarColor = () => {
  navbarColor.value = window.scrollY > 550 ? "bg-background" : "transparent";
};

onMounted(() => {
  window.addEventListener("scroll", updateNavbarColor);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbarColor);
});

const scrollToTop = () => {
  const element = document.querySelector("#top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav
    :class="[
      'navbar w-full sticky top-0 h-[65px] items-center content-center transition-colors duration-200',
      navbarColor,
    ]"
  >
    <div class="flex flex-container p-3">
      <h2 @click="scrollToTop" class="cursor-pointer text-lg !text-white">
        LunaTunes
      </h2>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  z-index: 9999;
}
</style>
