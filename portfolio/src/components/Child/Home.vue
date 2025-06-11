<script setup lang="ts">
import { ref, onMounted } from 'vue';
import profileImage from '@/assets/Profile.png';
import resume from '@/assets/Estremadura_CV_2.pdf'

const githubIcon = "https://simpleicons.org/icons/github.svg";
const instagramIcon = "https://simpleicons.org/icons/instagram.svg";
const youtubeIcon = "https://simpleicons.org/icons/youtube.svg";
const facebookIcon = "https://simpleicons.org/icons/facebook.svg";
const downloadIcon = "https://unpkg.com/feather-icons@4.29.2/dist/icons/download.svg";

const githubLink = "https://github.com/RicRicRicRicRicRic";
const instagramLink = "https://www.instagram.com/ricmichaelestremadura/";
const youtubeLink = "https://www.youtube.com/@RICMICHAELESTREMADURA";
const facebookLink = "https://www.facebook.com/rm.estremadura/";

const typedSpecialization = ref('');
const specializations = [
  'Software Developer',
  'Web Developer',
  'Programmer',
  'Computer Science Student',
  'Game Developer',
];

let specializationIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBeforeDelete = 1500;
const pauseBeforeType = 500;

const typeEffect = () => {
  const currentWord = specializations[specializationIndex];
  if (isDeleting) {
    typedSpecialization.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      specializationIndex = (specializationIndex + 1) % specializations.length;
      setTimeout(typeEffect, pauseBeforeType);
    } else {
      setTimeout(typeEffect, deletingSpeed);
    }
  } else {
    typedSpecialization.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseBeforeDelete);
    } else {
      setTimeout(typeEffect, typingSpeed);
    }
  }
};

onMounted(() => {
  typeEffect();
});

</script>

<template>
<div class="container">
  <div class="main-about-section">
    <div class="about-content">
      <p class="specialization">{{ typedSpecialization }}<span class="blinking-cursor">|</span></p>
      <h1>Hello I'm Ric.</h1>
      <p class="description">3rd year computer science student,
        excels at crafting elegant digital experiences and proficient
        in various programming languages and technologies.</p>
      <div class="action-buttons">
        <a :href="resume" download="Ric_Michael_Estremadura_CV.pdf" class="download-cv">
          Download CV
          <img :src="downloadIcon" alt="Download Icon">
        </a>
        <div class="social-links">
          <a :href="githubLink" target="_blank" rel="noopener noreferrer">
            <img :src="githubIcon" alt="GitHub">
          </a>
          <a :href="instagramLink" target="_blank" rel="noopener noreferrer">
            <img :src="instagramIcon" alt="Instagram"> </a>
          <a :href="youtubeLink" target="_blank" rel="noopener noreferrer">
            <img :src="youtubeIcon" alt="YouTube">
          </a>
          <a :href="facebookLink" target="_blank" rel="noopener noreferrer">
            <img :src="facebookIcon" alt="Facebook"> </a>
        </div>
      </div>
    </div>
    <div class="profile-section">
      <img :src="profileImage" alt="Profile Picture" class="pfp-pic">
    </div>
  </div>
  <div class="stats-grid">
    <div>
      <span>3</span>
      <span>Years of experience</span>
    </div>
    <div>
      <span>10</span>
      <span>Projects completed</span>
    </div>
    <div>
      <span>7</span>
      <span>Technologies mastered</span>
    </div>
    <div>
      <span>223</span>
      <span>Code commits</span>
    </div>
  </div>
</div>
</template>


<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(10px, 2vw, 20px);
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  gap: clamp(30px, 6vw, 50px);
}

.main-about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(30px, 6vw, 50px);
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--align--wdith);
  margin-bottom: 0;
}

.about-content {
  flex: 1;
  min-width: clamp(280px, 60vw, 300px);
  color: var(--light-text);
  order: 1;
}

.profile-section {
  flex-shrink: 0;
  width: clamp(250px, 50vw, 300px);
  height: clamp(250px, 50vw, 300px);
  border-radius: 50%;
  border: 2px dashed var(--accent-teal);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  order: 2;
}

