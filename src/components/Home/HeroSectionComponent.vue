<template>
  <div class="relative h-screen overflow-hidden w-full">
    <div class="w-full md:px-[120px] px-8 grid grid-cols-12 relative z-10">
      <div class="col-start-1 col-span-12 bg-opacity-50 text-white">
        <navBarComponent />
      </div>
      <div
        class="col-start-1 md:col-span-6 col-span-full h-screen flex flex-col justify-center text-white"
      >
        <h1 class="text-4xl md:text-5xl font-bold">
          Fueling Libya’s economy, beyond oil!
        </h1>
        <p class="font-light md:mt-4 mt-2 text-sm md:text-base">
          Driving the transition to a knowledge-based economy by fostering
          entrepreneurship, digital transformation, and sustainable growth.
        </p>
        <ButtonComponent class="md:mt-4 mt-2"
          >Explore Our Projects</ButtonComponent
        >
      </div>
    </div>

    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="../../../public/videos/Tatweer.mp4"
      loop
      muted
      autoplay
    ></video>
  </div>
</template>

<script setup>
import navBarComponent from "../main/navBarComponent.vue";
import ButtonComponent from "../main/ButtonComponent.vue";
</script>
