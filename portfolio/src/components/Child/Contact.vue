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
:root {
  --dark-background: #1a1a1a;
  --drak-light-background: #2a2a2a;
  --accent-teal: #00FF99;
  --accent-teal-hover: #00e68a;
  --font-color-default: #e0e0e0;
  --light-text: #ccc;
  --shadow-teal: 0 0 15px rgba(0, 255, 153, 0.5);
  --align--wdith: 800px; 

  --font-size-base: clamp(14px, 1.5vw, 16px);
  --font-size-small: clamp(12px, 1.2vw, 14px);
  --font-size-medium: clamp(16px, 1.8vw, 18px);
  --font-size-large: clamp(20px, 2.5vw, 24px);
  --font-size-xl: clamp(24px, 3vw, 32px);
  --font-size-xxl: clamp(32px, 4vw, 48px);
}

.contact-page-container {
  height: 95%; 
  width: var(--align--wdith); 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: clamp(10px, 2vw, 20px); 

  h1 {
    font-size: var(--font-size-xxl); 
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: clamp(15px, 3vw, 20px); 
    text-align: center;
    width: 100%;
  }
}

.contact-layout {
  display: flex;
  width: 100%;
  height: calc(100% - clamp(60px, 10vh, 80px)); 
  box-sizing: border-box;
  align-items: stretch; 
  gap: clamp(15px, 3vw, 20px); 
  padding: 0 clamp(5px, 1vw, 10px); 
}

.contact-form-column,
.contact-info-column {
  padding: clamp(15px, 3vw, 20px); 
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.contact-form-column {
  background-color: var(--drak-light-background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 50%; 
  flex-shrink: 0;
  overflow-y: auto; 
}

.contact-info-column {
  width: 50%; 
  flex-shrink: 0;
  justify-content: center;
  gap: clamp(10px, 2vw, 20px); 
  .contact-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: clamp(10px, 2vw, 15px); 
    border-radius: 12px;
    background-color: var(--drak-light-background); 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 

    .contact-detail {
      display: flex;
      align-items: center;
      width: 90%; 
      gap: clamp(10px, 2vw, 15px); 
      padding: clamp(10px, 2vw, 15px); 
      font-size: var(--font-size-base); 
      color: var(--light-text);
      
      .img-container {
        width: clamp(2.5rem, 5vw, 3rem); 
        height: clamp(2.5rem, 5vw, 3rem); 
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
        word-break: break-word; 
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        width: clamp(24px, 4.5vw, 28px); 
        height: clamp(24px, 4.5vw, 28px); 
        object-fit: contain; 
        filter: var(--img--accent-teal);
      }
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vw, 15px); 
  height: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-size-small); 
    color: var(--accent-teal);
    margin-bottom: clamp(3px, 0.8vw, 5px); 
    font-weight: bold;
  }

  input[type="text"],
  input[type="email"],
  input[type="subject"],
  textarea {
    width: 100%;
    padding: clamp(8px, 1.8vw, 10px); 
    background-color: var(--dark-background);
    border: 1px solid var(--drak-light-background);
    border-radius: 8px;
    color: var(--light-text);
    font-size: var(--font-size-base); 
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
    font-size: var(--font-size-base); 
    resize: vertical; 
    min-height: clamp(100px, 15vh, 135px); 
  }
}

.button-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: clamp(15px, 3vw, 20px); 

  .submit-button {
    background-color: var(--accent-teal);
    color: var(--dark-background);
    border: none;
    padding: clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 25px); 
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: var(--font-size-base); 
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    align-self: center; 
    
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
  padding: clamp(20px, 4vw, 30px); 
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: clamp(300px, 70vw, 400px); 
  width: 90%;
  position: relative;
  color: var(--light-text);
  font-size: var(--font-size-base); 
  border: 2px solid;
}

.modal-success {
  border-color: var(--accent-teal);
}

.modal-error {
  border-color: #ef4444; 
}

.modal-message {
  margin-bottom: clamp(10px, 2vw, 20px); 
  font-weight: bold;
  line-height: 1.5;
}

.modal-close-button {
  position: absolute;
  top: clamp(8px, 2vw, 10px); 
  right: clamp(10px, 2vw, 15px); 
  background: none;
  border: none;
  font-size: var(--font-size-xl); 
  color: var(--light-text);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-teal);
  }
}

@media (max-width: 768px) {
  .contact-page-container {
    width: 100%;
    padding: clamp(10px, 3vw, 15px) clamp(5px, 1.5vw, 10px); 
    height: auto; 
    overflow-y: auto; 
    justify-content: flex-start; 
  }

  .contact-layout {
    flex-direction: column; 
    height: auto; 
    padding: 0; 
    gap: clamp(15px, 4vw, 20px); 
  }

  .contact-form-column {
    width: 100%; 
    margin-bottom: 0; 
    overflow-y: visible; 
  }

  .contact-info-column {
    width: 100%; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    padding: clamp(10px, 3vw, 15px); 
    margin-top: 0; 
    .contact-info-container {
      flex-direction: column; 
      width: 100%;
      padding: clamp(8px, 2vw, 10px); 
      .contact-detail {
        width: 100%;
        justify-content: flex-start; 
        padding: clamp(5px, 1.5vw, 10px) 0; 
        font-size: var(--font-size-small); 
        .img-container {
          width: clamp(2rem, 4vw, 2.5rem); 
          height: clamp(2rem, 4vw, 2.5rem); 
        }
        img {
          width: clamp(20px, 4vw, 24px); 
          height: clamp(20px, 4vw, 24px); 
        }
      }
    }
  }

  h1 {
    font-size: var(--font-size-xl); 
    margin-bottom: clamp(10px, 3vw, 15px); 
  }

  .form-group {
    label {
      font-size: var(--font-size-small); 
    }
    input[type="text"],
    input[type="email"],
    input[type="subject"],
    textarea {
      font-size: var(--font-size-small); 
      padding: clamp(6px, 1.5vw, 8px); 
    }
    textarea {
      min-height: clamp(80px, 12vh, 100px); 
    }
  }

  .submit-button {
    width: 100%; 
    padding: clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px); 
    font-size: var(--font-size-small); 
  }

  .modal-content {
    max-width: 95%; 
    padding: clamp(15px, 4vw, 20px); 
    font-size: var(--font-size-small); 
  }
}

</style>
