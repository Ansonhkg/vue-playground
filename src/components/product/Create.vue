<template>
    <div>
        <h1>Create Product</h1>
        <hr>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form @submit.prevent="create()">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input v-validate="'required'" name="name" v-model="product.name" type="text" class="form-control">
                                <span v-show="errors.has('name')" class="help-block alert alert-danger">
                                    {{ errors.first('name') }}
                                </span>
                            </div>

                            <div class="form-group">
                                <label for="price">Price:</label>
                                <input v-validate="'max_value:50|min_value:1'" name="price" v-model.number="product.price" type="number" class="form-control">
                                <span v-show="errors.has('price')" class="help-block alert alert-danger">
                                    {{ errors.first('price') }}
                                </span>
                            </div>

                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea v-model="product.description" name="description" class="form-control"></textarea>
                            </div>

                            <input type="submit" class="btn btn-success pull-right" value="Create">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                price: 0,
                description: ''
            }
        }
    },
    methods: {
        create() {
            this.$validator.validateAll().then(() => {
                this.$http.post('api/products', this.product)
                    .then(response => {
                        console.log(response)
                        this.$router.push('/feed')
                    })
            })

        }
    }
}
</script>
