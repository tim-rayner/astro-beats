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
  <div class="flex text-center flex-col" v-if="horoscope">
    <h1 class="text-5xl text-center m-auto my-3">
      {{ horoscope.name }}
    </h1>
    <h4>{{ horoscope.date }}</h4>
    <p class="px-24 my-3">{{ horoscope.horoscopeReading }}</p>
  </div>
  <div v-else-if="isLoading">
    <p class="px-24 my-3">Loading...</p>
  </div>
  <div v-else>
    <p class="px-24 my-3">Failed to load data</p>
  </div>
</template>
