<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(3);

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

const calendarIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/calendar.svg";
</script>

<template>
  <div class="container">
    <div class="navigation-container">
      <h1 class="nav-title">Why hire me?</h1>
      <p class="nav-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button :class="{ active: activeTab === 0 }" @click="setActiveTab(0)">Experience</button>
      <button :class="{ active: activeTab === 1 }" @click="setActiveTab(1)">Education</button>
      <button :class="{ active: activeTab === 2 }" @click="setActiveTab(2)">Skills</button>
      <button :class="{ active: activeTab === 3 }" @click="setActiveTab(3)">About me</button>
    </div>

    <div class="display-container">
      <div v-if="activeTab === 0" class="display-content">
        <h1>Content for Experience</h1>
        <p>This section will detail my professional work history and achievements.</p>
      </div>
      <div v-if="activeTab === 1" class="display-content">
        <h1>Academic Background</h1>
        <div class="academic-timeline">
          <div class="acad-content">
            <div class="acad-title">
              <img :src="calendarIcon" alt="Calendar Icon" class="calendar-icon" />
              <h2>High School (2016 - 2020)</h2>
            </div>
            <p>My high school years ignited my passion for web development. I gained foundational skills in HTML and CSS,
               which I applied to create a simple website project. To further my learning, I took a multi-month course at
                Adamson University. This program expanded my technical horizons, introducing me to more advanced HTML/CSS
                 techniques, web animation principles, and even a glimpse into architectural design software. 
                 These early experiences solidified my interest in building and designing for the web.</p> 
          </div>
          <div class="acad-content">
            <div class="acad-title">
              <img :src="calendarIcon" alt="Calendar Icon" class="calendar-icon" />
              <h2>Senior High School (2020 - 2022)</h2>
            </div>
            <p>During senior high, I transitioned into more structured programming concepts, 
              primarily focusing on Java. I gained a solid understanding of fundamental programming constructs like classes,
               loops, and conditionals, and actively participated in projects that reinforced these learnings. 
               My curriculum also included an exploration of various number systems binary, octal, and hexadecimal 
               and their conversions, which provided a deeper appreciation for how computers process data. 
               These experiences laid a strong groundwork for tackling more complex coding challenges in my 
               collegiate studies.</p>
          </div>
          <div class="acad-content">
            <div class="acad-title">
              <img :src="calendarIcon" alt="Calendar Icon" class="calendar-icon" />
              <h2>College (2022 - Present)</h2>
            </div>
            <p> 
              My college journey focused on expanding programming expertise and tackling real-world development
              challenges. I've gained proficiency in HTML, CSS, PHP, Python (data structures/algorithms), Java, and
              C#/.NET, developing dynamic web applications and a coffee shop management system.
              I'm currently working on multiple projects, including a Godot rogue-like game, e-commerce web app,
              and a crossword puzzle web app, continuously learning new technologies and contributing to
              diverse programming projects.
            </p>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 2" class="display-content">
        <h1>Content for Skills</h1>
        <p>This section will list my technical and soft skills, along with proficiency levels.</p>
      </div>
      <div v-if="activeTab === 3" class="display-content">
        <h1>Content for About me</h1>
        <p>This is a personal introduction, detailing my background, interests, and aspirations.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 925px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.navigation-container {
  width: 35%;
  height: 92.5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--dark-background);
  color: #f0f0f0;
  padding: 10px;
  .nav-title {
    font-size: 2em;
    font-weight: bold;
    color: #e0e0e0;
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
  .nav-description {
    font-size: 1rem;
    color: #a0a0a0;
    width: 100%;
    margin-top: 0;
    margin-bottom: 30px;
  }
  button {
    width: 100%;
    max-width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: var(--drak-light-background); 
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 0 transparent;

    &:hover {
      background-color: #555;
    }
    &.active {
      background-color: #00FF99;
      color: #000;
      box-shadow: var(--shadow-teal);
    }
  }
}

.display-container {
  width: 65%;
  height: 92.5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--dark-background);
  color: #f0f0f0;
  padding: 10px;
}

.display-content {
  text-align: left;
  width: 90%;
  height: 100%;
  overflow: hidden;
  h1 {
    font-size: 2em;
    font-weight: bold;
    color: #e0e0e0;
    margin-bottom: 30px;
  }
    p {
    color: #ccc;
    font-size: 1rem;
  }
}

.academic-timeline{
  width: 100%;
  max-height: 80%;
  overflow: auto;
  .acad-content{
    p{
      margin-right: 10px;
    }
    .acad-title{
      display: flex;
      align-items: center;
      h2{
        color: var(--accent-teal);
        margin-bottom: 0;
        margin-top: 0; 
      }
      .calendar-icon{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        filter: var(--img--accent-teal);
        vertical-align: middle; 
      }
    }
  }
}
</style>
