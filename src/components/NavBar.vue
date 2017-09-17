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

        if(Object.keys(this.user).length === 0){
          this.fetchData()
          console.log("Fetched")
        }
        
      }else{
        this.isAuth = false
      }
      console.log("Navbar: " + this.isAuth)
    }
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated()
    this.fetchData()
  },
  methods: {
    logout() {
      this.$auth.destroyToken()
      this.$router.push('/login')
      this.user = {}
    },
    fetchData(){
      this.$http.get("api/user")
        .then(response => {
          this.user = response.body
      })
    }
  }

}
</script>