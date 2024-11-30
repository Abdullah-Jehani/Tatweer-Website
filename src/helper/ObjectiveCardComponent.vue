<template>
  <div
    :style="{ backgroundColor: color }"
    class="p-6 text-white h-auto rounded-2xl w-2/3"
  >
    <div>
      <h1 class="text-4xl font-semibold">1</h1>
      <p class="text-lg font-light mt-2">
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
