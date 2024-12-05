<!-- components/Home/StoryComponent.vue -->
<template>
  <div class="relative group overflow-hidden rounded-lg">
    <img
      :src="image"
      :alt="title"
      class="w-full h-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-110 group-hover:blur-md"
    />
    <h2
      class="absolute top-[67px] left-6 text-white md:text-2xl text-xl font-semibold"
    >
      {{ title }}
    </h2>
    <div
      class="absolute top-[25%] inset-0 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] text-white px-6"
    >
      <p
        class="font-light transform translate-x-full text-sm md:text-base md:leading-loose leading-snug group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
      >
        {{ description }}
      </p>
      <a
        :href="link"
        class="absolute bottom-14 left-6 text-lg font-semibold text-white flex items-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
      >
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, default: "#" },
});
</script>

<style scoped></style>
