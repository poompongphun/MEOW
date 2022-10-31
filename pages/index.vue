<template>
  <div>
    <ad-slider class="my-8" :images="images" />
    <div class="mb-8">
      <div class="text-2xl font-bold">หมวดหมู่สินค้า</div>
      <div
        class="my-2 flex flex-wrap justify-center md:justify-start gap-2"
        :class="{ 'justify-center': category.length > 7 }"
      >
        <category-btn
          v-for="(item, i) in category"
          :key="i"
          :icon="item.icon"
          :text="item.text"
          :name="item.name"
        />
      </div>
    </div>
    <div class="mb-8">
      <div class="text-2xl font-bold">สินค้าแนะนำ</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 my-2">
        <product-card
          v-for="(pif, i) in productinfo"
          :key="i"
          :data="pif"
        ></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import AdSlider from '~/components/Swiper/AdSlider.vue'
import CategoryBtn from '~/components/Buttons/CategoryBtn.vue'
export default {
  name: 'IndexPage',
  components: { AdSlider, CategoryBtn },
  data: () => ({
    images: [
      'https://www.jib.co.th/img_master/banner/original/20221012101403_1.jpg?v=33001665544459',
      'https://www.jib.co.th/img_master/banner/original/20221026114132_1.jpg?v=33271666759302',
      'https://www.jib.co.th/img_master/banner/original/20221025115530_1.jpg?v=33211666687032',
      'https://www.jib.co.th/img_master/banner/original/20221026153622_1.jpg?v=33291666773856',
    ],
    category: [
      {
        icon: 'headphones',
        name: 'headphones',
        text: 'หูฟัง',
      },
      {
        icon: 'microphone',
        name: 'microphone',
        text: 'ไมโครโฟน',
      },
      {
        icon: 'display',
        name: 'graphic',
        text: 'การ์ดจอ',
      },
      {
        icon: 'computer-mouse',
        name: 'mouse',
        text: 'เมาส์',
      },
      {
        icon: 'laptop',
        name: 'laptop',
        text: 'โน๊ตบุ๊ค',
      },
    ],
    productinfo: [
      {
        id: 1,
        category: 'graphic card',
        name: 'MSI Geforce RTX 3090',
        price: 50000,
        images: [
          'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
          'imglink2',
        ],
        description:
          'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      },
      {
        id: 2,
        category: 'graphic card',
        name: 'MSI Geforce RTX 3090',
        price: 50000,
        images: [
          'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
          'imglink2',
        ],
        description:
          'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      },
      {
        id: 3,
        category: 'graphic card',
        name: 'MSI Geforce RTX 3090',
        price: 50000,
        images: [
          'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
          'imglink2',
        ],
        description:
          'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      },
      {
        id: 3,
        category: 'graphic card',
        name: 'MSI Geforce RTX 3090',
        price: 50000,
        images: [
          'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
          'imglink2',
        ],
        description:
          'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      },
      {
        id: 3,
        category: 'graphic card',
        name: 'MSI Geforce RTX 3090',
        price: 50000,
        images: [
          'https://www.jib.co.th/img_master/product/medium/2022052309492353368_1.jpg?v=533681653363436',
          'imglink2',
        ],
        description:
          'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
      },
    ],
  }),
}
</script>
