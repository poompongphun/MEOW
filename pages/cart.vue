<template> 
    <div class="pt-8 px-2">
        <div class="text-2xl font-bold">ตะกร้าสินค้า</div>
            <div class="my-2 gap-2">    
                <cart-list :data="cart[0]"></cart-list>
                <cart-list :data="cart[0]"></cart-list>
            </div>
    </div>
</template>

<script>
import CartList from '~/components/Cart/CartList.vue'
export default {
    name: "CartPage",
    components: { CartList },
   data: () => ({
    cart: [
        {
            "id": "1",
            "category": "graphic card",
            "name": "RTX 3090",
            "price": 50000,
            "image": ["imglink1", "imglink2"],
            "description": "Short detail : VGA (การ์ดแสดงผล) MSI GEFORCE RTX 3090 TI SUPRIM X 24G - 24GB GDDR6X",
            "amount": 4
        },
    ],
  }),
}
</script>
<style>

</style>