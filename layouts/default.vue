<template>
  <div class="min-h-screen relative">
    <nav-bar />
    <div class="container mx-auto content-area mt-[80px]">
      <Nuxt />
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '~/components/Layouts/MainFooter.vue'
import NavBar from '~/components/Layouts/NavBar.vue'

export default {
  name: 'DefaultLayout',
  components: { MainFooter, NavBar },
}
</script>

<style scoped>
.content-area {
  --navbarHeight: 24px;
  --footerHeight: 24px;
  min-height: calc(100vh - var(--navbarHeight) - var(--footerHeight));
}
</style>