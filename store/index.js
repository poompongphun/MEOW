import data from '../json/datastore.json'
export const state = () => ({
  user: null,
  category: [
    {
      icon: 'headphones',
      name: 'headphone',
      text: 'หูฟัง',
    },
    {
      icon: 'microphone',
      name: 'microphone',
      text: 'ไมโครโฟน',
    },
    {
      icon: 'display',
      name: 'graphic',
      text: 'การ์ดจอ',
    },
    {
      icon: 'computer-mouse',
      name: 'mouse',
      text: 'เมาส์',
    },
    {
      icon: 'laptop',
      name: 'laptop',
      text: 'โน๊ตบุ๊ค',
    },
  ],
  allProducts: data,
})
export const mutations = {
  login: (state, user) => {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  logout: (state) => {
    state.user = null
    localStorage.removeItem('user')
  },
  init: (state) => {
    // state.user = null
    // if (process.server ? false : !!localStorage.getItem('user')) {
    state.user = JSON.parse(localStorage.getItem('user'))
    // }
  },
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // commit('init')
    // if (req.session && req.session.user) {
    //   commit('login', req.session.user)
    // }
  },
}
export const getters = {
  getProductByCategory: (state) => (category) => {
    return category === ''
      ? state.allProducts
      : state.allProducts.filter((product) => product.category === category)
  },
  getProductById: (state) => (id) => {
    return state.allProducts.find((product) => product.id === id)
  },
  searchProductByName: (state) => (name) => {
    return state.allProducts.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    )
  },
  randomProduct:
    (state) =>
    (num = 1) => {
      const random = []
      for (let i = 0; i < num; i++) {
        random.push(
          state.allProducts[
            Math.floor(Math.random() * state.allProducts.length)
          ]
        )
      }
      return random
    },
}
