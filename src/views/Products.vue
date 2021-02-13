<template>
  <div class="produts">
    <b-container class="bv-example-row bv-example-row-flex-cols bg-light">
      <b-row>
        <b-col cols="3"><h1 class="header">New arrivals</h1></b-col>
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
      <template>
        <div class="mt-5 mb-5">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="400px"
            img-height="480px"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://www.ucg.org/files/styles/full_grid9_breakpoints_theme_top_hat_mobile_1x/public/image/article/who-are-you-dressing-for-modesty-is-more-than-just-honoring-your-parents.jpg?timestamp=1512417811"
            />

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://i.pinimg.com/originals/e1/64/da/e164dafa13c70b1398bed629b817a765.jpg"
            >
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://image.freepik.com/foto-gratis/retrato-moda-joven-empresario-guapo-modelo-hombre-traje-tela-casual-accesorios-manos_158538-9463.jpg"
            />

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://cdn.cliqueinc.com/posts/282835/cheap-fall-accessories-282835-1569959331281-main.700x0c.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </template>

      <b-row class="mt-5">
        <b-card
          title="Black lace dress"
          img-src="blackdress.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer"
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">1999kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
        <b-card
          title="Black coat"
          img-src="blackcoat.jpg"
          img-alt="Black coat"
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer"
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">1999kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
        <b-card
          title="Golden watch"
          img-src="watch.jpg"
          img-alt=""
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer "
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">1999kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
        <b-card
          title="Gold earings"
          img-src="earings.jpg"
          img-alt=""
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer "
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">800kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
        <b-card
          title="Pear black purse"
          img-src="purse.jpg"
          img-alt=""
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer "
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">2999kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
        <b-card
          title="Leather shoes"
          img-src="shoes.jpg"
          img-alt=""
          img-top
          tag="article"
          class="mb-2 col-4 productcontainer "
        >
          <b-card-text>
            <b-badge class="pricetag bg-dark">3999kr</b-badge>
          </b-card-text>
          <div class="cardbuttoncontainer">
            <b-button class="cardbutton" href="#" variant="primary"
              >Add to cart</b-button
            >
          </div>
        </b-card>
      </b-row>
    </b-container>
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
  .productbox {
    /* width: 300px;
    min-height: 250px; */
    border: solid 1px rgba(185, 184, 184, 0.747);
    font-style: bold;
    margin-top: 50px;
    padding: 5px;
  }

  .pricetag {
    font-size: 24px !important;
    position: absolute;
    top: 0px;
    left: 0px;
    /* border-radius: 0px !important; */
    font-style: italic;
  }
  .pricecart {
    float: left;
    padding-left: 20px;
    margin-top: 5px;
  }
  .cardbuttoncontainer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(192, 191, 191);
    opacity: 0.7;
    display: none;
  }
  .cardbutton {
    position: absolute;
    left: 32%;
    top: 42%;
    opacity: 1;
  }
  .productcontainer:hover .cardbuttoncontainer {
    display: block;
  }
  .productcontainer:hover .cardbutton {
    opacity: 1;
  }
  .productcontainer {
    padding: 10px !important;
  }
  .header {
    text-decoration: underline;
    padding-left: 25px;
  }
  .row1 {
    /* padding-left: 100px; */
    padding: 10px;
  }
  .card-img-top {
    width: 200px !important;
    margin-left: auto;
    margin-right: auto;
  }
</style>
