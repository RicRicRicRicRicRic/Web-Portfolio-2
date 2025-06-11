<script setup lang="ts">
import { ref, computed } from 'vue';

const debuggingIcon = "https://api.iconify.design/carbon:debug.svg";
const deadlineIcon = "https://api.iconify.design/uiw:date.svg";
const requirementsIcon = "https://api.iconify.design/carbon:document-requirements.svg";

const selectedChallenge = ref<string | null>(null);

const challengeDetails = {
  debugging: {
    title: "Debugging Complex Code",
    description: "My biggest hurdle as a programmer has been tracing and resolving issues in complex codebases. The process often felt like searching for a needle in a haystack, especially with large-scale applications or intricate logic. I've learned to approach debugging systematically, utilizing browser developer tools, setting breakpoints, and understanding call stacks. This disciplined approach has not only made me more efficient but also deepened my understanding of how software truly operates."
  },
  deadlines: {
    title: "Meeting Tight Deadlines",
    description: "Consistently delivering projects under strict deadlines presented a significant challenge. The pressure to balance quality with speed, especially when unforeseen issues arose, was immense. Through experience, I've developed robust time management and task prioritization strategies. I now break down projects into smaller, manageable sprints, set realistic milestones, and factor in buffers for unexpected complexities, ensuring timely and high-quality deliverables."
  },
  requirements: {
    title: "Handling Unclear Requirements",
    description: "Initially, ambiguous or incomplete project requirements were a major source of frustration, making it difficult to even begin coding or define the scope effectively. I've learned to proactively bridge this gap by asking precise, clarifying questions, creating visual mock-ups or prototypes, and establishing continuous feedback loops with stakeholders. This iterative communication ensures that the final product aligns perfectly with the unspoken needs and expectations."
  }
};

const currentDescription = computed(() => {
  if (!selectedChallenge.value) {
    return "Select one of the challenges faced to know more.";
  }
  return challengeDetails[selectedChallenge.value as keyof typeof challengeDetails]?.description || "Description not found.";
});

const currentTitle = computed(() => {
  if (!selectedChallenge.value) {
    return "Challenges & Learnings";
  }
  return challengeDetails[selectedChallenge.value as keyof typeof challengeDetails]?.title || "Details";
});


const selectChallenge = (challengeId: string) => {
  selectedChallenge.value = challengeId;
};
</script>

<template>
  <div class="insights-page-container">
    <h1>{{ currentTitle }}</h1>
    <div class="challenge-buttons-container">
      <button
        class="challenge-button"
        :class="{ 'active': selectedChallenge === 'debugging' }"
        @click="selectChallenge('debugging')"
      >
        <img :src="debuggingIcon" alt="Debugging Icon" class="button-icon" />
        <span>Debugging</span>
      </button>

      <button
        class="challenge-button"
        :class="{ 'active': selectedChallenge === 'deadlines' }"
        @click="selectChallenge('deadlines')"
      >
        <img :src="deadlineIcon" alt="Deadline Icon" class="button-icon" />
        <span>Deadlines</span>
      </button>

      <button
        class="challenge-button"
        :class="{ 'active': selectedChallenge === 'requirements' }"
        @click="selectChallenge('requirements')"
      >
        <img :src="requirementsIcon" alt="Requirements Icon" class="button-icon" />
        <span>Requirements</span>
      </button>
    </div>

    <div class="description-section">
      <p v-if="!selectedChallenge" class="default-message">
        {{ currentDescription }}
      </p>
      <p v-else>
        {{ currentDescription }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.insights-page-container {
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
    margin-bottom: clamp(20px, 4vw, 30px); 
    text-align: center;
    width: 100%;
  }
}

.challenge-buttons-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: clamp(15px, 3vw, 20px); 
  margin-bottom: clamp(20px, 4vw, 30px); 
  width: 100%;
  max-width: 900px; 
}

.challenge-button {
  background-color: var(--drak-light-background);
  color: var(--light-text);
  border: 1px solid var(--drak-light-background);
  padding: clamp(10px, 2.5vw, 15px) clamp(15px, 3.5vw, 25px); 
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: var(--font-size-medium); 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(8px, 1.5vw, 10px); 
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1 1 auto; 
  min-width: clamp(120px, 25vw, 150px); 
  max-width: clamp(200px, 30vw, 250px); 

  &:hover {
    background-color: var(--dark-background);
    border-color: var(--accent-teal);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: var(--accent-teal);
    color: var(--dark-background);
    border-color: var(--accent-teal);
    box-shadow: 0 0 15px var(--accent-teal);
  }

  &.active .button-icon {
    filter: invert(10%) sepia(100%) saturate(500%) hue-rotate(20deg) brightness(120%);
  }
}

.button-icon {
  width: clamp(30px, 6vw, 40px); 
  height: clamp(30px, 6vw, 40px); 
  object-fit: contain;
  filter: var(--img--accent-teal);
  transition: filter 0.3s ease;
}

.description-section {
  background-color: var(--drak-light-background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: clamp(20px, 4vw, 30px); 
  text-align: center;
  width: 100%;
  max-width: 90%;
  height: clamp(120px, 25vh, 175px); 
  min-height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto; 

  p {
    font-size: var(--font-size-base); 
    line-height: 1.6;
    color: var(--light-text);
    max-width: 800px;
    margin: 0;
  }

  .default-message {
    color: var(--font-color-default);
    font-style: italic;
  }
}

// Media query for mobile responsiveness (max-width 768px)
@media (max-width: 768px) {
  .insights-page-container {
    width: 100%;
    height: 100%;
    padding: clamp(10px, 3vw, 15px); 
    h1 {
      font-size: var(--font-size-xl); 
      margin-bottom: clamp(10px, 3vw, 20px); 
      white-space: normal; 
    }
  }

  .challenge-buttons-container {
    flex-direction: column; 
    align-items: center;
    gap: clamp(10px, 3vw, 15px); 
    margin-bottom: clamp(15px, 4vw, 20px); 
  }
  .challenge-button {
    width: 90%; 
    max-width: 280px; 
    padding: clamp(8px, 2.5vw, 12px) clamp(10px, 3vw, 20px); 
    font-size: var(--font-size-base); 
    gap: clamp(5px, 1.5vw, 8px); 
    .button-icon {
      width: clamp(28px, 6vw, 32px); 
      height: clamp(28px, 6vw, 32px); 
    }
  }
  .description-section {
    padding: clamp(15px, 4vw, 20px); 
    height: clamp(100px, 20vh, 150px); 
    min-height: 200px; 
    max-width: 95%; 
    p {
      font-size: var(--font-size-small); 
      line-height: 1.5;
    }
  }
}

@media (max-width: 480px) {
  .insights-page-container {
    padding: clamp(5px, 2vw, 10px); 
  }
  .insights-page-container h1 {
    font-size: var(--font-size-large); 
    margin-bottom: clamp(10px, 3vw, 15px); 
  }
  .challenge-button {
    width: 95%; 
    padding: clamp(8px, 2.5vw, 10px) clamp(10px, 3vw, 15px); 
    font-size: var(--font-size-small); 
    .button-icon {
      width: clamp(24px, 5vw, 28px); 
      height: clamp(24px, 5vw, 28px); 
    }
  }
  .description-section {
    padding: clamp(10px, 3vw, 15px); 
    width: 90%; 
    height: clamp(80px, 18vh, 120px); 
    p {
      font-size: var(--font-size-small); 
      line-height: 1.4;
    }
  }
}

</style>
