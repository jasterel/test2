<template>
  <router-view />
</template>

<script lang="ts">
import HomeView from './components/HomeView.vue'
import PostView from './components/PostView.vue'
export default {
  name: 'App',
  HomeView,
  PostView
};
</script>
