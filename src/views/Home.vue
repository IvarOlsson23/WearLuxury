<template>
  <div id="body">
    <div id="wrapper">
      <p id="wrapper-qoute">"WearLuxury is the shit"</p>
    </div>
    <div id="nav">
      <p class="nav-select" @click="productOverlay = !productOverlay">Men</p>
      <p class="nav-select" @click="productOverlay = !productOverlay">
        Women
      </p>
      <router-link
        to="/Cart"
        class="cart"
        v-b-popover.hover.top="' - Du har 3 i kundvagnen | Totalt xxxx SEK'"
        ><b-icon-cart-dash />
      </router-link>

      <div>{{ countItems }}</div>
    </div>
    <div id="nav-overlay" v-show="!productOverlay">
      <div id="product-list">
        <router-link to="/Products">Shirts</router-link>
        <router-link to="/Products">Pants</router-link>
        <router-link to="/Products">Coats and Jackets</router-link>
        <router-link to="/Products">Accessoaries</router-link>
      </div>
    </div>
    <div id="product-wrapper1">
      <div id="reklam-bild1" class="groove">
        <p class="reklam-text">Our Vision</p>
      </div>
      <div id="reklam-bild2" class="groove">
        <p class="reklam-text">Summer Collection</p>
      </div>
      <div id="reklam-bild3" class="groove">
        <p class="reklam-text">Latest Products</p>
      </div>
    </div>
    <div id="qoute">
      <p>Nothing but the best</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        productOverlay: true
      }
    },
    computed: mapGetters(['countItems'])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #body {
    background-color: rgb(232, 232, 233);
  }

  /* Stora bilden  */
  #wrapper {
    position: relative;
    width: 100%;
    height: 560px;
    left: 0px;
    top: 0px;
    background-image: url('~@/assets/wrapper.jpg');
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  #wrapper-qoute {
    color: lavenderblush;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 550px;
    font-size: 50px;
    transform: rotate(-4deg);
  }

  /* Stora bilden  */

  /* "Men" och Women - Menyn */
  #nav {
    width: 100%;
    background: #fafafa;
    left: 0px;
    margin: 0%;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 70px;
  }

  .nav-select {
    color: rgb(85, 85, 85);
    margin-left: 20px;
    margin-right: 20px;
  }

  .nav-select:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  #nav-overlay {
    background-color: rgb(247, 247, 247);
    position: absolute;
    width: 100%;
    height: 180px;
    left: 0px;
    top: 490px;
    -webkit-animation: fadein 0.8s;
    /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.8s;
    /* Firefox < 16 */
    -ms-animation: fadein 0.8s;
    /* Internet Explorer */
    -o-animation: fadein 0.8s;
    /* Opera < 12.1 */
    animation: fadein 0.8s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #product-list a {
    margin-left: 1em;
    margin-right: 1em;
    list-style: none;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* "Men" och Women - Menyn */

  /* Dom tre bilderna  */
  #product-wrapper1 {
    display: flex;
  }

  #reklam-bild1 {
    width: 45em;
    height: 30em;
    margin-top: 20vh;
    background-repeat: no-repeat;
    background-image: url('~@/assets/reklam1.jpg');
    opacity: 0.9;
    border: 10px solid #ffffff;
    margin-left: 2em;
  }

  #reklam-bild1:hover {
    opacity: 0.8;
  }

  #reklam-bild2 {
    width: 45em;
    height: 30em;
    margin-top: 20vh;
    background-image: url('~@/assets/reklam2.jpg');
    background-position: left;
    opacity: 0.9;
    border: 10px solid #ffffff;
  }

  #reklam-bild2:hover {
    opacity: 0.8;
  }

  #reklam-bild3 {
    width: 45em;
    height: 30em;
    margin-top: 20vh;
    background-image: url('~@/assets/reklam3.jpg');
    opacity: 0.9;
    border: 10px solid #ffffff;
    margin-right: 2em;
  }

  #reklam-bild3:hover {
    opacity: 0.8;
  }
  .reklam-text {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 450px;
    color: rgb(255, 255, 255);
    font-size: 40px;
  }

  #qoute {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 550px;
    font-size: 50px;
  }
  /* Dom tre bilderna  */
</style>
