<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import profileImage from '@/assets/Profile.png'; // Imported profile image
import familyImage from '@/assets/family_pic.jpg' // Imported family image

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
  <div class ="container">
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
.container{
  height: 100%;
  width: var(--align--wdith);
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-container {

  height: 85%;
  width: var(--align--wdith);
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
    font-size: 2em;
    color: white;
    text-align: left; 
    display: flex; 
    align-items: center; 
    padding: 20px; 
  }
}

.picture-container {
  width: 40%; 
  flex-shrink: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px; 
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 

  box-sizing: border-box; 
  height: 100%;

  .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: contain; 
    border-radius: 8px; 
  }
}

.family-background,
.about-me {
  width: 60%; 
  flex-shrink: 0; 
  padding-left: 30px; 
  box-sizing: border-box; 
  text-align: left;
}

.describe-myslef{
  text-align: right;
  padding: 0 30px; 
  box-sizing: border-box;
  width: 100%; 
}


.describe-myslef,
.family-background,
.about-me{
  p{
    font-size: 18px;
    color: var(--font-color-default); 
  }
  h1{
    color: var(--accent-teal);
    font-size: 2em; 
    margin-bottom: 10px; 
  }
}


.dot-navigation {
  position: fixed;
  right: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  .dot {
    width: 12px;
    height: 12px;
    background-color: var(--drak-light-background); 
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .dot.active {
    background-color: lightgray;
  }
}
</style>
