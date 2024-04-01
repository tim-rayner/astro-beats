<script setup lang="ts">
/**
 * @todo This layout needs to be styled so that it stands out
 * @todo this layout also needs a navbar
 * @todo this layout needs a footer
 */

function toggleTheme() {
  if (document.body.classList.contains("dark"))
    document.body.classList.remove("dark");
  else document.body.classList.add("dark");
}
</script>

<template>
  <div class="relative">
    <div
      class="relative flex flex-col items-center justify-center bg-white dark:bg-black transition-bg"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div class="jumbo absolute -inset-[10px] opacity-30"></div>
      </div>
      <div class="content z-50">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

@keyframes jumbo {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.jumbo {
  --stripes: repeating-linear-gradient(
    100deg,
    #fff 0%,
    #fff 7%,
    transparent 10%,
    transparent 12%,
    #fff 16%
  );
  --stripesDark: repeating-linear-gradient(
    100deg,
    #000 0%,
    #000 7%,
    transparent 10%,
    transparent 12%,
    #000 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;

  filter: blur(10px) invert(100%);

  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);

  pointer-events: none;
}

.jumbo::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: jumbo 60s linear infinite;
  background-attachment: fixed;
  mix-blend-mode: difference;
}
</style>
