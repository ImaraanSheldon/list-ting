import { createStore } from 'vuex'
const productsUrl = 'https://localhost:3000/results';

export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    }
  },
  actions: {
    async fetchProducts(context){
      try {
        let res = await fetch (productsUrl)
        let data = await res.json()
        context.commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
