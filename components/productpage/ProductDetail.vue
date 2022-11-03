<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 bg-primary rounded-lg drop-shadow-md"
  >
    <div class="flex justify-center items-center">
      <!-- <img
        class="rounded-lg aspect-square"
        src="https://www.jib.co.th/img_master/product/original/2022052309492353368_1.jpg"
      /> -->
      <product-slider
        :data="[
          'https://media.discordapp.net/attachments/1026446507194470440/1036330258766516234/IMG_9816.JPG?width=420&height=560',
          'https://www.jib.co.th/img_master/product/original/2022052309492353368_1.jpg',
          'https://www.jib.co.th/img_master/product/original/2022052309492353368_1.jpg',
          'https://www.jib.co.th/img_master/product/original/2022052309492353368_1.jpg',
        ]"
      />
    </div>
    <div class="flex flex-col justify-between rounded-lg bg-whtran p-8">
      <div>
        <p class="uppercase font-medium text-3xl mb-3">MSI Geforce RTX 3090</p>
        <p class="text-lg">
          Short detail: VGA บลาาา Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor adipisci magni aliquid! Quae iure
          necessitatibus maiores eveniet velit, perferendis voluptatem quaerat
          temporibus obcaecati omnis architecto quod consequuntur quis aperiam
          doloribus?
        </p>
      </div>
      <div>
        <div class="rounded-xl bg-white text-center p-5">
          <p class="text-pinkwtf text-4xl font-medium">50,000 บาท</p>
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
  data: () => ({
    amount: 1,
  }),
}
</script>

<style scoped>
</style>