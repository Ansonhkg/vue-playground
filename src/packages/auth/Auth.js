export default function(Vue){
    Vue.auth = {
        setToken(token, expiration){
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
            this.setHeader()
        },
        getToken(){
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            // If not set
            if(!token || !expiration)
                return null

            // 
            if(Date.now() > parseInt(expiration)){
                this.destroyToken()
                return null
            }else{
                return token
            }
                
        },
        destroyToken(){
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },  
        isAuthenticated(){
            if(this.getToken())
                return true
            else
                return false
        },
        setHeader(){
            Vue.http.headers.common['Authorization'] = 'Bearer ' + this.getToken();
        }
    }

    // We want to define a propety, which is $auth
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })

}