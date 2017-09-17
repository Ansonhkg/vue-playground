<template>
  <div>
    <h1>Feed</h1>
    <hr>
    <my-products></my-products>
    
  </div>
</template>

<script>

  import Products from './product/Products.vue'

  export default {
    components:{
      'my-products' : Products,
    }
  }

</script>