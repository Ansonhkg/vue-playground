import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from './resource.js'
import Auth from './packages/auth/Auth.js'

Vue.use(Auth)

Vue.http.options.root = 'http://laravel.dev'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
  
  // to: where we want to go
  // from: the current route
  // next: a function that must be called not matter what
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors) && Vue.auth.isAuthenticated()){
      next({
        path: '/feed'
      })
    }else{
      next()
    }
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
})

