<template>
    <div class="flex min-h-screen items-center justify-center bg-zinc-100">
        <div>
            <h1 class="font-poppins-700 text-2xl mb-4 text-slate-800">Home</h1>
            <p class="font-poppins-500 text-slate-500">Username : {{ authStore.user?.username }}</p>
            <p class="font-poppins-500 text-slate-500">Email : {{ authStore.user?.email }}</p>
            <button @click="authStore.logout()" class="font-poppins-300 py-1 px-4 text-sm bg-red-600 text-white mt-4">Logout</button>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue';

const authStore = useAuthStore()

onMounted(() => {
    authStore.getProfile()
})

</script>

<style scoped></style>