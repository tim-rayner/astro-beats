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
  <div class="flex flex-col lg:flex-row mx-auto w-fit" v-if="track">
    <Button
      class="mt-4 px-4 py-2 bg-white rounded-md mx-2 flex items-center justify-center"
      @click="redirectToSpotify(track.externalUrl!)"
    >
      <span class="m-auto mx-2">Listen on Spotify</span>
      <font-awesome-icon
        v-if="track.externalUrl"
        icon="fab fa-spotify"
        class="text-2xl text-spotify-green cursor-pointer w-fit m-auto"
      />
    </Button>

    <Button
      class="mt-4 px-4 py-2 bg-white rounded-md mx-2 flex items-center justify-center"
      v-if="track.previewUrl"
      @click="toggleAudio"
    >
      <font-awesome-icon
        :icon="!isPlaying ? 'fa-play' : 'fa-pause'"
        class="text-2xl text-black cursor-pointer mx-auto"
      />
    </Button>
  </div>
</template>
