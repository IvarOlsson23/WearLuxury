<template>
  <!-- product card -->
  <div>
    <b-card V-for="product in products" :key="product.id">
      <img src="../assets/suit.png" alt="suit" />
      <b-card-text class="text-left">
        <h3>Suit</h3>
        <!-- Color dots -->
        <div id="dots">
          <b-icon icon="circle-fill" variant="success" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="warning" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="danger" style="margin: 3px" />
          <b-icon icon="circle-fill" variant="info" style="margin: 3px" />
        </div>
        <div class="text-right">
          <p>2900 sek</p>
          <!-- Add to cart button -->
          <b-button pill variant="primary">Add to cart</b-button>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>
