<template>
  <div
    class="grid grid-cols-12 w-full pl-8 md:pl-[120px] mb-36"
    :style="{ height: 'calc(100vh - 107px)' }"
  >
    <HerSectionComponent
      image="HeroEnjazi.png"
      logo="Enjazi.svg"
      :description="EnjaziDescription"
      class="col-start-1 col-span-full"
    />
  </div>
</template>

<script setup>
import HerSectionComponent from "../../components/Projects/HerSectionComponent.vue";

const EnjaziDescription =
  "In 2017, Tatweer Research organized Enjazi, a competition for entrepreneurs, in collaborate with the MIT Enterprise Forum Pan Arab. After launching a call for applications with hundreds of startups joining from across Libya, Enjazi began as startups compeited over the course of three stages in three different cities. Tatweer Research held a launch ceremony for Enjazi on 8 April 2017, at its headquarters in Benghazi, followed by another ceremony in Tripoli on April 12, then another one on April 16 of the same year.";
</script>
