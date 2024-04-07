<script setup lang="ts">
/**
 * @TODO style this component so the songs are displayed extremely professionally, prehaps as a carousel
 * innit
 */
import { useRoute } from "vue-router";

const route = useRoute();

const { starsign } = route.params;
const isLoading = ref(true);
const activeIndex = ref(0);
const viewportWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 0
);

const responsiveOptions = ref([
  {
    breakpoint: "4000px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "500px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "100px",
    numVisible: 1,
    numScroll: 1,
  },
]);

// //GET TRACK DATA
const { data: horoscope } = await useFetch(`/api/horoscope/${starsign}`).then(
  (resp) => {
    isLoading.value = false;
    return resp;
  }
);

const redirectToSpotify = (url: string) => {
  window.open(url, "_blank");
};

const updateActiveIndex = (event: number) => {
  if (viewportWidth.value > 767) {
    // replace 767 with the breakpoint you want
    activeIndex.value = event + 1;
  } else {
    activeIndex.value = event;
  }
};
</script>

<template>
  <div class="flex flex-col" v-if="horoscope">
    <div class="header">
      <h4 class="text-center">{{ horoscope.date }}</h4>
      <p class="px-24 my-3 text-center">
        {{ horoscope.horoscopeReading }}
      </p>
    </div>

    <div class="songs-wrapper mx-auto max-w-full overflow-hidden">
      <PrimeCarousel
        :value="horoscope.songs"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="w-full"
        :circular="true"
        v-on:update:page="updateActiveIndex($event)"
        :showIndicators="false"
      >
        <template #item="slotProps">
          <div
            class="my-6 shadow-lg bg-white rounded-lg text-[#161937] mx-0 md:mx-6"
            :class="{ 'active-card': slotProps.index === activeIndex }"
          >
            <div class="flex flex-row">
              <img :src="slotProps.data.img" :alt="slotProps.data.song" />
            </div>
            <div class="flex flex-col py-3 pl-6">
              <h4 class="text-2xl">{{ slotProps.data.song }}</h4>
              <p class="text-lg">{{ slotProps.data.artist }}</p>
              <PrimeButton
                label="Listen on Spotify"
                class="w-fit bg-spotify-green"
                @click="redirectToSpotify(slotProps.data.externalUrl)"
              />
              <div class="preview-wrapper">
                <SpotifyPlaybackWidget :src="slotProps.data.previewUrl" />
              </div>
            </div>
          </div>
        </template>
      </PrimeCarousel>

      <div class="explanation">
        <p class="px-24 my-3 text-center">
          {{ horoscope.songs[activeIndex].reason }}
        </p>
      </div>
    </div>
  </div>

  <div v-else-if="isLoading">
    <p class="px-24 my-3">Loading...</p>
  </div>

  <div v-else>
    <Error
      code="500"
      message="We ran into a problem whilst trying to load your horoscope"
    />
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
