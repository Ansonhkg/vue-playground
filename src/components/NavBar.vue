<template>
  <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            
            <router-link v-if="!isAuth" tag="li" to="/login"><a>Login</a></router-link>
            <router-link v-if="!isAuth" tag="li" to="/register"><a>Register</a></router-link>
            
            <router-link v-if="isAuth" tag="li" to="/feed"><a>Feed</a></router-link>
            <router-link v-if="isAuth" tag="li" to="/products/create"><a>Create</a></router-link>

            <li v-if="isAuth" class="nav-item">
              <a @click="logout()" style="cursor:pointer">Logout</a>
            </li>

          </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
      </div>
</template>

<script>

export default {
  data(){
    return{
      isAuth: null
    }
  },
  watch:{
    $route:function(){
      this.isAuth = this.$auth.isAuthenticated()
      console.log("Navbar: " + this.isAuth)
    }
  },
  created(){
    this.isAuth = this.$auth.isAuthenticated()
  },
  methods:{
    logout(){
      this.$auth.destroyToken()
      this.$router.push('/login')
    }
  }
}
</script>