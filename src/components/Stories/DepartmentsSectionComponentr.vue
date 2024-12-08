<template>
  <div class="text-white">
    <h1 class="text-2xl font-semibold mb-9">Other Departments</h1>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-12">
      <div
        v-for="(story, index) in stories"
        :key="index"
        :class="{
          'col-span-full': true,
          'sm:col-span-6': true,
          [`sm:col-start-${index === 0 ? 1 : 7}`]: true,
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
