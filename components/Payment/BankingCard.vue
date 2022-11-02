<template>
    <div class="
      bg-white
      rounded-lg
      shadow-md
      aspect-[16/7]
      p-4
      h-full
      w-full
      relative
    ">
        <div class="flex h-full w-full justify-center align-center p-5">
            <img class="h-full" :src="data" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: String,
            default: () => '/logo.png'
        }
    }
}
</script>
