<template>
  <div class="flex justify-center items-center relative w-full h-full">
    <img class="rounded-lg aspect-square w-full h-full object-contain" :src="data[select]" />
    <div
      class="
        absolute
        bottom-0
        w-full
        p-2
        flex
        justify-center
        items-center
        gap-2
        flex-wrap
      "
    >
      <img
        v-for="(img, i) in data"
        :key="i"
        class="aspect-square w-14 h-14 bg-black rounded-md shadow-md object-cover transition-all cursor-pointer hover:scale-110"
        :class="{ 'scale-110': i === select }"
        :src="img"
        @click="select = i"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    select: 0,
  }),
}
</script>

<style>
</style>