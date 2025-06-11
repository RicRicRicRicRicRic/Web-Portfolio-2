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
      <div class="slides-wrapper" :style="{ transform: `translateX(calc(-100% * ${currentSlide}))` }">
        <div v-for="slide in slidesData" :key="slide.id" class="slide">
          <div class="slide-background" :style="{ backgroundImage: `url(${slide.image})` }"></div>
          <div class="slide-content">
            <h6>{{ slide.title }}</h6>
            <p class="description-text">{{ slide.description }}</p>
            <p class="tools-text"><span>Tools: {{ slide.tools }}</span></p>
            <div class="github-link">
              <a :href="slide.githubLink" target="_blank" rel="noopener noreferrer">
                <img :src="slide.githubIcon" :alt="`${slide.title} GitHub`">
                <p>View project on github</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button @click="prevSlide" class="nav-arrow left-arrow desktop-only">
        <img :src="arrowLeftIcon" alt="Previous Slide">
      </button>
      <button @click="nextSlide" class="nav-arrow right-arrow desktop-only">
        <img :src="arrowRightIcon" alt="Next Slide">
      </button>
    </div>

    <div class="slideshow-controls-mobile">
      <button @click="prevSlide" class="nav-arrow left-arrow mobile-only">
        <img :src="arrowLeftIcon" alt="Previous Slide">
      </button>
      <button @click="nextSlide" class="nav-arrow right-arrow mobile-only">
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
  padding: clamp(10px, 2vw, 20px); 
}

.slideshow-container {
  position: relative;
  width: var(--align--wdith); 
  height: 90%; 
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.slides-wrapper {
  display: flex;
  height: 100%;
  width: calc(100% * v-bind(totalSlides)); 
  transition: transform 0.6s ease-in-out;
  will-change: transform; 
  
  transform: translateX(calc(-100% * v-bind(currentSlide))); 
}

.slide {
  flex-shrink: 0; 
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-text);
  background-color: var(--dark-background);
  box-sizing: border-box;
  text-align: center;
  padding: clamp(10px, 2vw, 20px); 
  position: relative;
  overflow: hidden;

  .slide-content{
    z-index: 2;
    position: relative;
    opacity: 0.90;
    width: clamp(280px, 60vw, 70%); 
    height: clamp(200px, 40vh, 45%); 
    min-height: 180px; 
    border-radius: 10px;
    background-color: var(--drak-light-background);
    padding: clamp(15px, 3vw, 20px); 
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 

    h6{
      font-size: var(--font-size-xl); 
      margin-bottom: clamp(5px, 1vw, 10px); 
      margin-top: clamp(15px, 3vw, 35px); 
      white-space: normal; 
    }
    .description-text, .tools-text {
        margin: 0; 
        margin-bottom: clamp(5px, 1vw, 10px); 
        font-size: var(--font-size-base); 
        line-height: 1.4;
        span{
          font-size: var(--font-size-medium); 
          color: var(--accent-teal);
        }
    }
    
    .github-link{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: auto; 

      a {
        background-color: var(--dark-background);
        color: var(--accent-teal);
        border: 2px solid var(--accent-teal);
        padding: clamp(5px, 1.5vw, 6px) clamp(10px, 2.5vw, 12px); 
        border-radius: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: clamp(10px, 2vw, 20px); 
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        font-size: var(--font-size-large); 
        text-decoration: none;

        img{
          width: clamp(20px, 4vw, 25px); 
          height: clamp(20px, 4vw, 25px); 
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
  padding: clamp(8px, 2vw, 10px); 
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
    width: clamp(24px, 5vw, 30px); 
    height: clamp(24px, 5vw, 30px); 
    filter: invert(100%) saturate(200%);
  }
}

.left-arrow {
  left: clamp(5px, 1vw, 10px); 
}

.right-arrow {
  right: clamp(5px, 1vw, 10px); 
}

.slideshow-controls-mobile {
  display: none; 
}

.mobile-only {
  display: none; 
}

.desktop-only {
  display: flex; 
}

@media (max-width: 768px) {
  .slideshow-container {
    height: 70vh; 
    width: 95%; 
    padding: 0;
    box-shadow: none;
    overflow-x: hidden;
  }

  .slides-wrapper {
    height: 100%;
    
    width: calc(100% * v-bind(totalSlides)); 
    transform: translateX(calc(-100% * v-bind(currentSlide))); 
  }

  .slide {
    padding: clamp(5px, 1.5vw, 10px); 
    width: 100%; 
    height: 100%;

    .slide-content {
      width: clamp(200px, 80vw, 90%); 
      height: clamp(100px, 30vh, 35%); 
      min-height: unset; 
      padding: clamp(10px, 2.5vw, 15px);  
      justify-content: center; 
      h6 {
        font-size: var(--font-size-large); 
        margin-top: clamp(8px, 2vw, 10px); 
        margin-bottom: clamp(3px, 0.8vw, 5px); 
        text-align: center; 
      }
      .description-text, .tools-text {
        font-size: var(--font-size-small); 
        margin-bottom: clamp(3px, 0.8vw, 5px); 
        margin-top: 0; 
        text-align: center; 
      }
      span {
        font-size: var(--font-size-base); 
      }
      .github-link {
        margin-top: clamp(10px, 2.5vw, 15px); 
        
        a {
          padding: clamp(2px, 0.5vw, 3px) clamp(5px, 1.5vw, 6px); 
          font-size: var(--font-size-base); 
          gap: clamp(5px, 1.5vw, 8px); 
          img {
            width: clamp(14px, 3vw, 16px); 
            height: clamp(14px, 3vw, 16px); 
          }
        }
      }
    }
  }

  .slideshow-controls-mobile {
    display: flex; 
    width: 95%; 
    justify-content: center;
    align-items: center;
    gap: clamp(20px, 5vw, 40px); 
    margin-top: clamp(10px, 2.5vw, 15px); 
    position: relative;
  }

  .nav-arrow {
    position: static; 
    transform: none; 
    background: rgba(0, 0, 0, 0.4);
    padding: clamp(10px, 2.5vw, 20px); 
    img {
      width: clamp(30px, 7vw, 40px); 
      height: clamp(30px, 7vw, 40px); 
    }
  }

  .desktop-only {
    display: none; 
  }

  .mobile-only {
    display: flex; 
  }
}
</style>
