<script setup lang="ts">
import { ref, onMounted } from 'vue';

const godotIcon = "https://api.iconify.design/simple-icons/godotengine.svg";
const vueIcon = "https://api.iconify.design/simple-icons/vuedotjs.svg";
const jsIcon = "https://api.iconify.design/simple-icons/nodedotjs.svg";
const fastapiIcon = "https://api.iconify.design/simple-icons/fastapi.svg";
const dotnetIcon = "https://api.iconify.design/simple-icons/dotnet.svg";
const htmlIcon = "https://api.iconify.design/simple-icons/html5.svg";
const cssIcon = "https://api.iconify.design/simple-icons/css3.svg";
const csharpIcon = "https://api.iconify.design/devicon-plain:csharp.svg";
const pythonIcon = "https://api.iconify.design/akar-icons/python-fill.svg";
const javaIcon = "https://api.iconify.design/hugeicons:java.svg";

const shouldAnimateSkills = ref(false);

const skillsData = ref([
  {
    name: 'Godot Engine',
    icon: godotIcon,
    description: 'Proficient in developing 2D games using Godot Engine and GDScript, including physics, animations, and UI implementation.',
    percentage: 65,
  },
  {
    name: 'Vue.js',
    icon: vueIcon,
    description: 'Highly skilled in building modern, reactive user interfaces with Vue.js, Vue Router, and Pinia/Vuex for state management.',
    percentage: 85,
  },
  {
    name: 'JavaScript / Node.js (ExpressJS)',
    icon: jsIcon,
    description: 'Strong command of JavaScript for front-end interactivity and backend development with Node.js and ExpressJS for scalable web applications.',
    percentage: 50,
  },
  {
    name: 'FastAPI',
    icon: fastapiIcon,
    description: 'Experienced in building robust and high-performance RESTful APIs with FastAPI and Python, utilizing Pydantic for data validation.',
    percentage: 50,
  },
  {
    name: '.NET (C#)',
    icon: dotnetIcon,
    description: 'Solid experience in developing desktop and web applications using C# and the .NET framework, including WinForms, WPF, and ASP.NET Core.',
    percentage: 65,
  },
  {
    name: 'HTML5',
    icon: htmlIcon,
    description: 'Expert in semantic HTML5 markup for structuring web content and ensuring accessibility.',
    percentage: 95,
  },
  {
    name: 'CSS3',
    icon: cssIcon,
    description: 'Adept at styling web pages with CSS3, including responsive design, animations, and preprocessors like SCSS.',
    percentage: 90,
  },
  {
    name: 'C#',
    icon: csharpIcon,
    description: 'Strong foundational knowledge and practical experience in C# for various application types.',
    percentage: 65,
  },
  {
    name: 'Python',
    icon: pythonIcon,
    description: 'Proficient in Python for scripting, data manipulation, and backend development.',
    percentage: 70,
  },
  {
    name: 'Java',
    icon: javaIcon,
    description: 'Good understanding of Java fundamentals and object-oriented programming for application development.',
    percentage: 60,
  },
]);

// Trigger skill bar animations shortly after the component is mounted
onMounted(() => {
  setTimeout(() => {
    shouldAnimateSkills.value = true;
  }, 50);
});
</script>

<template>
  <div class="skills-container">
    <h1>Acquired Skills and Certificates</h1>
    <div class="content-columns-wrapper">
      <div class="certificate-column">
        <div class="certificate-content">
          <div class="certificate-section">
            <h3>Senior High School Diploma (ICT Strand)</h3>
            <p>Completed the Information and Communications Technology (ICT) strand, gaining foundational knowledge in programming and digital literacy.</p>
          </div>
          <div class="certificate-section">
            <h3>Adamsom Computer Literacy Training Program</h3>
            <p>Completed the Adamsom Computer Literacy Training Program, gaining basic knowledge in using computer applications and basic knowledge with html programming</p>
          </div>
          <div class="certificate-section">
            <h3>ACTS-Tesda Computer Systems Servicing</h3>
            <p>Completed the ACTS-Tesda Computer Systems Servicing porgram, gaining knowledge on computer hardware installation, software cnofiguration, troubleshooting and networking</p>
          </div>
        </div>
      </div>
      <div class="skills-column">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills-container {
  height: 95%; 
  max-width: var(--align--wdith); 
  box-sizing: border-box;
  padding: clamp(10px, 2vw, 20px); 
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; 

  h1 {
    font-size: var(--font-size-xl); 
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: clamp(15px, 3vw, 30px); 
    text-align: center;
    width: 100%;
  }
}

