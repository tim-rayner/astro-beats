<script setup lang="ts">
/**
 * @todo This layout needs to be styled so that it stands out - have dark stary vibe
 * @todo this layout also needs a navbar
 * @todo this layout needs a footer
 */
</script>

<template>
  <div class="relative">
    <div
      class="relative flex flex-col items-center justify-center bg-white dark:bg-black transition-bg"
    >
      <div class="content z-50">
        <slot />
      </div>
    </div>
  </div>
</template>
