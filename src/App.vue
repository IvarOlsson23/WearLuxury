<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import Nav from '@/components/Nav.vue'
  export default {
    components: {
      Footer,
      Nav
    }
  }
</script>
<style scoped lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-family: 'Libre Baskerville', serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
</style>
