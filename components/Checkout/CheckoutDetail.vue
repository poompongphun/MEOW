<template>
  <div
    class="fixed bottom-4 w-full left-0 transition-all px-2"
    :class="{
      'opacity-50 pointer-events-none':
        $store.state.cart.carts.length === 0 || disabled || !$store.state.user,
    }"
  >
    <div
      class="
        bg-primary
        w-full
        h-[130px]
        sm:h-40
        p-5
        sm:p-10
        container
        mx-auto
        rounded-lg
        flex
        justify-between
        items-center
        shadow-lg
      "
    >
      <div class="flex justify-center items-center gap-5 sm:gap-10 text-white">
        <div class="text-sm">
          จำนวน
          <div class="text-xl">{{ $store.state.cart.carts.length }} ชิ้น</div>
        </div>
        <div class="text-sm">
          ราคาทั้งหมด
          <div class="text-xl">
            {{
              $store.state.cart.carts
                .reduce((partialSum, a) => partialSum + a.price * a.amount, 0)
                .toLocaleString('en-us')
            }}
            บาท
          </div>
        </div>
      </div>
      <button
        class="
          max-w-[150px]
          md:max-w-[270px]
          w-full
          h-14
          text-primary
          bg-white
          rounded-md
          font-bold
        "
        @click="data.link"
      >
        <div v-if="!$store.state.user">กรุณาเข้าสู่ระบบก่อน</div>
        <div>{{ data.text }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
</style>