<script setup lang="ts">
import type { Song } from "~/types/song-types";

interface Props {
  track: Song;
  activeIndex: number;
  index: number;
}

const { track, activeIndex, index } = defineProps<Props>();
</script>

<template>
  <div
    class="my-6 shadow-lg bg-white rounded-3xl text-[#161937] mx-0 md:mx-6"
    :class="{ 'active-card': index === activeIndex }"
  >
    <div class="img-wrapper">
      <img
        :src="track.img"
        alt="album cover"
        class="w-full h-full rounded-3xl rounded-b-none shadow-lg shadow-background"
      />
    </div>
    <div class="player-wrapper">
      <StarsignPlayer :track="track" />
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.active-card {
  --tw-shadow-color: #49446f;
  --tw-shadow: var(--tw-shadow-colored);
}
</style>
