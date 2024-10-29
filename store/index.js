import { createStore } from 'vuex'

const store = createStore({
  state: {
    showProducts: false,
  },
  mutations: {
    toggleProducts(state) {
      state.showProducts = !state.showProducts
    },
    setShowProducts(state, value) {
      state.showProducts = value
    },
  },
})

export default store
