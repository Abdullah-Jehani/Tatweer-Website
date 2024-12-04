<template>
  <div
    class="w-full flex justify-between items-center text-white my-5 bg-transparent"
  >
    <!-- Logo Section -->
    <div>
      <div v-if="isHomePage">
        <router-link to="/">
          <img src="../../../public/logo/TatweerLogo.svg" alt="Tatweer Logo" />
        </router-link>
      </div>
      <div v-else>
        <router-link to="/">
          <img src="../../../public/logo/TatweerColor.svg" alt="" />
        </router-link>
      </div>
    </div>

    <!-- Navbar Links -->
    <div class="md:flex justify-between space-x-8 hidden">
      <h1><router-link to="/">What We Are</router-link></h1>

      <!-- "What We Do" with Dropdown -->
      <h1>
        <div class="relative">
          <router-link to="/WhatWeDoView" class="flex items-center space-x-1">
            <span>What We Do</span>
            <img
              src="../../../public/icons/DropDown.svg"
              alt=""
              class="w-4 h-4"
            />
          </router-link>
        </div>
      </h1>

      <h1>Stories</h1>
      <h1>Contact Us</h1>
    </div>

    <!-- Arabic Section -->
    <div class="hidden md:block">
      <h1
        class="text-white font-semibold"
        :class="{ 'text-secondary': !isHomePage }"
      >
        Arabic
      </h1>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
const isHomePage = router.currentRoute.value.path === "/";
</script>
