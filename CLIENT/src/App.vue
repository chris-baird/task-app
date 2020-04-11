<template>
  <div id="app" class="container">
    <Dashboard v-if="user" />
    <LoginPage v-else />
  </div>
</template>

<script>
import LoginPage from './pages/LoginPage.vue';
import Dashboard from './pages/Dashboard.vue';

export default {
  name: 'App',
  data() {
    return {
      user: 'null',
    };
  },
  components: {
    LoginPage,
    Dashboard,
  },
};
</script>

<style>
</style>
