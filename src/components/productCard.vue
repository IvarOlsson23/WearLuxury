<template>
  <!-- product card -->

  <div>
    <b-card :key="id" v-for="(product, id) in $store.state.products">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.brand }}</h3>
        <p>{{ product.name }}</p>

        <!--  Size picker -->
        <p>Size</p>
        <div id="size">
          <b-form-select
            v-model="toCart.sizes[id]"
            :options="product.size"
            label="size"
          />
        </div>

        <!--  Color dots -->
        <div id="colors">
          <b-form-group label="Color">
            <b-form-radio-group
              v-model="toCart.colors[id]"
              :options="product.color"
              name="Color"
              size="sm"
            />
          </b-form-group>
        </div>

        <div class="text-right">
          <p>{{ product.price }} $</p>
          <!--  Add to cart button -->
          <b-button variant="primary" @click="addToCart(product, id)"
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
        }
      }
    },
    methods: {
      addToCart(product, id) {
        console.log(product)
        console.log(this.toCart.sizes)
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
            items: 1
          })
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
