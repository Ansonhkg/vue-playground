import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../packages/auth/Auth'
import VueResource from 'vue-resource'
import Router from '../routes.js'

Vue.use(VueResource)

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        oauth:{
            client_id: 2,
            client_secret: 'VpL9lRzyFLcxWYtl8dndpNayKR5OWYorzqIJE6tP',
            grant_type: 'password',
        },
        user:{
            name:'',
            loggedInStatus: false,
            authToken: ''
        }
    },
    getters:{
        isLogged: state => {

            return state.user.loggedInStatus
        }
    },
    mutations:{
        setUserLoggedInStatus: (state, boolean) => {
            state.user.loggedInStatus = boolean
            console.log(state.user.loggedInStatus)
        }
    },
    actions:{
        login: (context, data) => {
            Vue.http.post("oauth/token", data)
                .then(response => {
                    console.log(response)
                    Vue.auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                    context.commit('setUserLoggedInStatus', true)
                    Router.push('/feed')
                })
        }
    }
})