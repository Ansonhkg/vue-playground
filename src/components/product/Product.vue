<template>
    <div class="col-md-5">
        <div class="thumbnail">
            <img src="https://www.dogids.com/blog/wp-content/uploads/2013/09/dog-poop-no-sign-300x274.jpg" width=200 height=200 alt="">

            <div class="caption">
                <h3>{{ product.id }} | {{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <hr>

                <p>
                    <a href="#" class="btn btn-default">Wish List</a>
                    <a href="" class="btn btn-success">Buy</a>
                </p>

                <hr>

                <p>
                    PID: {{ product.user_id }} | AID: {{ authenticatedUser.id }} </br>
                    <button @click="remove()" class="btn btn-danger">Delete</button>
                    

                    <div class="alert alert-warning" v-if="product.user_id !== authenticatedUser.id">
                        <strong>Warning!</strong> Shouldn't be able to delete
                    </div>

                    <div class="alert alert-success" v-if="product.user_id === authenticatedUser.id">
                        <strong>Note!</strong> Should be able to delete
                    </div>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['product', 'authenticatedUser'],
    methods:{
        remove(){
            this.$http.delete('api/products/' + this.product.id)
                .then(response => {
                    console.log(response)
                })
        }
    }
}
</script>