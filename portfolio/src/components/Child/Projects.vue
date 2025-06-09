<script setup lang="ts">
import { ref } from 'vue';
const arrowRightIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/arrow-right-circle.svg";
const arrowLeftIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/arrow-left-circle.svg";
const currentSlide = ref(0);
const totalSlides = 10; 

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

</script>

<template>
  <div class="container">
    <div class="slideshow-container">
      <div class="slides-wrapper" :style="{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }">
        <div class="slide">
          <p>This is Slide 1. You can edit this content uniquely.</p>
        </div>
        <div class="slide">
          <p>This is Slide 2. Customize this slide as you wish.</p>
        </div>
        <div class="slide">
          <p>This is Slide 3. Your custom content goes here.</p>
        </div>
        <div class="slide">
          <p>This is Slide 4. Make it unique!</p>
        </div>
        <div class="slide">
          <p>This is Slide 5. Another distinct slide.</p>
        </div>
        <div class="slide">
          <p>This is Slide 6. Individual content block.</p>
        </div>
        <div class="slide">
          <p>This is Slide 7. Fully editable.</p>
        </div>
        <div class="slide">
          <p>This is Slide 8. Your custom design.</p>
        </div>
        <div class="slide">
          <p>This is Slide 9. Specific content here.</p>
        </div>
        <div class="slide">
          <p>This is Slide 10. The final distinct slide.</p>
        </div>
      </div>

      <button @click="prevSlide" class="nav-arrow left-arrow">
        <img :src="arrowLeftIcon" alt="Previous Slide">
      </button>
      <button @click="nextSlide" class="nav-arrow right-arrow">
        <img :src="arrowRightIcon" alt="Next Slide">
      </button>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --wdith--slide: calc(100% / 10);
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--dark-background);
}

.slideshow-container {
  position: relative;
  width: 100%;
  height: 90%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slides-wrapper {
  display: flex;
  height: 100%;
  width: calc(100% * 10);
  transition: transform 0.6s ease-in-out;
  will-change: transform; 
}

.slide {
  flex-shrink: 0;
  width: calc(100% / 10);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: var(--light-text);
  background-color: var(--dark-background);
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  img {
    width: 30px;
    height: 30px;
    filter: invert(100%) saturate(200%);
  }
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
</style>