<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold flex justify-between items-center">
      <div>หมวด{{ category.text }}</div>
      <div class="text-sm text-stone-500 font-normal">
        ทั้งหมด {{ filterProduct.length }} รายการ
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-5 gap-2 my-2">
      <div
        class="
          bg-gradient-to-t
          from-primary
          to-lightviolet
          rounded-lg
          h-fit
          p-4
          shadow-md
          col-span-6
          sm:col-span-2
          md:col-span-2
          lg:col-span-1
        "
      >
        <div class="w-full h-10 relative">
          <select
            v-model="noiMak"
            type="text"
            class="h-full rounded-xl w-full text-primary py-2 px-3 outline-none"
          >
            <option value="1">ราคาน้อยไปมาก</option>
            <option value="2">ราคามากไปน้อย</option>
            <option value="3">อักษรน้อยไปมาก</option>
            <option value="4">อักษรมากไปน้อย</option>
          </select>
          <div
            class="
              absolute
              right-0
              top-0
              h-full
              flex
              justify-center
              items-center
              py-2
              px-3
              pointer-events-none
            "
          >
            <FontAwesomeIcon icon="chevron-down" class="text-primary" />
          </div>
        </div>
        <hr class="my-4" />
        <input
          v-model="min"
          type="number"
          class="h-10 rounded-xl w-full py-2 px-3 outline-none mb-2"
          placeholder="ราคาขั้นต่ำ"
        />
        <input
          v-model="max"
          type="number"
          class="h-10 rounded-xl w-full py-2 px-3 outline-none mb-2"
          placeholder="ราคาสูงสุด"
        />
        <button
          class="
            h-10
            rounded-xl
            bg-white
            text-primary
            font-bold
            w-full
            py-2
            px-3
            outline-none
          "
          @click="search"
        >
          ค้นหา
        </button>
      </div>
      <div
        class="
          col-span-6
          sm:col-span-3
          md:col-span-3
          lg:col-span-4
          grid grid-cols-2
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-2
        "
      >
        <product-card
          v-for="(product, i) in filterProduct"
          :key="i"
          :data="product"
        />
        <div
          v-if="filterProduct.length === 0"
          class="col-span-4 text-center h-60 flex justify-center items-center"
        >
          <div
            class="
              p-5
              rounded-lg
              text-white
              bg-gradient-to-t
              from-primary
              to-lightviolet
              shadow-md
            "
          >
            Not Found
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  name: 'CategoryPage',
  components: { ProductCard },
  validate({ params, store }) {
    return store.state.category.some((c) => c.name === params.category)
  },
  asyncData({ params, store }) {
    const category = store.state.category.find(
      (c) => c.name === params.category
    )
    const products = store.getters.getProductByCategory('')
    // const products = store.getters.getProductByCategory(category.name)
    return { category, products }
  },
  data: () => ({
    noiMak: '1',
    min: '',
    max: '',
    minReal: '',
    maxReal: '',
  }),
  computed: {
    filterProduct() {
      return [...this.products]
        .sort((a, b) => {
          if (this.noiMak === '2') {
            return b.price - a.price
          } else if (this.noiMak === '3') {
            return a.name.localeCompare(b.name)
          } else if (this.noiMak === '4') {
            return b.name.localeCompare(a.name)
          } else {
            return a.price - b.price
          }
        })
        .filter((product) => {
          if (this.minReal && this.maxReal) {
            return (
              product.price >= this.minReal && product.price <= this.maxReal
            )
          } else if (this.minReal) {
            return product.price >= this.minReal
          } else if (this.maxReal) {
            return product.price <= this.maxReal
          } else {
            return true
          }
        })
    },
  },
  methods: {
    search() {
      this.minReal = this.min
      this.maxReal = this.max
    },
  },
}
</script>

<style>
select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}
</style>