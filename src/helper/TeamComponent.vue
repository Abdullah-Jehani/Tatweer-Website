<template>
  <div
    class="h-screen w-full px-14 mt-11 flex flex-col justify-center items-center"
  >
    <!-- Circle Container -->
    <div
      class="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center"
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
    <div class="mt-6 text-white text-center">
      <h1 class="text-lg font-semibold mb-2">Khalid Almufti</h1>
      <p class="font-extralight mb-14">Founder & CEO</p>
      <p class="font-extralight mb-2">Khalid@Tatweerresearch.org</p>
      <div class="flex justify-center items-center space-x-4">
        <img src="../../public/icons/MemberFacebook.svg" alt="Facebook" />
        <img src="../../public/icons/MemberInstagram.svg" alt="Instagram" />
        <img src="../../public/icons/snapchat.svg" alt="Snapchat" />
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
