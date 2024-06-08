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

const router = useRouter();

const step = ref(0);

const date = ref(new Date());
const starSign = ref<any>({});

const starSigns = [
  {
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    name: "Aquarius",
  },
  {
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    name: "Pisces",
    img: PISCES,
  },
  {
    start: { month: 3, day: 21 },
    end: { month: 4, day: 19 },
    name: "Aries",
    img: ARIES,
  },
  {
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    name: "Taurus",
    img: TAURUS,
  },
  {
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    name: "Gemini",
    img: GEMINI,
  },
  {
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    name: "Cancer",
    img: CANCER,
  },
  {
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    name: "Leo",
    img: LEO,
  },
  {
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    name: "Virgo",
    img: VIRGO,
  },
  {
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    name: "Libra",
    img: LIBRA,
  },
  {
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    name: "Scorpio",
    img: SCORPIO,
  },
  {
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    name: "Sagittarius",
    img: SAGITTARIUS,
  },
  {
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    name: "Capricorn",
    img: CAPRICORN,
  },
];

const setStarSign = () => {
  const month = date.value.getMonth() + 1; // getMonth() returns 0-11
  const day = date.value.getDate();

  starSign.value = starSigns.find(
    (sign) =>
      (month === sign.start.month && day >= sign.start.day) ||
      (month === sign.end.month && day <= sign.end.day)
  );

  return starSign;
};

const onSubmit = () => {
  // Handle form submission here
  setStarSign();
  step.value = 1;
};

const resetForm = () => {
  step.value = 0;
};
</script>

<template>
  <div
    class="pb-12 items-center content-center w-[90%] lg:w-3/4 mx-auto py-12"
    id="starsign-finder"
  >
    <h2 class="text-4xl lg:my-12 mb-3 lg:mb-6 font-bold" id="starsign-list">
      Unsure of your Star Sign?
    </h2>
    <p class="text-lg mb-6">
      Enter your date of birth below, and we'll help you discover your LunaTune
      for the day 🎶
    </p>

    <div class="card bg-primary rounded-lg mx-auto lg:mx-0 p-8 max-w-[800px]">
      <form
        class="flex flex-col space-y-4"
        @submit.prevent="onSubmit"
        v-if="step === 0"
      >
        <label for="dob" class="">Enter your Date of Birth:</label>
        <PrimeCalendar v-model="date" inline showWeek />
        <button type="submit" class="bg-white rounded-md p-2">
          Find my Star Sign
        </button>
      </form>

      <div
        class="flex flex-row cursor-pointer"
        @click="router.push(`/${starSign.name.toLowerCase()}`)"
        v-else
      >
        <div class="flex-col">
          <h3 class="!text-black text-xl font-bold">Your Star Sign is:</h3>
          <p class="text-3xl font-bold">{{ starSign.name }}</p>
        </div>
        <img
          :src="starSign.img"
          alt="star sign"
          class="icon h-12 w-12 mt-3 ml-auto"
        />
      </div>
    </div>

    <Button
      class="block mt-4 px-4 py-2 bg-primary rounded-md mx-auto lg:mx-0 w-full max-w-[800px]"
      v-if="step === 1"
      @click="resetForm"
    >
      Check another sign
    </Button>
  </div>
</template>
