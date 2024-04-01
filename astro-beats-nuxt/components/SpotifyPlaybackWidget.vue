<script setup lang="ts">
/**
 * @todo Complete this component to render a Spotify playback widget
 */
type Props = {
  src: string;
};

const { src } = defineProps<Props>();
</script>

<template>
  <iframe
    width="100%"
    height="152"
    title="Spotify Embed: My Path to Spotify: Women in Engineering "
    style="border-radius: 12px"
    frameborder="0"
    allowfullscreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    :src="src"
  ></iframe>
</template>
