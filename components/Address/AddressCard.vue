<template>
  <div
    class="
      bg-white
      rounded-lg
      shadow-md
      aspect-[16/7]
      p-4
      h-full
      w-full
      relative
    "
  >
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
    <button v-if="editable" class="absolute top-0 right-0 m-2 aspect-square w-7 h-7" @click="$store.commit('address/removeAddress', data)">
      <FontAwesomeIcon icon="trash" class="text-red-500" />
    </button>
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
    editable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
</style>