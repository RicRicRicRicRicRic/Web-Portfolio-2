<script setup lang="ts">
const graduateIcon = "https://api.iconify.design/vaadin:diploma-scroll.svg";
const programmerIcon = "https://api.iconify.design/mdi:code.svg";
const freelancerIcon = "https://api.iconify.design/simple-icons:freelancer.svg";

const aspirations = [
  {
    icon: graduateIcon,
    title: "Graduate",
    description: "Successfully complete my Computer Science degree, mastering core concepts in algorithms, data structures, and software engineering principles. Aspiring to graduate with a strong foundation for future career endeavors."
  },
  {
    icon: programmerIcon,
    title: "Programmer",
    description: "Continuously enhance my coding proficiency across multiple languages and frameworks. Aiming to build innovative and scalable software solutions, contributing to impactful projects and staying updated with emerging technologies."
  },
  {
    icon: freelancerIcon,
    title: "Freelancer",
    description: "Establish a successful freelance career, delivering high-quality web development and programming services to clients worldwide. Building a reputation for reliability, creativity, and technical excellence in the freelance market."
  }
];
</script>

<template>
  <div class="aspirations-page-container">
    <h1>My Aspirations</h1>
    <div class="aspirations-grid">
      <div v-for="(aspiration, index) in aspirations" :key="index" class="aspiration-card">
        <div class="icon-container">
          <img :src="aspiration.icon" :alt="aspiration.title + ' Icon'" class="aspiration-icon" />
        </div>
        <h2>{{ aspiration.title }}</h2>
        <p>{{ aspiration.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aspirations-page-container {
  height: 95%; 
  width: var(--align--wdith);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: 20px;
  overflow-y: auto; 

  h1 {
    font-size: 2.5em;
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
}

.aspirations-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: var(--align--wdith);
}

.aspiration-card {
  background-color: var(--drak-light-background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 180px;
  max-width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .icon-container {
    width: 80px;
    height: 80px;
    background-color: var(--dark-background);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-shrink: 0;
  }

  .aspiration-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    filter: var(--img--accent-teal);
  }

  h2 {
    font-size: 1.8em;
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: 15px;
  }

  p {
    font-size: 1em;
    line-height: 1.2;
    color: var(--light-text);
  }
}

@media (max-width: 768px) {
  .aspirations-page-container {
    width: 100%;
    padding: 10px;
    justify-content: flex-start;
  }

  .aspirations-page-container h1 {
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .aspirations-grid {
    flex-direction: column; 
    align-items: center;
    gap: 15px;
    width: 100%; 
  }

  .aspiration-card {
    width: 85%; 
    max-width: 400px;
    min-width: unset;
    padding: 12px;
    .icon-container {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    .aspiration-icon {
      width: 30px;
      height: 30px;
    }
    h2 {
      font-size: 1em;
      margin-bottom: 4px;
    }
    p {
      font-size: 0.8em;
      line-height: 1;
    }
  }
}
</style>
