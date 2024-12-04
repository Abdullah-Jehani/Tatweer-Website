<script setup>
import { useRoute } from "vue-router";
import navBarComponent from "./components/main/navBarComponent.vue";
import FooterComponent from "./components/main/FooterComponent.vue";
const route = useRoute();
</script>

<template>
  <main
    v-if="route.path !== '/'"
    class="w-full md:px-[120px] px-8 grid grid-cols-12 sticky top-0 z-50"
  >
    <!-- Navbar -->
    <div class="col-start-1 col-span-full">
      <navBarComponent />
    </div>
  </main>
  <header>
    <router-view></router-view>
  </header>
  <footer>
    <div class="w-full px-8 md:px-[120px] mt-32 md:mt-72 bg-secondary">
      <FooterComponent />
    </div>
  </footer>
</template>
