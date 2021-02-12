<template>
  <!-- product card -->

  <div>
    <b-card :key="product.uuid" v-for="product in $store.state.products">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>{{ product.name }}</h3>
        <!-- Color dots -->
        <div id="dots">
          <b-icon icon="circle-fill" variant="success" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="warning" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="danger" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="info" style="margin: 3px" />
        </div>
        <div class="text-right">
          <p>{{ product.price }} sek</p>
          <!--  Add to cart button -->
          <b-button pill variant="primary" @click="addToCart(uuid)"
            >Add to cart</b-button
          >
        </div>
      </b-card-text>
    </b-card>
    console.log(inCart)
  </div>
</template>

<script>
  export default {
    methods: {
      addToCart(uuid) {
        this.addToCart, uuid
        console.log('inne i add to cart metoden')
        //this.$store.dispatch('addToCart', uuid)
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>
