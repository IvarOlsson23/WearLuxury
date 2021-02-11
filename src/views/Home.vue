<template>
  <div id="body">
    <div id="wrapper">
      img
    </div>
    <div id="nav">
      <div>
        <input
          @click="productOverlay = !productOverlay"
          id="button"
          type="button"
          value="products"
        />
      </div>
    </div>
    <div id="nav-overlay" v-show="!productOverlay">
      <li class="product-list">
        Shirts Pants Coats and Jackets Accessoaries Shoes
      </li>
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
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        productOverlay: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #body {
    background-color: rgb(232, 232, 233);
  }
  #wrapper {
    position: relative;
    width: 100%;
    height: 560px;
    left: 0px;
    top: 0px;
    background-image: url('~@/assets/wrapper.jpg');
    background-repeat: no-repeat;
    background-size: 100% 220%;
  }
  #nav {
    width: 100%;
    background: #202020;
    left: 0px;
    margin: 0%;
  }

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
  #qoute {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 600px;
    font-size: 50px;
  }

  .reklam-text {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 450px;
    color: rgb(255, 255, 255);
    font-size: 40px;
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  #nav-overlay {
    background-color: rgb(221, 221, 221);
    position: absolute;
    width: 100%;
    height: 280px;
    left: 0px;
    top: 365px;
    -webkit-animation: fadein 0.5s;
    /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s;
    /* Firefox < 16 */
    -ms-animation: fadein 0.5s;
    /* Internet Explorer */
    -o-animation: fadein 0.5s;
    /* Opera < 12.1 */
    animation: fadein 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-list {
    margin: 10em;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
