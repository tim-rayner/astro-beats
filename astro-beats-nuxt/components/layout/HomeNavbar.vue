<script setup lang="ts">
import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const scrollToTop = () => {
  const element = document.querySelector("#top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav
    class="navbar w-full sticky top-0 z-50 h-[65px] items-center content-center"
  >
    <div class="flex flex-container p-3">
      <h2 @click="scrollToTop">LunaTunes</h2>
    </div>
  </nav>
</template>
