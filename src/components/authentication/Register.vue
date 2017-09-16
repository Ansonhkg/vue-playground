<template>
    <div class="container" id="app">
        <form class="container form-signin">
        <h2 class="form-signin-heading">Register</h2>
        
        <label for="inputName" class="sr-only">Name</label>
        <input v-model="name" type="name" id="inputName" class="form-control" placeholder="Name" required="" autofocus="">
        </br>

        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        </br>

        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        </br>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    </div>
</template>

<script>
export default {
  data(){
      return{
          name: '',
          email: '',
          password: ''
      }
  }
}
</script>

<style>

</style>
