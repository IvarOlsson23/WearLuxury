<template>
  <!-- product card -->
  <div id="card-wrapper">
    <b-card
      :key="id"
      border-variant="light"
      class="h-100 shadow-sm"
      v-for="(product, id) in $store.state.products"
    >
      <div id="card-img">
        <img
          :src="require('../assets' + product.img)"
          v-b-modal="'infoModal' + id"
          alt="product"
        />
      </div>
      <b-card-text class="text-left">
        <div id="brand">
          <h4>{{ product.brand }}</h4>
        </div>
        <span id="prod-info">
          <p>{{ product.name }}</p>
          <p>{{ product.price }} $</p>
        </span>
        <!-- Show more info button -->
        <button id="more" v-b-modal="'infoModal' + id">
          More info
        </button>

        <!--  Size picker -->
        <div id="size">
          <b-form-select
            :options="Object.values(product.size)"
            label="size"
            v-model="toCart.sizes[id]"
          />
        </div>

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color">
            <b-form-radio-group
              :options="Object.values(product.color)"
              v-model="toCart.colors[id]"
              name="Color"
              size="sm"
            />
          </b-form-group>
        </div>

        <!--  Add to cart button -->
        <b-button
          id="add-btn"
          block
          variant="primary"
          v-b-modal="'addText' + id"
          @click="
            addToCart(product, id)
            textPop(id)
          "
          >Add to cart</b-button
        >
        <!-- More info modal -->

        <b-modal :id="'infoModal' + id" hide-backdrop hide-footer>
          <img
            :src="require('../assets' + product.img)"
            alt="product"
            class="img-modal"
          />
          <h2>{{ product.brand }}</h2>
          <h4>{{ product.name }}</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </b-modal>

        <!--  Add to cart modal -->
        <b-modal
          :id="'addText' + id"
          button-size="sm"
          hide-backdrop
          ok-only
          size="sm"
          centered
          no-close-on-backdrop
        >
          <p>{{ msg }}</p>
        </b-modal>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toCart: {
          sizes: {},
          colors: {}
        },
        msg: ''
      }
    },
    methods: {
      addToCart(product, id) {
        if (
          this.toCart.sizes[id] !== undefined &&
          this.toCart.colors[id] !== undefined
        ) {
          this.$store.commit({
            type: 'addCart',
            brand: product.brand,
            name: product.name,
            price: product.price,
            color: this.toCart.colors[id],
            size: this.toCart.sizes[id],
            items: 1,
            img: product.img
          })
        } else {
          return 0
        }
      },
      textPop(id) {
        if (
          this.toCart.sizes[id] !== undefined &&
          this.toCart.colors[id] !== undefined
        ) {
          this.msg = 'Product added to cart'
        } else {
          this.msg = 'Please pick color & size'
        }
      }
    }
  }
</script>

<style scoped>
  #brand {
    height: 80px;
    padding-top: 20px;
  }
  #card-img {
    height: 220px;
  }
  #colors {
    height: 100px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .img-modal {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  #more {
    margin-bottom: 8px;
    border: none;
    background-color: #fff;
    font-size: 12px;
  }
  #prod-info {
    display: flex;
    justify-content: space-between;
  }
  #size {
    margin-bottom: 20px;
  }
  @media (min-width: 535px) and (max-width: 984px) {
    #card-wrapper {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 50px;
    }
  }
  @media screen and (min-width: 984px) {
    #card-wrapper {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 50px;
    }
  }
</style>
