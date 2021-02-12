<template>
  <div class="produts">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col cols="3" />
        <b-col cols="6" class="textcenter">
          <img src="logo.png" width="150px" />
        </b-col>


        <b-col cols="3">
          <div class="maindropdown float-right bg-dark">
            <b-dropdown
              id="dropdown-1"
              text="Sort by"
              class="m-md-2 bg-dark sort-by"
            >
              <div class="dropdown-1">
                <div class="dropdown-one sort">
                  <b-dropdown-item id="color" class="colors">
                    Color
                    <div class="dropdown-two">
                      <div class="colors" id="file" href="/Products">Blue</div>
                      <div class="colors" id="file" href="/Products">Red</div>
                      <div class="colors" id="file" href="/Products">Black</div>
                      <div class="colors" id="file" href="/Products">Brown</div>
                      <div class="colors" id="file" href="/Products">White</div>
                      <div class="colors" id="file" href="/Products">
                        Yellow
                      </div>
                    </div>
                  </b-dropdown-item>
                  <div class="dropdown-three">
                    <b-dropdown-item div id="Patern">
                      Pattern
                      <div class="dropdown-four">
                        <div class="patern" id="Patern" href="/Products">
                          Dotted
                        </div>
                        <div class="patern " id="Patern" href="/Products">
                          Striped
                        </div>
                        <div class="patern " id="Patern" href="/Products">
                          Plain
                        </div>
                      </div>
                    </b-dropdown-item>
                  </div>
                </div>
              </div>
            </b-dropdown>
            <b-dropdown
              id="dropdown-1"
              text="Products"
              class="m-md-2 bg-dark"
            >
              <b-dropdown-item>Women clothes</b-dropdown-item>
              <b-dropdown-item>Men clothes</b-dropdown-item>
              <b-dropdown-item>Accessories</b-dropdown-item>
              <b-dropdown-divider />
            </b-dropdown>
          </div>
        </b-col>

       
<!-- Drowdown menu for sorty by and products -->

    <b-dropdown id="dropdown-left" text="Sort by" variant="secondary" size="sm" class="m-2">
    <b-dropdown-item href="#">Color</b-dropdown-item>
    <b-dropdown-item href="#">Pattern</b-dropdown-item>
    <b-dropdown-item href="#">Low price</b-dropdown-item>
    <b-dropdown-item href="#">High Price</b-dropdown-item>
    <b-dropdown-item href="#">Newest</b-dropdown-item>
  </b-dropdown>

  <b-dropdown id="dropdown-right" right text="Products" variant="secondary" size="sm" class="m-2">
    <b-dropdown-item href="#">Women clothes</b-dropdown-item>
    <b-dropdown-item href="#">Men clothes</b-dropdown-item>
    <b-dropdown-item href="#">Accessories</b-dropdown-item>
  </b-dropdown>

      </b-row>



      
      <b-row class="header"><h1>New arrivals</h1></b-row>
      <b-row>
        <div class="dressblack bg-light">
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

        <div class="dressbox bg-light">
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
        <div class="watch bg-light">
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
      <b-row>
        <div class="earrings bg-light">
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
        <div class="purse bg-light">
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
        <div class="shoes bg-light">
          <b-col
            ><p class="pricetag">3000kr</p>
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
</template>           align-v="left"
   
<script>
  import productCard from '@/components/productCard.vue'
  export default {
    components: {
      productCard
    },
    data() {
      return {}
    }
  }
</script>

<style>
  .menue {
    align-content: center;
    color: white;
    width: 150px;
    float: right;
    padding: 20px;
  }
  .dropdown-1 {
    float: left;
  }
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
  }
  .shoes {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 150px;
    margin-left: 15px;
  }
  .dropdown {
    float: left;
    position: relative;
  }

  .dropdown .sort-by {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  .dropdown-one,
  .dropdown-three {
    cursor: pointer;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-two {
    cursor: pointer;
    display: none;
    position: absolute;
    left: 160px;
    top: 0px;
    min-width: 160px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-four {
    cursor: pointer;
    display: none;
    position: absolute;
    left: 160px;
    top: 0px;
    min-width: 160px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown:hover .dropdown-one,
  #color:hover > .dropdown-two {
    display: block;
  }
  .dropdown:hover .dropdown-three,
  #Patern:hover > .dropdown-four {
    display: block;
  }

  .dropdown-one .colors {
    color: black;
    padding: 12px 16px;
    display: block;
    text-align: left;
  }

  .dropdown-one .Pattern:hover,
  .dropdown-two a:hover {
    background-color: #ddd;
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
  }
</style>
