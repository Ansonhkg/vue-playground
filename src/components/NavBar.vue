<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-left">
        
        <router-link v-if="!isAuth" tag="li" to="/login">
          <a>Login</a>
        </router-link>

        <router-link v-if="!isAuth" tag="li" to="/register">
          <a>Register</a>
        </router-link>

        <router-link v-if="isAuth" tag="li" to="/feed">
          <a>Feed</a>
        </router-link>

        <router-link v-if="isAuth" tag="li" to="/products/create">
          <a>Create</a>
        </router-link>

        <li v-if="isAuth" class="nav-item">
          <a @click="logout()" style="cursor:pointer">Logout</a>
        </li>
      </ul>

      <div  v-if="isAuth" class="userinfo">
        Welcome back: {{ user.name }}
      </div>

    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {}
    }
  },
  computed:{
    isAuth(){
      return this.$store.getters.isAuth
    },
  },
  created() {

    if(this.$auth.isAuthenticated()){
      this.$store.commit('setUserLoggedInStatus', true)
      this.setAuthenticatedUser()
    }

  },
  methods: {
    logout() {
      this.$store.commit('setUserLoggedInStatus', false)
      this.$auth.destroyToken()
      this.$router.push('/login')
      this.user = {}
    },
    setAuthenticatedUser(){
      this.$http.get("api/user")
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)
          this.user = this.$auth.getAuthenticatedUser()
      })
    },
  }

}
</script>