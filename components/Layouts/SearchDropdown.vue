<template>
  <div v-if="findProductByName.length > 0">
    <div class="w-full bg-white rounded-md overflow-hidden">
      <div
        v-for="(product, i) in findProductByName"
        :key="i"
        class="
          flex
          items-center
          gap-2
          hover:bg-grey
          p-2
          transition-all
          cursor-pointer
        "
        :class="{
          'border-b border-grey': i + 1 !== findProductByName.length,
        }"
        @click="$router.push(`/product/${product.id}`)"
      >
        <img
          :src="product.images[0]"
          class="w-10 h-10 object-cover rounded-md aspect-square"
        />
        <div class="truncate">
          {{ product.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    data: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      products: [],
    }
  },
  computed: {
    findProductByName() {
      return this.data === ''
        ? []
        : this.$store.getters.searchProductByName(this.data)
    },
  },
}
</script>

<style>
</style>