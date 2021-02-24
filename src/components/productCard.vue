<template>
  <!-- product card -->

  <div id="card-wrapper">
    <b-card
      :key="id"
      v-for="(product, id) in $store.state.products"
      class="h-100 shadow-sm"
      border-variant="light"
    >
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.brand }}</h3>
        <span id="prod-info">
          <p>{{ product.name }}</p>
          <p>{{ product.price }} $</p>
        </span>
        <!-- Show more info -->
        <div>
          <button id="more" v-b-modal.modal-tall>More info</button>

          <b-modal
            id="modal-tall"
            hide-footer
            hide-backdrop
            content-class="shadow"
            title="Brand"
          >
            <img src="../assets/suit.png" alt="suit" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </b-modal>
        </div>

        <!--  Size picker -->
        <div id="size">
          <b-form-select
            v-model="toCart.sizes[id]"
            :options="Object.values(product.size)"
            label="size"
          />
        </div>

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color">
            <b-form-radio-group
              v-model="toCart.colors[id]"
              :options="Object.values(product.color)"
              name="Color"
              size="sm"
            />
          </b-form-group>
        </div>

        <div class="text-right">
          <!--  Add to cart button -->

          <b-button
            v-b-modal.modal-no-backdrop
            block
            variant="primary"
            @click="
              addToCart(product, id)
              textPop(id)
            "
            >Add to cart</b-button
          >
        </div>
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
        modalShow: false
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
            image: product.img
          })
          alert('item added to cart')
        } else {
          return 0
        }
      },
      textPop(id) {
        if (
          this.toCart.sizes[id] !== undefined &&
          this.toCart.colors[id] !== undefined
        ) {
          alert('Item added to cart')
        } else {
          alert('Please pick color and size')
        }
      }
    }
  }
</script>

<style scoped>
  #size {
    margin-bottom: 20px;
  }
  img {
    max-width: 100%;
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
  @media (min-width: 500px) and (max-width: 799px) {
    #card-wrapper {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 50px;
    }
  }
  @media screen and (min-width: 800px) {
    #card-wrapper {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 50px;
    }
  }
</style>
