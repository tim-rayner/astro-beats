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
    class="card relative transition duration-300 ease-in-out cursor-pointer m-3 bg-[#6af8fd] rounded-full h-72 w-72 xl:h-[450px] xl:w-[450px] mx-auto my-12 hover:bg-[#a6eccf] shadow-spotify-dark shadow-2xl"
    v-if="starSign"
    :class="name.toLowerCase()"
  >
    <div class="flex color-[#0000] h-full justify-center flex-col z-20">
      <div class="gradient z-0 absolute"></div>

      <div class="card__content z-30">
        <h3 class="text-center text-white text-5xl font-semibold">
          {{ name }}
        </h3>
        <img
          :src="starSign.img"
          alt="star sign"
          class="icon h-24 w-24 mx-auto my-6"
        />
        <p class="text-center font-bold">{{ description }}</p>
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
    hsla(4, 82%, 57%, 0.85),
    hsl(252, 82, 57)
  );
}

.card.taurus .gradient {
  background-image: linear-gradient(
    -45deg,
    hsla(192, 100%, 49%, 0.85),
    hsl(120, 100%, 50%)
  );
}

.card.gemini .gradient {
  background-image: linear-gradient(
    -45deg,
    hsla(44, 100%, 50%, 0.85),
    hsl(59, 100%, 50%)
  );
}

.card.cancer .gradient {
  background: linear-gradient(-45deg, #c8c8c8 0%, #918e8e 100%);
  background-image: linear-gradient(
    -45deg,
    hsla(146, 22%, 72%, 0.85),
    hsl(256, 44%, 24%)
  );
}

.card.leo .gradient {
  background-image: linear-gradient(
    -45deg,
    hsla(29, 100%, 60%, 0.85),
    hsl(56, 100%, 50%)
  );
}

.card.virgo .gradient {
  background-image: linear-gradient(
    -45deg,
    hsla(29, 87%, 18%, 0.85),
    hsl(39, 69%, 57%)
  );
}

.card.libra .gradient {
  background-image: linear-gradient(-45deg, #fdbdbd, #b37474);
}

.card.scorpio .gradient {
  background-image: linear-gradient(
    -45deg,
    hsla(0, 0%, 3%, 0.85),
    hsl(39, 16%, 53%)
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

/*===================*/
/* FLOAT
/*===================*/

.card:hover,
.card:focus,
.card:active {
  -webkit-transform: translateY(-9px);
  transform: translateY(-9px);
  /* rotate 20deg */
}

/*===================*/
/* BOB
/*===================*/
@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
