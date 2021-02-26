import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Profil from '../views/Profil.vue'
import Orders from '../views/Orders.vue'
import Userinfo from '../views/Userinfo.vue'
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
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/OrderConfirm',
    name: 'OrderConfirm',
    component: OrderConfirm
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/profil',
    name: 'profil',
    component: Profil
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: Userinfo
  }
 
]

const router = new VueRouter({
  routes
})

export default  router
 
