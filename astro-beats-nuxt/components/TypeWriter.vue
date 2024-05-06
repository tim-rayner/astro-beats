<script setup lang="ts">
interface Props {
  text: string;
}

const { text } = defineProps<Props>();

const typeValue = ref("");

const typeEffect = () => {
  if (typeValue.value.length < text.length) {
    typeValue.value += text.charAt(typeValue.value.length);
    // Generate a random delay between 30 and 200 milliseconds
    const delay = Math.random() * (125 - 30) + 30;
    setTimeout(typeEffect, delay);
  }
};

onMounted(() => {
  typeEffect();
});
typeEffect();
</script>

<template>
  <div>
    <p class="typingEffect">
      {{ typeValue }}
    </p>
  </div>
</template>

<style scoped>
.code {
  background-color: #202129;
  border-radius: 4px;
  padding: 20px;
  height: 70px;
  color: white;
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 350px;
}

.typingEffect {
  padding-right: 5px;
  word-wrap: inherit;
}
</style>
