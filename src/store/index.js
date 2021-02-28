import products from '../products.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newarrivalproducts: [
      {
        title: 'Black lace dress',
        img: 'blackdress.jpg',
        price: '1999kr',
        cathegory: 'women'
      },

      {
        title: 'Golden watch',
        img: 'watch.jpg',
        price: '2799kr',
        cathegory: 'accessories'
      },
      {
        title: 'Gold earings',
        img: 'earings.jpg',
        price: '800kr',
        cathegory: 'accessories'
      }
    ],
    products,
    orders: [],
    cart: []
  },
  mutations: {
    setOrder(state, order) {
      state.orders.push(order)
    },
    removeItem(state, index) {
      Vue.delete(state.cart, index)
    },
    addCart(state, toCart) {
      state.cart.push(toCart)
    }
  },
  actions: {},
  modules: {},
  getters: {
    newarrivalproducts(state) {
      return state.newarrivalproducts
    },
    countItems(state) {
      return state.cart.length
    },
    totalPrice(state) {
      return state.orders.city
    }
  }
})
