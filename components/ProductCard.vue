<template>
  <div
    class="
      rounded-lg
      bg-gradient-to-t
      from-lightviolet
      to-lightBlue
      drop-shadow-md
      cursor-pointer
      transition-all
      hover:scale-95
      overflow-hidden
    "
    style="width: 100%"
    @click="$router.push(`/product/${data.id}`)"
  >
    <div class="p-2">
      <img
        class="rounded-lg aspect-square object-contain bg-white w-full"
        :src="data.images[0]"
      />
    </div>
    <div class="rounded-lg bg-white p-2">
      <div style="margin-bottom: 10px">
        <h4
          class="uppercase font-semibold truncate"
          style="font-size: 16px; margin-bottom: 5px"
        >
          {{ data.name }}
        </h4>
        <div class="twoline min-h-[36px]" style="font-size: 12px">
          {{ data.description }}
        </div>
      </div>
      <div class="text-right">
        <p style="font-size: 10px; margin-bottom: -5px">ราคา</p>
        <h5 class="font-bold text-pinkwtf" style="font-size: 24px">
          {{ data.price.toLocaleString('en-us') }}.-
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>


<style scoped>
.twoline {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>