<template>
  <div class="bg-white rounded-lg shadow-md aspect-[16/7] p-4 h-full w-full">
    <div class="text-center font-bold">{{ data.title }}</div>
    <div class="mt-2 text-stone-400">
      <span class="font-bold text-black">
        {{ data.fname }} {{ data.lname }}
      </span>
      |
      {{ data.tel }}
      <div>
        {{ data.address }}
      </div>
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
}
</script>

<style>
</style>