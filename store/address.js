export const state = () => ({
  address: [],
})

export const mutations = {
  addAddress: (state, address) => {
    address.id = String(Date.now())
    state.address.push(address)
    localStorage.setItem('address', JSON.stringify(state.address))
  },
  removeAddress: (state, address) => {
    state.address = state.address.filter((item) => item.id !== address.id)
    localStorage.setItem('address', JSON.stringify(state.address))
  },
  init: (state) => {
    state.address = JSON.parse(localStorage.getItem('address')) || []
  },
}

export const actions = {}

export const getters = {}
