
<template>
    <div
        class="
            rounded-lg
            w-full
            sm:w-40
            m-2
            bg-white
            shadow-lg
            p-4
            sm:p-2
            pb-2
            text-center
        "
    >
        <div
            class="
                w-full
                rounded-lg
                h-96
                sm:h-40
                bg-cover
                bg-center
                mb-2
            "
            :style="{backgroundImage: 'url(' + data.img + ')'}"
        >
        </div>
        <span class="text-2xl sm:text-xl">{{data.student_id}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
            type: Object,
            default: null,
            required: true,
            },
        },
    }
</script>