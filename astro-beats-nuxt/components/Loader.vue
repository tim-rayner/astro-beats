<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

const { loadingStarsign } = storeToRefs(useUiStore());

const LoadingPhrases = [
  " Seeking harmony in the celestial spheres",
  " Unlocking the melodies written in the stars",
  "Consulting the stars for your perfect tune",
  "Finishing touches",
];

const loadingPhrase = ref(LoadingPhrases[0]);
const currentIndex = ref(0);

const intervalId = ref<any>();

const startInterval = () => {
  intervalId.value = setInterval(() => {
    if (currentIndex.value !== LoadingPhrases.length - 1) {
      currentIndex.value = currentIndex.value + 1;
      loadingPhrase.value = LoadingPhrases[currentIndex.value];
    } else {
      clearInterval(intervalId.value);
    }
  }, 3000);
};

onMounted(startInterval);

watch(LoadingPhrases, (newVal) => {
  if (newVal) {
    clearInterval(intervalId.value);
    currentIndex.value = 0;
    loadingPhrase.value = LoadingPhrases[0];
    startInterval();
  }
});
</script>
<template>
  <div
    class="overlay absolute bg-[rgba(0,0,0,0.65)] z-50 w-full h-screen flex flex-col justify-center overflow-hidden top-0"
    v-if="loadingStarsign"
  >
    <div
      class="m-auto bg-black text-center p-24 w-[75vw] md:w-[45vw] rounded-2xl"
    >
      <div class="text-2xl w-full">Loading</div>

      <div class="relative h-64 mt-3 mx-auto">
        <CSSLoader />
      </div>
      <div class="text-sm mt-3">{{ loadingPhrase }}</div>
    </div>
  </div>
</template>
