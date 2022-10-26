import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SponsorsView from '../views/SponsorsView.vue'
import StudentsView from '../views/StudentsView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem('user')

    if (loggedIn) {
      next()
    } else {
      router.push({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
