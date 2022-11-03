<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 bg-primary rounded-lg drop-shadow-md"
  >
    <div class="flex justify-center items-center">
      <!-- <img
        class="rounded-lg aspect-square"
        src="https://www.jib.co.th/img_master/product/original/2022052309492353368_1.jpg"
      /> -->
      <product-slider :data="data.images" />
    </div>
    <div class="flex flex-col justify-between rounded-lg bg-whtran p-8">
      <div>
        <p class="uppercase font-medium text-3xl mb-3">{{ data.name }}</p>
        <p class="text-lg">
          {{ data.description }}
        </p>
      </div>
      <div>
        <div class="rounded-xl bg-white text-center p-5">
          <p class="text-pinkwtf text-4xl font-medium">
            {{ data.price.toLocaleString('en-us') }} บาท
          </p>
        </div>
        <hr class="mt-5" style="border-color: #6c76ea" />
        <div
          class="
            flex
            justify-between
            rounded-lg
            bg-white
            text-center
            mt-5
            h-14
            relative
          "
        >
          <button
            class="
              rounded-lg
              aspect-square
              h-full
              bg-primary
              hover:opacity-90
              transition-all
              disabled:opacity-50
            "
            :disabled="amount === 1"
            @click="amount--"
          >
            <FontAwesomeIcon class="text-white" icon="minus" />
          </button>
          <p class="text-3xl font-medium m-2">{{ amount }}</p>
          <button
            class="
              rounded-lg
              aspect-square
              h-full
              bg-primary
              hover:opacity-90
              transition-all
            "
            @click="amount++"
          >
            <FontAwesomeIcon class="text-white" icon="plus" />
          </button>
        </div>
        <div
          class="
            bg-primary
            rounded-lg
            mt-1
            h-14
            relative
            hover:opacity-90
            transition-all
          "
        >
          <button class="w-full h-full text-white text-xl">
            <FontAwesomeIcon icon="cart-plus" /> เพิ่มลงตระกร้า
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSlider from '~/components/Swiper/ProductSlider.vue'
export default {
  components: { ProductSlider },
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data: () => ({
    amount: 1,
  }),
}
</script>

<style scoped>
</style>