import { useAuthStore } from '../stores/auth.js'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/Signup.vue")
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta : {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
