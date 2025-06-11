<script setup lang="ts">
import { ref } from 'vue';
import resume from '@/assets/Estremadura_CV_2.pdf' 
const downloadIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/download.svg"; 
const activeTab = ref(3); 
const shouldAnimateSkills = ref(false); 

const setActiveTab = (index: number) => {
  activeTab.value = index;
  if (index === 2) { 
    setTimeout(() => {
      shouldAnimateSkills.value = true;
    }, 50); 
  } else {
    shouldAnimateSkills.value = false; 
  }
};

const calendarIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/calendar.svg";
const godotIcon = "https://simpleicons.org/icons/godotengine.svg";
const vueIcon = "https://simpleicons.org/icons/vuedotjs.svg";
const jsIcon = "https://simpleicons.org/icons/nodedotjs.js.svg";
const fastapiIcon = "https://simpleicons.org/icons/fastapi.svg";
const dotnetiIcon = "https://simpleicons.org/icons/dotnet.svg";

const skillsData = ref([
  {
    name: 'Godot Engine',
    icon: godotIcon,
    description: 'Proficient in developing 2D games using Godot Engine and GDScript, including physics, animations, and UI implementation.',
    percentage: 65,
  },
  {
    name: 'FastAPI Framework',
    icon: fastapiIcon,
    description: 'Experienced in building robust and high-performance RESTful APIs with FastAPI and Python, utilizing Pydantic for data validation.',
    percentage: 50,
  },
  {
    name: 'JavaScript / ExpressJS',
    icon: jsIcon,
    description: 'Strong command of JavaScript for front-end interactivity and backend development with Node.js and ExpressJS for scalable web applications.',
    percentage: 50,
  },
  {
    name: '.NET Framework (C#)',
    icon: dotnetiIcon,
    description: 'Solid experience in developing desktop and web applications using C# and the .NET framework, including WinForms, WPF, and ASP.NET Core.',
    percentage: 65,
  },
  {
    name: 'Vue Framework',
    icon: vueIcon,
    description: 'Highly skilled in building modern, reactive user interfaces with Vue.js, Vue Router, and Pinia/Vuex for state management.',
    percentage: 85,
  },
]);

</script>

