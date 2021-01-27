import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import ('./Pages/Home/Index.vue') },
  { path: '/about', component: () => import ('./Pages/About/Index.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
});