<template>
  <button
    class="
      aspect-video
      bg-gradient-to-t
      from-primary
      to-lightviolet
      max-w-[200px]
      w-full
      rounded-lg
      flex
      justify-center
      items-center
      shadow-lg
      hover:scale-95
      active:scale-90
      transition-all
    "
    @click="$router.push('/category/' + name)"
  >
    <div class="text-center text-md font-bold text-white">
      <div>
        <FontAwesomeIcon :icon="icon" class="text-3xl" />
      </div>
      <div>{{ text }}</div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'CategoryBtn',
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
