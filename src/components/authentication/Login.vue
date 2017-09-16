<template>
    <div class="container" id="app">
        <form class="form-group" @submit.prevent="login()">
            <h2 class="form-signin-heading">Please sign in</h2>
            
            <label for="inputEmail" class="sr-only">Email address</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email" required="" autofocus="">
            </br>
            
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" type="password"class="form-control" placeholder="Password" required="">
            </br>
            
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    </div>
</template>

<script>

export default {
  data(){
      return{
          email: '',
          password: ''
      }
  },
  
  methods: {
      
      login(){

          var data = {
              client_id: 2,
              client_secret: 'QY2lbfeN2UN9fMrukwURDh3q31Hro4wdTAX1PBOk',
              grant_type: 'password',
              username: this.email,
              password: this.password
          }

          this.$http.post("oauth/token", data)
            .then(response => {
                console.log(response)
                this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                this.$router.push('/feed')
            })
            
      }
  }
}
</script>

<style>

</style>
