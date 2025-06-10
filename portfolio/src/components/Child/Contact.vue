<script setup lang="ts">
// No specific reactive data needed for static form layout, but can be added if form submission logic is implemented later.
</script>

<template>
  <div class="contact-page-container">
    <h1>Get In Touch</h1>
    <div class="contact-layout">
      <div class="contact-form-column">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject of your message" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="6" placeholder="Your message here..." required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
      <div class="contact-info-column">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-page-container {
  height: 95%;
  width: var(--align--wdith);
  box-sizing: border-box;
  padding: 20px;
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
  background-color: var(--drak-light-background);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
}

.contact-form-column {
  width: 60%; /* Adjusted to 60% for the form */
  flex-shrink: 0;
  overflow-y: auto; /* Allow scrolling for form content if it gets too long */


}

.contact-info-column {
  width: 40%; 
  flex-shrink: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%; /* Make form take full height of its column */
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
    resize: vertical; /* Allow vertical resizing */
    min-height: 100px; /* Minimum height for textarea */
  }
}

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
  align-self: flex-start; /* Align button to the start of the form */
  margin-top: auto; /* Pushes the button to the bottom if there's extra space */

  &:hover {
    background-color: var(--accent-teal-hover);
    color: var(--dark-background);
    box-shadow: 0 0 10px var(--accent-teal);
  }
}
</style>
