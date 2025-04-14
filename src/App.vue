<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'; // Import the new router link component
import HelloWorld from './components/HelloWorld.vue';// Import the existing hello world component
const LoginForm = import('./components/LoginForm.vue'); /* Import the login form component */
</script>

<template>
  <router-view />
</template>

<!-- <nav>
  <RouterLink to="/">Home</RouterLink> ⭐️
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
</nav> -->

<style scoped>
/*// CSS for both pages: The existing CSS and the new CSS  (new styles will override the existing ones) 🤗
   Your existing styles — This is what we did before */
header {
  line-height: 1.5;
  max-height: 100vh;
  /* Adjust height of header on mobile */
}

/* // add styling for logo, wrapper and navigation links - adjusting the height of the header on mobile  👋 */
/* Add styles for the new login form component 🤗*/
.login {
  background: var(--color-background);
}

/* add styling for the login form component */
</style>
