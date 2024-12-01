<template>
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12">
    <AboutSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full grid grid-cols-12 md:h-screen mb-72">
    <ObjectivesSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full grid grid-cols-12 h-screen mb-72">
    <VisionSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full h-screen px-8 md:px-[120px] grid grid-cols-12">
    <ValuesSectionComponent class="col-start-1 col-span-full" />
  </div>
</template>

<script setup>
import AboutSectionComponent from "../../components/WhatWeDo/AboutSectionComponent.vue";
import ObjectivesSectionComponent from "../../components/WhatWeDo/ObjectivesSectionComponent.vue";
import VisionSectionComponent from "../../components/WhatWeDo/VisionSectionComponent.vue";
import ValuesSectionComponent from "../../components/WhatWeDo/ValuesSectionComponent.vue";
</script>
