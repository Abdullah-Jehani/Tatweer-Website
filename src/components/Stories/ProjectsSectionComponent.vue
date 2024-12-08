<template>
  <div class="grid grid-cols-12 w-full text-white place-content-center">
    <div class="col-start-1 md:col-span-6 col-span-full">
      <p class="font-light mb-1">Projects</p>
      <h1 class="text-2xl xs:text-xl font-semibold mb-14">
        Empowering Libya’s Next Generation of Innovators
      </h1>
      <div class="flex flex-col text-2xl leading-normal">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="flex items-center gap-2 pb-8 cursor-pointer"
          @click="selectProject(index)"
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
      class="md:col-start-9 col-start-1 col-span-full place-content-start mt-28 flex md:flex-col flex-col-reverse"
    >
      <p
        class="font-extralight leading-relaxed mb-4 transition-opacity duration-300"
      >
        {{ values[hoveredIndex]?.description || values[0].description }}
      </p>
      <div class="mb-8">
        <router-link
          :to="{
            name: 'ProjectsView',
            params: { projectName: values[hoveredIndex].project },
          }"
        >
          <ButtonComponent>Read More</ButtonComponent>
        </router-link>
      </div>

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

<script setup>
import { ref } from "vue";
import ButtonComponent from "../../components/main/ButtonComponent.vue";

const hoveredIndex = ref(0);

const values = [
  {
    name: "Enjazi",
    description:
      "In 2017, Tatweer Research organized Enjazi, a competition for entrepreneurs, in collaborate with the MIT Enterprise Forum Pan Arab. After launching a call for applications with hundreds of startups joining from across Libya, Enjazi began as startups compeited over the course of three stages in three different cities. Tatweer Research held a launch ceremony for Enjazi on 8 April 2017, at its headquarters in Benghazi, followed by another ceremony in Tripoli on April 12, then another one on April 16 of the same year.",
    image: "/images/Enjazi.png",
    project: "Enjazi",
  },
  {
    name: "Tatweer Entrepruenuer Campus (TEC)",
    description: "Approaching challenges with optimism and resilience.",
    image: "/images/Positivity.png",
    project: "Enjazi",
  },
  {
    name: "TEC Talk",
    description: "Prioritizing forward-thinking solutions for Libya's future.",
    image: "/images/Innovation.png",
    project: "Tatweer Entrepruenuer Campus (TEC)",
  },
  {
    name: "TEC Camp",
    description: "Embracing new ideas and diverse perspectives.",
    image: "/images/OpenMindedness.png",
    project: "Enjazi",
  },
  {
    name: "TEC Crash",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "Benghazi Hackathon",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "Bedaya",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "Impact Fund",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "AgriTEC",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "TEC+ Business Accelerator",
    description: "Developing the skills and talents of Libya’s people.",
    project: "Enjazi",
    image: "/images/InvestmentInHumanCapital.png",
  },
  {
    name: "Public-Private Dialogues",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "Deraya",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
  {
    name: "Al-Mreisa Free Zone",
    description: "Developing the skills and talents of Libya’s people.",
    image: "/images/InvestmentInHumanCapital.png",
    project: "Enjazi",
  },
];

function selectProject(index) {
  hoveredIndex.value = index;
}
</script>
