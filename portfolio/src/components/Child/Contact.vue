<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useReCaptcha } from 'vue-recaptcha-v3'; 


const locationIcon = "https://api.iconify.design/mdi:location.svg";
const phoneIcon = "https://api.iconify.design/ic:round-phone.svg";
const emailIcon = "https://api.iconify.design/ic:baseline-email.svg";
const messengerIcon = "https://api.iconify.design/bi:messenger.svg";

const phoneNumber = ref('+09152588723'); 
const contactEmail = ref('ricmichaele@gmail.com'); 
const locationAddress = ref('Las Piñas, Metro Manila, Philippines'); 
const messengerName = ref('Ric Michael Estremadura ');

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isLoading = ref(false);
const messageSent = ref<boolean | null>(null);
const feedbackMessage = ref<string>('');
const showModal = ref(false);

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

if (PUBLIC_KEY) {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
} else {
  console.error('EmailJS Public Key is not defined. Make sure it\'s set in your .env file.');
  feedbackMessage.value = 'Contact form not configured. Please check console for details.';
  showModal.value = true;
}

const recaptchaInstance = useReCaptcha();
const executeRecaptcha = recaptchaInstance?.executeRecaptcha;
const recaptchaLoaded = recaptchaInstance?.recaptchaLoaded;

if (recaptchaLoaded) {
  recaptchaLoaded().then(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.error('reCAPTCHA Site Key is not defined. Make sure it\'s set in your .env file.');
      feedbackMessage.value = 'reCAPTCHA not configured. Form might not work correctly.';
      showModal.value = true;
    }
  });
} else {
  console.error('useReCaptcha() did not return expected functions. Is the plugin correctly installed and registered in main.ts?');
  feedbackMessage.value = 'reCAPTCHA setup issue. Form might not work correctly.';
  showModal.value = true;
}

const submitForm = async () => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECAPTCHA_SITE_KEY || isLoading.value) {
    feedbackMessage.value = 'Form is not ready. Please check configuration.';
    showModal.value = true;
    return;
  }

  if (!executeRecaptcha) {
    feedbackMessage.value = 'reCAPTCHA is not fully initialized. Please try again or check console.';
    console.error('executeRecaptcha is undefined. reCAPTCHA plugin might not be ready.');
    showModal.value = true;
    return;
  }

  isLoading.value = true;
  messageSent.value = null;
  feedbackMessage.value = '';

  try {
    const token = await executeRecaptcha('contact_form');

    if (!token) {
      feedbackMessage.value = 'reCAPTCHA verification failed. Please try again.';
      isLoading.value = false;
      showModal.value = true;
      return;
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      'g-recaptcha-response': token
    });

    messageSent.value = true;
    feedbackMessage.value = 'Your message has been sent successfully!';
    form.value.name = '';
    form.value.email = '';
    form.value.subject = '';
    form.value.message = '';

  } catch (error) {
    messageSent.value = false;
    feedbackMessage.value = 'Failed to send message. Please try again later.';
    console.error('EmailJS or reCAPTCHA failed:', error);
  } finally {
    isLoading.value = false;
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
  feedbackMessage.value = '';
  messageSent.value = null;
};
</script>


