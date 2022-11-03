<template>
    <div class="box">
        <div class="flex bg-white rounded-2xl shadow-md p-3 w-full">
                <img class="flex-none h-full aspect-square w-40 object-cover m-2 rounded-xl" :src="data.images[0]">
                    <div class="flex-col flex justify-between h-full lg:max-w-xl text-left p-2 w-full">
                        <div><div class="font-bold">{{ data.name }}</div>
                        <p class="mt-2 md:w-full">{{ data.description }}</p></div>
                        <span class="text-primary font-bold text-lg ">{{ data.price.toLocaleString('en-us') }} บาท</span>
                    </div>
                    <div class="flex space-x-5 md:flex justify-center md:items-center w-1/4 p-4 m-5 sm: ">
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
    .box{
        padding-bottom: 1em;
    }
</style>
