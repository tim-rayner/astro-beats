<script setup lang="ts">
import type { Song } from "~/types/song-types";

interface Props {
  track: Song;
  activeIndex: number;
  index: number;
}

const { track, activeIndex, index } = defineProps<Props>();

const redirectToSpotify = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div
    class="my-6 shadow-lg bg-white rounded-lg text-[#161937] mx-0 md:mx-6"
    :class="{ 'active-card': index === activeIndex }"
  >
    <div class="flex flex-row">
      <img :src="track.img" :alt="track.song" />
    </div>
    <div class="flex flex-col py-3 pl-6">
      <h4 class="text-2xl">{{ track.song }}</h4>

      <p class="text-lg">{{ track.artist }}</p>
      <PrimeButton
        v-if="track.externalUrl"
        label="Listen on Spotify"
        class="w-fit bg-spotify-green"
        @click="redirectToSpotify(track.externalUrl!)"
      />
      <div class="preview-wrapper" v-if="track.previewUrl">
        <SpotifyPlaybackWidget :src="track.previewUrl" />
      </div>
    </div>
  </div>
</template>
