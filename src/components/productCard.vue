<template>
  <!-- product card -->

  <div>
    <b-card :key="product.uuid" v-for="product in $store.state.products">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.brand }}</h3>
        <p>{{ product.name }}</p>

        <!-- sizes -->
        <div id="sizes">
          <b-form-group label="Size" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              v-model="toCart.size"
              :options="sizes"
              :aria-describedby="ariaDescribedby"
              name="size"
              size="sm"
            />
          </b-form-group>
        </div>
        <!--  Size picker 
        <div id="size">
          <b-form-select v-model="selected.size" :options="sizes" />
        </div> -->

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              v-model="toCart.color"
              :options="color"
              :aria-describedby="ariaDescribedby"
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
        },
        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        sizes: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      }
    },

    methods: {
      addToCart(product) {
        this.$store.commit('addCart', product, this.toCart)

        console.log('inne i add to cart metoden')
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>
