<template>
  <div id="nav">
    <b-container fluid="" id="con" class="bv-example-row">
      <b-row align-v="center" id="b-row">
        <b-col lg="2" id="logo-con" class="primary"
          ><router-link to="/" class="logo-icon">WL </router-link
          ><router-link to="/" class="logo-text">WearLuxury</router-link></b-col
        >
        <b-col id="home-con" class="primary" @mouseover="listhover = false"
          ><router-link to="/" class="white-text"
            ><span @click="listhover = false">Home</span></router-link
          ></b-col
        >
        <b-col
          @mouseover="listhover = true"
          id="products-con"
          class="primary, menu"
        >
          <router-link to="/Products" class="white-text"
            ><span @click="listhover = false">Products</span></router-link
          >
        </b-col>

        <b-col id="about-con" class="primary" @mouseover="listhover = false"
          ><router-link to="/about" class="white-text"
            ><span @click="listhover = false">About</span></router-link
          ></b-col
        >

        <b-col id="logincon"
          ><router-link to="/login"
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
        <div id="shopping-cart">
          <router-link to="/cart">
            <svg
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

          <span id="countitems">{{ countItems }}</span>
        </div>
        <b-col id="sok-con" sm="auto"
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
    <transition name="fade">
      <div
        id="dropdown"
        v-if="listhover"
        @click="listhover = false"
        @mouseleave="listhover = false"
      >
        <ul id="man-list">
          <li>
            <router-link to="/products" class="text-dec"
              ><h5>Man</h5></router-link
            >
          </li>
          <li>
            <router-link to="/products" class="text-dec">Suits</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Ties</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Jackets</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Shoes</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Bags</router-link>
          </li>
        </ul>

        <ul id="woman-list">
          <li>
            <router-link to="/products" class="text-dec"
              ><h5>Woman</h5></router-link
            >
          </li>
          <li>
            <router-link to="/products" class="text-dec">Dresses</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Shoes</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Jackets</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-dec">Bags</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        listhover: false
      }
    },

    computed: mapGetters(['countItems']),

    methods: {
      onOver() {
        this.$refs.dropdown.visible = true
      },
      onLeave() {
        this.$refs.dropdown.visible = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease-in;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  #nav {
    position: sticky;
    top: 0px;
    z-index: 1000;
  }

  .white-text {
    color: #ffffff !important;
    text-decoration: none;
  }
  .inline {
    display: inline-block;
  }
  .text-dec {
    text-decoration: none;
  }

  #products-con {
    text-align: center;
  }

  #countitems {
    color: white;
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

  #dropdown {
    display: flex;
    position: absolute;
    width: 100%;
    left: 0px;
    align-items: center;
    z-index: 1000;
    background-color: #ffffff;
  }

  #dropdown li {
    list-style: none;
  }
  #man-list {
    width: 50%;
    padding-top: 25px;
    padding-left: 0px;
  }
  #man-list li:first-child {
    border-bottom: 1px solid;
    margin-bottom: 8px;
  }
  #woman-list {
    width: 50%;
    padding-left: 0px;
  }
  #woman-list li:first-child {
    border-bottom: 1px solid;

    margin-bottom: 8px;
  }

  @media only screen and (max-width: 1162px) {
    .logo-icon {
      display: none;
    }
    #logincon {
      padding-right: 40px;
    }
    #logo-con {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 580px) {
    #countitems {
      display: none;
    }
    .sok-button {
      display: none;
    }

    #logo-con {
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    #logincon {
      padding-right: 30px;
    }
    #shopping-cart {
      margin-right: 15px;
    }
    #sok-con {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
</style>
