<template>
  <div class="my-4">
    <div class="order">
      <h1>Your order has been processed</h1>
      <p>Order Number: 0123456789</p>
      <h2>You will receive your order</h2>
      <p>Mon 1 March - Thursday 5 March</p>
      <img src="@/assets/divider.svg" alt="divider" class="divider" />
    </div>
    <ul>
      <li v-for="(product, index) in $store.state.cart" :key="index">
        <div id="order-products">
          <p>{{ product.brand + ' ' + product.name }}</p>
        </div>
      </li>
    </ul>
    <p>{{ totalPrice }}</p>
    <!-- / Order has been processed -->

    <!-- Create account for saving info -->

    <!-- <b-container fluid style="max-width: 540px; padding:30px; margin: 30px">
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-valid">Username:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-valid"
            :state="null"
            placeholder="JonathanLuxman@email.com"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Password:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-invalid"
            :state="null"
            placeholder="Enter Password"
          />
        </b-col>
      </b-row>
    </b-container> -->

    <!-- shipping, delivery, payment @contact info -->
    <div>
      <div>
        <div class="mt-3">
          <b-card-group deck style="padding:30px; margin: 30px">
            <b-card header="Shipping" class="text-center">
              <b-card-text>Standard delivery to your home.</b-card-text>
            </b-card>

            <b-card header="Delivery address" class="text-center">
              <b-card-text>
                <p>Street & street number: Kingstreet 13</p>
                <p>Post number: 41511</p>
                <p>City: Gothenburg</p>
              </b-card-text>
            </b-card>

            <b-card header="Payment Method" class="text-center">
              <b-card-text>Paypal</b-card-text>
            </b-card>

            <b-card header="Contact information" class="text-center">
              <b-card-text
                ><p>Surname: Jonathan</p>
                <p>Lastname: Luxman</p>
                <p>Email: JonathanLuxman@email.com</p>
                <p>Phonenumber: 07XXXXXXX</p></b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </div>

      <!-- product detail with photo -->

      <div>
        <!-- <b-card
          no-body
          class="overflow-hidden"
          style="max-width: 540px; padding:30px; margin: 30px"
        >
        
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://img01.ztat.net/article/spp-media-p1/5e0b5adffa1338618afdae5031987c3e/0d68e7d30bf0477f93d4d0a7272ae7cc.jpg?imwidth=1800"
                alt="Product"
                class="rounded-0"
              />
            </b-col>
            <b-col md="6">
              <b-card-body title="Gucci">
                <b-card-text>
                  <p>Solglasögon - black/grey</p>
                  <p>Color: black</p>
                  <p>Size: XS</p>
                  <p>Item/s: 1</p>
                  <h3>2000 $</h3>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card> -->
      </div>
    </div>
    <div>
      <div>
        <b-card-group deck>
          <b-card
            header="Total amount"
            class="text-center"
            style="max-width: 540px; padding:30px; margin: 30px"
          >
            <b-card-text>price</b-card-text>
            <b-card-text>Shipping: 29 $</b-card-text>
            <h3>Total amount(inc. vat)</h3>
            <p>2029 $</p>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <!-- Rating -->

    <div>
      <label
        for="rating-5"
        class="text-center"
        style="padding:15px; margin: 15px"
      >
        <h3>Based on 1900 reviews</h3>
      </label>
      <b-form-rating
        style="max-width: 1250px; padding:15px; margin: 15px"
        id="rating-5"
        v-model="value5"
        variant="warning"
        stars="5"
      />
      <p class="mt-2">{{ value5 }}</p>
    </div>

    <!-- Back to shop/Home -->

    <div>
      <b-button
        @submit.prevent="onRedirect"
        to="/"
        size="md"
        style=" margin: 30px"
        >Back to Home</b-button
      >
    </div>
  </div>
</template>

<!-- Script -->

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'OrderConfirm',
    data() {
      return {
        value5: null,
        text: ''
      }
    },
    computed: mapGetters(['totalPrice']),
    methods: {
      onRedirect() {
        this.$router.push({ name: 'Home' })
      },
      price() {
        return this.$state.store.cart
      }
    }
  }
</script>

<!-- Style -->

<style scoped lang="scss">
  .order {
    text-align: center;
    h2 {
      padding: 20px;
      margin: 20px;
    }

    p {
      padding: 10px;
      margin: 10px;
    }
    h3 {
      padding: 20px;
      margin: 20px;
    }
    b-list-group {
      text-align: center;
      align-items: center;
      padding: 20px;
      margin: 20px;
    }
  }
  .divider {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
</style>
