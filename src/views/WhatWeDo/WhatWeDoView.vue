<template>
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12 md:mb-72 mb-36">
    <AboutSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full grid grid-cols-12 md:h-screen md:mb-72 mb-36">
    <ObjectivesSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div
    class="w-full grid grid-cols-12 md:h-screen h-[65vh] md:mb-72 mb-0 md:mt-0"
  >
    <VisionSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full h-screen px-8 md:px-[120px] grid grid-cols-12">
    <ValuesSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full h-screen grid grid-cols-12 mb-72">
    <SocialResponsibilitySectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="px-8 md:px-[120px] grid grid-cols-12 gap-4">
    <OurTeamSectionComponent
      class="col-start-1 col-span-full"
      :members="members"
    />
  </div>
</template>

<script setup>
import AboutSectionComponent from "../../components/WhatWeDo/AboutSectionComponent.vue";
import ObjectivesSectionComponent from "../../components/WhatWeDo/ObjectivesSectionComponent.vue";
import VisionSectionComponent from "../../components/WhatWeDo/VisionSectionComponent.vue";
import ValuesSectionComponent from "../../components/WhatWeDo/ValuesSectionComponent.vue";
import SocialResponsibilitySectionComponent from "../../components/WhatWeDo/SocialResponsibilitySectionComponent.vue";
import OurTeamSectionComponent from "../../components/WhatWeDo/OurTeamSectionComponent.vue";

// Define the members array
const members = [
  {
    gradientStart: "#027EB5",
    gradientEnd: "#00A563",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#FF5733",
    gradientEnd: "#FFC300",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#027EB5",
    gradientEnd: "#00A563",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#900C3F",
    gradientEnd: "#581845",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#FF5733",
    gradientEnd: "#DAF7A6",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#FF5733",
    gradientEnd: "#FFC300",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#C70039",
    gradientEnd: "#900C3F",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#900C3F",
    gradientEnd: "#581845",
    memberImage: "/images/Member.png",
  },
  {
    gradientStart: "#FF5733",
    gradientEnd: "#DAF7A6",
    memberImage: "/images/Member.png",
  },
];
</script>
