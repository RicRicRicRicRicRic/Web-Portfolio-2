<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import profileImage from '@/assets/Profile.png';
import familyImage from '@/assets/family_pic.jpg'

const pageContainer = ref<HTMLElement | null>(null);
const activeDot = ref(0);
let observer: IntersectionObserver | null = null; 

const createObserver = () => {
  if (!pageContainer.value) return;

  const options = {
    root: pageContainer.value,
    rootMargin: '0px',
    threshold: 0.25,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(pageContainer.value!.querySelectorAll('.scroll-item')).indexOf(entry.target as HTMLElement);
        if (index !== -1) {
          activeDot.value = index;
        }
      }
    });
  }, options);

  pageContainer.value.querySelectorAll('.scroll-item').forEach((item) => {
    observer!.observe(item);
  });
};

const scrollToSection = (index: number) => {
  if (!pageContainer.value) return;

  const scrollItems = pageContainer.value.querySelectorAll('.scroll-item');
  if (scrollItems[index]) {
    const targetElement = scrollItems[index] as HTMLElement;
    pageContainer.value.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  createObserver();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="container">
    <div class="page-container" ref="pageContainer">
      <div class="scroll-item">
        <div class="scroll-item-content">
          <div class="picture-container">
            <img :src="profileImage" alt="Profile Picture" class="profile-pic">
          </div>
          <div class="about-me">
            <h1>About me</h1>
            <p>I'm Ric Michael Estremadura, currently a Computer Science Student.
              Passionate and driven third-year Computer Science student with hands-on experience in building and
              designing websites, creating and developing 2d games with godot engine, as well as creating robust
              applications using C# and .NET frameworks. Eager to leverage technical expertise, innovative thinking,
              and collaborative spirit to contribute to a dynamic development team and drive innovative solutions in
              the tech industry.
            </p>
          </div>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-item-content">
          <div class="describe-myslef">
            <h1>Describing myself</h1>
            <p>While I'm naturally a quiet, introverted, and reserved person, it certainly doesn't stop me from being a
              collaborative team player. Outside of coding and building projects, you'll often find me unwinding by
              playing video games, reading manga, or watching anime/TV series. To stay active, I enjoy hitting the gym,
              jump roping, and occasionally doing calisthenics.</p>
          </div>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-item-content">
          <div class="picture-container">
            <img :src="familyImage" alt="Family Picture" class="profile-pic">
          </div>
          <div class="family-background">
            <h1>Family Background</h1>
            <p>My mother's family hails from Iloilo City, where she grew up before eventually moving to Metro Manila.
              My father's side is from Pasig City. Following my parents' separation, I was primarily raised by my
              mother's family. Having been primarily raised by my mother's family after my parents' separation,
              they helped me support my education and the tools i need to help
              me achieve my ambitions so that one day I will be able to support them back.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="dot-navigation">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="dot"
        :class="{ active: activeDot === index }"
        @click="scrollToSection(index)"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: var(--align--wdith);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: clamp(10px, 2vw, 20px) 0;
}

.page-container {
  height: 85%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  box-sizing: border-box;
}

.page-container::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
.page-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-item {
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--dark-background);

  .scroll-item-content {
    max-width: var(--align--wdith);
    width: 100%;
    box-sizing: border-box;
    color: var(--light-text);
    text-align: left;
    display: flex;
    align-items: center;
    gap: clamp(20px, 4vw, 30px);
    padding: clamp(15px, 3vw, 20px);
  }
}

.picture-container {
  width: clamp(250px, 40%, 300px);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  height: clamp(200px, 40vh, 250px);

  .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}

.family-background,
.about-me {
  width: clamp(300px, 60%, 500px);
  flex-shrink: 0;
  padding-left: clamp(15px, 3vw, 30px);
  box-sizing: border-box;
  text-align: left;
}

.describe-myslef{
  text-align: right;
  padding: 0 clamp(15px, 3vw, 30px);
  box-sizing: border-box;
  width: 100%;
}

.describe-myslef,
.family-background,
.about-me{
  p{
    font-size: var(--font-size-base);
    color: var(--font-color-default);
    line-height: 1.6;
  }
  h1{
    color: var(--accent-teal);
    font-size: var(--font-size-xxl);
    margin-bottom: clamp(10px, 2vw, 15px);
    white-space: normal;
  }
}

.dot-navigation {
  position: fixed;
  top: 50%;
  right: clamp(150px, 25vw, 250px);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 10px);
  z-index: 10;

  .dot {
    width: clamp(10px, 2vw, 12px);
    height: clamp(10px, 2vw, 12px);
    background-color: var(--drak-light-background);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .dot.active {
    background-color: var(--accent-teal);
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: clamp(5px, 1.5vw, 10px);
  }

  .page-container {
    height: 100%;
    width: 100%;
  }

  .scroll-item {
    .scroll-item-content {
      flex-direction: column;
      text-align: center;
      padding: clamp(15px, 4vw, 20px) clamp(10px, 3vw, 15px);
      gap: clamp(15px, 4vw, 20px);
    }
  }

  .picture-container {
    width: clamp(180px, 50vw, 250px);
    height: clamp(150px, 40vw, 200px);
    margin-bottom: clamp(10px, 2vw, 20px);
    order: -1;
  }

  .about-me,
  .family-background,
  .describe-myslef {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    order: 1;
  }

  .describe-myslef {
    padding: 0;
  }

  .describe-myslef,
  .family-background,
  .about-me{
    p {
      font-size: var(--font-size-small);
      line-height: 1.4;
    }
    h1 {
      font-size: var(--font-size-xl);
      margin-bottom: clamp(5px, 1vw, 10px);
    }
  }

  .dot-navigation {
    bottom: clamp(200px, 40vw, 600px); 
    top: auto; 
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    flex-direction: row;
    gap: clamp(5px, 1.2vw, 8px);
  }
  .dot {
    width: clamp(8px, 1.8vw, 10px);
    height: clamp(8px, 1.8vw, 10px);
  }
}
</style>