.content-columns-wrapper {
  display: flex;
  gap: clamp(15px, 3vw, 20px); 
  width: 100%;
  height: calc(100% - clamp(60px, 10vh, 70px)); 
  box-sizing: border-box;
  align-items: stretch; 
  padding: 0 clamp(5px, 1vw, 10px); 
}

.certificate-column {
  width: 30%; 
  flex-shrink: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .certificate-content {
    background-color: var(--drak-light-background);
    padding: clamp(10px, 2vw, 15px); 
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    height: 100%;
    overflow-y: auto; 
    display: flex;
    flex-direction: column;
    gap: clamp(8px, 1.5vw, 10px); 

    .certificate-section {
      background-color: var(--dark-background);
      padding: clamp(8px, 1.5vw, 10px) clamp(10px, 2vw, 15px); 
      border-radius: 8px;
      flex-shrink: 0; 

      p {
        font-size: var(--font-size-small); 
        color: var(--font-color-default);
        margin-top: clamp(5px, 1vw, 8px); 
        margin-bottom: 0; 
        line-height: 1.4;
      }

      h3 {
        color: var(--light-text);
        font-size: var(--font-size-base); 
        margin-top: 0;
        margin-bottom: clamp(2px, 0.5vw, 5px); 
      }
    }
  }
}

.skills-column {
  width: 70%; 
  flex-shrink: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .skills-content {
    width: 100%;
    height: 100%;
    overflow-y: auto; 
    padding-right: clamp(5px, 1vw, 10px); 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vw, 15px); 
  }
}

.skill-section {
  background-color: var(--drak-light-background);
  padding: clamp(10px, 2vw, 15px); 
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0; 

  &:hover {
    transform: translateY(-5px);
  }

  p {
    font-size: var(--font-size-small); 
    color: var(--font-color-default);
    margin-top: clamp(8px, 1.5vw, 10px); 
    margin-bottom: clamp(10px, 2vw, 15px); 
    line-height: 1.4;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: clamp(5px, 1vw, 10px); 

    .skill-title {
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.5vw, 12px); 

      h3 {
        color: var(--light-text);
        font-size: var(--font-size-medium); 
        margin: 0;
      }

      .skill-icon {
        width: clamp(24px, 5vw, 32px); 
        height: clamp(24px, 5vw, 32px); 
        filter: var(--img--accent-teal);
      }
    }

    .skill-percentage {
      font-size: var(--font-size-base); 
      color: var(--accent-teal);
      font-weight: bold;
    }
  }

  .progress-bar-container {
    width: 100%;
    height: clamp(8px, 1.5vw, 10px); 
    background-color: var(--dark-background);
    border-radius: 5px;
    overflow: hidden;

    .progress-bar-fill {
      height: 100%;
      background-color: var(--accent-teal);
      border-radius: 5px;
      transition: width 0.8s ease-out;
    }
  }
}

@media (max-width: 768px) {
  .skills-container {
    height: 90%; 
    padding: clamp(5px, 2vw, 15px); 
    h1 {
      font-size: var(--font-size-large); 
      margin-bottom: clamp(15px, 5vw, 25px); 
      white-space: normal; 
    }
  }

  .content-columns-wrapper {
    flex-direction: column; 
    height: calc(100% - clamp(50px, 10vh, 70px)); 
    padding: 0; 
    overflow-y: auto; 
    align-items: center; 
  }

  .certificate-column,
  .skills-column {
    width: 95%; 
    height: auto; 
    flex-shrink: 1; 
    max-height: 50%; 
    overflow-y: auto; 
  }

  .skills-column .skills-content {
    padding-right: 0; 
  }

  .skill-section{
    padding-right: clamp(10px, 2vw, 15px); 
    p {
      font-size: var(--font-size-small); 
      margin-top: clamp(5px, 1vw, 10px); 
      margin-bottom: clamp(10px, 2vw, 15px); 
      line-height: 1.2;
    }
    .skill-header {
      .skill-title {
        gap: clamp(5px, 1vw, 10px); 

        h3 {
          font-size: var(--font-size-small); 
        }
      }
      .skill-percentage {
        font-size: var(--font-size-small); 
      }
    }
  }
  .certificate-column{
    .certificate-content {
      padding: clamp(5px, 1vw, 10px); 
      .certificate-section {
        padding: clamp(3px, 0.8vw, 5px) clamp(5px, 1vw, 10px); 
        h3 {
          font-size: var(--font-size-small); 
        }
        p {
          font-size: var(--font-size-small); 
        }
      }
    }
  }
}
</style>
