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
      <p id="p1">här kan det stå lite text</p>
      <div id="reklam-bild1">t</div>
    </div>
    <div id="product-wrapper1">
      <div id="reklam-bild2">t</div>
      <p id="p2">här kan det stå lite text</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<script>
  import ProductCard from '@/components/productCard.vue'
  export default {
    name: 'Home',

    components: {
      HelloWorld,
      ProductCard
    },

    components: {
      ProductCard
    },

    data() {
      return {
        productOverlay: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

      #wrapper {
        background-color: #777978;
        position: relative;
        width: 1920px;
        height: 560px;
        left: 0px;
        top: 0px;
      }

  #wrapper {
    background-color: #777978;
    position: relative;
    width: 100%;
    height: 560px;
    left: 0px;
    top: 0px;
  }
  #nav {
    width: 100%;
    background: #202020;
    left: 0px;
    margin: 0%;
  }

  #product-wrapper1 {
    display: flex;
    justify-content: space-evenly;
  }

  #reklam-bild1 {
    background-color: rgb(95, 95, 95);
    width: 30em;
    height: 40em;
    margin-top: 10vh;
    box-shadow: -8px 8px 21px rgba(0, 0, 0, 0.25);
  }

  #reklam-bild2 {
    background-color: rgb(95, 95, 95);
    width: 30em;
    height: 40em;
    margin-top: 10vh;
    box-shadow: -8px 8px 21px rgba(0, 0, 0, 0.25);
  }

  #p1 {
    margin-top: 40vh;
    margin-left: 10%;
  }

  #p2 {
    margin-top: 40vh;
    margin-right: 10%;
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
    position: absolute;
    background-color: rgb(221, 221, 221);
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .product-list {
    margin: 10em;
  }


      #nav {
        position: absolute;
        width: 1920px;
        top: 560px;
        background: #202020;
        left: 0px;
        margin: 0%;
      }

      #product-pic1 {
        background-color: #777978;
        margin-left: 50%;
        margin-top: 8vh;
        width: 540px;
        height: 700px;
        left: 982px;
        top: 780px;
        box-shadow: -8px 8px 21px rgba(0, 0, 0, 0.25);
      }

      #overlay1 {
        background-color: #353535;
        position: absolute;
        width: 329px;
        height: 324px;
        left: 818px;
        top: 1334px;
      }

      #text1 {
        position: absolute;
        width: 410px;
        height: 199px;
        left: 268px;
        top: 1046px;
      }

      #product-pic2 {
        background-color: #777978;
        position: absolute;
        width: 606px;
        height: 700px;
        left: 358px;
        top: 1771px;
        box-shadow: -8px 8px 21px rgba(0, 0, 0, 0.25);
      }

      #overlay2 {
        background-color: #353535;
        position: absolute;
        width: 329px;
        height: 324px;
        left: 800px;
        top: 2300px;
      }

      #text2 {
        position: absolute;
        width: 410px;
        height: 199px;
        left: 1152px;
        top: 2019px;
      }

      #footer {
        position: absolute;
        width: 1920px;
        height: 376px;
        left: 0px;
        top: 2800px;
        background-color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .nav-buttons {
        color: rgb(221, 221, 221);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px;
        justify-content: center;
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
        width: 1920px;
        height: 350px;
        left: 0px;
        top: 650px;
        -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 0.5s; /* Firefox < 16 */
        -ms-animation: fadein 0.5s; /* Internet Explorer */
        -o-animation: fadein 0.5s; /* Opera < 12.1 */
        animation: fadein 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .product-list {
        margin: 10em;
      }

  HEAD
      #nav-buttons {

      import HelloWorld from '@/components/HelloWorld.vue'
      import ProductCard from '@/components/productCard.vue'

      export default {


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

      /* Internet Explorer */
      @-ms-keyframes fadein {
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
