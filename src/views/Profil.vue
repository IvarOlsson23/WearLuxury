<template>
  <div id="con">
    <b-container class="bv-example-row">
      <div id="your">Your Account</div>
      <b-row>
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img
                class="full-wd"
                src="../assets/shopping-cart.png"
                alt="suit"
              />
            </div>
            <div class="img-div">Your Orders</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/card.png" alt="suit" />
            </div>
            <div class="img-div">Payments</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/info.png" alt="suit" />
            </div>
            <div class="img-div">Your information</div></router-link
          ></b-col
        >
      </b-row>

      <b-row>
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/security.png" alt="suit" />
            </div>
            <div class="img-div">Security</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/friend.png" alt="suit" />
            </div>
            <div class="img-div">Invite friend</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div a">
              <img class="full-wd " src="../assets/gift-card.png" alt="suit" />
            </div>
            <div class="img-div">Gift cards</div></router-link
          ></b-col
        >
      </b-row>
      <div id="need">Need help?</div>
      <b-row>
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div a">
              <img class="full-wd" src="../assets/member.png" alt="suit" />
            </div>
            <div class="img-div">About the membership</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/news.png" alt="suit" />
            </div>
            <div class="img-div">My newsletters</div></router-link
          ></b-col
        >
        <b-col class="cols"
          ><router-link to="/orders"
            ><div class="img-div">
              <img class="full-wd" src="../assets/help.png" alt="suit" />
            </div>
            <div class="img-div">Help</div></router-link
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script></script>

<style scoped lang="scss">
  #con {
    width: 70%;
    margin: auto;
  }
  .a {
    padding-top: 30px;
  }

  .img-div {
    width: 50%;
    display: inline-block;
  }
  .full-wd {
    width: 100%;
  }
  .cols {
    border: 1px solid;
    margin: 20px;
    border-radius: 5px;
  }
  #your {
    font-size: 40px;
    text-align: left;
    padding-bottom: 15px;
    padding-top: 20px;
  }

  #need {
    font-size: 24px;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
</style>
