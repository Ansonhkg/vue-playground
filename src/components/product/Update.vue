<template>
    <div>
        <h1>Update Product</h1>
        <hr>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input v-model="product.name" type="text" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="price">Price:</label>
                            <input v-model.number="product.price" type="number" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea v-model="product.description" name="description" class="form-control"></textarea>
                        </div>

                        <button @click="update()" v-show="isFormComplete()" class="btn btn-success pull-right">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            product:{}
        }
    },
    created(){
        this.getProduct()
    },
    methods:{
        getProduct(){
            this.$http.get('api/products/' + this.$route.params.product)
                .then(response =>{
                    this.product = response.body
                })
        },
        update(){
            this.$http.put('api/products/' + this.$route.params.product, this.product)
                .then(response => {
                    console.log(response)
                    // this.$router.push('/feed')
                })
        },
        isFormComplete(){
            return this.product.name && this.product.price && this.product.description
        }
    }
}
</script>
