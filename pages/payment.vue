<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">เลือกวิธีชำระเงิน</div>
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
        :data="banking"
        @select="select"
      >
        <template #default="{ data }">
          <banking-card :data="data.img" />
        </template>
      </my-radio>
    </div>
    <checkout-detail
      :data="{
        text: 'ยืนยันคำสั่งซื้อ',
        link: () => {
          $store.commit('cart/checkout', {
            ...$store.state.cart.checkoutTmp,
            payment: banking[selected].name,
            created_date: String(new Date().toLocaleDateString('en-US')),
            status: 'pending',
          })
          $router.push('/order')
        },
      }"
      :disabled="selected == null"
    />
  </div>
</template>

<script>
import MyRadio from '~/components/Checkout/MyRadio.vue'
import BankingCard from '~/components/Payment/BankingCard.vue'
import CheckoutDetail from '~/components/Checkout/CheckoutDetail.vue'
export default {
  name: 'PaymentPage',
  components: { BankingCard, MyRadio, CheckoutDetail },
  layout: 'noFooter',
  validate({ store, redirect }) {
    if (
      store.state.cart.checkoutTmp !== null &&
      'order' in store.state.cart.checkoutTmp &&
      'address' in store.state.cart.checkoutTmp
    ) {
      return true
    } else {
      redirect('/cart')
    }
  },
  data: () => ({
    banking: [
      {
        name: 'krungthai',
        img: '/banking/krungthai.png',
      },
      {
        name: 'promptpay',
        img: '/banking/promptpay.png',
      },
      {
        name: 'airpay',
        img: '/banking/airpay.png',
      },
      {
        name: 'credit/debit',
        img: '/banking/visa.png',
      },
    ],
    selected: null,
  }),
  methods: {
    select(index) {
      this.selected = index
    },
  },
}
</script>