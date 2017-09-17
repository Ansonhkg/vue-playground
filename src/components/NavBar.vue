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
      isAuth: null,
      user: {}
    }
  },
  watch: {
    $route() {

      if(this.$auth.isAuthenticated()){
        this.isAuth = true

        // Check if user object is empty
        if(Object.keys(this.user).length === 0){
          this.setAuthenticatedUser()
          console.log("Refreshed: Set Authenticated User")
        }
        
      }else{
        this.isAuth = false
      }
      console.log("Navbar: " + this.isAuth)
    }
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated()
    this.setAuthenticatedUser()
  },
  methods: {
    logout() {
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