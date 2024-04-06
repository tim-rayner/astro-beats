<script setup lang="ts">
/**
 * @todo This layout needs to be styled so that it stands out - have dark stary vibe
 * @todo this layout also needs a navbar
 * @todo this layout needs a footer
 */

import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const { pageLoader } = storeToRefs(useUiStore());
</script>

<template>
  <div
    class="relative bg-background min-h-screen"
    :class="{ 'h-screen overflow-hidden': pageLoader }"
  >
    <div class="relative flex flex-col items-center justify-center">
      <div class="content z-50 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
