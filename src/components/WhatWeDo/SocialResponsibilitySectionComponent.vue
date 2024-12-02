<template>
  <div class="grid grid-cols-12 w-full relative">
    <div class="col-start-1 col-span-5 place-content-center pl-[120px]">
      <h1 class="text-4xl font-semibold leading-tight text-whiteColor mb-4">
        Social Responsibility
      </h1>
      <p class="leading-relaxed text-white font-light mb-4">
        At Tatweer Research, we are steadfastly committed to fulfilling our
        social responsibility to contribute to the betterment of our community.
        Over the years, we have been dedicated to supporting social initiatives
        and non-profit organizations that share our values and strive to create
        a positive impact in our society.
      </p>
      <ButtonComponent>Learn More</ButtonComponent>
    </div>

    <!-- Gradient Border Section -->
    <div
      class="col-start-9 col-span-full p-[4px] bg-gradient-to-r from-greenColor to-secondary rounded-lg z-0 relative"
    >
      <div
        class="bg-main w-full h-full rounded-lg grid grid-cols-12 text-white"
      ></div>
    </div>

    <!-- Image Section -->
    <img
      src="../../../public/images/SocialResponsibility.png"
      alt="Image"
      class="absolute col-start-8 top-1/2 -translate-y-1/2 z-10"
    />
  </div>
</template>

<script setup>
import ButtonComponent from "../main/ButtonComponent.vue";
</script>
