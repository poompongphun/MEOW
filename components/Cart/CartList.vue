<template>
  <div
    class="
      w-full
      bg-white
      shadow-md
      p-2
      rounded-lg
      flex
      justify-between
      items-center
      relative
    "
  >
    <div class="flex justify-start items-center gap-2">
      <img
        class="
          aspect-square
          h-full
          w-full
          max-w-[140px]
          rounded-md
          shadow-md
          object-cover
        "
        :src="data.images[0]"
      />
      <div class="flex flex-col justify-between h-36">
        <div class="w-full sm:w-[470px] max-w-[470px] relative">
          <p class="font-bold w-full line1">
            {{ data.name }}
          </p>
          <div class="w-full line3">
            {{ data.description }}
          </div>
        </div>
        <div class="my-1 text-lg text-primary line1">
          {{ data.price.toLocaleString('en-us') }} บาท
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 p-2 md:static md:p-0">
      <div
        class="flex justify-between h-9 w-28 border-inherit shadow-md bg-white"
      >
        <div
          class="flex bg-primary rounded-lg h-full pt-2.5 w-9 justify-center"
          @click="addCart(-1)"
        >
          <FontAwesomeIcon class="text-white" icon="minus" />
        </div>
        <span class="flex justify-center items-center">{{ data.amount }}</span>
        <div
          class="flex bg-primary rounded-lg h-full pt-2.5 w-9 justify-center"
          @click="addCart(1)"
        >
          <FontAwesomeIcon class="text-white" icon="plus" />
        </div>
      </div>
    </div>
    <div>
      <button class="p-2 md:p-3">
        <FontAwesomeIcon
          class="text-pinkwtf text-2xl"
          icon="trash-can"
          @click="delCart(1)"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  methods: {
    addCart(num = 0) {
      this.$store.commit('cart/addCart', { product: this.data, amount: num })
    },
    delCart() {
      this.$store.commit('cart/removeCart', this.data)
    },
  },
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
