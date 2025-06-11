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
  padding: clamp(15px, 3vw, 20px); 
  overflow-y: auto; 

  h1 {
    font-size: var(--font-size-xxl); 
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: clamp(25px, 5vw, 40px); 
    text-align: center;
    width: 100%;
  }
}

.aspirations-grid {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: clamp(20px, 4vw, 30px); 
  width: 100%;
  max-width: var(--align--wdith); 
}

.aspiration-card {
  background-color: var(--drak-light-background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: clamp(7.5px, 1.5vw, 10px); 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1; 
  min-width: clamp(150px, 25vw, 180px); 
  max-width: clamp(240px, 35vw, 270px); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: auto; 
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .icon-container {
    width: clamp(60px, 10vw, 80px); 
    height: clamp(60px, 10vw, 80px); 
    background-color: var(--dark-background);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: clamp(15px, 3vw, 20px); 
    flex-shrink: 0;
  }

  .aspiration-icon {
    width: clamp(40px, 7vw, 50px); 
    height: clamp(40px, 7vw, 50px); 
    object-fit: contain;
    filter: var(--img--accent-teal);
  }

  h2 {
    font-size: var(--font-size-xl); 
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: clamp(10px, 2vw, 15px); 
  }

  p {
    font-size: var(--font-size-base); 
    line-height: 1.4; 
    color: var(--light-text);
  }
}

@media (max-width: 768px) {
  .aspirations-page-container {
    width: 100%;
    padding: clamp(10px, 3vw, 15px); 
    justify-content: flex-start; 
  }

  .aspirations-page-container h1 {
    font-size: var(--font-size-xl); 
    margin-bottom: clamp(15px, 4vw, 20px); 
  }
  .aspirations-grid {
    flex-direction: column; 
    align-items: center;
    gap: clamp(10px, 3vw, 15px); 
    width: 100%; 
  }

  .aspiration-card {
    width: 90%; 
    max-width: clamp(280px, 70vw, 400px); 
    min-width: unset; 
    padding: clamp(10px, 2.5vw, 12px); 
    .icon-container {
      width: clamp(40px, 8vw, 50px); 
      height: clamp(40px, 8vw, 50px); 
      margin-bottom: clamp(8px, 2vw, 10px); 
    }
    .aspiration-icon {
      width: clamp(24px, 5vw, 30px); 
      height: clamp(24px, 5vw, 30px); 
    }
    h2 {
      font-size: var(--font-size-large); 
      margin-bottom: clamp(5px, 1.5vw, 8px); 
    }
    p {
      font-size: var(--font-size-small); 
      line-height: 1.2;
    }
  }
}
</style>
