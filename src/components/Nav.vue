<template>
  <div id="nav">
    <b-container fluid="" id="con" class="bv-example-row">
      <b-row align-v="center" id="b-row">
        <b-col lg="2" id="logo-con" class="primary"
          ><img alt="wearluxty logo" id="logo" src="../assets/logo.png"
        /></b-col>
        <b-col id="home-con" class="primary" lg="3"
          ><router-link to="/" class="white-text">Home</router-link></b-col
        >

        <b-col id="products-con">
          <div class="mousover-div" @mouseover="onOver" @mouseleave="onLeave">
            <b-dropdown
              class="btn-secondary, primary"
              text="Products"
              ref="dropdown"
            >
              <b-dropdown-item
                ><router-link to="/Products"
                  >All Products
                </router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/Products">Man</router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/Products"
                  >Woman</router-link
                ></b-dropdown-item
              >
            </b-dropdown>
          </div></b-col
        >

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
        <b-col id="korg-con"
          ><router-link to="/cart"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-basket2, white-text"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"
              />
              <path
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"
              /></svg></router-link
        ></b-col>
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
  .white-text {
    color: #ffffff !important;
  }

  #korg-con {
    text-align: left;
    max-width: 5%;
  }
  #about-con {
    text-align: left;
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
      opacity: 0.6;
      background-color: #182e47;
    }

    #logo-con {
      width: auto;
      padding-left: 0px;
      margin-left: 0px;
    }

    #logo {
      height: 50px;
    }
    a::hover {
      text-decoration: none;
      color: #ffffff;
    }
    a {
      font-weight: bold;
      color: black;

      &.router-link-exact-active {
        color: #ffffff;
        color: #ffffff;
        transition: all 0.2s ease;
      }
    }
  }
</style>
