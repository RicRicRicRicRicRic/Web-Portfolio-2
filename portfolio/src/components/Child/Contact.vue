<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useReCaptcha } from 'vue-recaptcha-v3'; 

// State to hold form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// State for loading and success/error messages
const isLoading = ref(false);
const messageSent = ref<boolean | null>(null); // null: initial, true: success, false: error
const feedbackMessage = ref<string>('');

// Accessing EmailJS credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string; // Get reCAPTCHA Site Key

// Initialize EmailJS when the component is loaded.
if (PUBLIC_KEY) {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
} else {
  console.error('EmailJS Public Key is not defined. Make sure it\'s set in your .env file.');
  feedbackMessage.value = 'Contact form not configured. Please check console for details.';
}

// Initialize useReCaptcha
// Get the reCAPTCHA instance. It might be undefined if the plugin isn't ready.
const recaptchaInstance = useReCaptcha();

// Safely destructure executeRecaptcha and recaptchaLoaded
const executeRecaptcha = recaptchaInstance?.executeRecaptcha;
const recaptchaLoaded = recaptchaInstance?.recaptchaLoaded;

// Initialize reCAPTCHA on load if the key is present and recaptchaLoaded is available
if (recaptchaLoaded) {
  recaptchaLoaded().then(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.error('reCAPTCHA Site Key is not defined. Make sure it\'s set in your .env file.');
      feedbackMessage.value = 'reCAPTCHA not configured. Form might not work correctly.';
    }
  });
} else {
  console.error('useReCaptcha() did not return expected functions. Is the plugin correctly installed and registered in main.ts?');
  feedbackMessage.value = 'reCAPTCHA setup issue. Form might not work correctly.';
}


/**
 * Handles the form submission event.
 * Prevents default form submission, executes reCAPTCHA, and sends email using EmailJS.
 */
const submitForm = async () => {
  // Do not proceed if keys are missing or already sending
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECAPTCHA_SITE_KEY || isLoading.value) {
    feedbackMessage.value = 'Form is not ready. Please check configuration.';
    return;
  }

  // Ensure executeRecaptcha is available before proceeding
  if (!executeRecaptcha) {
    feedbackMessage.value = 'reCAPTCHA is not fully initialized. Please try again or check console.';
    console.error('executeRecaptcha is undefined. reCAPTCHA plugin might not be ready.');
    return;
  }

  isLoading.value = true;
  messageSent.value = null; // Reset status
  feedbackMessage.value = ''; // Clear previous message

  try {
    // 1. Execute reCAPTCHA to get a token
    const token = await executeRecaptcha('contact_form'); // 'contact_form' is an action name, define relevant for your context

    if (!token) {
      feedbackMessage.value = 'reCAPTCHA verification failed. Please try again.';
      isLoading.value = false;
      return;
    }

    // 2. Send the form data including the reCAPTCHA token
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      'g-recaptcha-response': token // Pass the reCAPTCHA token
    });

    messageSent.value = true;
    feedbackMessage.value = 'Your message has been sent successfully!';
    // Clear the form after successful submission
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
  }
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
              :disabled="isLoading || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECAPTCHA_SITE_KEY"
            >
              {{ isLoading ? 'Sending...' : 'Send Message' }}
            </button>
          </div>

          <!-- Feedback message display -->
          <div v-if="feedbackMessage" :class="{ 'text-green-500': messageSent, 'text-red-500': messageSent === false }" class="mt-4 text-center">
            {{ feedbackMessage }}
          </div>
        </form>
      </div>
      <div class="contact-info-column">
        <!-- You can add contact information like address, phone, social media links here -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

  h1 {
    font-size: 2em;
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }
}

.contact-layout {
  display: flex;
  width: 100%;
  height: calc(100% - 80px); 
  box-sizing: border-box;
  align-items: stretch;
  padding: 0 10px;
}

.contact-form-column,
.contact-info-column {
  padding: 20px;
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
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%; 
}

.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9em;
    color: var(--accent-teal);
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="email"],
  input[type="subject"],
  textarea {
    width: 100%;
    padding: 10px;
    background-color: var(--dark-background);
    border: 1px solid var(--drak-light-background);
    border-radius: 8px;
    color: var(--light-text);
    font-size: 1em;
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
    font-size: 16px;
    resize: vertical; 
    min-height: 135px; 
  }
}

.button-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  .submit-button {
    background-color: var(--accent-teal);
    color: var(--light-text);
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1em;
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    align-self: flex-start; 
    margin-top: auto; 

    &:hover {
      background-color: var(--accent-teal-hover);
      color: var(--dark-background);
      box-shadow: 0 0 10px var(--accent-teal);
    }
  }
}

</style>
