<template>
  <div class="grid grid-cols-12 w-full relative">
    <div
      class="col-start-1 col-span-full md:col-span-5 place-content-center md:pl-[120px] px-8 md:px-0"
    >
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
      class="md:col-start-9 col-start-1 col-span-full p-[3px] bg-gradient-to-r from-greenColor to-secondary rounded-lg z-0 relative xs:hidden"
    >
      <div
        class="bg-main w-full h-full rounded-lg grid grid-cols-12 text-white"
      ></div>
    </div>

    <!-- Image Section -->
    <img
      src="../../../public/images/SocialResponsibility.png"
      alt="Image"
      class="absolute md:col-start-8 col-start-1 top-2/3 md:top-1/2 translate-y-1/3 md:-translate-y-1/2 z-10 xs:mt-8 mt-2 md:mt-0"
    />
  </div>
</template>

<script setup>
import ButtonComponent from "../main/ButtonComponent.vue";
</script>