<template>
  <div class="contact-page-container">
    <h1>Get In Touch</h1>
    <div class="contact-layout">
      <div class="contact-form-column">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" placeholder="Subject of your message" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="6" placeholder="Your message here..." required></textarea>
          </div>
          <div class="button-container">
            <button
              type="submit"
              class="submit-button"
              :disabled="isLoading"
              >
              <!-- :disabled="isLoading || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECAPTCHA_SITE_KEY" -->
              {{ isLoading ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>
      <div class="contact-info-column">
        <div class="contact-info-container">
          <div class="contact-detail">
            <div class="img-container">
              <img :src="locationIcon" alt="Location Icon"/>
            </div>
            <span>{{ locationAddress }}</span>
          </div>
          <div class="contact-detail">
            <div class="img-container">
              <img :src="phoneIcon" alt="Phone Icon"/>
            </div>
            <span>{{ phoneNumber }}</span>
          </div>
          <div class="contact-detail">
            <div class="img-container">
              <img :src="messengerIcon" alt="Email Icon"/>
            </div>
            <span>{{ messengerName }}</span>
          </div>
          <div class="contact-detail">
            <div class="img-container">
              <img :src="emailIcon" alt="Email Icon"/>
            </div>
            <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for feedback messages -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" :class="{ 'modal-success': messageSent, 'modal-error': messageSent === false }">
        <button class="modal-close-button" @click="closeModal">&times;</button>
        <p class="modal-message">{{ feedbackMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Re-defining root variables for direct access within this component's scope (or ensure they are globally available)
// It's generally better to rely on global root variables for consistency or pass them via props/context.
// For demonstration, these are kept to show local control, but consider global var strategy.
:root {
  --dark-background: #1a1a1a;
  --drak-light-background: #2a2a2a;
  --accent-teal: #00FF99;
  --accent-teal-hover: #00e68a;
  --font-color-default: #e0e0e0;
  --light-text: #ccc;
  --shadow-teal: 0 0 15px rgba(0, 255, 153, 0.5);
  --align--wdith: 800px; /* Adjusted max width for contact form */

  // Fluid font sizes using clamp() for better responsiveness
  --font-size-base: clamp(14px, 1.5vw, 16px);
  --font-size-small: clamp(12px, 1.2vw, 14px);
  --font-size-medium: clamp(16px, 1.8vw, 18px);
  --font-size-large: clamp(20px, 2.5vw, 24px);
  --font-size-xl: clamp(24px, 3vw, 32px);
  --font-size-xxl: clamp(32px, 4vw, 48px);
}

.contact-page-container {
  height: 95%; /* Relative height for flexibility */
  width: var(--align--wdith); /* Uses global align width variable */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: clamp(10px, 2vw, 20px); /* Fluid padding */

  h1 {
    font-size: var(--font-size-xxl); /* Fluid font size from root variables */
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: clamp(15px, 3vw, 20px); /* Fluid margin */
    text-align: center;
    width: 100%;
  }
}

.contact-layout {
  display: flex;
  width: 100%;
  height: calc(100% - clamp(60px, 10vh, 80px)); /* Adjusted height to account for h1 and its margin */
  box-sizing: border-box;
  align-items: stretch; /* Ensures columns stretch to fill available height */
  gap: clamp(15px, 3vw, 20px); /* Fluid gap between columns */
  padding: 0 clamp(5px, 1vw, 10px); /* Fluid horizontal padding */
}

.contact-form-column,
.contact-info-column {
  padding: clamp(15px, 3vw, 20px); /* Fluid padding */
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.contact-form-column {
  background-color: var(--drak-light-background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 50%; /* Fixed width for desktop */
  flex-shrink: 0;
  overflow-y: auto; /* Allow form content to scroll */
}

.contact-info-column {
  width: 50%; /* Fixed width for desktop */
  flex-shrink: 0;
  justify-content: center;
  gap: clamp(10px, 2vw, 20px); /* Fluid gap */
  .contact-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: clamp(10px, 2vw, 15px); /* Fluid padding */
    border-radius: 12px;
    background-color: var(--drak-light-background); /* Added background for consistency */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Added shadow for consistency */

    .contact-detail {
      display: flex;
      align-items: center;
      width: 90%; /* Adjust width of detail items */
      gap: clamp(10px, 2vw, 15px); /* Fluid gap */
      padding: clamp(10px, 2vw, 15px); /* Fluid padding */
      font-size: var(--font-size-base); /* Fluid font size */
      color: var(--light-text);
      
      .img-container {
        width: clamp(2.5rem, 5vw, 3rem); /* Fluid width for icon container */
        height: clamp(2.5rem, 5vw, 3rem); /* Fluid height for icon container */
        background-color: var(--dark-background);
        border-radius: 8px; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-shrink: 0; 
      }

      a {
        color: var(--accent-teal);
        text-decoration: none;
        word-break: break-word; /* Allow long emails to wrap */
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        width: clamp(24px, 4.5vw, 28px); /* Fluid icon size */
        height: clamp(24px, 4.5vw, 28px); /* Fluid icon size */
        object-fit: contain; 
        filter: var(--img--accent-teal);
      }
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vw, 15px); /* Fluid gap */
  height: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-size-small); /* Fluid font size */
    color: var(--accent-teal);
    margin-bottom: clamp(3px, 0.8vw, 5px); /* Fluid margin */
    font-weight: bold;
  }

  input[type="text"],
  input[type="email"],
  input[type="subject"],
  textarea {
    width: 100%;
    padding: clamp(8px, 1.8vw, 10px); /* Fluid padding */
    background-color: var(--dark-background);
    border: 1px solid var(--drak-light-background);
    border-radius: 8px;
    color: var(--light-text);
    font-size: var(--font-size-base); /* Fluid font size */
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: var(--accent-teal);
      outline: none;
      box-shadow: 0 0 5px var(--accent-teal);
    }

    &::placeholder {
      color: var(--font-color-default);
      opacity: 0.7;
    }
  }

  textarea {
    font-size: var(--font-size-base); /* Fluid font size */
    resize: vertical; /* Allow vertical resizing */
    min-height: clamp(100px, 15vh, 135px); /* Fluid min-height for textarea */
  }
}

.button-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: clamp(15px, 3vw, 20px); /* Fluid top margin */

  .submit-button {
    background-color: var(--accent-teal);
    color: var(--dark-background);
    border: none;
    padding: clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 25px); /* Fluid padding */
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: var(--font-size-base); /* Fluid font size */
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    align-self: center; /* Center the button */
    
    &:hover {
      background-color: var(--accent-teal-hover);
      box-shadow: 0 0 10px var(--accent-teal);
    }
    &:disabled {
      background-color: #555;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--drak-light-background);
  padding: clamp(20px, 4vw, 30px); /* Fluid padding */
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: clamp(300px, 70vw, 400px); /* Fluid max-width */
  width: 90%;
  position: relative;
  color: var(--light-text);
  font-size: var(--font-size-base); /* Fluid font size */
  border: 2px solid;
}

.modal-success {
  border-color: var(--accent-teal);
}

.modal-error {
  border-color: #ef4444; 
}

.modal-message {
  margin-bottom: clamp(10px, 2vw, 20px); /* Fluid margin */
  font-weight: bold;
  line-height: 1.5;
}

.modal-close-button {
  position: absolute;
  top: clamp(8px, 2vw, 10px); /* Fluid position */
  right: clamp(10px, 2vw, 15px); /* Fluid position */
  background: none;
  border: none;
  font-size: var(--font-size-xl); /* Fluid font size */
  color: var(--light-text);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-teal);
  }
}

// Media query for mobile responsiveness (max-width 768px)
@media (max-width: 768px) {
  .contact-page-container {
    width: 100%;
    padding: clamp(10px, 3vw, 15px) clamp(5px, 1.5vw, 10px); /* Adjusted fluid padding */
    height: auto; /* Height determined by content */
    overflow-y: auto; /* Allow container to scroll */
    justify-content: flex-start; /* Align content to the top */
  }

  .contact-layout {
    flex-direction: column; /* Stack columns vertically */
    height: auto; /* Height determined by content */
    padding: 0; /* Remove horizontal padding from layout */
    gap: clamp(15px, 4vw, 20px); /* Fluid gap between stacked columns */
  }

  .contact-form-column {
    width: 100%; /* Take full width on mobile */
    margin-bottom: 0; /* Remove bottom margin as gap handles spacing */
    overflow-y: visible; /* Allow content to push height */
  }

  .contact-info-column {
    width: 100%; /* Take full width on mobile */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Keep shadow for visual separation */
    padding: clamp(10px, 3vw, 15px); /* Smaller fluid padding */
    margin-top: 0; /* Remove top margin */
    .contact-info-container {
      flex-direction: column; /* Stack contact details vertically */
      width: 100%;
      padding: clamp(8px, 2vw, 10px); /* Adjusted fluid padding */
      .contact-detail {
        width: 100%;
        justify-content: flex-start; /* Align details to the left */
        padding: clamp(5px, 1.5vw, 10px) 0; /* Fluid padding for details */
        font-size: var(--font-size-small); /* Smaller fluid font size */
        .img-container {
          width: clamp(2rem, 4vw, 2.5rem); /* Smaller fluid width for icon container */
          height: clamp(2rem, 4vw, 2.5rem); /* Smaller fluid height for icon container */
        }
        img {
          width: clamp(20px, 4vw, 24px); /* Smaller fluid icon size */
          height: clamp(20px, 4vw, 24px); /* Smaller fluid icon size */
        }
      }
    }
  }

  h1 {
    font-size: var(--font-size-xl); /* Adjusted fluid font size for mobile */
    margin-bottom: clamp(10px, 3vw, 15px); /* Adjusted fluid margin */
  }

  .form-group {
    label {
      font-size: var(--font-size-small); /* Smaller fluid font size for labels */
    }
    input[type="text"],
    input[type="email"],
    input[type="subject"],
    textarea {
      font-size: var(--font-size-small); /* Smaller fluid font size for inputs/textarea */
      padding: clamp(6px, 1.5vw, 8px); /* Smaller fluid padding */
    }
    textarea {
      min-height: clamp(80px, 12vh, 100px); /* Smaller fluid min-height for textarea */
    }
  }

  .submit-button {
    width: 100%; /* Take full width */
    padding: clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px); /* Smaller fluid padding */
    font-size: var(--font-size-small); /* Smaller fluid font size */
  }

  .modal-content {
    max-width: 95%; /* Wider max-width for modal on mobile */
    padding: clamp(15px, 4vw, 20px); /* Smaller fluid padding */
    font-size: var(--font-size-small); /* Smaller fluid font size */
  }
}

</style>
