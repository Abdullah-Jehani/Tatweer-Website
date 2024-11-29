<template>
  <div
    class="w-full flex justify-between items-center text-white my-5 bg-transparent"
  >
    <div>
      <img src="../../../public/logo/TatweerLogo.svg" alt="Tatweer Logo" />
    </div>

    <div class="md:flex justify-between space-x-8 hidden">
      <h1><router-link to="/"> What We Are</router-link></h1>
      <h1><router-link to="/WhatWeDoView">What We Do</router-link></h1>
      <h1>Stories</h1>
      <h1>Contact Us</h1>
    </div>
    <!-- Arabic -->
    <div class="hidden md:block">
      <h1>Arabic</h1>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
</script>
