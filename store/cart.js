export const state = () => ({
  carts: [],
  checkoutTmp: null,
  order: [],
})

export const mutations = {
  addCart(state, payload) {
    // state.carts.push()
    const product = payload.product
    const amount = payload.amount
    const index = state.carts.findIndex((cart) => cart.id === product.id)
    if (index === -1) {
      state.carts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        images: product.images,
        description: product.description,
        amount,
      })
    } else {
      state.carts[index].amount += amount
      if (state.carts[index].amount <= 0) {
        state.carts.splice(index, 1)
      }
    }
    localStorage.setItem('cart', JSON.stringify(state.carts))
  },
  removeCart(state, payload) {
    const index = state.carts.findIndex((cart) => cart.id === payload.id)
    state.carts.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(state.carts))
  },
  updateCheckoutTmp(state, payload) {
    state.checkoutTmp = payload
  },
  checkout(state, payload) {
    state.order.push(payload)
    state.checkoutTmp = null
    state.carts = []
    localStorage.setItem('cart', JSON.stringify(state.carts))
    localStorage.setItem('order', JSON.stringify(state.order))
  },
  init(state) {
    const cart = localStorage.getItem('cart')
    if (cart) {
      state.carts = JSON.parse(cart)
    }
    const order = localStorage.getItem('order')
    if (order) {
      state.order = JSON.parse(order)
    }
  }
}

export const actions = {}

export const getters = {}
