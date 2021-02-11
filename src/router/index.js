import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
<<<<<<< HEAD
import OrderConfirm from '../views/OrderConfirm.vue'
=======
import Products from '../views/Products.vue'
>>>>>>> 4ee3a33e73330b148733e2e5dbd88d4c9f64cbc7

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
<<<<<<< HEAD
    path: '/order',
    name: 'OrderConfirm',
    component: OrderConfirm
  }
=======
    path:'/Products',
  name: 'Products',
  component:Products
  },
>>>>>>> 4ee3a33e73330b148733e2e5dbd88d4c9f64cbc7
]

const router = new VueRouter({
  routes
})

export default router
