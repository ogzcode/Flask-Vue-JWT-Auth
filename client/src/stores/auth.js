import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getToken, saveToken, destroyToken } from '../services/JwtServices'
import { Login, Signup, Logout, GetProfile } from '../services/ApiServices'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const user = ref(null)
    const isAuthenticated = ref(false)

    const login = ({ username, password }) => {
        Login(username, password)
            .then(response => {
                saveToken(response.data.data.access_token)
                router.push({ name: 'Home' })
                isAuthenticated.value = true
            })
            .catch(error => {
                console.log(error)
            })
    }

    const signUp = ({ email, password, username }) => {
        Signup(email, password, username)
            .then(response => {
                router.push({ name: 'Login' })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const logout = () => {
        destroyToken()
        router.push({ name: 'Login' })
        isAuthenticated.value = false
    }

    const getProfile = () => {
        GetProfile()
            .then(response => {
                console.log(response.data)
                user.value = response.data.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    const checkAuth = () => {
        if (getToken() && !isAuthenticated.value) {
            isAuthenticated.value = true
        } else {
            isAuthenticated.value = false
        }
    }

    return {
        user,
        isAuthenticated,
        login,
        signUp,
        logout,
        getProfile,
        checkAuth
    }
});