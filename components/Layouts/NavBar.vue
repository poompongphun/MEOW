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
      px-2
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
            v-model="search"
            class="
              w-full
              border border-grey
              rounded-lg
              h-9
              pl-3
              pr-8
              outline-none
            "
            :class="{ search: search !== '' }"
            type="text"
          />
          <button
            class="absolute right-3 top-1/2 transform -translate-y-1/2"
            @click="search = ''"
          >
            <FontAwesomeIcon
              v-if="search === ''"
              icon="magnifying-glass"
              class="text-primary"
            />
            <FontAwesomeIcon v-else icon="circle-xmark" class="text-primary" />
          </button>
          <div class="search-dropdown absolute top-10 w-full rounded-md">
            <search-dropdown :data="search" />
          </div>
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
          <span class="hidden md:block">????????????????????????????????????</span>
        </button>
        <button
          v-if="$store.state.user"
          class="
            menu-btn
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
          <span class="hidden md:block">?????????????????????????????????</span>
          <div
            class="
              mymenu
              absolute
              bg-whiteBlue
              right-0
              top-9
              max-w-[230px]
              w-full
              shadow-xl
              rounded-xl
              p-2
              pb-1
              transition-all
            "
          >
            <div
              v-for="(menu, i) of menus"
              :key="i"
              class="
                w-full
                flex
                justify-start
                items-center
                gap-1
                h-11
                bg-white
                border border-grey
                rounded-xl
                mb-1
                px-3
                hover:bg-[#fafafa]
                transition-all
              "
              @click="menu.clickEvt"
            >
              <FontAwesomeIcon
                :icon="menu.icon"
                class="text-primary text-lg mr-1"
              />
              <span>{{ menu.text }}</span>
            </div>
          </div>
        </button>
        <button
          v-else
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
          @click="login"
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
            <FontAwesomeIcon
              icon="right-to-bracket"
              class="text-white text-sm"
            />
          </div>
          <span class="hidden md:block">?????????????????????????????????</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchDropdown from './SearchDropdown.vue'
export default {
  components: { SearchDropdown },
  data() {
    const self = this
    return {
      isTop: true,
      search: '',
      menus: [
        {
          icon: 'clipboard-list',
          text: '????????????????????????????????????????????????',
          clickEvt: () => self.$router.push('/order'),
        },
        {
          icon: 'house',
          text: '?????????????????????',
          clickEvt: () => self.$router.push('/address'),
        },
        // {
        //   icon: 'heart',
        //   text: '????????????????????????????????????',
        //   clickEvt: () => self.$router.push('/love'),
        // },
        {
          icon: 'right-from-bracket',
          text: '??????????????????????????????',
          clickEvt: () => {
            self.$store.commit('logout')
            self.$router.push('/')
          },
        },
      ],
    }
  },
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
    login() {
      this.$store.commit('login', {
        id: 1,
        name: 'Meow',
      })
    },
  },
}
</script>

<style>
.mymenu {
  opacity: 0;
  pointer-events: none;
}
.menu-btn:hover .mymenu {
  opacity: 1;
  pointer-events: all;
}
.search-dropdown {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
}

.search:focus ~ .search-dropdown,
.search-dropdown:hover {
  opacity: 1;
  overflow: auto;
  max-height: calc(57px * 4);
}
</style>