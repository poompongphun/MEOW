<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="(item, i) in data"
      :key="i"
      class="rounded-lg transition-all"
      :class="{ 'border-primary border-[3px]': selected === i }"
      @click="select(i)"
    >
      <slot :data="item" />
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selected: null,
  }),
  methods: {
    select(index) {
      this.selected = index
      this.$emit('select', this.selected)
    },
  },
}
</script>

  <style>
</style>