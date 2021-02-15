<template>
  <div id="appp">
    <b-container fluid="" id="con" class="bv-example-row">
      <b-row align-v="center">
        <b-col lg="2" id="logo"
          ><img alt="wearluxty logo" src="../assets/logo.png"
        /></b-col>
        <b-col id="home-con" lg="1"
          ><router-link to="/">Home</router-link></b-col
        >
        <b-col id="products-con" cols="5">
          <ul>
            <li>
              <a href="#" aria-haspopup="true"
                ><router-link to="/Products">Products</router-link></a
              >
              <ul class="dropdown" aria-label="submenu">
                <li>
                  <a href="#"><router-link to="/Products">Men</router-link></a>
                </li>
                <li>
                  <a href="#"
                    ><router-link to="/Products">Women</router-link></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </b-col>

        <b-col md="auto"
          ><form class="form-inline">
            <input
              class="form-control mr-sm-2, sok"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /><button
              class="btn btn-outline-success my-2 my-sm-0, sokk"
              type="submit"
            >
              Sök
            </button>
          </form></b-col
        >

        <b-col id="logincon"
          ><router-link to="/Login"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              id="login"
              class="bi bi-person"
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
              class="bi bi-basket2, kop"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"
              />
              <path
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"
              /></svg></router-link
        ></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped lang="scss">
  #appp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #korg-con {
    text-align: left;
  }

  #products-con {
    text-align: left;
  }

  #logincon {
    text-align: right;
  }

  #con {
    background-color: white;

    .sok {
      border-radius: 5px;
      border-color: black;
      opacity: 0.6;
    }

    .sokk {
      border-radius: 5px;
      color: black;
      border-color: black;
      opacity: 0.6;
      background-color: white;
    }

    #logo {
      width: auto;
      padding-left: 0px;
      margin-left: 0px;
    }
    a::hover {
      text-decoration: none;
      color: black;
    }
    a {
      font-weight: bold;
      color: #2c3e50;
      color: #000000;

      &.router-link-exact-active {
        color: #fff200;
        color: #fff200;
        transition: all 0.2s ease;
      }
    }
    a {
      text-decoration: none;
    }

    @media all and (min-width: 992px) {
      .navbar .nav-item .dropdown-menu {
        display: none;
      }
      .navbar .nav-item:hover .nav-link {
        color: #fff;
      }
      .navbar .nav-item:hover .dropdown-menu {
        display: block;
      }
      .navbar .nav-item .dropdown-menu {
        margin-top: 0;
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
    }

    li {
      display: block;
      float: left;
      padding: 0.5rem;
      position: relative;
      text-decoration: none;
      transition-duration: 0.5s;
    }

    li a {
      color: #000000;
    }

    li:hover,
    li:focus-within {
      cursor: pointer;
    }

    li:focus-within a {
      outline: none;
    }

    ul li ul {
      visibility: hidden;
      opacity: 0;
      min-width: 5rem;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 0.3rem;
      left: 0;
      display: none;
    }

    ul li:hover > ul,
    ul li:focus-within > ul,
    ul li ul:hover,
    ul li ul:focus {
      visibility: visible;
      opacity: 1;
      display: block;
    }

    ul li ul li {
      clear: both;
      width: 100%;
    }
  }

  @media screen and (max-width: 1399px) {
    #korg-con {
      text-align: left;
    }
    #home-con {
      margin-left: 50px;
    }
    #login-con {
      text-align: left;
    }
  }

  @media screen and (max-width: 960px) {
    #korg-con {
      text-align: left;
    }
  }

  @media screen and (max-width: 768px) {
    #home-con {
      text-align: left;
    }
    #korg-con {
      text-align: left;
    }
    #logo {
      padding: auto;
    }
  }
</style>
