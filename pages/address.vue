<template>
  <div class="pt-8 px-2">
    <div class="text-2xl font-bold">ที่อยู่</div>
    <div
      class="
        my-2
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-2
      "
    >
      <address-card
        v-for="(tyu, i) in $store.state.address.address"
        :key="i"
        :data="tyu"
        :editable="true"
      />
      <div
        class="
          aspect-[16/7]
          bg-gradient-to-t
          from-primary
          to-lightviolet
          rounded-lg
          flex
          justify-center
          items-center
          shadow-lg
          hover:scale-95
          active:scale-90
          transition-all
          cursor-pointer
          h-full
          w-full
        "
        @click="$refs.AddressDialog.openDialog()"
      >
        <FontAwesomeIcon
          icon="plus"
          class="text-4xl text-white"
        ></FontAwesomeIcon>
      </div>
    </div>
    <address-dialog ref="AddressDialog" @push="addAddress" />
  </div>
</template>

<script>
import AddressCard from '~/components/Address/AddressCard.vue'
import AddressDialog from '~/components/Address/AddressDialog.vue'
export default {
  name: 'AddressPage',
  components: { AddressCard, AddressDialog },
  validate({ store, redirect }) {
    if (!store.state.user) redirect('/')
    return true
  },
  data: () => ({
  }),
  methods: {
    addAddress(data) {
      this.$store.commit('address/addAddress', data)
    },
  },
}
</script>

<style>
</style>