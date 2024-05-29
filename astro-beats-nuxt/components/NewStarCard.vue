<script setup lang="ts">
import ARIES from "@/assets/png/aries.png";
import TAURUS from "@/assets/png/taurus.png";
import GEMINI from "@/assets/png/gemini.png";
import CANCER from "@/assets/png/cancer.png";
import LEO from "@/assets/png/leo.png";
import VIRGO from "@/assets/png/virgo.png";
import LIBRA from "@/assets/png/libra.png";
import SCORPIO from "@/assets/png/scorpio.png";
import SAGITTARIUS from "@/assets/png/sagittarius.png";
import CAPRICORN from "@/assets/png/capricorn.png";
import AQUARIUS from "@/assets/png/aquarius.png";
import PISCES from "@/assets/png/pisces.png";

type Props = {
  name: string;
  description: string;
};

const { name } = defineProps<Props>();

const starSigns = [
  {
    name: "aries",
    img: ARIES,
  },
  {
    name: "taurus",
    img: TAURUS,
  },
  {
    name: "gemini",
    img: GEMINI,
  },
  {
    name: "cancer",
    img: CANCER,
  },
  {
    name: "leo",
    img: LEO,
  },
  {
    name: "virgo",
    img: VIRGO,
  },
  {
    name: "libra",
    img: LIBRA,
  },
  {
    name: "scorpio",
    img: SCORPIO,
  },
  {
    name: "sagittarius",
    img: SAGITTARIUS,
  },
  {
    name: "capricorn",
    img: CAPRICORN,
  },
  {
    name: "aquarius",
    img: AQUARIUS,
  },
  {
    name: "pisces",
    img: PISCES,
  },
];

const starSign = computed(() =>
  starSigns.find((sign) => sign.name === name.toLowerCase())
);
</script>

<template>
  <div
    class="card relative transition duration-300 ease-in-out cursor-pointer border border-white bg-[#B4A2FCBF] hover:bg-pink hover:shadow-lg overflow-x-hidden overflow-hidden"
    v-if="starSign"
    :class="name.toLowerCase()"
  >
    <div class="flex color-[#0000] h-full justify-center flex-col z-20">
      <div class="rotate gradient z-0 absolute"></div>

      <div class="card__content z-30">
        <h3 class="text-center !text-white text-4xl xl:text-5xl font-semibold">
          {{ name }}
        </h3>
        <img
          :src="starSign.img"
          alt="star sign"
          class="icon h-24 w-24 mx-auto my-6"
        />
        <p class="text-center text-sm !text-white">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/** GRADIENT */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: 100%;
  height: 100%;
  filter: blur(calc(var(--size) / 4));

  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 90% 80% 80% 90%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}

.card.aries .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(235, 67, 55, 0.85),
    rgb(91, 55, 235)
  );
}

.card.taurus .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(0, 200, 250, 0.85),
    rgb(140, 255, 140)
  );
}

.card.gemini .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(255, 187, 0, 0.85),
    rgb(255, 251, 0)
  );
}

.card.cancer .gradient {
  background: linear-gradient(-45deg, #c8c8c8 0%, #918e8e 100%);
  background-image: linear-gradient(
    -45deg,
    rgba(168, 199, 182, 0.85),
    rgb(49, 34, 88)
  );
}

.card.leo .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(255, 150, 51, 0.85),
    rgb(255, 238, 0)
  );
}

.card.virgo .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(86, 45, 6, 0.85),
    rgb(221, 168, 70)
  );
}

.card.libra .gradient {
  background-image: linear-gradient(-45deg, #fdbdbd, #b37474);
}

.card.scorpio .gradient {
  background-image: linear-gradient(
    -45deg,
    rgba(8, 8, 8, 0.85),
    rgb(154, 141, 116)
  );
}

.card.sagittarius .gradient {
  background: linear-gradient(-45deg, #c0adef 0%, #8d7bb9 100%);
}

.card.capricorn .gradient {
  background: linear-gradient(-45deg, #666b67 0%, #464946 100%);
}

.card.aquarius .gradient {
  background: linear-gradient(-45deg, #80bfea 0%, #588caf 100%);
}

.card.pisces .gradient {
  background: linear-gradient(-45deg, #a1e2c4 0%, #6ca78b 100%);
}
</style>
