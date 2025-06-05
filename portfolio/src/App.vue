// App.vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; 
  overflow-x: hidden; 
}

#app {
  margin: 0;
  padding: 0;
  height: 100%; 
  display: flex; 
  flex-direction: column; 
}
</style>