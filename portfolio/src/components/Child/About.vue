<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const pageContainer = ref<HTMLElement | null>(null);
const activeDot = ref(0);
let observer: IntersectionObserver | null = null;

const createObserver = () => {
  if (!pageContainer.value) return;

  const options = {
    root: pageContainer.value,
    rootMargin: '0px',
    threshold: 0.25,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(pageContainer.value!.querySelectorAll('.scroll-item')).indexOf(entry.target as HTMLElement);
        if (index !== -1) {
          activeDot.value = index;
        }
      }
    });
  }, options);

  pageContainer.value.querySelectorAll('.scroll-item').forEach((item) => {
    observer!.observe(item);
  });
};

const scrollToSection = (index: number) => {
  if (!pageContainer.value) return;

  const scrollItems = pageContainer.value.querySelectorAll('.scroll-item');
  if (scrollItems[index]) {
    const targetElement = scrollItems[index] as HTMLElement;
    pageContainer.value.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  createObserver();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class ="container">
    <div class="page-container" ref="pageContainer">
      <div class="scroll-item">
        <div class="scroll-item-content">
          <p>Section 1</p>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-item-content">
          <p>Section 2</p>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-item-content">
          <p>Section 3</p>
        </div>
      </div>
    </div>

    <div class="dot-navigation">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="dot"
        :class="{ active: activeDot === index }"
        @click="scrollToSection(index)"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  height: 100%;
  width: 925px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-container {

  height: 100%;
  width: 925px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  box-sizing: border-box;
}

.page-container::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
.page-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-item {
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.scroll-item-content {
  max-width: 925px;
  width: 100%;
  box-sizing: border-box;
  font-size: 2em;
  color: white;
  text-align: center;
}

.scroll-item:nth-child(1) {
  background-color: var(--dark-background);
}

.scroll-item:nth-child(2) {
  background-color: var(--dark-background);
}

.scroll-item:nth-child(3) {
  background-color: var(--dark-background);
}

.dot-navigation {
  position: fixed;
  right: 250px;
  margin-top: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: var(--drak-light-background); 
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: lightgray;
}
</style>