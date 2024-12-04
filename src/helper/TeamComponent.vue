<template>
  <div
    class="h-fit md:h-screen mb-12 md:mb-0 w-full flex items-center justify-center"
  >
    <!-- Hoverable Component -->
    <div
      class="group relative w-full md:h-3/4 h-1/2 rounded-lg transition-all duration-300 flex flex-col items-center"
    >
      <!-- Background and Border on Hover -->
      <div
        class="absolute inset-0 group-hover:border-[1px] group-hover:bg-cardColor"
        :style="{
          borderImageSource: 'linear-gradient(to right, #027EB5, #00A563)',
          borderImageSlice: 1,
        }"
      ></div>

      <!-- Circle Container -->
      <div
        class="relative w-40 h-40 mt-12 rounded-full overflow-hidden flex items-center justify-center z-10"
      >
        <!-- Gradient Background -->
        <div
          :style="{
            background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
          }"
          class="w-full h-full absolute top-0 left-0"
        ></div>

        <!-- Watermark Logo (visible above gradient) -->
        <img
          src="../../public/icons/WaterMark.svg"
          alt="Watermark"
          class="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-10"
        />

        <!-- Member Image -->
        <img
          :src="memberImage"
          alt="Member"
          class="rounded-full z-20 w-full h-full object-cover"
        />
      </div>

      <!-- Text and Icons Section -->
      <div class="my-6 text-white text-center z-10 flex flex-col items-center">
        <h1 class="text-lg font-semibold mb-2">Khalid Almufti</h1>
        <p class="font-extralight mb-14">Founder & CEO</p>
        <p class="font-extralight mb-4">Khalid@Tatweerresearch.org</p>
        <div class="flex justify-center items-center space-x-4">
          <img src="../../public/icons/MemberFacebook.svg" alt="Facebook" />
          <img src="../../public/icons/MemberInstagram.svg" alt="Instagram" />
          <img src="../../public/icons/snapchat.svg" alt="Snapchat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  gradientStart: String,
  gradientEnd: String,
  memberImage: String,
});
</script>
