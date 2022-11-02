<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">เลือกวิธีชำระเงิน</div>
    <div class="my-2">
      <my-radio :data="bankimg" @select="select">
        <template #default="{ data }">
          <banking-card :data="data" />
        </template>
      </my-radio>
    </div>
    <checkout-detail />
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
  data: () => ({
    bankimg: [
      'https://www.เปิดสอบราชการ.com/img/articles/154968392520191019_201135.png',
      'https://play-lh.googleusercontent.com/dVr2IZFMqilCP3pixPfH1djP_BPhwfjkQyNAjhhzhsFtKfXXh3BomzR3aGg2QMvhya4',
      'https://storage.googleapis.com/techsauce-prod/uploads/2019/04/AirPay_Logo-.png',
      'https://www.shimono.co.th/wp-content/uploads/2020/06/visa-mastercard-400x-q75.png',
    ],
  }),
  methods: {
    select(index) {
      console.log(index)
      //   this.selected = index
      //   this.$emit('select', this.selected)
    },
  },
}
</script>