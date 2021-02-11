<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Cart">Cart</router-link> |
      <router-link to="/Products">Clothes</router-link> |
      <router-link to="/order">OrderConfirm</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      Footer
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #414141;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
