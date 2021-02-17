<template>
  <div id="nav">
    <b-container fluid="" id="con" class="bv-example-row">
      <b-row align-v="center" id="b-row">
        <b-col lg="2" id="logo-con" class="primary"
          ><router-link to="/" class="logo-icon">WL </router-link
          ><router-link to="/" class="logo-text">WearLuxury</router-link></b-col
        >
        <b-col id="home-con" class="primary" lg="3"
          ><router-link to="/" class="white-text">Home</router-link></b-col
        >
        <b-col id="products-con" class="primary">
          <p  id="products-text" class="white-text" @click="productOverlay = !productOverlay">
            Products
          </p>
        </b-col>

        <b-col id="about-con" class="primary"
          ><router-link to="/about" class="white-text"
            >About</router-link
          ></b-col
        >

        <b-col id="logincon"
          ><router-link to="/Login"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              id="login"
              class="bi bi-person, primary, white-text"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              /></svg></router-link
        ></b-col>
        <b-col id="korg-con" class="white-text"
          ><router-link
            to="/Cart"
            class="cart"
            v-b-popover.hover.top="
              ' - Your shopping car contains ' + countItems + ' item | Totalt ' + totalAmount + ' $'
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              fill="currentColor"
              class="bi bi-handbag, white-text"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"
              />
            </svg>
          </router-link>

          <span id="countitems">{{ countItems }}</span></b-col
        >
        <b-col sm="auto"
          ><form class="form-inline">
            <button
              class="btn btn-outline-success my-2 my-sm-0, sok-button"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search, white-text"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
            <input
              class="form-control mr-sm-2, sok-felt"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /></form
        ></b-col>
      </b-row>
    </b-container>
    <div id="nav-overlay" v-show="!productOverlay">
      <div id="product-list">
        <div id="all-products-con">
          <router-link to="/Products">All Products</router-link>
        </div>
        <div id="man-list-con" class="inline">
          <ul class="list">
            <li><router-link to="/Products">MAN</router-link></li>
            <li><router-link to="/Products">Shirts</router-link></li>
            <li><router-link to="/Products">Pants</router-link></li>
            <li><router-link to="/Products">Coats and Jackets</router-link></li>
            <li><router-link to="/Products">Accessoaries</router-link></li>
          </ul>
        </div>
        <div id="woman-list-con" class="inline">
          <ul class="list">
            <li><router-link to="/Products">Woman</router-link></li>
            <li><router-link to="/Products">Shirts</router-link></li>
            <li><router-link to="/Products">Pants</router-link></li>
            <li><router-link to="/Products">Coats and Jackets</router-link></li>
            <li><router-link to="/Products">Accessoaries</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home, Cart' ,
    components: {},
    data() {
      return {
        productOverlay: true,
        
      }
    },
    computed: mapGetters(['countItems'], ['totalAmount']),
    
    
    methods: {
      onOver() {
        this.$refs.dropdown.visible = true
      },
      onLeave() {
        this.$refs.dropdown.visible = false
      }
    },
   
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  .white-text {
    color: #ffffff !important;
    text-decoration: none;
  }

  #nav-overlay {
    background-color: rgb(247, 247, 247);
    position: absolute;
    width: 100%;
    height: 180px;
    left: 0px;
    top: 0x;
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

    align-items: center;
    z-index: 1000;
  }
  #all-products-con {
    text-align: center;
    margin: 10px;
  }
  #products-con {
    text-align: center;
  
  }

  #product-list {
    width: 100%;
    text-align: left;
  }
#products-text{
  cursor: pointer;
}

  #woman-list-con {
    width: 50%;
  }
  #man-list-con {
    width: 50%;
  }

  .inline {
    display: inline-block;
  }

  #korg-con {
    text-align: left;
    max-width: 5%;
  }
  #countitems{
    border: 1px red solid;
    background-color: red;
    border-radius: 50%;
    padding: 0px 5px 0px 5px;
    margin-bottom: 4px;
  }
  .list li {
    list-style: none;
    text-decoration: none;
  }
  .list li:first-child {
    border-bottom: 1px solid;
  }

  #about-con {
    text-align: left;
  }

  .logo-icon {
    color: #182e47 !important;
    background-color: #ffffff;
    font-family: 'Great Vibes', cursive;
    padding: 10px 5px 10px 5px;
    border: 1px #ffffff solid;
    border-radius: 50%;
    text-decoration: none;
    font-weight: bold;
  }

  .logo-text {
    color: #dcc3a7 !important;
    padding-left: 10px;
    text-decoration: none;

    font-family: 'Libre Baskerville', serif;
  }

  #home-con {
    text-align: right;
  }

  #logincon {
    text-align: right;
    max-width: 5%;
  }

  #con {
    background-color: #182e47;

    .sok-felt {
      border-radius: 25px;
      border-color: #ffffff;
      opacity: 0.6;
    }

    .sok-button {
      border-radius: 5px;
      color: black;
      border-color: #182e47;
      opacity: 0.8;
      background-color: #182e47;
    }

    a::hover {
      text-decoration: none;
      color: #ffffff;
    }
    a {
      color: black;
    }
  }

  p {
    display: inline-block;
    margin: 0;
    width: 25%;
  }

  @media only screen and (max-width: 1518px) {
#korg-con {
  max-width: 8%;
}

  }

   @media only screen and (max-width: 1100px) {
#home-con {
  max-width: 5%;
}

#logo-con {
margin-top: 10px;

}

  }

   @media only screen and (max-width: 949px) {
#korg-con {
  max-width: 10%;
}

  }

    @media only screen and (max-width: 779px) {
#korg-con {
  max-width: 15%;
}

  }

    @media only screen and (max-width: 700px) {
#countitems {
  display: none;
}

  }

   @media only screen and (max-width: 400px) {
#logo-con
{
  margin-bottom: 10px;
}
  }
    
  
</style>
