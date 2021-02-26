<template>
  <div class="footer-container">
    <nav class="navbar navbar-light bg-primary p-0">
      <div class="footerNavbar mt-5">
        <b-row>
          <b-col cols="8" offset="2"
            ><b-row>
              <b-col class="text-left col-sm-12 col-md-3">
                <strong>Help</strong>
                <ul class="footerlist">
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Order status</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >My account</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Contact us</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Shipping info</router-link
                    >
                  </li>
                </ul>
              </b-col>
              <b-col class="text-left col-sm-12 col-md-3">
                <strong>Company info</strong>
                <ul class="footerlist">
                  <li>
                    <router-link to="/About" class="footerlink"
                      >About us</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Social responsibility</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Our policy</router-link
                    >
                  </li>
                </ul>
              </b-col>
              <b-col class="text-left col-sm-12 col-md-3">
                <strong>Membership</strong>
                <ul class="footerlist">
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Get 20% off by <br />
                      becoming a member</router-link
                    >
                  </li>
                </ul>
              </b-col>
              <b-col class="text-left col-sm-12 col-md-3">
                <strong>Quick links</strong>
                <ul class="footerlist">
                  <li>
                    <router-link to="/Products" class="footerlink"
                      >Special offers</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Careers</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/About" class="footerlink"
                      >Gift cards</router-link
                    >
                  </li>
                </ul>
              </b-col>
            </b-row></b-col
          >
        </b-row>
        <!-- <p class="footerNavbar">Tel: 032843417</p>

        <p class="footerNavbar">E-mail: WLShop@hotmail.com</p> -->

        <div class="icons" style="margin-bottom:25px">
          <b-icon style="margin-left:1.5em" icon="facebook" font-scale="1.5" />
          <b-icon style="margin-left:1.5em" icon="instagram" font-scale="1.5" />
          <b-icon style="margin-left:1.5em" icon="twitter" font-scale="1.5" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .footerlink {
    color: white;
    font-size: 11px;
    font-weight: lighter;
  }
  .footerlist {
    list-style: none;
    text-align: left;
    padding: 0px;
  }

  .footerNavbar {
    color: rgb(231, 231, 229);

    width: 100%;
  }

  .footer-container {
    left: 0;
    bottom: 0;
    width: 100%;
  }
  /* @media only screen and (max-width: 800px) {
    .footerNavbar {
      width: 100%;
    }
  } */
</style>
