```vue
<script setup lang="ts">
import profileImage from '@/assets/Profile.png';

const githubIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/github.png";
const linkedinIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png";
const youtubeIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/youtube--v1.png";
const twitterIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png";
</script>

<template>
  <div class="container">
    <div class="main-about-section">
      <div class="about-content">
        <p class="specialization">Software Developer</p>
        <h1>Hello I'm <br> Ric.</h1>
        <p class="description">3rd year computer science student,
          excels at crafting elegant digital experiences and proficient
          in various programming languages and technologies.</p>
        <div class="action-buttons">
          <button class="download-cv">More About Me</button>
          <div class="social-links">
            <a href="#">
              <img :src="githubIcon" alt="GitHub">
            </a>
            <a href="#">
              <img :src="linkedinIcon" alt="LinkedIn">
            </a>
            <a href="#">
              <img :src="youtubeIcon" alt="YouTube">
            </a>
            <a href="#">
              <img :src="twitterIcon" alt="Twitter">
            </a>
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
  background-color: var(--dark-background);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;
  overflow-y: auto;
}

.main-about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
}

.about-content {
  flex: 1;
  min-width: 300px;
  color: var(--light-text);
  order: 1;
}

.profile-section {
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px dashed var(--accent-teal);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  order: 2;
}

.specialization {
  font-size: 1.2em;
  color: var(--accent-teal);
  margin-bottom: 10px;
}

h1 {
  font-size: 3.5em;
  font-weight: bold;
  color: var(--light-text);
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 20px;
}

h1 br {
  display: none;
}

.description {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--nav-link-default);
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.download-cv {
  background-color: var(--accent-teal);
  color: var(--dark-background);
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-size: 0.95em;

  &:hover {
    background-color: var(--accent-teal-hover);
  }
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid var(--nav-link-default);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent-teal);
  }

  img {
    width: 20px;
    height: 20px;
    filter: var(--img--accent-teal);
  }
}

.pfp-pic {
  margin-left: 40px;
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
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 900px;
  justify-items: center;
}

.stats-grid > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stats-grid > div > span:first-child {
  font-size: 2.5em;
  font-weight: bold;
  color: var(--accent-teal);
  margin-bottom: 5px;
}

.stats-grid > div > span:last-child {
  font-size: 0.9em;
  color: var(--nav-link-default);
}

@media (max-width: 768px) {
  .container {
    padding: 30px;
    gap: 30px;
  }

  .main-about-section {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .about-content {
    order: 2;
    min-width: unset;
  }

  .profile-section {
    order: 1;
    width: 250px;
    height: 250px;
  }

  h1 {
    font-size: 2.5em;
  }

  h1 br {
    display: inline;
  }

  .action-buttons {
    justify-content: center;
  }

  .stats-grid > div {
    align-items: center;
  }

  .stats-grid {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
</style>
```