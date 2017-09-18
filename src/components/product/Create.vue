<template>
    <div>
        <h1>Create Product</h1>
        <hr>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input v-validate="'required'" name="name" autofocus v-model="product.name" type="text" class="form-control">
                            <span v-show="errors.has('name')">
                                {{ errors.first('name') }}
                            </span>
                        </div>

                        <div class="form-group">
                            <label for="price">Price:</label>
                            <input v-model.number="product.price" type="number" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea v-model="product.description" name="description" class="form-control"></textarea>
                        </div>

                        <button @click="create()" v-show="isFormComplete()" class="btn btn-success pull-right">Create</button>
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
            product:{
                name: '',
                price: 0,
                description: ''
            }
        }
    },
    methods:{
        create(){
            this.$http.post('api/products', this.product)
                .then(response => {
                    console.log(response)
                    this.$router.push('/feed')
                })
        },
        isFormComplete(){
            return this.product.name && this.product.price && this.product.description
        }
    }
}
</script>
