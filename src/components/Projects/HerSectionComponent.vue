<template>
  <div
    class="text-white grid grid-cols-12 w-full place-content-center place-items-center"
  >
    <div class="col-start-1 col-span-5">
      <img :src="`/logo/${logo}`" alt="" />
      <p class="font-extralight leading-relaxed mt-3">
        {{ description }}
      </p>
    </div>
    <div class="col-start-8 col-span-full">
      <img :src="`/images/${image}`" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  logo: String,
  description: String,
});
</script>
