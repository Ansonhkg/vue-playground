<template>
  <div>
    <my-product v-for="product in products" v-bind:data="product" v-bind:key="product.name" :authenticatedUser="authenticatedUser" :product="product" @remove="remove(product)"></my-product>
  </div>
</template>

<script>

import Product from './Product.vue'

export default {

  data() {
    return {
      products: [],
    }
  },
  computed: {
    authenticatedUser() {
      return this.$auth.getAuthenticatedUser()
    }
  },
  components: {
    'my-product': Product
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$http.get("api/products")
        .then(response => {
          this.products = response.body
        })
    },
    remove(product) {

      // Remove from database
      this.$http.delete('api/products/' + product.id)
        .then(response => {
          console.log(response)
          // Removing item from the DOM
          this.removeFromDOM(product, this.products)

        })
    },
    removeFromDOM(object, objectArray) {
      let index = objectArray.indexOf(object)
      objectArray.splice(index, 1)
      console.log("Removed object from object array")
    }
  }
}
</script>