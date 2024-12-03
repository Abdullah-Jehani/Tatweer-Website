<template>
  <div
    :style="{ backgroundColor: color }"
    class="md:p-6 p-2 text-white h-auto rounded-2xl w-full md:w-2/3"
  >
    <div>
      <h1 class="md:text-4xl text-2xl font-semibold">1</h1>
      <p class="md:text-lg text-sm font-light mt-2">
        {{ objectiveDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  objectiveDescription: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
