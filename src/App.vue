<template>

  
 <div id="nav">
   
 <Nav />

  <div id="app">
    


    <Footer />
  </div>
  </div>
  
</template>

<script>
  import Footer from '@/components/Footer.vue'

  import Nav from '@/components/Nav.vue'
  export default {
    components: {
      Footer

      , Nav

    }
  }
</script>
<style scoope lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

 


  
  
</style>