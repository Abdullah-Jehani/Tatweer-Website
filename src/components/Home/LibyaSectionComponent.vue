<template>
  <div
    class="relative w-full flex justify-center items-start md:items-center md:h-screen h-[50vh] mt-0 md:mt-72"
  >
    <div class="relative md:w-2/3 w-full">
      <img src="/images/Libya.svg" alt="Map of Libya" class="w-full h-auto" />

      <div v-for="city in cities" :key="city.id">
        <div
          :style="getCityStyle(city)"
          class="absolute w-8 h-8 bg-transparent z-10 rounded-full cursor-pointer"
          @mouseenter="showProject(city)"
          @mouseleave="hideProject"
          @click="toggleProject(city)"
        ></div>
      </div>
    </div>

    <div
      v-if="selectedCity"
      class="absolute top-10 left-10 bg-white p-4 shadow-lg rounded"
    >
      <h2 class="text-lg font-bold">{{ selectedCity.name }}</h2>
      <p>{{ selectedCity.project }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const cities = reactive([
  {
    id: 1,
    name: "jalu",
    project: "Community Park Renovation",
    x: "69.5%",
    y: "36%",
  },
  {
    id: 2,
    name: "al kufarah",
    project: "Community Park Renovation",
    x: "71.3%",
    y: "57.7%",
  },
  {
    id: 3,
    name: "Benghazi",
    project: "Community Park Renovation",
    x: "64.3%",
    y: "14.4%",
  },
  {
    id: 4,
    name: "susah",
    project: "Community Park Renovation",
    x: "70.2%",
    y: "10.3%",
  },
  {
    id: 5,
    name: "Tripoli",
    project: "Community Park Renovation",
    x: "40.1%",
    y: "14.6%",
  },
  {
    id: 6,
    name: "sert",
    project: "City Infrastructure Upgrade",
    x: "55.1%",
    y: "30%",
  },
  {
    id: 7,
    name: "Al jufrah",
    project: "Waste Management Improvement",
    x: "51.4%",
    y: "43.7%",
  },
  {
    id: 8,
    name: "Murzuq",
    project: "Water Supply Expansion",
    x: "43.5%",
    y: "52.7%",
  },
]);

const selectedCity = ref(null);

const showProject = (city) => {
  selectedCity.value = city;
};

const hideProject = () => {
  selectedCity.value = null;
};

const toggleProject = (city) => {
  selectedCity.value = selectedCity.value?.id === city.id ? null : city;
};

const getCityStyle = (city) => ({
  left: city.x,
  top: city.y,
  transform: "translate(-50%, -50%)",
});
</script>

<style scoped>
img {
  position: relative;
}

.absolute {
  transition: transform 0.2s ease;
}

.absolute:hover {
  transform: translate(-50%, -50%) scale(1.2);
}
</style>
