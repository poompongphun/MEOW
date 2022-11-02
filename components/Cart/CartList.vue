<template>
    <div class="flex bg-white rounded-lg shadow-md p-3 h-40 w-full">
            <img class="flex-none h-full w-40 p-3" src="\logo.png">
            <div class="flex-col flex justify-between h-full max-w-xl text-left p-1">
                <div><div class="font-bold">{{ data.name }}</div>
                <p class="mt-2">{{ data.description }}</p></div>
                <span class="text-primary font-bold text-lg ">{{ data.price.toLocaleString('en-us') }} บาท</span>
            </div>
            <div class="flex flex justify-between justify-center items-center w-1/4 p-4">
                <div class="flex justify-between h-9 w-28 border-inherit">
                    <div class="flex bg-primary rounded-lg h-full pt-2.5 w-9 justify-center" @click="plus()"><FontAwesomeIcon class="text-white" icon="minus" /></div>
                    <span class="flex justify-center items-center">{{ data.amount }}</span>
                    <div class="flex bg-primary rounded-lg h-full pt-2.5 w-9 justify-center" @click="minus()"><FontAwesomeIcon class="text-white" icon="plus" /></div>
                </div>
                <span @click=deleteBox()>
                    <FontAwesomeIcon class="text-pinkwtf h-9 text-4xl" icon="trash-can"/>
                </span>
            </div>
    </div>
</template>

<script>

export default {

    props:{
        data: {
            type: Object,
            default: () => ({}),
            required: true,
        }
    },
}
</script>

<style>

</style>
