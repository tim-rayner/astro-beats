<script setup lang="ts">
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

console.log(horoscope);
</script>

<template>
  <div class="flex flex-col" v-if="horoscope">
    <h1 class="text-5xl text-center m-auto my-3">
      {{ horoscope.name }}
    </h1>
    <h4 class="text-center">{{ horoscope.date }}</h4>
    <p class="px-24 my-3 text-center">{{ horoscope.horoscopeReading }}</p>

    <div class="songs-wrapper">
      <div
        v-for="song in horoscope.songs"
        :key="song.id"
        class="m-2 flex flex-col song-card border p-6"
      >
        <div class="flex flex-row my-3">
          <img :src="song.img" :alt="song.song" />
          <h4>{{ song.song }}</h4>
          &nbsp;-&nbsp;
          <p>{{ song.artist }}</p>
        </div>
        {{ song.reason }}
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
