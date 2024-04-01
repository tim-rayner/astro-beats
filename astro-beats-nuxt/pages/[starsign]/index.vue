<script setup lang="ts">
/**
 * @TODO style this component so the songs are displayed extremely professionally, prehaps as a carousel
 */
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params); // { name: 'spongebob' }

const { starsign } = route.params;
const isLoading = ref(true);

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

console.log(horoscope);
</script>

<template>
  <div class="flex flex-col" v-if="horoscope">
    <div class="header">
      <h1 class="text-5xl text-center m-auto my-3 font-bold">
        {{ horoscope.name }}
      </h1>
      <h4 class="text-center">{{ horoscope.date }}</h4>
      <p class="px-24 my-3 text-center">
        {{ horoscope.horoscopeReading }}
      </p>
    </div>

    <div class="songs-wrapper w-2/3 mx-auto">
      <div
        v-for="song in horoscope.songs"
        :key="song.id"
        class="my-6 flex flex-row shadow-lg bg-white rounded-lg"
      >
        <div class="flex flex-row">
          <img :src="song.img" :alt="song.song" />
        </div>
        <div class="flex flex-col py-3 pl-6">
          <h4 class="text-2xl">{{ song.song }}</h4>
          <p class="text-lg">{{ song.artist }}</p>
          <div class="flex flex-row my-2 w-2/3">
            <p>{{ song.reason }}</p>
          </div>
          <PrimeButton
            label="Listen on Spotify"
            class="w-fit"
            @click="redirectToSpotify(song.externalUrl)"
          />
          <div class="preview-wrapper"><!-- TODO: INSERT PREVIEW --></div>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="isLoading">
    <p class="px-24 my-3">Loading...</p>
  </div>

  <div v-else>
    <p class="px-24 my-3">Failed to load data</p>
  </div>
</template>
