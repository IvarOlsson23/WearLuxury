<template>
  <!-- product card -->

  <div class="test">
    <b-card :key="product.uuid" v-for="product in $store.state.products">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.brand }}</h3>
        <p>{{ product.name }}</p>

        <!--  Size picker -->
        <p>Size</p>
        <div id="size">
          <b-form-select
            v-model="toCart.size"
            :options="product.size"
            label="size"
          />
        </div>

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color">
            <b-form-radio-group
              v-model="toCart.color"
              :options="product.color"
              name="Color"
              size="sm"
            />
          </b-form-group>
        </div>

        <div class="text-right">
          <p>{{ product.price }} $</p>
          <!--  Add to cart button -->
          <b-button variant="primary" @click="addToCart(product)"
            ><b-icon icon="cart-plus"
          /></b-button>
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
          size: '',
          color: ''
        }
      }
    },
    methods: {
      addToCart(product) {
        if (this.toCart.size && this.toCart.color !== '') {
          this.$store.commit({
            type: 'addCart',
            brand: product.brand,
            name: product.name,
            price: product.price,
            item: 1,
            size: this.toCart.size,
            color: this.toCart.color
          })

          console.log(this.toCart.size)
          console.log(this.toCart.color)
        } else {
          return 0
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

  .test {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
  }
</style>