.specialization {
  font-size: var(--font-size-xl);
  color: var(--accent-teal);
  margin-bottom: 0px;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.blinking-cursor {
  font-weight: 1000;
  color: var(--accent-teal);
  animation: blink 0.75s infinite;
  padding:0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

h1 {
  font-size: var(--font-size-xxl);
  font-weight: bold;
  color: var(--light-text);
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: clamp(15px, 3vw, 20px);
}

.description {
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin-bottom: clamp(20px, 4vw, 30px);
  color: var(--font-color-default);
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: clamp(10px, 2vw, 20px);
  margin-bottom: clamp(25px, 5vw, 40px);
  flex-wrap: wrap;
}

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

.social-links {
  display: flex;
  gap: clamp(10px, 2vw, 15px);
}

.social-links a {
  width: clamp(30px, 6vw, 35px);
  height: clamp(30px, 6vw, 35px);
  border-radius: 50%;
  border: 1px solid var(--font-color-default);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    border-color: var(--accent-teal);
    box-shadow: var(--shadow-teal);
  }

  img {
    width: clamp(16px, 3vw, 20px);
    height: clamp(16px, 3vw, 20px);
    filter: var(--img--accent-teal);
  }
}

.pfp-pic {
  margin-left: clamp(20px, 4vw, 40px);
  height: 100%;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  transform: translateX(-5%) scale(1.05);
  filter: brightness(0.9) contrast(1.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(100px, 20vw, 120px), 1fr));
  gap: clamp(20px, 4vw, 30px);
  width: 100%;
  max-width: var(--align--wdith);
  justify-items: center;
  margin-top: 0;
  padding-bottom: clamp(10px, 2vw, 20px);
}

.stats-grid > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stats-grid > div > span:first-child {
  font-size: var(--font-size-xl);
  font-weight: bold;
  color: var(--accent-teal);
  margin-bottom: clamp(3px, 0.8vw, 5px);
}

.stats-grid > div > span:last-child {
  font-size: var(--font-size-small);
  color: var(--font-color-default);
}

@media (max-width: 768px) {
  .container {
    padding: clamp(10px, 3vw, 15px);
    margin-top: clamp(-20px, -4vw, -30px);
    gap: clamp(20px, 5vw, 30px);
    justify-content: flex-start;
    align-items: center;
  }

  .main-about-section {
    flex-direction: column;
    text-align: center;
    gap: clamp(15px, 4vw, 20px);
    margin-bottom: 0px;
  }

  .about-content {
    order: 2;
    min-width: unset;
    max-width: 95%;
    font-size: var(--font-size-base);
  }

  .profile-section {
    order: 1;
    width: clamp(200px, 50vw, 250px);
    height: clamp(200px, 50vw, 250px);
  }

  .specialization {
    justify-content: center;
    font-size: var(--font-size-medium);
    white-space: normal;
  }
  .blinking-cursor {
    padding:0;
  }

  h1 {
    font-size: var(--font-size-xl);
    margin-bottom: clamp(5px, 1.5vw, 10px);
    white-space: normal;
  }

  .action-buttons {
    justify-content: center;
    gap: clamp(8px, 2vw, 15px);
    margin-bottom: clamp(20px, 4vw, 30px);
  }
  .download-cv {
    padding: clamp(6px, 1.5vw, 10px) clamp(10px, 2.5vw, 20px);
    font-size: var(--font-size-small);
    img {
      width: clamp(18px, 4vw, 22px);
      height: clamp(18px, 4vw, 22px);
    }
  }
  .social-links a {
    width: clamp(28px, 5vw, 32px);
    height: clamp(28px, 5vw, 32px);
    img {
      width: clamp(14px, 3vw, 18px);
      height: clamp(14px, 3vw, 18px);
    }
  }
  .stats-grid {
    gap: clamp(15px, 4vw, 20px);
    grid-template-columns: repeat(auto-fit, minmax(clamp(80px, 20vw, 100px), 1fr));
    justify-items: center;
    margin-top: 0;
    padding-bottom: clamp(10px, 3vw, 20px);
  }
  .stats-grid > div {
    align-items: center;
    font-size: var(--font-size-small);
  }
  .stats-grid > div > span:first-child {
    font-size: var(--font-size-large);
  }
  .description {
    font-size: var(--font-size-small);
    line-height: 1.3;
    margin-bottom: clamp(15px, 3vw, 20px);
  }
  .pfp-pic {
    margin-left: clamp(0px, 0vw, 0px);
  }
}
</style>
