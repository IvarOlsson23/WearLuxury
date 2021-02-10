<template>
  <b-container id="cart">
    <b-row>
      <b-col>
        <b-card
          title="Total amount"
          footer="Total price"
          footer-border-variant="dark"
          style="max-width: 20rem"
        >
          <b-card-tex>
            Subtotal:
            <br />
            Shipping:
          </b-card-tex>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <!-- PAYMENT METHOD -->
      <b-col>
        <h2>Payment Method</h2>
        <b-form @submit.prevent="onSubmitCardDetails">
          <b-form-group
            id="paymentMethod-group"
            label="Payment Method"
            label-for="paymentMethod"
          >
            <b-form-select
              id="payMethod"
              required
              :options="payMethodOptions"
              v-model="receiver.payMethod"
            />
          </b-form-group>
          <div v-if="receiver.payMethod == 'Visa'">
            <b-form-group
              id="cardNumber-group"
              label="Card number"
              label-for="cardNumber"
            >
              <b-form-input
                id="cardNumber"
                placeholder="0300 XXXX XXXX XXX"
                v-model="receiver.cardNumber"
                required
              />
            </b-form-group>

            <b-form-group
              id="cardExp-group"
              label="Card expires on:"
              label-for="cardExp"
            >
              <b-row id="cardExp">
                <b-col>
                  <b-form-input
                    id="carExpMonth"
                    required
                    type="number"
                    placeholder="Month"
                    max="12"
                    min="1"
                    v-model="receiver.cardExpMonth"
                  />
                </b-col>
                <b-col>
                  <b-form-input
                    id="carExpYear"
                    required
                    type="number"
                    placeholder="Year"
                    min="2021"
                    v-model="receiver.cardExpYear"
                  />
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              id="cardSecurity-group"
              label="Card security number"
              label-for="cardSecurity"
            >
              <b-form-input
                id="cardSecurity"
                v-model="receiver.cardSecurity"
                placeholder="XXX"
              />
            </b-form-group>
            <b-form-group
              id="cardNumberName-group"
              label="Card owner"
              label-for="cardNumberName"
            >
              <b-form-input
                id="cardNumberName"
                required
                v-model="receiver.cardNumberName"
                placeholder="Jonathan Luxman"
              />
            </b-form-group>
          </div>
          <div v-else-if="receiver.payMethod == 'Paypal'">
            <b-form-group
              id="paypal-group"
              label="Paypal Account"
              label-for="paypal"
            >
              <b-form-input
                type="email"
                required
                id="paypal"
                placeholder="Jonathan@paypal.com"
                v-model="receiver.paypalEmail"
              />
            </b-form-group>
          </div>
          <div v-else-if="receiver.payMethod == 'Bitcoin'">
            <b-form-group
              id="bitcoin-group"
              label="Bitcoin Adress"
              label-for="bitcoinAdress"
            >
              <b-form-input
                required
                id="bitcoinAdress"
                v-model="receiver.bitcoinAdress"
                placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
              />
            </b-form-group>
          </div>
          <div v-else-if="receiver.payMethod == 'Invoice'">
            <p>The invoice will be sent to you.</p>
          </div>
        </b-form>
      </b-col>

      <!-- ContactINFO -->
      <b-col>
        <h2>Contact information</h2>
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="surname-group" label-for="surname" label="Surname">
            <b-form-input
              id="surname"
              placeholder="Jonathan"
              required
              v-model="receiver.surname"
            />
          </b-form-group>
          <b-form-group
            i
            d="lastname-group"
            label-for="lastname"
            label="Lastname"
          >
            <b-form-input
              id="lastname"
              placeholder="Luxman"
              v-model="receiver.lastname"
              required
            />
          </b-form-group>
          <b-form-group
            id="street-group"
            label="Street & street number"
            label-for="street"
          >
            <b-form-input
              id="street"
              placeholder="Kingstreet 13"
              v-model="receiver.street"
              required
            />
          </b-form-group>
          <b-form-group
            id="postNumber-group"
            label="Post number"
            label-for="postAdress"
          >
            <b-form-input
              id="postAdress"
              required
              placeholder="41511"
              v-model="receiver.postAdress"
            />
          </b-form-group>
          <b-form-group id="city" label="City" label-for="city">
            <b-form-input
              id="city"
              required
              placeholder="Gothenburg"
              v-model="receiver.city"
            />
          </b-form-group>
          <b-form-group
            id="telephone"
            label="Phonenumber"
            label-for="telephone"
          >
            <b-form-input
              id="telephone"
              placeholder="07XXXXXXX"
              required
              v-model="receiver.telephone"
              type="tel"
            />
          </b-form-group>
          <b-form-group
            id="email-group"
            label="Email"
            label-for="email-adress"
            v-model="receiver.email"
          >
            <b-form-input
              id="email-adress"
              type="email"
              placeholder="JonathanLuxman@email.com"
              required
              v-model="receiver.email"
            />
          </b-form-group>
          <b-button type="submit" variant="primary">Order</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        receiver: {
          surename: '',
          lastname: '',
          street: '',
          postAdress: '',
          city: '',
          telephone: '',
          email: '',
          payMethod: '',
          cardNumber: '',
          cardNumberName: '',
          cardExpMonth: '',
          cardExpYear: '',
          cardSecurity: '',
          paypalEmail: '',
          bitcoinAdress: ''
        },
        payMethodOptions: ['Visa', 'Paypal', 'Bitcoin', 'Invoice'],
        submitted: false
      }
    },
    methods: {
      onSubmit() {
        this.submitted = true
        alert('Din produkt är skickad')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #cart {
    text-align: start;
  }
</style>
