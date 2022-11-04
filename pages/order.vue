<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">รายการคำสั่งซื้อ</div>
    <div class="my-2">
      <div
        v-for="(order, i) in $store.state.cart.order"
        :key="i"
        class="w-full shadow-lg p-2 bg-white relative rounded-lg mb-2"
      >
        <div
          class="
            absolute
            top-0
            right-0
            text-center
            p-2
            z-10
            invisible
            md:visible
          "
        >
          <div
            class="px-4 py-3 border-2 border-primary rounded-lg mb-2 bg-white"
          >
            <div class="text-xs text-stone-500 mb-[-5px]">
              สั่งซื้อเมื่อวันที่
            </div>
            <div class="text-primary">{{ order.created_date }}</div>
          </div>
          <div class="px-4 py-2 border-2 border-yellow-400 rounded-lg bg-white">
            <div class="text-yellow-400">{{ order.status }}</div>
          </div>
        </div>
        <div
          v-for="(item, j) in order.order"
          :key="j"
          class="flex justify-between items-center mb-2"
        >
          <div class="flex justify-start items-center gap-2">
            <img
              class="
                aspect-square
                w-36
                h-36
                rounded-md
                shadow-md
                object-contain
                bg-white
              "
              :src="item.images[0]"
              alt=""
            />
            <div class="flex flex-col justify-between h-36">
              <div class="w-full max-w-[470px] relative">
                <p class="font-bold w-full line1">
                  {{ item.name }}
                  <span class="text-black text-base">x {{ item.amount }}</span>
                </p>
                <div class="w-full line3">
                  {{ item.description }}
                </div>
              </div>
              <div class="my-1 text-lg text-primary">
                {{ (item.price * item.amount).toLocaleString('en-us') }} บาท
                <!-- <span class="text-black text-base">
                  จำนวน {{ item.amount }}
                </span> -->
              </div>
            </div>
          </div>
          <!-- <div class="shadow-md px-4 py-2 rounded-md">
            {{ item.amount }} ชิ้น
          </div> -->
          <div></div>
        </div>
        <hr class="border-primary" />
        <div class="text-primary text-right text-xl py-2 font-semibold">
          รวม
          {{
            order.order
              .reduce((partialSum, a) => partialSum + a.price * a.amount, 0)
              .toLocaleString('en-us')
          }}
          บาท
        </div>
      </div>
      <div
        v-if="$store.state.cart.order.length === 0"
        class="h-20 flex justify-center items-center"
      >
        <div class="bg-white px-4 py-2 rounded-md shadow-md">
          ไม่มีรายการคำสั่งซื้อ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data: () => ({
    data: [
      {
        id: '1',
        order: [
          {
            id: '1',
            category: 'graphic card',
            name: 'RTX 3090',
            price: 50000,
            image: [
              'https://media.discordapp.net/attachments/1026446507194470440/1036331141831082025/IMG_9816.jpg?width=556&height=556',
              'imglink2',
            ],
            description:
              'Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X',
            amount: 4,
          },
          {
            id: '2',
            category: 'laptop',
            name: 'Macbook Air M2',
            price: 50000,
            image: [
              'https://media.discordapp.net/attachments/1026446507194470440/1036331141831082025/IMG_9816.jpg?width=556&height=556',
              'imglink2',
            ],
            description: 'Short detail : Macbook air M2 256GB',
            amount: 4,
          },
        ],
        created_date: '2021-01-01',
        status: 'pending',
        payment: 'promptpay',
      },
    ],
  }),
}
</script>

<style>
.line3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.line1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>