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
  <div>
    <div
      class="card my-6 shadow-lg bg-primary rounded-3xl text-[#161937] p-3 max-w-[360px] lg:max-w-[600px] mx-auto lg:mx-4 pb-12"
    >
      <div class="title text-xl font-bold text-center">{{ track.song }}</div>
      <div class="artist text-lg font-semibold text-center">
        {{ track.artist }}
      </div>

      <div class="img-container h-48 w-48 my-4 m mx-auto">
        <img
          class="w-full h-full object-cover rounded-full shadow-lg"
          :src="track.img"
          alt="Album cover"
        />
      </div>

      <div class="player-wrapper w-full">
        <!-- <StarsignPlayer :track="track" /> -->
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div
        class="reason text-lg text-left font-semibold mx-4 mb-12 px-5 bg-background border border-primary rounded-lg shadow-lg p-4 lg:max-w-[600px]"
      >
        {{ track.reason }}
      </div>
    </transition>
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
