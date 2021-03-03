<template>
  <div id="con">
    <b-container class="bv-example-row">
      <div id="your">Your Account</div>
      <b-row class="d-flex justify-content-center">
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div">
              <img
                class="full-wd"
                src="../assets/shopping-cart.png"
                alt="suit"
              />
            </div>
            <div class="small-text">Your Orders</div></router-link
          ></b-col
        >
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/"
            ><div class="img-div">
              <img class="full-wd" src="../assets/card.png" alt="suit" />
            </div>
            <div class="small-text">Payments</div></router-link
          ></b-col
        >
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/Userinfo"
            ><div class="img-div">
              <img class="full-wd" src="../assets/info.png" alt="suit" />
            </div>
            <div class="small-text">Your information</div></router-link
          ></b-col
        >
      </b-row>

      <b-row class="d-flex justify-content-center">
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div a">
              <img class="full-wd" src="../assets/security.png" alt="suit" />
            </div>
            <div class="small-text">Security</div></router-link
          ></b-col
        >
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/friend.png" alt="suit" />
            </div>
            <div class="small-text">InviteFriend</div></router-link
          ></b-col
        >
        <b-col
          class="cols a h-100 shadow-sm "
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/gift-card.png" alt="suit" />
            </div>
            <div class="small-text">Gift cards</div></router-link
          ></b-col
        >
      </b-row>

      <div id="need">Need help?</div>

      <b-row class="d-flex justify-content-center">
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div a">
              <img class="full-wd" src="../assets/member.png" alt="suit" />
            </div>
            <div class="small-text">About the membership</div></router-link
          ></b-col
        >
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/news.png" alt="suit" />
            </div>
            <div class="small-text">My newsletters</div></router-link
          ></b-col
        >
        <b-col
          class="cols h-100 shadow-sm"
          sm="12"
          md="3"
          border-variant="light"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/help.png" alt="suit" />
            </div>
            <div class="small-text">Help</div></router-link
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script></script>

<style scoped lang="scss">
  #con {
    width: 100%;
    margin: auto;
  }
  .a {
    padding-top: 30px;
  }
  .inline {
    display: inline-block;
  }

  .img-div {
    display: inline-block;
  }
  .full-wd {
    width: 100%;
  }
  .cols {
    max-width: 250px;
    min-height: 250px;
    margin: 35px;
    border-radius: 5px;
  }
  #your {
    font-size: 40px;
    padding-bottom: 15px;
    padding-top: 20px;
  }

  #need {
    font-size: 24px;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
  @media only screen and (max-width: 1200px) {
    .cols {
      margin: 15px;
    }
    #con {
      width: 100%;
      margin: auto;
    }
  }
</style>
