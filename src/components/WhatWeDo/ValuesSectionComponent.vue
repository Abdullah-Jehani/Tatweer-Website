<template>
  <div
    class="grid grid-cols-12 w-full text-white md:place-content-center place-content-start"
  >
    <div class="col-start-1 md:col-span-6 col-span-full">
      <h1 class="text-4xl font-semibold mb-16">
        Values That Drive Our Mission
      </h1>
      <div class="flex flex-col text-2xl leading-normal">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="flex items-center gap-2 pb-8 cursor-pointer"
          @mouseover="hoverValue(index)"
          @mouseleave="clearHover"
        >
          <img
            v-if="index === hoveredIndex"
            src="/icons/Tatweer.svg"
            alt="Tatweer Icon"
            class="w-6 h-6"
          />
          <h1
            :class="{
              'font-bold text-white transition-all duration-300':
                index === hoveredIndex,
              'font-semibold text-greyColor transition-all duration-300':
                index !== hoveredIndex,
            }"
          >
            {{ value.name }}
          </h1>
        </div>
      </div>
    </div>
    <div
      class="md:col-start-9 col-start-1 col-span-full place-content-center flex md:flex-col flex-col-reverse"
    >
      <p
        class="font-light leading-relaxed mb-6 transition-opacity duration-300"
      >
        {{ values[hoveredIndex]?.description || values[0].description }}
      </p>
      <div class="w-full overflow-hidden">
        <transition
          name="slide"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <img
            v-if="values[hoveredIndex]"
            :src="values[hoveredIndex].image"
            :alt="values[hoveredIndex].name"
            :key="hoveredIndex"
            class="w-full h-auto mb-4 md:mb-0"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredIndex: 0,
      lastHoveredIndex: 0,
      values: [
        {
          name: "Harmony",
          description: "Fostering unity and collaboration in every initiative.",
          image: "/images/Harmony.png",
        },
        {
          name: "Positivity",
          description: "Approaching challenges with optimism and resilience.",
          image: "/images/Positivity.png",
        },
        {
          name: "Innovation",
          description:
            "Prioritizing forward-thinking solutions for Libya's future.",
          image: "/images/Innovation.png",
        },
        {
          name: "Open-Mindedness",
          description: "Embracing new ideas and diverse perspectives.",
          image: "/images/OpenMindedness.png",
        },
        {
          name: "Investment in Human Capital",
          description: "Developing the skills and talents of Libya’s people.",
          image: "/images/InvestmentInHumanCapital.png",
        },
      ],
    };
  },
  methods: {
    hoverValue(index) {
      this.lastHoveredIndex = this.hoveredIndex;
      this.hoveredIndex = index;
    },
    clearHover() {
      this.hoveredIndex = 0;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}
</style>
