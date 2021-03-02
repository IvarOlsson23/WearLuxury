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
              :img-src="require('../assets' + boughtProducts.img)"
              img-left
              img-width="120px"
              img-height="100%"
              :title="orders.brand"
              :sub-title="orders.name"
              footer-tag="footer"
              footer-bg-variant="light"
              footer-border-variant="light"
             v-for="(boughtProducts, index) in $store.state.orders"
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
