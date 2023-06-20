<script lang=ts setup>
import { definePage, useRouter } from 'vue-router/auto'

import Modal from '@/layouts/Modal.vue';
import CartView from '@/views/CartView.vue';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { useShopsStore } from '@/stores/shops';
import Button from '@/components/shared/Button.vue';

definePage({
    name : 'shop.cart', 
    /** @issue Cannot cast params with expression: (route) => ({ ... }) */
    props: true,
})

const router = useRouter();

const cartStore = useCartStore();
const { cart, groupedByProducts, totalAmount } = storeToRefs(cartStore);

const shopsStore = useShopsStore();
</script>

<template>
    <Modal @close="router.back()" title="Cart" header-type="sticky">
        <CartView 
            :shop="shopsStore.getShopById(cart.shopId) ?? null" 
            :products="groupedByProducts"
            :totalAmount="totalAmount"
            @add="cartStore.addToCart" 
            @remove="cartStore.removeFromCart"
        >
            <template #activeCartActions>
                <Button>Confirm cart</Button>
            </template>
        </CartView>
    </Modal>
</template>

