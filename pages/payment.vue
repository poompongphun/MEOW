<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">เลือกวิธีชำระเงิน</div>
    <div class="my-2">
      <my-radio :data="banking" @select="select">
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
        img: 'https://www.เปิดสอบราชการ.com/img/articles/154968392520191019_201135.png',
      },
      {
        name: 'promptpay',
        img: 'https://play-lh.googleusercontent.com/dVr2IZFMqilCP3pixPfH1djP_BPhwfjkQyNAjhhzhsFtKfXXh3BomzR3aGg2QMvhya4',
      },
      {
        name: 'airpay',
        img: 'https://storage.googleapis.com/techsauce-prod/uploads/2019/04/AirPay_Logo-.png',
      },
      {
        name: 'credit/debit',
        img: 'https://www.shimono.co.th/wp-content/uploads/2020/06/visa-mastercard-400x-q75.png',
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