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
          <img src="../../../public/logo/TatweerColor.svg" alt="Tatweer Logo" />
        </router-link>
      </div>
    </div>

    <!-- Mobile Menu Icon -->
    <div class="md:hidden block" @click="toggleMenu">
      <img
        v-if="!isMenuOpen"
        src="../../../public/icons/menu.svg"
        alt="Menu Icon"
      />
    </div>

    <!-- Navbar Links -->
    <!-- Mobile Links -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-secondary text-white flex flex-col p-8 z-50 md:hidden overflow-auto overscroll-none"
    >
      <div class="mt-12 flex items-center space-x-2" @click="closeMenu">
        <img src="../../../public/icons/close.svg" alt="Close Icon" />
        <h1>Close</h1>
      </div>
      <div
        class="flex flex-col justify-center items-center space-y-12 h-screen"
      >
        <img
          src="../../../public/logo/TatweerMobileNav.svg"
          alt="Tatweer Logo"
        />
        <h1>
          <router-link
            to="/"
            @click="closeMenu"
            :class="{ 'active-mobile': $route.path === '/' }"
            >What We Are</router-link
          >
        </h1>
        <h1>
          <router-link
            to="/WhatWeDoView"
            @click="closeMenu"
            :class="{ 'active-mobile': $route.path === '/WhatWeDoView' }"
            >What We Do</router-link
          >
        </h1>
        <h1>
          <router-link
            to="/stories"
            @click="closeMenu"
            :class="{ 'active-mobile': $route.path === '/stories' }"
            >Stories</router-link
          >
        </h1>
        <h1>
          <router-link
            to="/contact"
            @click="closeMenu"
            :class="{ 'active-mobile': $route.path === '/contact' }"
            >Contact Us</router-link
          >
        </h1>
        <h1
          class="text-white font-semibold"
          :class="{ 'text-secondary': !isHomePage }"
          @click="closeMenu"
        >
          Arabic
        </h1>
      </div>
    </div>

    <!-- Desktop Links -->
    <div class="md:flex justify-between space-x-8 hidden">
      <h1>
        <router-link
          to="/"
          class="nav-link"
          :class="{ 'active-desktop': $route.path === '/' }"
          >What We Are</router-link
        >
      </h1>
      <h1 class="flex justify-center items-center space-x-1">
        <router-link
          to="/WhatWeDoView"
          class="nav-link"
          :class="{ 'active-desktop': $route.path === '/WhatWeDoView' }"
          >What We Do</router-link
        >
        <img src="../../../public/icons/DropDown.svg" alt="" />
      </h1>
      <h1>
        <router-link
          to="/stories"
          class="nav-link"
          :class="{ 'active-desktop': $route.path === '/stories' }"
          >Stories</router-link
        >
      </h1>
      <h1>
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ 'active-desktop': $route.path === '/contact' }"
          >Contact Us</router-link
        >
      </h1>
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
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isHomePage = ref(router.currentRoute.value.path === "/");
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});
</script>

<style scoped>
body.no-scroll {
  overflow: hidden;
}

.router-link-exact-active {
  color: #027eb5;
  font-weight: 700;
  /* border-bottom: 1px solid #027eb5; */
  padding-bottom: 2px;
}

.nav-link {
  transition: all 0.3s ease;
}

.active-mobile {
  color: #000026;
  font-weight: bold;
  /* border-bottom: 2px solid #000026; */
}

.active-desktop {
  color: #027eb5; /* Or your desired active color */
  font-weight: bold;
}
</style>
