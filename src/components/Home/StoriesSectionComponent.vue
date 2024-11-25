<template>
  <div class="w-full">
    <h1 class="text-5xl font-bold mb-14 text-white">Latest Stories</h1>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-12">
      <div
        v-for="(story, index) in stories"
        :key="index"
        :class="{
          'col-span-full': true,
          'sm:col-span-4': true,
          [`sm:col-start-${(index % 3) * 4 + 1}`]: true,
        }"
      >
        <StoryComponent
          :image="story.image"
          :title="story.title"
          :description="story.description"
          :link="story.link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StoryComponent from "../../helper/StoryComponent.vue";

defineProps({
  stories: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
