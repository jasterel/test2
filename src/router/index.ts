import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import PostView from '../components/PostView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: PostView,
  },
  { path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory('/proj-vite-v3/'), // Используем hash history для GitHub Pages
  routes,
});

export default router;