<template>
  <div class="container">
    <div class="navigation-container">
      <h1 class="nav-title">Why hire me?</h1>
      <p class="nav-description">Explore my robust academic achievements and versatile skill set as a 3rd-year BSCS student, continually applying knowledge and ready to make a significant impact on your team's success.</p>
      <button :class="{ active: activeTab === 0 }" @click="setActiveTab(0)">Experience</button>
      <button :class="{ active: activeTab === 1 }" @click="setActiveTab(1)">Education</button>
      <button :class="{ active: activeTab === 2 }" @click="setActiveTab(2)">Skills</button>
      <button :class="{ active: activeTab === 3 }" @click="setActiveTab(3)">About me</button>
    </div>
    <div class="display-container">
      <div v-if="activeTab === 0" class="display-content">
        <h1>Experience Gained</h1>
        <div class="experience-content">
          <div class="experience-section">
            <div class="exp-title">
              <img :src="godotIcon" alt="godot Icon" class="exp-icon" />
              <h3>Godot Engine</h3>
            </div>
            <p>Developed a 2d platfromer game using godot</p>
          </div>
          <div class="experience-section">
            <div class="exp-title">
              <img :src="dotnetiIcon" alt="godot Icon" class="exp-icon" />
              <h3>.NET Framework</h3>
            </div>
            <p>Developed a coffee shop POS system, and a grocery sotre POS system using .Net frameworks</p>
          </div>
          <div class="experience-section">
            <div class="exp-title">
              <img :src="vueIcon" alt="godot Icon" class="exp-icon" />
              <h3>Vue Framework</h3>
            </div>
            <p>Deveoped a crosword game and an e-commerce web app using the vue framework</p>
          </div>
          <div class="experience-section">
            <div class="exp-title">
              <img :src="jsIcon" alt="godot Icon" class="exp-icon" />
              <h3>ExpressJS Framework</h3>
            </div>
            <p>Deveoped the backend for crossword game using express js</p>
          </div>
          <div class="experience-section">
            <div class="exp-title">
              <img :src="fastapiIcon" alt="godot Icon" class="exp-icon" />
              <h3>FastAPI Framework</h3>
            </div>
            <p>Developed the backend for the e-commerce web app uisng the fastapi backend</p>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 1" class="display-content">
        <h1>Academic Background</h1>
        <div class="academic-content">
          <div class="academic-section">
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
          <div class="academic-section">
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
          <div class="academic-section">
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
        <h1>Skills & Proficiency</h1>
        <div class="skills-content">
          <div v-for="skill in skillsData" :key="skill.name" class="skill-section">
            <div class="skill-header">
              <div class="skill-title">
                <img :src="skill.icon" :alt="`${skill.name} Icon`" class="skill-icon" />
                <h3>{{ skill.name }}</h3>
              </div>
              <span class="skill-percentage">{{ skill.percentage }}%</span>
            </div>
            <p>{{ skill.description }}</p>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" :style="{ width: shouldAnimateSkills ? skill.percentage + '%' : '0%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 3" class="display-content">
        <h1>More About me</h1>
        <div class="about-content">
          <div class="about-desc">
            <p>
              I'm <strong>Ric Michael Estremadura</strong>, currently a Computer Science Student.
              Patriotism and driven third-year Computer Science student with hands-on experience in building and designing 
              websites, creating and developing 2d games with godot engine, as well as creating robust applications using C# 
              and .NET frameworks. Eager to leverage technical expertise, innovative thinking, and collaborative spirit to 
              contribute to a dynamic development team and drive innovative solutions in the tech industry.
            </p>
          </div>
          <div class="about-info">
            <p><strong>Birthday:</strong><span>August 15, 2003 </span></p>
            <p><strong>Age:</strong><span>21 years old</span></p>
            <p><strong>Degree:</strong><span>Currently pursuing BSCS</span></p>
            <p><strong>Freelancing:</strong><span>Available</span></p>

            <p><strong>Email:</strong><span>ricmichaele@gmail.com</span></p>
            <p><strong>Website:</strong><span>ricmichaele@gmail.com</span></p>
            <p><strong>Location:</strong><span>Las Piñas City, Philippines</span></p>
            <p><strong>Phone:</strong><span>+09152588723</span></p>
          </div>
          <div class="download-container">
            <a :href="resume" download="Ric_Michael_Estremadura_CV.pdf" class="download-cv">
              Download CV
              <img :src="downloadIcon" alt="Download Icon">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%; 
  width: var(--align--wdith); 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; 
  padding: clamp(10px, 2vw, 20px) 0; 
  gap: clamp(0.625px, 0.094vw, 1.25px); 
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
  color: var(--font-color-default);
  padding: clamp(10px, 2vw, 20px); 
  overflow-y: auto; 

  .nav-title {
    font-size: var(--font-size-large); 
    font-weight: bold;
    color: var(--logo-text); 
    text-align: left;
    width: 100%;
    margin-bottom: clamp(15px, 3vw, 20px); 
  }
  .nav-description {
    font-size: var(--font-size-base); 
    color: var(--font-color-default);
    width: 100%;
    margin-top: 0;
    margin-bottom: clamp(20px, 4vw, 30px); 
    line-height: 1.4;
  }
  button {
    width: 100%;
    max-width: 100%;
    padding: clamp(10px, 2.5vw, 15px) clamp(15px, 3.5vw, 20px); 
    margin-bottom: clamp(5px, 1vw, 10px); 
    cursor: pointer;
    background-color: var(--drak-light-background); 
    color: var(--light-text);
    border: none;
    border-radius: 8px;
    font-size: var(--font-size-base); 
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 0 transparent;

    &:hover {
      background-color: #555;
    }
    &.active {
      background-color: var(--accent-teal-hover); 
      color: var(--dark-background);
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
  color: var(--light-text);
  padding: clamp(10px, 2vw, 20px); 
}

.display-content {
  text-align: left;
  width: 90%;
  height: 100%; 
  overflow-y: auto; 
  padding-right: 5px; 
  box-sizing: border-box;

  h1 {
    font-size: var(--font-size-large); 
    font-weight: bold;
    color: var(--logo-text);
    margin-bottom: clamp(10px, 2vw, 20px); 
    text-align: center; 
    width: 100%;
  }
  p {
    color: var(--font-color-default);
    font-size: var(--font-size-base); 
    line-height: 1.5;
  }
}

.about-content,
.skills-content,
.experience-content,
.academic-content {
  width: 100%;
  height: auto; 
  overflow-y: visible; 
  box-sizing: border-box;
  padding-right: 0; 
}

.academic-content{
  .academic-section{
    background-color: var(--drak-light-background); 
    margin-bottom: clamp(8px, 1.5vw, 12px); 
    padding: clamp(8px, 1.5vw, 12px); 
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    p{
      color: var(--font-color-default);
      font-size: var(--font-size-small); 
      line-height: 1.4;
    }
    .acad-title{
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.5vw, 12px); 
      h2{
        color: var(--accent-teal);
        margin-bottom: clamp(2px, 0.5vw, 5px); 
        margin-top: 0; 
        font-size: var(--font-size-medium); 
      }
      .calendar-icon{
        width: clamp(20px, 4vw, 24px); 
        height: clamp(20px, 4vw, 24px); 
        filter: var(--img--accent-teal);
        vertical-align: middle; 
      }
    }
  }
}
.experience-content,
.skills-content { 
 .experience-section,
 .skill-section { 
    background-color: var(--drak-light-background); 
    margin-bottom: clamp(8px, 1.5vw, 12px); 
    padding: clamp(8px, 1.5vw, 12px); 
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    p{
      font-size: var(--font-size-small); 
      color: var(--font-color-default); 
      line-height: 1.4;
    }
    .exp-title,
    .skill-title { 
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.5vw, 12px); 
      h3{
        color: var(--accent-teal);
        margin-bottom: clamp(2px, 0.5vw, 5px); 
        margin-top: 0; 
        font-size: var(--font-size-medium); 
      }
      .exp-icon,
      .skill-icon { 
        width: clamp(20px, 4vw, 24px); 
        height: clamp(20px, 4vw, 24px); 
        filter: var(--img--accent-teal);
        vertical-align: middle; 
      }
    }
 } 
}

