<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleSubmit = () => {
    authStore.login(email.value, password.value);
};
</script>

<template>
    <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style scoped>
.login-form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-form h2 {
    text-align: center;
}

.login-form input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
}

.login-form button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
}
</style>