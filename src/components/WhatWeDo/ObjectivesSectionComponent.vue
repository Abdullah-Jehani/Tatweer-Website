<template>
  <div class="w-full h-screen relative overflow-hidden">
    <!-- Hero Section: "Objectives" Title -->
    <h1
      class="flex justify-center items-center text-7xl md:text-8xl font-bold bg-gradient-to-r from-secondary to-greenColor text-transparent bg-clip-text absolute z-0 w-full top-1/2 left-0 pb-2"
    >
      {{ title }}
    </h1>

    <!-- Scrollable Cards Section -->
    <div
      ref="scrollableContainer"
      class="h-full w-full overflow-y-auto snap-y snap-mandatory no-scrollbar relative z-10"
      @wheel="onWheel"
    >
      <!-- Objective Cards Grid -->
      <div class="grid grid-cols-12 gap-12 px-4 relative mt-36">
        <ObjectiveCardComponent
          v-for="(objective, index) in objectives"
          :key="index"
          :objective-description="objective.objectiveDescription"
          :color="objective.color"
          :class="getTailwindPosition(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ObjectiveCardComponent from "../../helper/ObjectiveCardComponent.vue";

// Objectives array
const objectives = [
  {
    objectiveDescription:
      "Supporting public sectors and institutions through digital transformation programs.",
    color: "#027EB5", // Example color (Tomato)
  },
  {
    objectiveDescription:
      "To establish leading global partnerships in the field of research and development.",
    color: "#00A563", // Example color (LimeGreen)
  },
  {
    objectiveDescription: "Develop leading local technical talents.",
    color: "#9747FF", // Example color (DodgerBlue)
  },
  {
    objectiveDescription: "Encouraging entrepreneurship.",
    color: "#1C1C4B", // Example color (DeepPink)
  },
  {
    objectiveDescription:
      "Supporting, developing and advancing Libyan companies operating in the private sector.",
    color: "#F5EE9E", // Example color (OrangeRed)
  },
  {
    objectiveDescription: "To Create investment opportunities.",
    color: "#00002A", // Example color (MediumSeaGreen)
  },
  {
    objectiveDescription:
      "To make Tatweer Research one of the highly effective and creative institutions.",
    color: "#343434", // Example color (BlueViolet)
  },
  {
    objectiveDescription:
      "To contribute to the diversification of the Libyan economy by empowering the private sector in the field of science and information technology.",
    color: "#343434", // Example color (DeepSkyBlue)
  },
];

const title = "Objectives";
const scrollableContainer = ref(null);

onMounted(() => {
  document.body.style.overflowY = "auto";
});

// Handle wheel scrolling
const onWheel = (event) => {
  if (scrollableContainer.value) {
    const container = scrollableContainer.value;
    const containerHeight = container.clientHeight;
    const currentScrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;

    // Detect scrolling down
    if (event.deltaY > 0) {
      // Check if we are at the bottom of the current section
      if (currentScrollTop + containerHeight >= scrollHeight - 10) {
        // Scroll to the next section (move to next)
        scrollToNextSection();
      }
    } else if (event.deltaY < 0) {
      // Detect scrolling up and check if we are at the top of the current section
      if (currentScrollTop <= 10) {
        // Reset the section by scrolling back to the top of the current section
        resetCurrentSection();
      }
    }
  }
};
// Reset the section by scrolling to the top of the current section
const resetCurrentSection = () => {
  scrollableContainer.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scroll to the next section smoothly
const scrollToNextSection = () => {
  // Find the next section by calculating the next top position based on scroll height
  const nextSectionTop =
    scrollableContainer.value.scrollTop + window.innerHeight;
  scrollableContainer.value.scrollTo({
    top: nextSectionTop,
    behavior: "smooth",
  });
};

// Scroll to the previous section smoothly
const scrollToPreviousSection = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Generate Tailwind classes for specific positions
const getTailwindPosition = (index) => {
  // Define the specific column and row positions based on the card index
  const positions = [
    { col: 9 }, // First card
    { col: 5 }, // Second card
    { col: 8 }, // Third card
    { col: 6 }, // Fourth card
    { col: 7 }, // Fifth card
    { col: 1 }, // Sixth card
    { col: 2 }, // Seventh card
    { col: 4 }, // Eighth card
  ];

  const position = positions[index];
  return `col-span-4 col-start-${position.col} `;
};
</script>

<style scoped>
/* Hide the scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Temporarily remove scrollbar hiding for testing */
.no-scrollbar {
  -ms-overflow-style: auto; /* Restore scrollbar style for testing */
  scrollbar-width: auto; /* Restore scrollbar style for testing */
}
</style>
