<template>
  <div class="relative flex justify-center items-center">
    <div class="py-10 overflow-hidden">
      <client-only>
        <div ref="swiper" class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div v-for="(img, i) in images" :key="i" class="swiper-slide">
              <div
                class="
                  w-full
                  aspect-[4/3]
                  overflow-hidden
                  rounded-xl
                  drop-shadow-lg
                "
              >
                <img class="w-full h-full object-cover" :src="img" alt="ads" />
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
    <button
      class="
        myNext
        w-10
        h-10
        md:w-12 md:h-12
        sm:bg-lightPrimary
        flex
        justify-center
        items-center
        rounded-full
        z-10
        absolute
        transition-all
        hover:scale-95
      "
    >
      <FontAwesomeIcon icon="angle-right" class="text-white text-2xl" />
    </button>
    <button
      class="
        myPrev
        w-10
        h-10
        md:w-12 md:h-12
        sm:bg-lightPrimary
        flex
        justify-center
        items-center
        rounded-full
        z-10
        absolute
        transition-all
        hover:scale-95
      "
    >
      <FontAwesomeIcon icon="angle-left" class="text-white text-2xl" />
    </button>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'
export default {
  props: {
    images: {
      type: Array,
      default: () => ['https://picsum.photos/400/300'],
    },
  },
  async mounted() {
    await this.$nextTick()
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.myNext',
        prevEl: '.myPrev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    })
  },
}
</script>
<style>
.swiper {
  width: 100%;
  overflow: visible !important;
}
.myPrev {
  left: 10px;
}
.myNext {
  right: 10px;
}
@media screen and (min-width: 640px) {
  .swiper-slide {
    transition: transform 0.3s ease-in-out;
  }
  .swiper-slide-next {
    transform: scale(1.15) !important;
    z-index: 2;
  }
  .myPrev {
    left: -20px;
  }
  .myNext {
    right: -20px;
  }
}
@media screen and (min-width: 768px) {
  .myPrev {
    left: -24px;
  }
  .myNext {
    right: -24px;
  }
}
</style>