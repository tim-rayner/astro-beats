<script setup lang="ts">
interface Props {
  starSign: string;
  reading: string;
}

const { starSign, reading } = defineProps<Props>();

const router = useRouter();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());
</script>

<template>
  <div class="py-5 text-2xl my-12">
    <h2 class="!text-white text-4xl lg:my-2">{{ starSign }}'s reading</h2>
    <h4 class="text-2xl lg:my-2 pl-1 lg:pl-0 mb-6 lg:mb-8 mt-2">
      for {{ formattedDate }}
    </h4>
    <p class="bg-background lg:w-2/3">"{{ reading }}"</p>
  </div>
</template>
