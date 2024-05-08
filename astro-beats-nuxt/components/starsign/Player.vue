<script setup lang="ts">
import type { Song } from "~/types/song-types";

interface Props {
  track: Song;
}

const { track } = defineProps<Props>();

const redirectToSpotify = (url: string) => {
  window.open(url, "_blank");
};

///
const audio = ref<any | null>(null);
const isPlaying = ref(false);
const duration = ref(0);
const currentTime = ref(0);

const stopAudio = () => {
  if (audio.value) {
    audio.value.pause();
    audio.value.currentTime = 0;
    isPlaying.value = false;
  }
};

const toggleAudio = () => {
  if (isPlaying.value) {
    stopAudio();
  } else if (audio.value) {
    audio.value.play();
    isPlaying.value = true;
  }
};

watchEffect(() => {
  if (typeof window !== "undefined" && track.externalUrl) {
    audio.value = new Audio(track.previewUrl);
    audio.value.onloadedmetadata = () => {
      duration.value = audio.value?.duration.toFixed(0) || 0;
      //convert duration to decimal with 2 decimal places
      duration.value = parseFloat(duration.value).toFixed(2);
    };
    audio.value.ontimeupdate = () => {
      currentTime.value = audio.value?.currentTime || 0;
    };
    audio.value.onended = stopAudio;
  }
});

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.removeEventListener("ended", stopAudio);
    audio.value.currentTime = 0;
  }
});

//truncate artist name if it's too long
const artist = computed(() => {
  const artist = track.artist;
  return artist.length > 17 ? artist.substring(0, 17) + "..." : artist;
});
</script>

<template>
  <div
    class="w-full mx-auto bg-white shadow-md rounded-lg rounded-t-none overflow-hidden dark:bg-zinc-900"
    v-if="track"
  >
    <div class="flex justify-between items-center px-2 py-4">
      <div class="flex items-center">
        <div class="mx-2 h-15">
          <h3
            class="text-sm xl:text-xl font-medium text-gray-700 dark:text-gray-200 !text-[#000]"
          >
            {{ track.song }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm xl:text-lg">
            {{ artist }}
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <font-awesome-icon
          v-if="track.externalUrl"
          icon="fab fa-spotify"
          class="text-2xl text-spotify-green mx-3 cursor-pointer"
          @click="redirectToSpotify(track.externalUrl!)"
        />
        <font-awesome-icon
          :icon="!isPlaying ? 'fa-play' : 'fa-pause'"
          class="text-2xl text-black cursor-pointer"
          @click="toggleAudio"
          v-if="track.previewUrl"
        />
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center"></div>
    </div>
  </div>
</template>
