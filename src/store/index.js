import products from '../products.js'
import Vue from 'vue'
import Vuex from 'vuex'
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
    countItems(state) {
      return state.cart.length
    },
    totalPrice(state) {
      return state.orders[0].totalPrice + 29
    },
    surName(state) {
      return state.orders[0].surname
    },
    lastName(state) {
      return state.orders[0].lastname
    },
    eMail(state) {
      return state.orders[0].email
    },
    phoneNumber(state) {
      return state.orders[0].telephone
    },
    street(state) {
      return state.orders[0].street
    },
    zipCode(state) {
      return state.orders[0].postAdress
    },
    city(state) {
      return state.orders[0].city
    }
  }
})
