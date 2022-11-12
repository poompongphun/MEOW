<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold p-2">ตะกร้าสินค้า</div>
    <div class="my-2">
      <cart-list
        v-for="(item, i) in $store.state.cart.carts"
        :key="i"
        :data="item"
        class="mb-2"
      ></cart-list>
      <div
        v-if="$store.state.cart.carts.length === 0"
        class="h-20 flex justify-center items-center"
      >
        <div class="bg-white px-4 py-2 rounded-md shadow-md">
          ไม่มีสินค้าในตรกร้า
        </div>
      </div>
      <checkout-detail
        :data="{
          link: () => {
            $store.commit('cart/updateCheckoutTmp', {
              id: String(Date.now()),
              order: [...$store.state.cart.carts],
            })
            $router.push('/chooseAddress')
          },
          text: 'เลือกที่อยู่',
        }"
      />
    </div>
  </div>
</template>

<script>
import CartList from '~/components/Cart/CartList.vue'
import CheckoutDetail from '~/components/Checkout/CheckoutDetail.vue'
export default {
  name: 'CartPage',
  components: { CartList, CheckoutDetail },
  layout: 'noFooter',
  data: () => ({}),
}
</script>
<style>
</style>