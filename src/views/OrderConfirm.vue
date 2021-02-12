<template>
  <div>
    <div class="order">
      <h1>The order has been processed</h1>
      <p>Product Number: 0123456789</p>

      <h2>You will receive your order</h2>
      <p>Mon 1 March - Thursday 5 March</p>

      <h3>Complete the registration</h3>
      <p>E-mail: yourmail@gmail.com</p>
      <p>Tele: 010 12345 678</p>
    </div>
    <!-- / Order has been processed -->

    <!-- Create account for saving info -->
    <p>
      *For saving your shopping information and enjoy our offers, you only need
      to create a account.
    </p>

    <b-container fluid style="max-width: 540px; padding:30px; margin: 30px">
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-valid">Username:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-valid"
            :state="null"
            placeholder="Enter Username"
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
    </b-container>

    <!-- shipping, delivery, payment @contact info -->

    <div>
      <div>
        <div class="mt-3">
          <b-card-group deck style="padding:30px; margin: 30px">
            <b-card header="Shipping" class="text-center">
              <b-card-text>Standard delivery to your home.</b-card-text>
            </b-card>

            <b-card header="Delivery address:" class="text-center">
              <b-card-text
                >Here is info about the customer's delivery
                address!</b-card-text
              >
            </b-card>

            <b-card header="Payment Method:" class="text-center">
              <b-card-text>PAYPAL</b-card-text>
            </b-card>

            <b-card header="Contact information:" class="text-center">
              <b-card-text
                >Here is info about the customer's contact informations such as
                phone number, e-mail, etc.!</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </div>

      <!-- product detail with photo -->

      <div>
        <b-card
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
              <b-card-body title="Product">
                <b-card-text>
                  Here is info about the product's price, shipping fee, total
                  price and VAT!
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>

    <!-- Rating -->

    <div>
      <label for="rating-5" style="padding:15px; margin: 15px"
        >Based on 1900 reviews</label
      >
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
      <b-button href="/" size="sm" style="padding:25px; margin: 25px"
        >Back to shop</b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value5: null,
        text: ''
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
</style>
