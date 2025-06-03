import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import Skills from '../views/skillsView.vue'
import Projects from '../views/ProjectView.vue'
import About from '../views/AboutView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router