<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
    authStore.checkAuth()
})
</script>

<template>
    <RouterView />
</template>

<style scoped>

</style>
