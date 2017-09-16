<template>
  <div class="container" id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  
  import NavBar from './components/NavBar.vue'
  import Login from './components/authentication/Login.vue'
  import Register from './components/authentication/Register.vue'
  
  export default {
    components: {
      'navbar': NavBar,
    }  
  }
</script>

<style>
  
</style>
