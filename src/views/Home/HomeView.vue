<template>
  <div class="w-full">
    <HeroSectionComponent />
  </div>
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12">
    <FocusSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12">
    <QuoteSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full px-8 md:px-[0px] grid grid-cols-12">
    <StatsSectionComponent :stats="stats" class="col-start-1 col-span-full" />
  </div>
  <div class="w-full px-8 md:px-[0px] grid grid-cols-12">
    <LibyaSectionComponent class="col-start-1 col-span-full" />
  </div>
</template>

<script setup>
import HeroSectionComponent from "../../components/Home/HeroSectionComponent.vue";
import FocusSectionComponent from "../../components/Home/FocusSectionComponent.vue";
import QuoteSectionComponent from "../../components/Home/QuoteSectionComponent.vue";
import StatsSectionComponent from "../../components/Home/StatsSectionComponent.vue";
import LibyaSectionComponent from "../../components/Home/LibyaSectionComponent.vue";

const stats = [
  { title: "Startups Created", value: 200 },
  { title: "Jobs Created", value: 1000 },
  { title: "Sectors Covered", value: 14 },
  { title: "Grants awarded", value: "2M" },
];
</script>
