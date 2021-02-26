import Vue from 'vue'
import Vuex from 'vuex'
//import products from '../products.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: 'arif',
        password: '123',
        email: 'arif123@test.com',
        phone: '0707070707'
      },
      {
        id: 2,
        username: 'admin',
        password: 'admin123',
        email: 'admin123@test.com',
        phone: '0712312312'
      }
    ],
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
    products: {
      '5895af63-e246-42bc-b629-bf607f004da7': {
        brand: 'Gucci',
        name: 'Jacket',
        price: '2900',
        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      'd6b95aeb-70ef-4a85-97d4-e916a2039cf9': {
        brand: 'Dolce & Gabbana',
        name: 'Bluse',
        price: '1200',
        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      '94a1304a-8a25-459c-aa9a-e439e25261a9': {
        brand: 'Dolce & Gabbana',
        name: 'Dress',
        price: '2499',
        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      '9a1a0092-ecd2-4504-a25f-2204c725da0c': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',

        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      'f1a0821f-e80b-4939-acb2-b5104bf30aad': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',

        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      '99f75432-4cf4-4e32-964a-1d4815d94f55': {
        brand: 'Louis Vuitton',
        name: 'Jacket',
        price: '2900',

        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      },
      'f8079e75-a3cf-42b3-90f0-f962d8cd1142': {
        brand: 'Louis Vuitton',
        name: 'Handbag',
        price: '1900',
        color: [
          { text: 'Brown', value: 'Brown' },
          { text: 'White', value: 'White' }
        ],
        size: ''
      },
      'e53eefe1-6e93-4336-8da0-5a6d699ce98e': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',

        color: [
          { text: 'Black', value: 'Black' },
          { text: 'White', value: 'White' },
          { text: 'Blue', value: 'blue' }
        ],
        size: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' }
        ]
      }
    },
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
    },

    addUser(state, userinfo) {
      state.users.push(userinfo)
    },
    changeUsername(state, newName) {
      const index = state.users.findIndex(users => users.id === newName.id)
      state.users[index].username = newName.username
    },
    changePassword(state, newPassword) {
      const index = state.users.findIndex(users => users.id === newPassword.id)
      state.users[index].password = newPassword.password
    },
    changeEmail(state, newEmail) {
      const index = state.users.findIndex(users => users.id === newEmail.id)
      state.users[index].email = newEmail.email
    }
  },
  changeEmail(state, newPhone) {
    const index = state.users.findIndex(users => users.id === newPhone.id)
    state.users[index].phone = newPhone.phone
  },
  changeZip(state, newZip) {
    const index = state.users.findIndex(users => users.id === newZip.id)
    state.users[index].zip = newZip.zip
  },
  changeCountry(state, newCountry) {
    const index = state.users.findIndex(users => users.id === newCountry.id)
    state.users[index].country = newCountry.country
  },
  changeAdress(state, newAdress) {
    const index = state.users.findIndex(users => users.id === newAdress.id)
    state.users[index].adress = newAdress.adress
  },

  actions: {},
  modules: {},
  getters: {
    newarrivalproducts(state) {
      return state.newarrivalproducts
    },
    countItems(state) {
      return state.cart.length
    }
  }
})
