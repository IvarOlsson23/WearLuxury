<template>
  <div id="body">
    <div id="wrapper" />
    <div id="product-wrapper1">
      <div id="nav-overlay" v-show="!productOverlay">
        <li class="product-list">
          Shirts Pants Coats and Jackets Accessoaries Shoes
        </li>
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
      <span id="text1">Här står det lite text om nånting</span>
      <div id="product-pic1">img</div>
      <div id="overlay1" />
    </div>
    <div id="product-wrapper2">
      <span id="text2">Här står det lite text om nånting</span>
      <div id="product-pic2">img</div>
      <div id="overlay2" />
    </div>
    <div id="footer">
      <span class="nav-buttons">Nav Nav Nav Nav Nav LOGO</span>
    </div>
  </div>
</template>

<script>
  export default {
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

  #nav-buttons {
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
