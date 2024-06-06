<script setup lang="ts">
import type { Song } from "~/types/song-types";

interface Props {
  tracks: Song[];
}

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

const dummyTracks = [
  {
    song: "Walking on Sunshine",
    artist: "Katrina and the Waves",
    reason:
      "This upbeat and positive song reflects the warm and loving energy Virgo is feeling today. It's perfect for attracting new people and bringing positivity into their life.",
    img: "https://i.scdn.co/image/ab67616d0000b273eafaf556eda644a745d0144d",
    externalUrl: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0",
    previewUrl: null,
  },
  {
    song: "Happy",
    artist: "Pharrell Williams",
    reason:
      "Pharrell's 'Happy' captures the positive and joyful mood Virgo is experiencing, especially with good news about money. It's a feel-good song that encourages creativity and fun.",
    img: "https://i.scdn.co/image/ab67616d0000b273e8107e6d9214baa81bb79bba",
    externalUrl: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
    previewUrl:
      "https://p.scdn.co/mp3-preview/5e0c8e5d899dea532d697fb20a851450e9614cfc?cid=932f4b9da1b443dfb37c9ded02e8c98f",
  },
  {
    song: "Good as Hell",
    artist: "Lizzo",
    reason:
      "Lizzo's empowering anthem is all about feeling confident and positive, which resonates with Virgo's warm and loving energy. It's a great song to kickstart any artistic project.",
    img: "https://i.scdn.co/image/ab67616d0000b273bf7d271b8f3051af3cf0bf55",
    externalUrl: "https://open.spotify.com/track/6KgBpzTuTRPebChN0VTyzV",
    previewUrl:
      "https://p.scdn.co/mp3-preview/eff7853a768016bf8dbfbd33436a43393fef2d0d?cid=932f4b9da1b443dfb37c9ded02e8c98f",
  },
  {
    song: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    reason:
      "Justin Timberlake's catchy tune is all about spreading joy and positivity, just like Virgo's loving and positive vibes today. It's a perfect song to get creative ideas flowing.",
    img: "https://i.scdn.co/image/ab67616d0000b273d965d29d7dcf46ade5a8a7e4",
    externalUrl: "https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8f4eee79e9574c8db62ebbdbbb5f14d6f9ed5fba?cid=932f4b9da1b443dfb37c9ded02e8c98f",
  },
  {
    song: "Brave",
    artist: "Sara Bareilles",
    reason:
      "Sara Bareilles' 'Brave' encourages stepping out of your comfort zone and embracing creativity, which aligns with Virgo's urge to start an artistic project. It's an empowering song for taking risks.",
    img: "https://i.scdn.co/image/ab67616d0000b273022b4010e20659300f42c375",
    externalUrl: "https://open.spotify.com/track/6Uy6K3KdmUdAfelUp0SeXn",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a53f99868dbf34053d3377a43bf1383efa629ad6?cid=932f4b9da1b443dfb37c9ded02e8c98f",
  },
];

const { tracks } = defineProps<Props>();

const activeIndex = ref(0);

const updateActiveIndex = (event: number) => {
  activeIndex.value = event;
};
</script>

<template>
  <PrimeCarousel
    :value="tracks"
    class="w-full max-w-[600px] lg:max-w-[1200px] mx-auto my-6"
    :responsiveOptions="responsiveOptions"
    :circular="true"
    v-on:update:page="updateActiveIndex($event)"
    :showIndicators="true"
  >
    <template #item="slotProps">
      <StarsignTrack
        :track="slotProps.data"
        :activeIndex="activeIndex"
        :index="slotProps.index"
        @click="updateActiveIndex(slotProps.index)"
      />
    </template>
  </PrimeCarousel>
</template>
