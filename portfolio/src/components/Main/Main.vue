<script setup lang="ts">
import { ref, defineAsyncComponent, watch } from 'vue'

const menuIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/menu.svg";

import Home from '../Child/Home.vue'
import About from '../Child/About.vue'
import Skills from '../Child/Skills.vue'
import Projects from '../Child/Projects.vue'
import Aspirations from '../Child/Aspirations.vue'
import Insights from '../Child/Insights.vue'
import Resume from '../Child/Resume.vue'
import Contact from '../Child/Contact.vue' 

const activeComponent = ref<string>('Home')
const isMobileMenuOpen = ref<boolean>(false)

const navLinks = ref([
  { text: 'Home', component: 'Home' },
  { text: 'About', component: 'About' },
  { text: 'Skills', component: 'Skills' },
  { text: 'Projects', component: 'Projects' },
  { text: 'Insights', component: 'Insights' },
  { text: 'Aspirations', component: 'Aspirations' },
  { text: 'Resume', component: 'Resume' },
])

const componentsMap: Record<string, any> = {
  Home,
  Skills,
  About,
  Projects,
  Aspirations,
  Insights,
  Resume,
  Contact, 
}

const setActiveComponent = (componentName: string) => {
  activeComponent.value = componentName;
  isMobileMenuOpen.value = false;
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

watch(isMobileMenuOpen, (newVal) => {
  document.body.classList.toggle('no-scroll', newVal);
});
</script>

<template>
  <div class="main-layout-wrapper">
    <header class="header-bar">
      <div class="header-content">
        <div class="logo">Ric.</div>
        <nav class="nav-container">
          <div
            v-for="link in navLinks"
            :key="link.text"
            :class="['nav-link', { active: activeComponent === link.component }]"
            @click="setActiveComponent(link.component)"
          >
            {{ link.text }}
          </div>
          <button class="Contact-button" @click="setActiveComponent('Contact')">Contact Me</button>
        </nav>
        <button class="menu-toggle-button" @click.stop="toggleMobileMenu">
          <img :src="menuIcon" alt="Menu Toggle Icon" class="menu-icon-svg" />
        </button>
      </div>
    </header>

    <Transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="mobile-nav-sidebar">
        <div class="mobile-nav-links">
          <div
            v-for="link in navLinks"
            :key="link.text"
            :class="['mobile-nav-link', { active: activeComponent === link.component }]"
            @click="setActiveComponent(link.component)"
          >
            {{ link.text }}
          </div>
          <button class="mobile-Contact-button" @click="setActiveComponent('Contact')">Contact Me</button>
        </div>
      </div>
    </Transition>
    
    <div class="content-container">
      <div class="content">
       <component :is="componentsMap[activeComponent]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

html, body {
  height: 100%;
}

body {
  font-family: 'JetBrains Mono', monospace;
  margin: 0;
  padding: 0;
}

body.no-scroll {
  overflow: hidden;
}

:root {
  --dark-background: #191919;
  --drak-light-background: #292929; 
  --light-text: #ffffff;
  --logo-text: #e0e0e0;
  --accent-teal: #20c997;
  --accent-teal-hover: #00FF99;
  --font-color-default: #a0a0a0;
  --nav-link-hover: #c0c0c0;
  --shadow: rgba(0, 0, 0, 0.1);
  --img--accent-teal: invert(59%) sepia(35%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(90%);
  --inmg--dark-bg: brightness(0) saturate(100%) invert(0%) sepia(0%) hue-rotate(0deg) brightness(0.117647) contrast(100%);
  --align--wdith: 925px;
  --shadow-teal: 0 0 10px var(--accent-teal); 
  --scrollbar-thumb-color: var(--accent-teal); 
  --scrollbar-track-color: var(--drak-light-background); 
}

::-webkit-scrollbar {
  width: 10px; 
  height: 10px; 
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color); 
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color); 
  border-radius: 5px; 
  border: 2px solid var(--scrollbar-track-color); 
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-teal-hover); 
}
::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}
</style>

<style scoped lang="scss">

.main-layout-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  width: 100vw;
}

.header-bar {
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: 0 2px 4px var(--shadow);
  flex-shrink: 0;
  z-index: 10;
}

.header-content {
  width: 100%;
  max-width: var(--align--wdith);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: var(--logo-text);
}

.nav-container {
  display: flex;
  align-items: center;

  .nav-link {
    text-decoration: none;
    font-size: 13px;
    color: var(--font-color-default);
    margin-left: 20px;
    padding: 5px 10px;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--nav-link-hover);
    }

    &.active {
      color: var(--accent-teal);
      border-bottom: 2px solid var(--accent-teal);
      padding-bottom: 3px;
    }
  }

  .Contact-button{
    background-color: var(--accent-teal);
    color: var(--light-text);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-left: 20px;

    &:hover {
      background-color: var(--accent-teal-hover);
      color: var(--dark-background);
      border-color: var(--accent-teal-hover); 
      box-shadow: 0 0 10px var(--accent-teal); 
    }
  }
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  background-color: var(--dark-background);
  overflow: hidden;
}

.content {
  max-width: var(--align--wdith);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.menu-toggle-button {
  display: none !important; 
}

@media (max-width: 768px) {
  .nav-container {
    display: none;
  }

  .menu-toggle-button {
    display: block !important;
    background: none; border: none; cursor: pointer; padding: 0; z-index: 1; 
    .menu-icon-svg {
      width: 30px; height: 30px;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
  }

  .header-content { padding: 0 15px; }

  .mobile-nav-sidebar {
    position: fixed; top: 0; right: 0;
    height: 100vh;
    width: 250px;
    background-color: var(--drak-light-background);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4); 
    z-index: 1001; 
    display: flex; flex-direction: column; padding: 20px; box-sizing: border-box;
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform 0.3s ease-out;
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateX(100%);
  }
  .slide-fade-enter-to, .slide-fade-leave-from {
    transform: translateX(0);
  }

  .mobile-nav-links { display: flex; flex-direction: column; gap: 15px; }

  .mobile-nav-link {
    text-decoration: none; font-size: 1.1em; color: var(--font-color-default);
    padding: 10px 15px; border-radius: 8px; transition: background-color 0.3s ease, color 0.3s ease; cursor: pointer;
    &:hover { background-color: var(--dark-background); color: var(--nav-link-hover); }
    &.active { background-color: var(--accent-teal); color: var(--dark-background); font-weight: bold; }
  }

  .mobile-Contact-button {
    background-color: var(--accent-teal); color: var(--dark-background);
    border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer;
    font-weight: bold; font-size: 1.1em;
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    margin-top: 20px; width: 100%;
    &:hover {
      background-color: var(--accent-teal-hover); color: var(--dark-background);
      box-shadow: 0 0 10px var(--accent-teal);
    }
  }
}
</style>
