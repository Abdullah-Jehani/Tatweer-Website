<template>
  <div class="w-full h-screen relative overflow-hidden">
    <!-- Hero Section: "Objectives" Title -->
    <h1
      class="flex justify-center items-center md:text-[15rem] text-[8rem] font-bold bg-gradient-to-r from-secondary to-greenColor text-transparent bg-clip-text absolute z-0 w-full h-screen top-0 left-0"
    >
      {{ title }}
    </h1>

    <!-- Scrollable Cards Section -->
    <div
      ref="scrollableContainer"
      class="h-full w-full overflow-y-auto snap-y snap-mandatory no-scrollbar relative z-10 pt-24"
      @wheel="onWheel"
    >
      <!-- Objective Cards -->
      <div class="h-full grid grid-cols-1 gap-6 w-full flex flex-col">
        <div
          v-for="n in totalCards"
          :key="n"
          class="flex justify-center items-center text-black snap-start p-6 rounded-lg shadow-sm max-w-3xl mx-auto w-screen"
        >
          <div class="w-full p-6 text-center">
            <!-- Objective Title -->
            <h2 class="text-3xl font-semibold text-primary mb-4">
              Objective {{ n }}
            </h2>
            <!-- Objective Description -->
            <p class="text-lg text-gray-600">
              This is the description of objective {{ n }}. The goal is to
              provide detailed information and highlight the progress associated
              with each objective.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundTextScroller",
  props: {
    title: {
      type: String,
      default: "Objectives", // Default title, can be overridden
    },
    totalCards: {
      type: Number,
      default: 8, // Number of cards to display
    },
  },
  mounted() {
    // Ensure the body is scrollable and no global overflow control
    document.body.style.overflowY = "auto";
  },
  methods: {
    onWheel(event) {
      // Get the scrollable container
      const scrollableContainer = this.$refs.scrollableContainer;

      if (scrollableContainer) {
        // If we're scrolling down into the objectives section
        if (event.deltaY > 0) {
          // Check if the user has reached the end of the scrollable container
          if (
            scrollableContainer.scrollTop + scrollableContainer.clientHeight >=
            scrollableContainer.scrollHeight
          ) {
            // Scroll to the next section (move to the next part of the page)
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }
        } else {
          // If we're scrolling up and want to go back to the hero section
          if (scrollableContainer.scrollTop === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }

        // If we've reached the end, reset scroll to the start when scrolling down
        if (
          scrollableContainer.scrollTop + scrollableContainer.clientHeight >=
          scrollableContainer.scrollHeight
        ) {
          setTimeout(() => {
            scrollableContainer.scrollTo(0, 0);
          }, 200);
        }
      }
    },
  },
};
</script>

<style scoped>
/* Snapping behavior for smooth scrolling between cards */
.snap-y {
  scroll-snap-type: y mandatory;
}
.snap-start {
  scroll-snap-align: start;
}

/* Hide the scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}

/* Large background title styling */
h1 {
  white-space: nowrap;
  z-index: -1; /* Ensure it's behind the content */
  pointer-events: none; /* Prevent interaction */
  position: absolute; /* Position it correctly as a background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* General styling for objective cards */
.text-primary {
  color: #2c3e50; /* Darker text color */
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75;
}

.text-gray-600 {
  color: #4a4a4a;
}

.p-6 {
  padding: 1.5rem; /* Adjust padding */
}

.rounded-lg {
  border-radius: 0.5rem; /* Slightly rounded corners for cards */
}

.max-w-3xl {
  max-width: 48rem; /* Limit width for better alignment */
}

.mx-auto {
  margin-left: auto;
  margin-right: auto; /* Center the cards */
}
</style>
