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
        <p>{{ product.name }}</p>

        <!--  Size picker -->
        <p>Size</p>
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
          <p>{{ product.price }} $</p>
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
        }
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

  #card-wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
  }
</style>
