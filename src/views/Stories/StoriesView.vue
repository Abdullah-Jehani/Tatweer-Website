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
  <div class="grid grid-cols-12 w-full px-8 md:px-[120px] mb-36">
    <ProjectsSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="grid grid-cols-12 w-full px-8 md:px-[120px]">
    <DepartmentsSectionComponentr
      :stories="stories"
      class="col-start-1 col-span-full"
    />
  </div>
</template>

<script setup>
import HeroSectionComponent from "../../components/Stories/HeroSectionComponent.vue";
import QuoteSectionComponent from "../../components/Stories/QuoteSectionComponent.vue";
import ProjectsSectionComponent from "../../components/Stories/ProjectsSectionComponent.vue";
import DepartmentsSectionComponentr from "../../components/Stories/DepartmentsSectionComponentr.vue";
const stories = [
  {
    image: "/images/Department1.png",
    title: "Capacity Building",
    description:
      "Tatweer Research drives economic empowerment by supporting entrepreneurship through programs like Enjazi and the Tatweer Entrepreneurship Campus (TEC). These initiatives provide funding, mentorship, and training, fostering startups and creating job opportunities, while promoting Libya's economic diversification through TEC+ and the Impact Fund.",
    link: "#",
  },
  {
    image: "/images/Department2.png",
    title: "Digital Transformation",
    description:
      "Tatweer enhances human capital with training programs such as the Tatweer Graduate Program, Coding for Children, and Qader. These initiatives equip Libyan youth and professionals with skills to succeed in the workforce, contributing to national growth and boosting sectors like education and public service.",
    link: "#",
  },
];
</script>
