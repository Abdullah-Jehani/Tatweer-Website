<template>
  <div
    ref="statCard"
    class="relative mt-8 md:mt-0 flex md:flex-row h-screen md:h-auto flex-col justify-center items-center gap-y-8 md:gap-x-40 text-white w-full"
  >
    <span
      class="absolute inset-0 hidden md:flex justify-center items-center text-[128px] md:text-[173px] font-semibold text-white opacity-5 select-none"
      style="z-index: 0"
      aria-hidden="true"
    >
      Think Tomorrow
    </span>
    <div
      v-for="(stat, index) in statsWithDisplay"
      :key="index"
      class="relative flex flex-col items-center justify-center z-10 mt-8"
    >
      <h2>
        <span id="num" class="text-[48px] md:text-[64px] font-extrabold">
          {{ stat.displayValue }}+
        </span>
      </h2>
      <h3 class="font-light text-center">{{ stat.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  stats: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const duration = 1200;

const statsWithDisplay = ref(
  props.stats.map((stat) => ({
    ...stat,
    isText: isNaN(Number(stat.value)),
    displayValue: isNaN(Number(stat.value)) ? stat.value : 0,
  }))
);

const statCard = ref(null);

const animateValue = (start, end, duration, stat) => {
  if (stat.isText) return;

  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    stat.displayValue = Math.floor(progress * (end - start) + start);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const startAnimation = () => {
  statsWithDisplay.value.forEach((stat) => {
    if (!stat.isText) {
      animateValue(0, Number(stat.value), duration, stat);
    }
  });
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation();
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
});

onMounted(() => {
  observer.observe(statCard.value);
});
</script>

<style scoped>
.relative {
  overflow: hidden;
}
</style>
