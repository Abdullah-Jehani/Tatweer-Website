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
</template>
<script setup>
import HeroSectionComponent from "../../components/Home/HeroSectionComponent.vue";
import FocusSectionComponent from "../../components/Home/FocusSectionComponent.vue";
import QuoteSectionComponent from "../../components/Home/QuoteSectionComponent.vue";
</script>
