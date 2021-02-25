<template>
  <b-container class="mb-100" id="cart">
    <b-row>
      <!-- CARTITEMS -->
      <b-col class="mb-4">
        <b-card
          :title="cartItemLength"
          class="h-100 shadow-sm"
          border-variant="light"
        >
          <b-card
            img-src="https://img01.ztat.net/article/spp-media-p1/5e0b5adffa1338618afdae5031987c3e/0d68e7d30bf0477f93d4d0a7272ae7cc.jpg?imwidth=1800"
            img-left
            img-width="120px"
            :title="product.brand"
            :sub-title="product.name"
            footer-tag="footer"
            footer-bg-variant="light"
            footer-border-variant="light"
            v-for="(product, index) in $store.state.cart"
            :key="index"
            class="mb-4 "
            footer-class="d-flex flex-column justify-content-around bg-white"
            border-variant="light"
          >
            <b-card-text>
              Color: {{ product.color }}
              <br />
              Size: {{ product.size }}
              <span class="d-block mt-2">
                <b-icon
                  class="cursor"
                  @click="removeItem(index)"
                  icon="trash"
                />
                Remove
              </span>
            </b-card-text>

            <template #footer>
              <b-form-select v-model="product.items" :options="options" />
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
          bitcoinAdress: '',
          boughtProducts: '',
          totalPrice: ''
        },
        payMethodOptions: ['Visa', 'Paypal', 'Bitcoin', 'Invoice'],
        options: [1, 2, 3, 4]
      }
    },
    methods: {
      onSubmit() {
        this.receiver.boughtProducts = this.$store.state.cart
        this.receiver.totalPrice = this.totalAmount
        this.$store.commit('setOrder', this.receiver)
        // RESETS RECEIVER DATA
        Object.keys(this.receiver).forEach(key => (this.receiver[key] = ''))

        //RESET CART
        let cartKeys = this.$store.state.cart.keys()
        for (const key of cartKeys) {
          // this.$store.commit('removeItem', 0)
          this.$store.commit('removeItem', key)
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
  #cart {
    text-align: start;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .cursor {
    cursor: pointer;
  }
</style>
