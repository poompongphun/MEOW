<template>
    <div class="pt-8 px-2">
        <div class="text-2xl font-bold">เลือกวิธีชำระเงิน</div>
        <div
        class="
            my-2
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-2
        "
        >
            <banking-card v-for="(lg, i) in bankimg" :key="i" :data="lg"></banking-card>
        </div>
        <my-radio>
            <template #default="{ data }">
            <banking-card :data="data" />
            </template>
      </my-radio>
    </div>
</template>

<script>
    import MyRadio from '~/components/Checkout/MyRadio.vue'
    import BankingCard from '~/components/Payment/BankingCard.vue'
    export default {
        name: 'PaymentPage',
        components: { BankingCard, MyRadio },
        data: () => ({
            bankimg: [
                'https://www.เปิดสอบราชการ.com/img/articles/154968392520191019_201135.png',
                'https://play-lh.googleusercontent.com/dVr2IZFMqilCP3pixPfH1djP_BPhwfjkQyNAjhhzhsFtKfXXh3BomzR3aGg2QMvhya4',
                'https://storage.googleapis.com/techsauce-prod/uploads/2019/04/AirPay_Logo-.png',
                'https://www.shimono.co.th/wp-content/uploads/2020/06/visa-mastercard-400x-q75.png'
            ]
        })
    }
</script>