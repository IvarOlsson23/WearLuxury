<template>
  <b-container class="mb-100" id="cart">
    <b-row>
      <!-- CARTITEMS -->
      <b-col class="mb-4">
        <b-card
          :title="cartItemLength"
          class="h-100 shadow-sm "
          border-variant="light"
        >
          <b-card
            :img-src="require('../assets' + product.img)"
            img-left
            img-width="120px"
            img-height="220px"
            :title="product.brand"
            :sub-title="product.name"
            footer-tag="footer"
            footer-bg-variant="light"
            footer-border-variant="light"
            v-for="(product, index) in $store.state.cart"
            :key="index"
            class="mb-4 cards"
            footer-class="d-flex flex-column justify-content-around bg-white"
            border-variant="light"
          >
            <b-card-text>
              Color: {{ product.color }}
              <br />
              Size: {{ product.size }}
              <span class="d-block mt-2">
                <b-icon
                  class="cursor "
                  @click="removeItem(index)"
                  icon="trash"
                />
                <span class="d-none d-sm-inline">
                  Remove
                </span>
              </span>
            </b-card-text>

            <template #footer>
              <b-form-select
                class="w-auto"
                v-model="product.items"
                :options="options"
              />
              <span class="d-block">
                <strong> {{ product.price }}$ </strong>
              </span>
            </template>
          </b-card>
        </b-card>
      </b-col>
      <!-- TOTAL AMOUNT -->
      <b-col cols="12" md="6" class="mb-4">
        <b-card
          title="Total amount"
          footer-border-variant="dark"
          footer-tag="footer"
          class="shadow-sm"
          border-variant="light "
        >
          <b-card-text>
            <div class="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>{{ totalAmount }} $</span>
            </div>

            <div class="d-flex justify-content-between">
              <span>Shipping:</span>
              <span>29 $</span>
            </div>
          </b-card-text>
          <template #footer>
            <div class="d-flex justify-content-between font-weight-bold  ">
              <span>Total amount(inc. vat)</span>
              <span>{{ totalAmount }} $</span>
            </div>
          </template>
        </b-card>
      </b-col>
    </b-row>

    <!-- PAYMENT METHOD -->
    <b-form @submit.stop.prevent="onSubmit">
      <b-row>
        <b-col cols="12" md="6">
          <h2>Payment Method</h2>
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
                required
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
        </b-col>

        <!-- ContactINFO -->
        <b-col cols="12" md="6" class="mt-sm-4 mt-md-0 mt-4">
          <h2>Contact information</h2>
          <b-form-group
            id="loginChoice-group"
            label="Log in choice"
            label-for="loginChoice"
          >
            <b-form-select
              id="loginChoice"
              required
              :options="loginOptions"
              v-model="loginChoice"
            />
          </b-form-group>
          <div v-if="loginChoice === 'Or continuee as guest'">
            <b-form-group
              id="firstname-group"
              label-for="firstname"
              label="Firstname"
            >
              <b-form-input
                id="firstname"
                placeholder="Jonathan"
                required
                v-model="receiver.firstname"
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
            >
              <b-form-input
                id="email-adress"
                type="email"
                placeholder="JonathanLuxman@email.com"
                required
                v-model="receiver.email"
              />
            </b-form-group>
            <!-- Subscribe to newsletter -->
            <b-form-group class="mx-2">
              <b-form-checkbox
                style=" padding: 10px; margin-top: 10px"
                required
              >
                I accept all information and terms on
                WearLuxury</b-form-checkbox
              >

              <b-form-checkbox
                style=" padding: 10px; margin-top: 10px"
                v-model="receiver.newsLetter"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Yes, I want to subscribe to WearLuxury newsletters
              </b-form-checkbox>
            </b-form-group>
          </div>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-4">
        <b-col cols="12" md="6">
          <b-button block type="submit" variant="danger">Place order</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        receiver: {
          firstname: '',
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
          bitcoinAdress: '',
          boughtProducts: '',
          totalPrice: '',
          newsLetter: ''
        },
        payMethodOptions: ['Visa', 'Paypal', 'Bitcoin', 'Invoice'],
        options: [1, 2, 3, 4],
        loginOptions: ['Use your account information', 'Or continue as guest'],
        loginChoice: ''
      }
    },
    methods: {
      onSubmit() {
        this.receiver.boughtProducts = this.$store.state.cart.slice()
        this.receiver.totalPrice = this.totalAmount
        this.$store.commit('setOrder', Object.assign({}, this.receiver))
        // RESETS RECEIVER DATA
        Object.keys(this.receiver).forEach(key => (this.receiver[key] = ''))

        //RESET CART
        while (this.$store.state.cart.length > 0) {
          this.$store.commit('removeItem', 0)
        }

        // GOES TO NEXT PAGE
        this.$router.push({ name: 'OrderConfirm' })
      },
      removeItem(index) {
        this.$store.commit('removeItem', index)
      }
    },
    computed: {
      totalAmount() {
        if (this.$store.state.cart.length > 0) {
          return (
            this.$store.state.cart
              .map(item => item.price * item.items)
              .reduce((total, amount) => total + amount) + 29
          )
        } else {
          return 0
        }
      },
      cartItemLength() {
        let productLength = this.$store.state.cart.length
        let productMessage = productLength === 1 ? ' product)' : ' products)'
        return 'Cart (' + productLength + productMessage
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    object-fit: contain;
  }
  .cards {
    padding: 0px;
    max-width: 100%;
  }
  #cart {
    text-align: start;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .cursor {
    cursor: pointer;
  }
</style>
