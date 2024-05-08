<script setup lang="ts">
import { useRoute } from "vue-router";
import type { HoroscopeResponse, SongResponse } from "~/types/starsign-types";

const route = useRoute();

const { starsign: starSign } = route.params;

const activeIndex = ref(0);

const viewportWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 0
);

const spotifyClientAccessToken = useCookie("spotifyClientAccessToken");

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
  {
    breakpoint: "100px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const horoscopeLoading = ref(true);
const songsLoading = ref(true);

const horoscopeData = ref<HoroscopeResponse | null>(null);
const songData = ref<SongResponse | null>(null);
const apiError = ref<any>(null);

// GET TRACK DATA
onMounted(async () => {
  try {
    const horoscope_data = await getHoroscope();
    horoscopeData.value = horoscope_data;
    horoscopeLoading.value = false;

    const songs_data = await getSongs(
      String(starSign),
      spotifyClientAccessToken.value,
      horoscope_data.horoscopeReading
    );
    songData.value = songs_data;
    songsLoading.value = false;
  } catch (error) {
    console.error(error);
    apiError.value = error;
  }
});

/**
 * @todo segregate api calls into their own helper class, or repository pattern
 */
const getHoroscope = async () => {
  const response = await fetch(
    `https://astro-beats-api.vercel.app/api/horoscopes/V2/reading/${starSign}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   spotifyClientAccessToken: spotifyClientAccessToken,
      // }),
    }
  );
  if (!response.ok) {
    console.error("HTTP error", response.status);
    return new Error("HTTP error");
  }

  if (response.status === 404) {
    console.error("404 error", response.status);
    return new Error("404 error");
  }

  const data = await response.json();

  return data;
};

const getSongs = async (
  starSign: string,
  spotifyClientAccessToken: any,
  horoscopeReading: string
) => {
  const response = await fetch(
    `https://astro-beats-api.vercel.app/api/horoscopes/V2/songs/${starSign}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        spotifyClientAccessToken: spotifyClientAccessToken,
        horoscopeReading: horoscopeReading,
      }),
    }
  );

  if (!response.ok) {
    console.error("HTTP error", response.status);
    return new Error("HTTP error");
  }

  if (response.status === 404) {
    console.error("404 error", response.status);
    return new Error("404 error");
  }

  const data = await response.json();
  // console.warn('response', data);

  return data;
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
  <div class="flex flex-col" v-if="horoscopeData">
    <div class="header px-12 md:px-44 xl:px-[20vw]">
      <h4 class="text-center text-xl font-bold">{{ horoscopeData.date }}</h4>
      <p class="my-3 text-center text-2xl">
        {{ horoscopeData.horoscopeReading }}
      </p>
    </div>

    <div
      class="songs-wrapper mx-auto max-w-full overflow-hidden"
      v-if="songData"
    >
      <PrimeCarousel
        :value="songData"
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
        <p class="px-12 my-3 text-center text-2xl text-[#ffff]">
          {{ songData[activeIndex]?.reason }}
        </p>
      </div>
    </div>
  </div>

  <div>
    <div>
      <!-- <LoadersReadingLoader v-if="horoscopeLoading" /> -->
      <LoadersSongLoader v-if="songsLoading" />
    </div>
    <Error
      v-if="apiError"
      code="500"
      message="We ran into a problem whilst trying to load your horoscope"
    />
  </div>
</template>
