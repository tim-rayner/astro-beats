<script setup lang="ts">
const scrollToTop = () => {
  const element = document.querySelector("#top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav class="navbar w-full sticky top-0 h-[65px] items-center content-center">
    <div class="flex flex-container p-3">
      <h2 @click="scrollToTop" class="cursor-pointer text-lg">LunaTunes</h2>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  z-index: 100;
}
</style>
