export const state = () => ({
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
export const mutations = {}
export const actions = {}
export const getters = {
  getProductByCategory: (state) => (category) => {
    return category === ''
      ? state.allProducts
      : state.allProducts.filter((product) => product.category === category)
  },
}
