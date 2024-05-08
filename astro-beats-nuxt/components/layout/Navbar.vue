<script setup lang="ts">
import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const { headerText, currentPath } = storeToRefs(useUiStore());

const isHome = computed(() => currentPath.value === "/");
</script>

<template>
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
            href="https://twitter.com/"
            target="_blank"
            class="navbar-item font-semibold flex ml-auto"
          >
            <font-awesome-icon icon="fab fa-twitter" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
