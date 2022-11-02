<template>
    <div>
        <div v-for="(feature, i) in data" :key="i" class="rounded-lg bg-primary p-5 mt-5">
            <p class="text-white text-xl">{{ feature.name }}</p>
            <div v-for="(detail, j) in feature.detail" :key="j" class="flex flex-row bg-white rounded-lg" :class="{'mb-2': (j+1 !== feature.detail.length)}">
                <div class="uppercase bg-lightBlue p-2 rounded-lg font-medium" style="flex-basis: 10%">{{ detail.key }}</div>
                <div class="p-2">{{ detail.value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null,
      required: true,
    },
  },
}
</script>
