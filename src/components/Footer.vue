<template>
  <div class="footer-container overflow-hidden">
    <nav class="navbar navbar-light bg-primary p-0">
      <div class="footerNavbar mt-5">
        <b-row cols="2" class="borders d-flex justify-content-center ">
          <b-col
            sm="6"
            md="3"
            class="text-left borders d-flex justify-content-center"
          >
            <ul class="footerlist ">
              <li>
                <h5>
                  <strong>Help</strong>
                </h5>
              </li>
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
          <b-col sm="6" md="3" class="d-flex justify-content-center">
            <ul class="footerlist ">
              <li>
                <h5>
                  <strong>
                    Company info
                  </strong>
                </h5>
              </li>
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
          <b-col
            sm="6"
            md="3"
            class="text-left borders d-flex justify-content-center "
          >
            <ul class="footerlist ">
              <li>
                <h5>
                  <strong>Membership</strong>
                </h5>
              </li>
              <li>
                <router-link to="/About" class="footerlink"
                  >Get 20% off by <br />
                  becoming a member</router-link
                >
              </li>
            </ul>
          </b-col>
          <b-col sm="6" md="3" class="text-left d-flex justify-content-center">
            <ul class="footerlist ">
              <li>
                <h5>
                  <strong>Quick links</strong>
                </h5>
              </li>
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
        </b-row>

        <div class="icons my-4">
          <b-icon class="mx-4 cursor" icon="facebook" font-scale="1.5" />
          <b-icon class="mx-4 cursor" icon="instagram" font-scale="1.5" />
          <b-icon class="mx-4 cursor" icon="twitter" font-scale="1.5" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .footerlink {
    color: white;
    /* font-size: 11px; */
    font-weight: lighter;
    line-height: 1.6;
  }
  .footerlist {
    list-style: none;
    text-align: left;
    padding: 0px;
    /* border: 2px solid red; */
    /* text-align: center; */
    max-width: 120px;
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

  .borders {
    /* border: 2px solid green; */
  }
  .cursor:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .footerlist {
      max-width: 170px;
    }
  }
</style>
