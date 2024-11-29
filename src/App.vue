<script setup>
import { useRoute } from "vue-router";
import navBarComponent from "./components/main/navBarComponent.vue";
const route = useRoute();
</script>

<template>
  <main
    v-if="route.path !== '/'"
    class="w-full md:px-[120px] px-8 grid grid-cols-12"
  >
    <!-- Navbar -->
    <div class="col-start-1 col-span-full">
      <navBarComponent />
    </div>
  </main>
  <header>
    <router-view></router-view>
  </header>
</template>
