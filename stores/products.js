import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    showProducts: false,
  }),
  actions: {
    toggleProducts() {
      this.showProducts = !this.showProducts
    },
    setShowProducts(value) {
      this.showProducts = value
    },
  },
})
