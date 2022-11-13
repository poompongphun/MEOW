<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">เลือกที่อยู่</div>
    <div class="my-2">
      <my-radio
        class="
          my-2
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-2
        "
        :data="$store.state.address.address"
        @select="select"
      >
        <template #default="{ data }">
          <address-card :data="data" />
        </template>
      </my-radio>
      <div
        v-if="$store.state.address.address.length === 0"
        class="h-20 flex justify-center items-center cursor-pointer"
      >
        <div
          class="bg-white px-4 py-2 rounded-md shadow-md hover:shadow-sm transition-all"
          @click="$router.push('/address')"
        >
          กรุณาเพิ่มที่อยู่ Click
        </div>
      </div>
    </div>
    <checkout-detail
      :data="{
        text: 'ชำระเงิน',
        link: () => {
          $store.commit('cart/updateCheckoutTmp', {
            ...$store.state.cart.checkoutTmp,
            address: $store.state.address.address[selected],
          })
          $router.push('/payment')
        },
      }"
      :disabled="selected == null"
    />
  </div>
</template>

<script>
import MyRadio from '~/components/Checkout/MyRadio.vue'
import AddressCard from '~/components/Address/AddressCard.vue'
import CheckoutDetail from '~/components/Checkout/CheckoutDetail.vue'

export default {
  components: { MyRadio, AddressCard, CheckoutDetail },
  layout: 'noFooter',
  validate({ store, redirect }) {
    if (
      store.state.cart.checkoutTmp !== null &&
      'order' in store.state.cart.checkoutTmp
    ) {
      return true
    } else {
      redirect('/cart')
    }
  },
  data: () => ({
    selected: null,
  }),
  methods: {
    select(index) {
      this.selected = index
    },
  },
}
</script>

<style>
</style>