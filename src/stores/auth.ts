import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  const login = (email: string, password: string) => {
    // Здесь можно добавить логику для аутентификации
    if (email === 'user@example.com' && password === 'password') {
      isAuthenticated.value = true
    }
  }

  const logout = () => {
    isAuthenticated.value = false
  }

  return { isAuthenticated, login, logout }
})
