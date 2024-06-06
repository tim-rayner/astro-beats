<script setup lang="ts">
import { useRoute } from "vue-router";
import type { HoroscopeResponse, SongResponse } from "~/types/starsign-types";

const route = useRoute();

const { starsign: starSign } = route.params;

const activeIndex = ref(0);

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
const apiError = ref<Boolean>(false);

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
    apiError.value = true;
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
    apiError.value = true;
    return new Error("HTTP error");
  }
  if (response.status === 404) {
    console.error("404 error", response.status);
    apiError.value = true;
    return new Error("404 error");
  }
  const data = await response.json();
  // console.warn('response', data);
  return data;
};

const updateActiveIndex = (event: number) => {
  activeIndex.value = event;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>

<template>
  <StarsignHero
    class="-mt-[65px]"
    :starSign="capitalizeFirstLetter(String(starSign))"
  />
  <div class="content w-[90%] lg:w-3/4 mx-auto">
    <StarsignReading
      v-if="horoscopeData?.horoscopeReading"
      :starSign="capitalizeFirstLetter(String(starSign))"
      :reading="horoscopeData?.horoscopeReading"
    />
    <LoadersMoonLoader v-if="horoscopeLoading" />
  </div>
  <StarsignTrackCarousel :tracks="songData" v-if="songData" />
  <div class="" v-else-if="apiError">
    <p>
      Ooops, we've run into a problem loading your tunes for today, try
      refreshing this page to try again!
    </p>
  </div>
</template>
