export const state = () => ({
  user: null,
  category: [
    {
      icon: 'headphones',
      name: 'headphones',
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
  allProducts: [
    {
      id: 1,
      category: 'graphic card',
      name: 'MSI Geforce RTX 3090',
      price: 50000,
      images: [
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
        'imglink2',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      feature: [
        {
          name: 'Model',
          detail: [
            {
              key: 'brand',
              value: 'MSI',
            },
            {
              key: 'Model',
              value: 'GeForce RTX™ 3090 Ti SUPRIM X 24G',
            },
          ],
        },
        {
          name: 'Specification',
          detail: [
            {
              key: 'Slot',
              value: '1 x PCIe 4.0 x16 Slot',
            },
            {
              key: 'Chipset',
              value: 'NVIDIA',
            },
            {
              key: 'Series',
              value: 'GeForce RTX™ 3090 Ti',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category: 'graphic card',
      name: 'MSI Geforce RTX 3090',
      price: 50000,
      images: [
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
        'imglink2',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
    },
    {
      id: 3,
      category: 'graphic card',
      name: 'aMSI Geforce RTX 3090',
      price: 50000,
      images: [
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
        'imglink2',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
    },
    {
      id: 3,
      category: 'graphic card',
      name: 'bMSI Geforce RTX 3090',
      price: 60000,
      images: [
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
        'imglink2',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
    },
    {
      id: 3,
      category: 'graphic card',
      name: 'fMSI Geforce RTX 3090',
      price: 40000,
      images: [
        'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
        'imglink2',
      ],
      description:
        'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
    },
  ],
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
}
