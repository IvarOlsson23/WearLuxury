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
            <ul>
              <li v-for="(product, index) in $store.state.cart" :key="index">
                <div id="order-products">
                  <p>{{ product.brand + ' ' + product.name }}</p>
                  <p>{{ product.price }}$</p>
                </div>
              </li>
            </ul>
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
    name: 'Orders',
    data() {
<<<<<<< HEAD
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
        }
      }
=======
      return {}
>>>>>>> 7333c553a43c1e8264ed3bcf537fa52771f84100
    },

    methods: {
      onSubmit() {
        this.receiver.boughtProducts = this.$store.state.cart.slice()
        this.receiver.totalPrice = this.totalAmount
      }
    },
<<<<<<< HEAD

    computed: {
      cartItemLength() {
        let productLength = this.$store.state.orders.length
=======
>>>>>>> 7333c553a43c1e8264ed3bcf537fa52771f84100

    computed: {
      cartItemLength() {
        let productLength = this.$store.state.cart.length
        let orderMessage = productLength === 1 ? ' order ' : ' orders '
        return ' Ongoing ' + orderMessage + productLength
      },
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
      }
    }
  }
</script>

<style scoped>
  * {
    list-style: none;
  }
  #con {
    width: 50%;
    margin: auto;
  }
  #order-products {
    display: flex;
    justify-content: center;
    justify-content: space-between;
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
