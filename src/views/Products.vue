<template>
  <div class="produts">
    <b-container class="bv-example-row bv-example-row-flex-cols bg-light">
      <b-row>
        <b-col cols="3" />
        <b-col cols="6" class="textcenter">
          <img src="logo.png" width="150px" />
        </b-col>

        <b-col cols="3">
          <div class="maindropdown float-right light">
            <b-dropdown
              id="dropdown-left"
              text="Sort by"
              variant="secondary"
              size="sm"
              class="m-2"
            >
              <b-dropdown-item href="#">Color</b-dropdown-item>
              <b-dropdown-item href="#">Pattern</b-dropdown-item>
              <b-dropdown-item href="#">Low price</b-dropdown-item>
              <b-dropdown-item href="#">High Price</b-dropdown-item>
              <b-dropdown-item href="#">Newest</b-dropdown-item>
            </b-dropdown>

            <b-dropdown
              id="dropdown-right"
              right
              text="Products"
              variant="secondary"
              size="sm"
              class="m-2"
            >
              <b-dropdown-item href="#">Women clothes</b-dropdown-item>
              <b-dropdown-item href="#">Men clothes</b-dropdown-item>
              <b-dropdown-item href="#">Accessories</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
      <b-row class="header"><h1>New arrivals</h1></b-row>
      <b-row class="row1">
        <div class="dressblack">
          <b-col
            ><p class="pricetag">1999kr</p>
            <img src="blackdress.jpg" width="170px" height="200px" />
          </b-col>
          <div class="pricecart">
            <b-row
              ><b-button class="button btn-dark">Add to cart </b-button>
            </b-row>
          </div>
        </div>

        <div class="dressbox">
          <b-col>
            <p class="pricetag">2500kr</p>
            <img src="blackcoat.jpg" width="145px" height="203px" />
          </b-col>
          <div class="pricecart pt-10">
            <b-row>
              <b-button class="button btn-dark">Add to cart</b-button>
            </b-row>
          </div>
        </div>
        <div class="watch">
          <b-col
            ><p class="pricetag">1600kr</p>
            <img src="watch.jpg" width="190px" height="200px"
          /></b-col>
          <div class="pricecart">
            <b-row>
              <b-button class="button btn-dark">Add to cart</b-button>
            </b-row>
          </div>
        </div>
      </b-row>
      <b-row class="row2">
        <div class="earrings">
          <b-col
            ><p class="pricetag">800kr</p>
            <img src="earings.jpg" width="170px"
          /></b-col>
          <div class="pricecart">
            <b-row>
              <b-button class="button btn-dark">Add to cart</b-button>
            </b-row>
          </div>
        </div>
        <div class="purse">
          <b-col
            ><p class="pricetag">2800kr</p>
            <img src="purse.jpg" width="170px"
          /></b-col>
          <div class="pricecart">
            <b-row>
              <b-button class="button btn-dark">Add to cart</b-button>
            </b-row>
          </div>
        </div>
        <div class="shoes">
          <b-col
            ><p class="pricetag pb-10">3000kr</p>
            <img src="shoes.jpg" width="170px" height="190px"
          /></b-col>
          <div class="pricecart">
            <b-row>
              <b-button class="button btn-dark">Add to cart</b-button>
            </b-row>
          </div>
        </div>
      </b-row>
    </b-container>
    <productCard />
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  .dressblack {
    width: 300px;
    height: 250px;
    border: solid 1px rgba(185, 184, 184, 0.747);
    font-style: bold;
    margin-top: 150px;
  }
  .dressbox {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
  }
  .watch {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
  }
  .purse {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
  }
  .earrings {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
    margin-bottom: 230px;
  }
  .shoes {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
  }

  .pricetag {
    float: left;
    margin-top: 10px;
    font-style: italic;
    border: solid 1px rgb(194, 194, 194);
  }
  .pricecart {
    float: left;
    padding-left: 20px;
    margin-top: 5px;
  }
  .header {
    text-decoration: underline;
    padding-left: 25px;
  }
  .row1 {
    padding-left: 100px;
  }
  .row2 {
    padding-left: 100px;
  }
</style>
