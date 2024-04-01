<script setup lang="ts">
type Props = {
  icon: string;
};

const { icon } = defineProps<Props>();
</script>

<template>
  <div class="card cursor-pointer m-3 shadow-lg">
    <p class="icon text-5xl">{{ icon }}</p>
    <div class="card__content flex">
      <slot />
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .icon {
  fill: #333;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover {
  --tw-shadow-color: #49446f;
  --tw-shadow: var(--tw-shadow-colored);
}

.card__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-65deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff8f;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover .card__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

.card:hover .icon {
  scale: 0;
  transform: rotate(-45deg);
}

.card.aries {
  background: linear-gradient(-45deg, #ff5353 0%, #5a0f0f80 100%);
}

.card.taurus {
  background: linear-gradient(-45deg, #80c181 0%, #437e44 100%);
}

.card.gemini {
  background: linear-gradient(-45deg, #ffe152 0%, #ccb43b 100%);
}

.card.cancer {
  background: linear-gradient(-45deg, #c8c8c8 0%, #918e8e 100%);
}

.card.leo {
  background: linear-gradient(-45deg, #ffa35a 0%, #bd773f 100%);
}

.card.virgo {
  background: linear-gradient(-45deg, #af8366 0%, #926547 100%);
}

.card.libra {
  background: linear-gradient(-45deg, #fdbdbd 0%, #b37474 100%);
}

.card.scorpio {
  background: linear-gradient(-45deg, #3a3838 0%, #000000 100%);
}

.card.sagittarius {
  background: linear-gradient(-45deg, #c0adef 0%, #8d7bb9 100%);
}

.card.capricorn {
  background: linear-gradient(-45deg, #666b67 0%, #464946 100%);
}

.card.aquarius {
  background: linear-gradient(-45deg, #80bfea 0%, #588caf 100%);
}

.card.pisces {
  background: linear-gradient(-45deg, #a1e2c4 0%, #6ca78b 100%);
}
</style>
