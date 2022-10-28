<template>
  <div>
    <ad-slider class="my-8" :images="images" />
    <div>
      <div class="text-2xl font-bold">หมวดหมู่สินค้า</div>
    </div>
  </div>
</template>

<script>
import AdSlider from '~/components/Swiper/AdSlider.vue'
export default {
  name: 'IndexPage',
  components: { AdSlider },
  data: () => ({
    images: [
      'https://www.jib.co.th/img_master/banner/original/20221012101403_1.jpg?v=33001665544459',
      'https://www.jib.co.th/img_master/banner/original/20221026114132_1.jpg?v=33271666759302',
      'https://www.jib.co.th/img_master/banner/original/20221025115530_1.jpg?v=33211666687032',
      'https://www.jib.co.th/img_master/banner/original/20221026153622_1.jpg?v=33291666773856',
    ],
  }),
}
</script>
