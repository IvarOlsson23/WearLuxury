<template>
  <div id="con">
    <div id="order-nav">
      <div id="order">Orders</div>
      <div id="canceled">Canceled Orders</div>
    </div>
    <div>
      <b-row id="ongoing-con">
        <!-- CARTITEMS -->
        <b-col>
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
              v-for="(product, index) in $store.state.orders"
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
                  Cancel Order
                </span>
              </b-card-text>

              <template #footer>
                <b-form-select v-model="product.items" :options="options" />
                <span class="d-block">
                  <strong> {{ product.price }}$ </strong>
                </span>
              </template>
            </b-card>
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
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'orders',
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
          totalPrice: '',
          price: ''
        },
        payMethodOptions: ['Visa', 'Paypal', 'Bitcoin', 'Invoice'],
        submitted: false,
        options: [1, 2, 3, 4]
      }
    },
    methods: {
      onSubmit() {
        this.receiver.boughtProducts = this.$store.state.orders
        this.receiver.totalPrice = this.totalAmount
        this.$store.commit('setOrder', this.receiver)
        // RESETS DATA
        Object.keys(this.receiver).forEach(key => (this.receiver[key] = ''))
        //RESET CART
        let cartKeys = this.$store.state.orders.keys()

        for (const key of cartKeys) {
          this.$store.commit('removeItem', 0)
          this.$store.commit('removeItem', key)
        }

        cartKeys = []

        // GOES TO NEXT PAGE
        this.$router.push({ name: 'OrderConfirm' })
      },
      removeItem(index) {
        this.$store.commit('removeItem', index)
      }
    },
    computed: {
      totalAmount() {
        if (this.$store.state.orders.length > 0) {
          return (
            this.$store.state.orders
              .map(item => item.price * item.items)
              .reduce((total, amount) => total + amount) + 29
          )
        } else {
          return 0
        }
      },
      cartItemLength() {
        let productLength = this.$store.state.orders.length

        let orderMessage = productLength === 1 ? ' order ' : ' orders '
        return ' Ongoing ' + orderMessage + productLength
      }
    },
    mutations: {
      setOrder(state, order) {
        state.orders.push(order)
      },

      addCart(state, toCart) {
        state.cart.push(toCart)
      }
    }
  }
</script>

<style scoped>
  #con {
    width: 50%;
    margin: auto;
  }

  #order-nav {
    margin-top: 20px;
    background-color: #f8f8f4;
  }
  #order {
    width: 50%;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #order:hover {
    background-color: bisque;
  }

  #canceled {
    width: 50%;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #canceled:hover {
    background-color: bisque;
  }
</style>
