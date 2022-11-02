export const state = () => ({
  address: [
    // {
    //   id: '1',
    //   title: 'บ้านของหมกมุ่น',
    //   fname: 'งานของแก',
    //   lname: 'ชั้นแย่งละ',
    //   address:
    //     'ตึก อะไรสักอย่าง ห้อง 12345, เลขที่ 25/09 ซอยแลคตาซอย ถนนยางมะตอย, แขวงลาดกระบัง, เขตลาดกระบัง, กรุงเทพมหานคร, 10520',
    //   tel: '0812345678',
    // },
  ],
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
