<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">เลือกที่อยู่</div>
    <div class="my-2">
      <my-radio :data="$store.state.address.address" @select="select">
        <template #default="{ data }">
          <address-card :data="data" />
        </template>
      </my-radio>
    </div>
    <div class="fixed bottom-4 w-full left-0">
      <div
        class="
          bg-primary
          w-full
          h-40
          p-10
          container
          mx-auto
          rounded-lg
          flex
          justify-between
          items-center
          shadow-lg
        "
      >
        <div class="flex justify-center items-center gap-10 text-white">
          <div class="text-sm">
            จำนวน
            <div class="text-xl">4 ชิ้น</div>
          </div>
          <div class="text-sm">
            ราคาทั้งหมด
            <div class="text-xl">200,000 บาท</div>
          </div>
        </div>
        <button
          class="
            max-w-[270px]
            w-full
            h-14
            text-primary
            bg-white
            rounded-md
            font-bold
          "
        >
          เลือกที่อยู่
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MyRadio from '~/components/Checkout/MyRadio.vue'
import AddressCard from '~/components/Address/AddressCard.vue'

export default {
  components: { MyRadio, AddressCard },
  layout: 'noFooter',
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