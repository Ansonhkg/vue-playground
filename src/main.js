import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from './resource.js'
import Auth from './packages/auth/Auth.js'
import VeeValidate from 'vee-validate'

Vue.use(Auth)
Vue.use(VeeValidate)

Vue.http.options.root = 'http://laravel.dev'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Vue.http.interceptors.push((request, next) => {
  // Catch the response from the server
  next(response => {

    switch (response.status) {
      case 404:
        console.log("404 Page not found.")
        break
      case 500:
        console.log("500 Internal server error.")
        break
    }
  })
})

Router.beforeEach(

  // to: where we want to go
  // from: the current route
  // next: a function that must be called not matter what
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors) && Vue.auth.isAuthenticated()) {
      next({
        path: '/feed'
      })
    } else {
      next()
    }
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
})