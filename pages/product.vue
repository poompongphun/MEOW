<template>
    <div class="bg-white rounded-lg drop-shadow-md">
        <product-detail></product-detail>
        <div class="p-20">
            <p class="text-primary text-2xl font-medium">คุณสมบัติ</p>
            <hr style="border-color: #6C76EA;margin-top: 15px;">
            <product-feature :data="$store.state.allProducts[0].feature"></product-feature>
        </div>
        
    </div>
</template>

<script>
    import ProductDetail from '~/components/productpage/ProductDetail.vue'
    import ProductFeature from '~/components/productpage/ProductFeature.vue'
    export default {
        name:"ProductPage",
        components: { ProductDetail, ProductFeature }
        
    }
</script>

<style>

</style>