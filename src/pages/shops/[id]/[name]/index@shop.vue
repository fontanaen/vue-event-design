<script lang=ts setup>
import { definePage, useRouter } from 'vue-router/auto'
import { useShopsStore } from '@/stores/shops'

import ShopView from '@/views/ShopView.vue';
import CartButton  from '@/components/cart/CartButton.vue';
import Modal from '@/layouts/Modal.vue';
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import Popup from '@/layouts/Popup.vue';
import Button from '@/components/shared/Button.vue';

definePage({
    name: 'Shop', 
    /** @issue Cannot cast params with expression: (route) => ({ ... }) */
    props: true,
})

const router = useRouter();

const props = defineProps<{ id: string, name: string }>()

const activeCartExistingPopup = ref<typeof Popup>()

const cartStore = useCartStore();
const { cart, groupedByProducts } = storeToRefs(cartStore);

const shopsStore = useShopsStore();
const shop = computed(() => shopsStore.getShopById(parseInt(props.id)))
const shopHasAnActiveCart = computed(() => cart.value.shopId === shop.value?.id && cart.value.list.length > 0)
const productsInCart = computed(() => shopHasAnActiveCart.value ? groupedByProducts.value : [])

const addToCart = (productId: number) => {
    if (cart.value.shopId === null) {
        cart.value.shopId = shop.value?.id as number
    } else if (cart.value.shopId !== shop.value?.id) {
        activeCartExistingPopup.value?.open();
        return;
    }

    cartStore.addToCart(productId)
    router.back();
}

const resetCart = () => {
    cartStore.$reset()
    activeCartExistingPopup.value?.close();
}
</script>

<template>
    <Modal @close="router.back()" :title="props.name">
        <ShopView :shop="shop" :cart="productsInCart">
            <template #bottomActions>
                <CartButton v-if="shopHasAnActiveCart" @click="router.push({ name: 'shop.cart' })" :quantity="cart.list.length" />
            </template>
        </ShopView>
    </Modal>

    <Popup ref="activeCartExistingPopup" class="flex flex-col gap-3 p-4">
        <span class="text-lg font-semibold">You have an active cart !</span>
        <span class="text-gray-500">Do you want to create a new order ? </span>
        <Button btn-class="px-4 py-3" @click="resetCart">New order</Button>
    </Popup>

    <RouterView name="product" @add-to-cart="addToCart" />
    <RouterView name="cart" />
</template>

