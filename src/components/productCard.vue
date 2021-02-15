<template>
  <!-- product card -->

  <div>
    <b-card :key="product.uuid" v-for="product in $store.state.products">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.brand }}</h3>
        <p>{{ product.name }}</p>

        <!--  Size picker -->
        <p>Size</p>
        <div id="size">
          <b-form-select v-model="toCart.size" :options="sizes" label="size" />
        </div>

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color">
            <b-form-radio-group
              v-model="toCart.color"
              :options="color"
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
          size: null,
          color: null
        }
      }
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addCart', product)

        console.log(this.toCart.size)
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
</style>
