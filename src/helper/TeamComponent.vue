<template>
  <div
    class="h-screen w-full px-14 mt-11 mb-16 flex justify-center items-center"
  >
    <!-- Circle Container -->
    <div class="relative w-[154px] h-[154px] rounded-full overflow-hidden">
      <!-- Gradient Background -->
      <div
        :style="{
          background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
        }"
        class="w-full h-full"
      ></div>

      <!-- Watermark Logo (visible above gradient) -->
      <img
        src="../../public/icons/WaterMark.svg"
        alt="Watermark"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-10"
      />

      <!-- Member Image -->
      <img
        :src="memberImage"
        alt="Member"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-20 w-full h-full object-cover"
      />
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
