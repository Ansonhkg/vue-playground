<template>
    <div class="container" id="app">
        <form class="form-group" @submit.prevent="login()">
            <h2 class="form-signin-heading">Please sign in</h2>

            <label for="inputEmail" class="sr-only">Email address</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email" required="" autofocus="">
            </br>

            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password" required="">
            </br>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed:{
        oauth(){
            return this.$store.state.oauth
        }
    },
    methods: {

        login() {

            // Merging oauth and data objects together
            var data = Object.assign({}, this.oauth, {
                username: this.email,
                password: this.password
            })

            // Trigger an action in store.js 
            this.$store.dispatch('login', data)
        },

    }
}
</script>

<style>

</style>
