import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

import { setupInterceptors } from './services/RequestServices';


const app = createApp(App)

app.use(createPinia())
app.use(router)

setupInterceptors();

app.mount('#app')