.skill-section {
  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: clamp(5px, 1vw, 8px); 
  }
  .skill-percentage {
    font-size: var(--font-size-base); 
    color: var(--accent-teal);
    font-weight: bold;
  }
  .progress-bar-container {
    width: 100%;
    height: clamp(6px, 1.2vw, 8px); 
    background-color: var(--dark-background); 
    border-radius: 5px;
    overflow: hidden;
  }
  .progress-bar-fill {
    height: 100%;
    background-color: var(--accent-teal);
    border-radius: 5px;
    transition: width 0.5s ease-in-out; 
  }
}

.about-content{
  .download-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: clamp(20px, 4vw, 30px); 

    .download-cv {
      background-color: var(--dark-background);
      color: var(--accent-teal);
      border: 2px solid var(--accent-teal);
      padding: clamp(8px, 2vw, 12px) clamp(15px, 3vw, 25px); 
      border-radius: 15px;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: clamp(3px, 0.8vw, 5px); 
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; 
      font-size: var(--font-size-base); 
      box-shadow: 0 0 0 transparent; 
      text-decoration: none;

      img {
        width: clamp(20px, 4vw, 25px); 
        height: clamp(20px, 4vw, 25px); 
        margin-right: -10px;
        filter: var(--img--accent-teal);
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
  .about-desc{
    p{
      color: var(--font-color-default);
      font-size: var(--font-size-base); 
      line-height: 1.6;
      margin-bottom: clamp(15px, 3vw, 20px); 
      strong {
        color: var(--accent-teal);
      }
    }
  }
  .about-info {
    display: grid;
    gap: clamp(8px, 1.5vw, 10px) clamp(15px, 3vw, 20px); 
    margin-bottom: clamp(20px, 4vw, 30px); 
    p {
      font-size: var(--font-size-base); 
      strong {
        color: var(--accent-teal);
        margin-right: 5px;
      }
      span {
        color: var(--font-color-default);
      }
    }
  }
}


@media (max-width: 768px) {
  .container {
    flex-direction: column; 
    height: 100%; 
    width: 100%;
    padding: clamp(10px, 3vw, 15px) 0; 
    box-sizing: border-box; 
    overflow-y: auto; 
    align-items: center; 
    justify-content: flex-start; 
  }

  .navigation-container {
    width: 95%; 
    height: auto; 
    padding: clamp(10px, 3vw, 15px); 
    margin-bottom: clamp(15px, 3vw, 20px); 

    .nav-title {
      margin-top: clamp(15px, 5vw, 30px); 
      font-size: var(--font-size-xl); 
      width: 90%;
      margin-bottom: clamp(5px, 1.5vw, 10px); 
      text-align: center; 
    }
    .nav-description {
      font-size: var(--font-size-small); 
      width: 90%;
      margin-bottom: clamp(8px, 2vw, 10px); 
      text-align: center; 
    }
    button {
      width: 90%; 
      max-width: 90%;
      padding: clamp(8px, 2.5vw, 10px) clamp(10px, 3vw, 15px); 
      margin-bottom: clamp(3px, 1vw, 5px); 
      font-size: var(--font-size-small); 
    }
  }
  .display-container {
    width: 95%; 
    height: auto; 
    padding: clamp(10px, 3vw, 15px); 
    box-shadow: none; 
    overflow-y: auto; 

    h1{
      font-size: var(--font-size-large); 
      margin-bottom: clamp(8px, 2vw, 15px); 
    }
    p {
      font-size: var(--font-size-small); 
      line-height: 1.3;
    }
  }
  .about-content,
  .skills-content,
  .experience-content,
  .academic-content{
    max-height: unset; 
    h2, h3{
      font-size: var(--font-size-medium); 
    }
  }

  .about-content .about-info {
    grid-template-columns: 1fr; 
    gap: clamp(5px, 1.5vw, 8px); 
    p {
      font-size: var(--font-size-small); 
    }
  }
  .about-content .download-container {
    margin-top: clamp(15px, 3vw, 20px); 
  }

  .academic-content .academic-section,
  .experience-content .experience-section,
  .skills-content .skill-section {
    padding: clamp(8px, 2vw, 10px); 
    margin-bottom: clamp(5px, 1vw, 8px); 
    p {
      font-size: var(--font-size-small); 
    }
    .acad-title h2,
    .exp-title h3,
    .skill-title h3 {
      font-size: var(--font-size-base); 
    }
    .calendar-icon,
    .exp-icon,
    .skill-icon {
      width: clamp(18px, 4vw, 20px); 
      height: clamp(18px, 4vw, 20px); 
    }
    .skill-percentage {
      font-size: var(--font-size-small); 
    }
  }
}

</style>
