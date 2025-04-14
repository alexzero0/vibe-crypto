<template>
    <div class="login">
        <h1>Login</h1>
        <LoginForm />
    </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
