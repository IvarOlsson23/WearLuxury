import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      '5895af63-e246-42bc-b629-bf607f004da7': {
        brand: 'Dole & Gobana',
        name: 'Jacket',
        price: '2900',
        color: '',
        size: ''
      },
      'd6b95aeb-70ef-4a85-97d4-e916a2039cf9': {
        name: 'Bluse',
        price: '1200'
      },
      '94a1304a-8a25-459c-aa9a-e439e25261a9': {
        name: 'Dress',
        price: '2499'
      },
      '9a1a0092-ecd2-4504-a25f-2204c725da0c': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ]
      },
      'f1a0821f-e80b-4939-acb2-b5104bf30aad': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: 'black',
        size: 'xl'
      },
      '99f75432-4cf4-4e32-964a-1d4815d94f55': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: 'black',
        size: 'xl'
      },
      'f8079e75-a3cf-42b3-90f0-f962d8cd1142': {
        brand: 'Gucci',
        name: 'Handbag',
        price: '19000',
        items: 1,
        color: '',
        size: ''
      },
      'e53eefe1-6e93-4336-8da0-5a6d699ce98e': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: 'black',
        size: 'xl'
      }
    },

    orders: [],
    cart: {
      '5895af63-e246-42bc-b629-bf607f004da7': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: 'black',
        size: 'xl'
      },

      '94a1304a-8a25-459c-aa9a-e439e25261a9': {
        brand: 'Hugo boss',
        name: 'Dress',
        price: '2499',
        items: 3,
        color: 'red',
        size: 'sm'
      }
    }
  },
  mutations: {
    setOrder(state, order) {
      state.orders.push(order)
    },
    removeItem(state, index) {
      Vue.delete(state.cart, index)
    }
  },
  actions: {},
  modules: {}
})
