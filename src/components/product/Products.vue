<template>
  <div>
    <my-product 
    v-for="product in products"
    v-bind:data="product"
    v-bind:key="product.name" 
    :product="product"></my-product>
  </div>
</template>

<script>

import Product from './Product.vue'

export default {

  data() {
    return {
      products: [],
      loaded: false
    }
  },
  components:{
      'my-product' : Product
  },
  created() {
    this.fetchData()
  },
  methods:{
    fetchData(){
      this.$http.get("api/products")
        .then(response => {
          this.products = response.body
      })
    }
  }
}
</script>