
<template>
    <div
        class="
            rounded-lg
            w-full
            sm:w-40
            sm:m-2
            mt-4
            first:mt-2
            bg-white
            shadow-lg
            p-4
            sm:p-2
            pb-2
            text-center
            mycard
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
                overflow-hidden
            "
            :style="'background-image: url(' + data.img + ')'"
        >
            <div
                class="
                    w-full
                    h-full
                    rounded-lg
                    text-white
                    bg-[rgba(108,119,234,0.7)]
                    translate-y-full
                    myprofile
                    transition-all
                    duration-200
                    p-2
                    flex
                    items-center
                    justify-center
                "
            >
            <span class="text-xl sm:text-lg">{{data.name}}</span>
            </div>
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

<style>
    .mycard:hover .myprofile{
        transform: translateY(0);
    }
</style>