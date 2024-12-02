<template>
  <div>
    <h1 class="text-4xl font-semibold text-whiteColor text-center">Our Team</h1>
    <div class="w-full grid grid-cols-12 gap-x-4">
      <div v-for="(member, index) in members" :key="index" class="col-span-3">
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
