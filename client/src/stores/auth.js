import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getToken, saveToken, destroyToken } from '../services/JwtServices'
import { Login, Signup, Logout, GetProfile } from '../services/ApiServices'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const user = ref(null)
    const isAuthenticated = ref(false)

    const login = (data) => {
        Login(data.email, data.password)
            .then(response => {
                saveToken(response.data.token)
                router.push({ name: 'Home' })
                isAuthenticated.value = true
            })
            .catch(error => {
                console.log(error)
            })
    }

    const register = (data) => {
        Signup(data.email, data.password)
            .then(response => {
                console.log(response)
                router.push({ name: 'Login' })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const logout = () => {
        Logout()
            .then(response => {
                destroyToken()
                router.push({ name: 'Login' })
                isAuthenticated.value = false
            })
            .catch(error => {
                console.log(error)
            })
    }

    const getProfile = () => {
        GetProfile()
            .then(response => {
                user.value = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    return {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        getProfile,
    }
});