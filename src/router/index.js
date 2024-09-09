import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formulario/animais',
      name: 'animais',
      component: () => import('../views/formularios/AnimaisView.vue')
    },
    {
      path: '/formulario/agua',
      name: 'agua',
      component: () => import('../views/formularios/AguasView.vue')
    },
    {
      path: '/formulario/lixo',
      name: 'lixo',
      component: () => import('../views/formularios/LixoView.vue')
    },
    {
      path: '/formulario/queimadas',
      name: 'queimadas',
      component: () => import('../views/formularios/QueimadasView.vue')
    }
  ]
})

export default router
