<template>
    <div class="min-h-screen flex justify-center items-center bg-zinc-100">
        <form class="min-w-[400px] bg-white p-8 rounded-lg shadow" @submit.prevent="handleSubmit">
            <h1 class="font-poppins-700 text-slate-700 text-3xl text-center mb-8">Sing Up</h1>

            <div class="mb-4">
                <label for="username" class="font-poppins-300 block text-sm text-slate-500 mb-1">Username</label>
                <input type="text" v-model="username" id="username"
                    class="font-poppins-500 w-full outline-0 border border-slate-400 p-2 text-slate-600" />
            </div>

            <div class="mb-4">
                <label for="email" class="font-poppins-300 block text-sm text-slate-500 mb-1">Email</label>
                <input type="email" v-model="email" id="email"
                    class="font-poppins-500 w-full outline-0 border border-slate-400 p-2 text-slate-600" />
            </div>

            <div class="mb-8">
                <label for="password" class="font-poppins-300 block text-sm text-slate-500 mb-1">Password</label>
                <input type="password" v-model="password" id="password"
                    class="font-poppins-500 w-full outline-0 border border-slate-400 p-2 text-slate-600" />
            </div>

            <div class="text-center mb-4">
                <button type="submit" class="font-poppins-500 bg-stone-700 px-8 py-2 text-white">Sign Up</button>
            </div>

            <p class="text-xs text-slate-500 text-center">Do you have an account ? <router-link to="/login"
                    class="underline text-slate-700">Login</router-link></p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore()

const username = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = () => {
    authStore.signUp({ email: email.value, password: password.value, username: username.value });
}

</script>

<style></style>