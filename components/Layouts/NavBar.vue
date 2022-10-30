<template>
  <div
    class="
      flex
      justify-center
      items-center
      fixed
      w-full
      top-0
      z-50
      backdrop-blur-md
      transition-all
    "
    :class="{ 'h-20': isTop, 'h-16': !isTop, 'shadow-md': !isTop }"
  >
    <div
      class="container mx-auto flex justify-between items-center relative gap-6"
    >
      <div class="w-28 relative cursor-pointer" @click="$router.push('/')">
        <img class="w-full" src="/logo.png" alt="logo" />
      </div>
      <div class="w-full">
        <div class="w-full relative">
          <input
            class="
              w-full
              border border-[#E2E2E2]
              rounded-lg
              h-9
              pl-3
              pr-8
              outline-none
            "
            type="text"
          />
          <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon="magnifying-glass" class="text-primary" />
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button
          class="
            w-7
            md:w-36
            flex
            justify-center
            items-center
            text-primary
            rounded-xl
            md:p-1
            pl-0
            transition-all
            hover:bg-[rgba(108,118,234,0.1)]
          "
          @click="$router.push('/cart')"
        >
          <div
            class="
              bg-primary
              h-7
              w-7
              rounded-full
              flex
              justify-center
              items-center
              md:mr-2
            "
          >
            <FontAwesomeIcon icon="cart-shopping" class="text-white text-sm" />
          </div>
          <span class="hidden md:block">ตระกร้าสินค้า</span>
        </button>
        <button
          class="
            w-7
            md:w-32
            flex
            justify-center
            items-center
            text-primary
            rounded-xl
            md:p-1
            pl-0
            transition-all
            hover:bg-[rgba(108,118,234,0.1)]
          "
        >
          <div
            class="
              bg-primary
              h-7
              w-7
              rounded-full
              flex
              justify-center
              items-center
              md:mr-2
            "
          >
            <FontAwesomeIcon icon="user" class="text-white text-sm" />
          </div>
          <span class="hidden md:block">บัญชีผู้ใช้</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isTop: true,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isTop = !(window.scrollY > 0)
    },
  },
}
</script>

<style>
</style>