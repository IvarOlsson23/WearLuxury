<template>
  <div class="produts my-4">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <!-- Productcards -->
      <template>
        <div class="mt-5 mb-5">
          <b-carousel
            class="carousel"
            id="carousel-1"
            :interval="4000"
            background="#ababab"
            img-width="400px"
            img-height="200px"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              img-width="400px"
              img-height="200px"
              img-src="https://i0.wp.com/queenandberry.com/wp-content/uploads/2019/03/We-Love-Luxury-Brands-And-You-Do-Too-_-Trae-Bundrant.png?fit=1920%2C1080&ssl=1"
            />

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://i.pinimg.com/originals/e1/64/da/e164dafa13c70b1398bed629b817a765.jpg"
            />

            <!-- Slides with image only -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://image.freepik.com/foto-gratis/retrato-moda-joven-empresario-guapo-modelo-hombre-traje-tela-casual-accesorios-manos_158538-9463.jpg"
            />

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  img-width="400px"
                  img-height="200px"
                  src="https://cdn.cliqueinc.com/posts/282835/cheap-fall-accessories-282835-1569959331281-main.700x0c.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide
              caption="Blank Image"
              img-alt="Blank image"
              img-width="400px"
              img-height="200px"
              img-src="https://i.pinimg.com/originals/0b/24/49/0b2449e9677cb58632b1e6c9cb329272.jpg"
            />
          </b-carousel>
        </div>
      </template>
      <b-row>
        <!-- Dropdown menu -->

        <div class="maindropdown ">
          <b-dropdown
            id="dropdown-right"
            right
            text="Products"
            variant="primary"
            size="sm"
            class="m-2"
          >
            <b-dropdown-item @click="setCathegory('')">All</b-dropdown-item>
            <b-dropdown-item @click="setCathegory('women')"
              >Women clothes</b-dropdown-item
            >
            <b-dropdown-item @click="setCathegory('men')"
              >Men clothes</b-dropdown-item
            >
            <b-dropdown-item @click="setCathegory('accessories')"
              >Accessories</b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown
            id="dropdown-left"
            text="Sort by"
            variant="primary"
            size="sm"
            class="m-2"
          >
            <b-dropdown-item href="#">Color</b-dropdown-item>
            <b-dropdown-item href="#">Pattern</b-dropdown-item>
            <b-dropdown-item href="#">Low price</b-dropdown-item>
            <b-dropdown-item href="#">High Price</b-dropdown-item>
            <b-dropdown-item href="#">Newest</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-row>

      <div id="product-wrapper">
        <b-row>
          <b-col cols="12"> <productCard /></b-col>
        </b-row>
      </div>
      <!-- Productcards -->
      <h3 class="other-products pb-10px">Also check out new arrivals</h3>
      <hr />
      <b-row class="mt-5">
        <template v-for="(dress, index) in products">
          <b-card
            :key="index"
            :title="dress.title"
            :img-src="require('@/assets/blackdress.jpg')"
            img-alt="Image"
            tag="article"
            class="mb-2  col-sm-12 col-md-4 productcontainer"
          >
            <b-card-text>
              <p class="pricetag">1999$</p>
            </b-card-text>
            <div class="cardbuttoncontainer">
              <b-button class="cardbutton" href="#" variant="primary"
                >Add to cart</b-button
              >
            </div>
          </b-card>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import productCard from '@/components/productCard.vue'
  export default {
    components: {
      productCard
    },
    data() {
      return {
        cathegory: ''
      }
    },
    computed: {
      products() {
        if (this.cathegory == '') {
          return this.$store.getters.newarrivalproducts
        }
        return this.$store.getters.newarrivalproducts.filter(
          u => u.cathegory == this.cathegory
        )
      }
    },
    methods: {
      setCathegory(cathegory) {
        this.cathegory = cathegory
      }
    }
  }
</script>

<style scoped>
  .productbox {
    border: solid 1px rgba(185, 184, 184, 0.747);
    font-style: bold;
    margin-top: 50px;
    padding: 5px;
  }

  .pricetag {
    font-size: 24px !important;
    color: rgb(0, 0, 0);
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
  .other-products {
    margin-top: 60px;
  }
  .maindropdown {
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .carousel {
    max-height: 500px;
    overflow: hidden;
  }
  @media only screen and (max-width: 600px) {
    .carousel {
      max-height: 200px;
      overflow: hidden;
    }
  }
</style>
