<template>
  <div class="flex">
    <button @click="toggleAudio">
      {{ isPlaying ? "Stop" : "Play" }}
    </button>
    <progress
      :value="currentTime"
      :max="duration"
      class="progress-bar my-auto"
    ></progress>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onBeforeUnmount } from "vue";

type Props = {
  src: string;
};

const { src } = defineProps<Props>();

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
  if (typeof window !== "undefined") {
    audio.value = new Audio(src);
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
</script>
