<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <productCard style="width:300px" />
    

  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from '@/components/productCard.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
        ProductCard
    }
  }
</script>
