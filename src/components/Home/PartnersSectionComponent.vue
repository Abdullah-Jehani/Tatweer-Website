<template>
  <section class="ticker-container">
    <div class="ticker-wrap">
      <div class="ticker">
        <div
          class="ticker__item"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <img
            :src="partner.src"
            :alt="partner.name"
            class="md:h-10 h-7 opacity-70"
          />
        </div>
        <div
          class="ticker__item"
          v-for="(partner, index) in partners"
          :key="'clone-' + index"
        >
          <img
            :src="partner.src"
            :alt="partner.name"
            class="md:h-10 h-7 opacity-70"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: "Google", src: "/images/google.svg" },
  { name: "Pingdom", src: "/images/pingdom.svg" },
  { name: "Prismic", src: "/images/prismic.svg" },
  { name: "Unsplash", src: "/images/unsplash.svg" },
  { name: "Google Analytics", src: "/images/GoogleAnalytics.svg" },
  { name: "Miro", src: "/images/miro.svg" },
  { name: "SalesForce", src: "/images/salesforce.svg" },
  { name: "Google Search Console", src: "/images/GoogleSearchConsole.svg" },
  { name: "Slack", src: "/images/slack.svg" },
  { name: "Jira Software", src: "/images/JiraSoftware.svg" },
];
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @keyframes ticker {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .ticker-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .ticker-wrap {
    display: flex;
    justify-content: flex-start;
    animation: ticker 8s linear infinite;
    align-items: center;
    white-space: nowrap;
    height: 4rem;
  }

  .ticker {
    display: inline-block;
    white-space: nowrap;
    padding-right: 100%;
  }

  .ticker__item {
    display: inline-block;
    padding: 0 2rem;
    font-size: 1.25rem;
    color: white;
  }
}
</style>
