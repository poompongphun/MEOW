<template>
  <div class="bg-white rounded-lg drop-shadow-md mx-2">
    <product-detail :data="product"></product-detail>
    <div class="p-20">
      <p class="text-primary text-2xl font-medium">คุณสมบัติ</p>
      <hr style="border-color: #6c76ea; margin-top: 15px" />
      <product-feature :data="product.feature"></product-feature>
    </div>
  </div>
</template>

<script>
import ProductDetail from '~/components/productpage/ProductDetail.vue'
import ProductFeature from '~/components/productpage/ProductFeature.vue'
export default {
  name: 'ProductPage',
  components: { ProductDetail, ProductFeature },
  validate({ params, store }) {
    return store.getters.getProductById(params.id)
  },
  asyncData({ params, store }) {
    const product = store.getters.getProductById(params.id)
    return { product }
  },
}
</script>

<style>
</style>