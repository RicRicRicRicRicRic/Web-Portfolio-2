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
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2em;
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }
}

.content-columns-wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
  height: calc(100% - 70px);
  box-sizing: border-box;
  align-items: stretch;
  padding: 0 10px;
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
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    height: 100%;
    overflow-y: auto;

    .certificate-section {
      background-color: var(--dark-background);
      padding: 10px 15px;
      border-radius: 8px;
      margin-bottom: 10px;

      p {
        font-size: 0.9rem;
        color: var(--font-color-default);
      }

      h3 {
        color: var(--light-text);
        font-size: 1.1em;
        margin-top: 0;
        margin-bottom: 5px;
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
    padding-right: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

.skill-section {
  background-color: var(--drak-light-background);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    font-size: 0.95rem;
    color: var(--font-color-default);
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .skill-title {
      display: flex;
      align-items: center;
      gap: 12px;

      h3 {
        color: var(--light-text);
        font-size: 1.2em;
        margin: 0;
      }

      .skill-icon {
        width: 32px;
        height: 32px;
        filter: var(--img--accent-teal);
      }
    }

    .skill-percentage {
      font-size: 1em;
      color: var(--accent-teal);
      font-weight: bold;
    }
  }

  .progress-bar-container {
    width: 100%;
    height: 10px;
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

    h1 {
      font-size: 1.2em;
      margin-bottom: 25px;
      width: 100%;
    }
  }

  .certificate-column,
  .skills-column {
    width: 50%;
  }
  .skill-section{
    padding-right: 15px;
    p {
      font-size: 0.65rem;
      margin-top: 10px;
      margin-bottom: 15px;
      line-height: 1;
    }
      .skill-header {
      .skill-title {
        display: flex;
        gap: 10px;

        h3 {
          color: var(--light-text);
          font-size: 0.7em;
          margin: 0;
        }
      }
    }
  }
  .content-columns-wrapper {
    gap: 10px;
  }
  .certificate-column{
      .certificate-content {
      padding: 10px;
      .certificate-section {

        padding: 5px 10px;
        border-radius: 8px;
        margin-bottom: 10px;

        p {
          font-size: 0.8rem;
        }

        h3 {
          font-size: 0.8em;
        }
      }
    }
  }

}
</style>
