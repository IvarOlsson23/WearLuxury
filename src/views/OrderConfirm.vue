<template>
  <div class="my-4">
    <div class="order">
      <h1>Thank you!</h1>
      <h2>
        Your order has <br />
        been processed
      </h2>
      <h2>You will receive your order</h2>
      <p>Mon 1 March - Thursday 5 March</p>

      <!-- Divider  -->
      <img src="@/assets/divider.svg" alt="divider" class="divider" />
    </div>
    <ul>
      <li
        v-for="(product, index) in $store.state.orders[0].boughtProducts"
        :key="index"
      >
        <div id="order-products">
          <p>{{ product.brand + ' ' + product.name }}</p>
          <p>{{ product.price }}$</p>
        </div>
      </li>
    </ul>
    <div id="shipping">
      <p>Shipping:</p>
      <p>29$</p>
    </div>
    <div id="total-sum">
      <strong>Total:</strong>
      <p>{{ totalPrice }}$</p>
    </div>
    <p id="order-number"><strong> Order Number: 0123456789</strong></p>
    <div id="adress-section">
      <div>
        <Strong>Delivery Adress</Strong>
        <div class="adress">
          <p>{{ street }}</p>
          <p>{{ zipCode }}</p>
          <p>{{ city }}</p>
        </div>
      </div>
      <div>
        <Strong>Contact information</Strong>
        <div class="adress">
          <p>{{ surName }} {{ lastName }}</p>
          <p>{{ eMail }}</p>
          <p>{{ phoneNumber }}</p>
        </div>
      </div>
    </div>

    <img src="@/assets/divider.svg" alt="divider" class="divider" />
    <!-- / Order has been processed -->

    <!-- Rating -->

    <div id="rating">
      <label
        for="rating-5"
        class="text-center"
        style="padding:15px; margin: 15px"
      >
        <h3>Based on 1900 reviews</h3>
      </label>

      <b-form-rating
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
    computed: {
      ...mapGetters([
        'totalPrice',
        'surName',
        'lastName',
        'eMail',
        'phoneNumber',
        'street',
        'zipCode',
        'city'
      ])
    },

    methods: {
      onRedirect() {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<!-- Style -->

<style scoped lang="scss">
  * {
    list-style: none;
  }
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
    width: 100%;
  }

  #adress-section {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .adress {
    color: grey;
  }

  #order-products {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-left: 30%;
    margin-right: 30%;
  }
  #shipping {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-left: 35%;
    margin-right: 30%;
  }
  #login-form {
    justify-content: flex;
    justify-content: center;
  }

  .pb-2 {
    justify-content: center;
  }
  #total-sum {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 3em;
    font-size: 1.5em;
  }

  #rating {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
  }

  @media (max-width: 500px) {
    #order-products {
      margin-left: 0%;
      margin-right: 10%;
    }
    #rating {
      margin-left: 20px;
      margin-right: 20px;
    }
    #total-sum {
      margin-left: 30%;
      margin-right: 30%;
      margin-top: 3em;
      font-size: 1.5em;
    }
  }
</style>
