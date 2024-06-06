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
    class="card my-6 shadow-lg bg-primary rounded-3xl text-[#161937] flex flex-col items-center p-3 lg:max-w-[600px] lg:mx-4 pb-12"
  >
    <div class="title text-xl font-bold">{{ track.song }}</div>
    <div class="artist text-lg text-left font-semibold">{{ track.artist }}</div>

    <div class="img-container h-48 my-4">
      <img
        class="w-full h-full object-cover rounded-full shadow-lg"
        :src="track.img"
        alt="Album cover"
      />
    </div>

    <div class="player-wrapper w-full">
      <StarsignPlayer :track="track" />
    </div>
  </div>

  <transition name="fade" mode="out-in">
    <div
      class="reason text-lg text-left font-semibold mx-4 mb-12 px-5 bg-background border border-primary rounded-lg shadow-lg p-4 lg:max-w-[600px]"
    >
      {{ track.reason }}
    </div>
  </transition>
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
