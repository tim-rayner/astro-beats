<script setup lang="ts">
/**
 * @TODO style this component so the songs are displayed extremely professionally, prehaps as a carousel
 * innit
 */
import { useRoute } from "vue-router";
import useUiStore from "~/store/ui";

const route = useRoute();
const nuxtApp = useNuxtApp();

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

const updateActiveIndex = (event: number) => {
  if (viewportWidth.value > 767) {
    // replace 767 with the breakpoint you want
    activeIndex.value = event + 1;
  } else {
    activeIndex.value = event;
  }
};

nuxtApp.hook("page:finish", () => {
  if (useUiStore().$state.loadingStarsign == true) {
    useUiStore().setLoadingStarsign(false);
  }
});
</script>

<template>
  <div class="flex flex-col" v-if="horoscope">
    <div class="header">
      <h4 class="text-center">{{ horoscope.date }}</h4>
      <p class="px-12 my-3 text-center text-lg">
        {{ horoscope.horoscopeReading }}
      </p>
    </div>

    <div class="songs-wrapper mx-auto max-w-full overflow-hidden">
      <PrimeCarousel
        :value="horoscope.songs"
        :responsiveOptions="responsiveOptions"
        class="w-full"
        :circular="true"
        v-on:update:page="updateActiveIndex($event)"
        :showIndicators="true"
      >
        <template #item="slotProps">
          <StarsignTrack
            :track="slotProps.data"
            :activeIndex="activeIndex"
            :index="slotProps.index"
          />
        </template>
      </PrimeCarousel>

      <div class="explanation">
        <p class="px-12 my-3 text-center text-lg">
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
