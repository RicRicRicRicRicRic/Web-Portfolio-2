<script setup lang="ts">
import { ref } from 'vue';
const arrowRightIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/arrow-right-circle.svg";
const arrowLeftIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/arrow-left-circle.svg";

const githubIcon = "https://simpleicons.org/icons/github.svg"; 

const currentSlide = ref(0);

import coffeeShop_img from '@/assets/CoffeeShop.png'
import crossword_img from '@/assets/Crossword.png'
import dodgeCreeps_img from '@/assets/DodgeCreeps.png'
import groceryPOS_img from '@/assets/Grocery.png'
import wanderer_img from '@/assets/Wanderer.png'

const slidesData = ref([
  { 
    id: 1, 
    image: coffeeShop_img, 
    title: 'Project-DCIT25-CoffeeShop',
    description: 'A point-of-sale system for coffee shops with built in employee management system developed using C# and .NET frameworks.',
    tools: 'C#, .NET',
    githubLink: 'https://github.com/RicRicRicRicRicRic/Project-DCIT25-CoffeeShop',
    githubIcon: githubIcon
  },
  { 
    id: 2, 
    image: crossword_img, 
    title: 'Crossword-Puzzle-Game',
    description: 'A web-based crossword puzzle game featuring game creator and user interaction.',
    tools: 'Vue.js, ExpressJS',
    githubLink: 'https://github.com/RicRicRicRicRicRic/Crossword-Puzzle-Game',
    githubIcon: githubIcon
  },
  { 
    id: 3, 
    image: dodgeCreeps_img, 
    title: 'Dodge-the-creeps',
    description: 'A classic 2D game developed to explore game development principles and engine capabilities.',
    tools: 'Godot Engine, GDScript',
    githubLink: 'https://github.com/RicRicRicRicRicRic/Dodge-the-creeps',
    githubIcon: githubIcon
  },
  { 
    id: 4, 
    image: groceryPOS_img, 
    title: 'GroceryPOS',
    description: 'A comprehensive point-of-sale system designed for grocery store management and inventory.',
    tools: 'C#, .NET',
    githubLink: 'https://github.com/RicRicRicRicRicRic/GroceryPOS',
    githubIcon: githubIcon
  },
  { 
    id: 5, 
    image: wanderer_img, 
    title: 'Leviathan-Wanderer',
    description: 'An ongoing 2D rogue-like game project focusing on procedural generation and challenging gameplay.',
    tools: 'Godot Engine, GDScript',
    githubLink: 'https://github.com/RicRicRicRicRicRic/Leviathan-Wanderer', 
    githubIcon: githubIcon
  },
]);

const totalSlides = slidesData.value.length; 

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
        <div v-for="slide in slidesData" :key="slide.id" class="slide">
          <div class="slide-background" :style="{ backgroundImage: `url(${slide.image})` }"></div>
          <div class="slide-content">
            <h6>{{ slide.title }}</h6>
            <p>{{ slide.description }}</p>
            <p><span>Tools:{{ slide.tools }}</span></p>
            <div class="github-link">
              <a :href="slide.githubLink" target="_blank" rel="noopener noreferrer">
                <img :src="slide.githubIcon" :alt="`${slide.title} GitHub`">
                <p>View project on github</p>
              </a>
            </div>
          </div>
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
  width: var(--align--wdith);
  height: 90%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slides-wrapper {
  display: flex;
  height: 100%;
  width: calc(100% * 5); 
  transition: transform 0.6s ease-in-out;
  will-change: transform; 
}

.slide {
  flex-shrink: 0;
  width: calc(100% / 5); 
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
  position: relative; 
  overflow: hidden;
  .slide-content{
    z-index: 2; 
    position: relative; 
    opacity: 0.90;
    width: 70%;
    height: 45%;
    border-radius: 10px;
    background-color: var(--drak-light-background);
    h6{
      font-size: 26px;
      margin-bottom: 0;
      margin-top: 35px;
    }
    p{
      font-size: 16px;
      margin: 10px;
    }
    span{
      font-size: 20px;
      color: var(--accent-teal);
    }
    .github-link{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        background-color: var(--dark-background);
        color: var(--accent-teal);
        border: 2px solid var(--accent-teal);
        padding: 6px 12px;
        border-radius: 15px;
        cursor: pointer;
        display: flex; 
        align-items: center; 
        gap: 20px;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; 
        font-size: 28px; 
        text-decoration: none;
        img{
          width: 25px; 
          height: 25px;
          filter: var(--img--accent-teal); 
        }
        p{
          margin: 0; 
          color: inherit; 
        }

        &:hover {
          background-color: var(--accent-teal-hover);
          color: var(--dark-background);
          border-color: var(--accent-teal-hover); 
          box-shadow: 0 0 10px var(--accent-teal); 
          img {
            filter: var(--inmg--dark-bg); 
          }
        }
      }
    }
  }
}

.slide-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: filter 0.3s ease-in-out; 
  filter: blur(0px); 
  z-index: 1; 
}

.slide:hover .slide-background {
  filter: blur(5px); 
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
