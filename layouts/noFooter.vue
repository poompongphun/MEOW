<template>
  <div class="min-h-screen relative">
    <nav-bar />
    <div class="container mx-auto content-area mt-[80px]">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/Layouts/NavBar.vue'

export default {
  name: 'DefaultLayout',
  components: { NavBar },
  mounted() {
    this.$store.commit('init')
    this.$store.commit('address/init')
    this.$store.commit('cart/init')
  },
}
</script>

  <style scoped>
.content-area {
  --navbarHeight: 0px;
  --footerHeight: 360px;
  min-height: calc(100vh - var(--navbarHeight) - var(--footerHeight));
}
</style>