<template>
  <div>
    <h1 class="md:text-4xl text-5xl font-semibold text-whiteColor text-center">
      Our Team
    </h1>
    <div class="w-full grid grid-cols-12 md:gap-x-4 gap-x-0">
      <div
        v-for="(member, index) in members"
        :key="index"
        class="md:col-span-3 col-span-full"
      >
        <TeamComponent
          :gradientStart="member.gradientStart"
          :gradientEnd="member.gradientEnd"
          :memberImage="member.memberImage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TeamComponent from "../../helper/TeamComponent.vue";

defineProps({
  members: Array,
});
</script>
