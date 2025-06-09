<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import Home from '../Child/Home.vue'
import About from '../Child/About.vue'
import Skills from '../Child/Skills.vue'
import Projects from '../Child/Projects.vue'
import Aspirations from '../Child/Aspirations.vue'
import Insights from '../Child/Insights.vue'
import Resume from '../Child/Resume.vue'

const activeComponent = ref<string>('Home')

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
}

const setActiveComponent = (componentName: string) => {
  activeComponent.value = componentName
}
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
          <button class="Contact-button"><span>Contact Me</span></button>
        </nav>
      </div>
    </header>
    <div class="content-container">
      <div class="content">
       <component :is="componentsMap[activeComponent]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* Global styles for scrollbars */
:root {
  --dark-background: #1e1e1e;
  --drak-light-background: #2e2e2e; 
  --light-text: #f0f0f0;
  --logo-text: #e0e0e0;
  --accent-teal: #20c997;
  --accent-teal-hover: #00FF99;
  --nav-link-default: #a0a0a0;
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
  height: 100%;
  width: 100%;
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
    color: var(--nav-link-default);
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
      span{
        color: var(--dark-background)
      }
    }
  }
}

.content {
  max-width: var(--align--wdith);
  height: 100%;
}
.content-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  background-color: var(--dark-background);
  overflow: hidden;
}
</style>
