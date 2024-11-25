<!-- views/HomeView.vue -->
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
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12 mt-0 md:mt-72">
    <StoriesSectionComponent
      :stories="stories"
      class="col-start-1 col-span-full"
    />
  </div>
  <div
    class="w-full md:h-screen h-[50vh] px-8 md:px-[0px] grid grid-cols-12 mt-0 md:mt-72"
  >
    <LibyaSectionComponent class="col-start-1 col-span-full" />
  </div>
  <div class="w-full px-8 md:px-[120px] grid grid-cols-12 mt-0 md:mt-72">
    <PartnersSectionComponent class="col-start-1 col-span-full" />
  </div>
</template>

<script setup>
import HeroSectionComponent from "../../components/Home/HeroSectionComponent.vue";
import FocusSectionComponent from "../../components/Home/FocusSectionComponent.vue";
import QuoteSectionComponent from "../../components/Home/QuoteSectionComponent.vue";
import StatsSectionComponent from "../../components/Home/StatsSectionComponent.vue";
import LibyaSectionComponent from "../../components/Home/LibyaSectionComponent.vue";
import StoriesSectionComponent from "../../components/Home/StoriesSectionComponent.vue";
import PartnersSectionComponent from "../../components/Home/PartnersSectionComponent.vue";

const stats = [
  { title: "Startups Created", value: 200 },
  { title: "Jobs Created", value: 1000 },
  { title: "Sectors Covered", value: 14 },
  { title: "Grants awarded", value: "2M" },
];

const stories = [
  {
    image: "/images/story1.png",
    title: "Economic Empowerment",
    description:
      "Tatweer Research drives economic empowerment by supporting entrepreneurship through programs like Enjazi and the Tatweer Entrepreneurship Campus (TEC). These initiatives provide funding, mentorship, and training, fostering startups and creating job opportunities, while promoting Libya's economic diversification through TEC+ and the Impact Fund.",
    link: "#",
  },
  {
    image: "/images/story2.png",
    title: "Capacity Building",
    description:
      "Tatweer enhances human capital with training programs such as the Tatweer Graduate Program, Coding for Children, and Qader. These initiatives equip Libyan youth and professionals with skills to succeed in the workforce, contributing to national growth and boosting sectors like education and public service.",
    link: "#",
  },
  {
    image: "/images/story3.png",
    title: "Digital Transformation",
    description:
      "Tatweer leads Libya’s digital transformation by developing solutions for public and private sectors. Projects include modernizing the Civil Registry Authority’s infrastructure, payroll systems for the Ministry of Finance, and the Wafed labor recruitment platform, helping transition Libya toward a modern, tech-driven economy.",
    link: "#",
  },
];
</script>
