export const state = () => ({
  carts: [
    {
      id: '1',
      category: 'graphic card',
      name: 'MSI Geforce RTX 3090',
      price: 50000,
      images: [
        'https://media.discordapp.net/attachments/1026446507194470440',
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      amount: 4,
    },
  ],
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
  },
  removeCart(state, payload) {
    const index = state.carts.findIndex((cart) => cart.id === payload.id)
    state.carts.splice(index, 1)
  },
}

export const actions = {}

export const getters = {}
