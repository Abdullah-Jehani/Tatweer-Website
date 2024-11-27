<template>
  <div class="w-full">
    <div class="relative">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="isCurrentSlide(index)"
      >
        <div class="relative grid grid-cols-12 w-full">
          <div class="absolute my-28 col-start-1 col-span-8 z-10">
            <img
              :src="slide.image"
              :alt="slide.name"
              class="w-full object-contain"
            />
          </div>

          <div
            class="relative col-start-2 col-span-10 p-[4px] bg-gradient-to-r from-greenColor to-secondary rounded-lg z-0"
          >
            <div
              class="bg-main w-full h-full rounded-lg grid grid-cols-12 text-white"
            >
              <div
                class="col-start-5 3xl:col-start-4 col-span-6 my-40 leading-relaxed"
              >
                <h1 class="mb-6 font-light">{{ slide.text }}</h1>
                <h1 class="text-sm font-semibold mb-2">{{ slide.name }}</h1>
                <h1 class="text-xs font-light">{{ slide.position }}</h1>
              </div>

              <div
                class="grid grid-cols-12 absolute bottom-8 transform -translate-y-1/2 w-full"
              >
                <button
                  class="swiper-button-prev col-start-11 col-span-1 bg-white text-black rounded p-2 w-fit place-self-center"
                  @click="goToPrev"
                >
                  <img src="../../../public/icons/LeftArrow.svg" alt="" />
                </button>
                <button
                  class="swiper-button-next col-start-12 col-span-1 bg-white text-black rounded p-2 w-fit"
                  @click="goToNext"
                >
                  <img src="../../../public/icons/RightArrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  slides: { type: Array, required: true },
});

const currentSlide = ref(0);

const isCurrentSlide = (index) => currentSlide.value === index;

const goToNext = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const goToPrev = () => {
  currentSlide.value =
    (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};
</script>

<style scoped></style>
