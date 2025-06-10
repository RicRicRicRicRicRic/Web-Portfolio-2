import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Import VueReCaptcha for global plugin registration
import { VueReCaptcha } from 'vue-recaptcha-v3';

const app = createApp(App);

// Access the reCAPTCHA Site Key from environment variables
// This key must be defined in your .env file at the root of your project
// e.g., VITE_RECAPTCHA_SITE_KEY='your_recaptcha_site_key_from_google'
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

// Check if the reCAPTCHA Site Key is available before using the plugin
if (!RECAPTCHA_SITE_KEY) {
  console.error('reCAPTCHA Site Key is not defined in main.ts. Please ensure it\'s set in your .env file.');
  // In a production application, you might want to consider alternative fallback behavior
  // or a more prominent warning to the user if reCAPTCHA cannot be initialized.
} else {
  // Use the VueReCaptcha plugin with your Site Key
  app.use(VueReCaptcha, {
    siteKey: RECAPTCHA_SITE_KEY,
    // Optional: loaderOptions can be used to configure how the reCAPTCHA script is loaded
    loaderOptions: {
      // Set to true if you experience issues in some regions (e.g., China)
      // useRecaptchaNet: true,
      // Set to true to hide the reCAPTCHA badge (ensure compliance with Google's reCAPTCHA branding requirements)
      // autoHideBadge: true,
    },
  });
}

app.use(router);

app.mount('#app');