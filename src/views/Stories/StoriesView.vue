<template>
  <div
    class="grid grid-cols-12 w-full px-8 md:px-[120px] mb-36"
    :style="{ height: 'calc(100vh - 107px)' }"
  >
    <HeroSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div
    class="grid grid-cols-12 w-full px-8 md:pr-[120px] md:px-0 h-screen mb-36"
  >
    <QuoteSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="grid grid-cols-12 w-full px-8 md:px-[120px] h-screen mb-36">
    <ProjectsSectionComponent class="col-start-1 col-span-full" />
  </div>
</template>

<script setup>
import HeroSectionComponent from "../../components/Stories/HeroSectionComponent.vue";
import QuoteSectionComponent from "../../components/Stories/QuoteSectionComponent.vue";
import ProjectsSectionComponent from "../../components/Stories/ProjectsSectionComponent.vue";
</script>
