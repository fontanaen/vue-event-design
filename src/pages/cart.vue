<script lang=ts setup>
import { definePage, useRouter } from 'vue-router/auto'

import Page from '@/layouts/Page.vue';
import { storeToRefs } from 'pinia';
import CartView from '@/views/CartView.vue';
import { useCartStore } from '@/stores/cart';
import { useEtablishmentsStore } from '@/stores/etablishments';
import Button from '@/components/shared/Button.vue';
import { computed } from 'vue';

const router = useRouter();

definePage({
    name : 'Cart',
})

const cartStore = useCartStore();
const { cart, groupedByProducts, totalAmount } = storeToRefs(cartStore);

const etablishmentsStore = useEtablishmentsStore();
const etablishment = computed(() => etablishmentsStore.getEtablishmentById(cart.value.etablishmentId as number) ?? null)
</script>

<template>
    <Page class="text-black dark:text-white">
        <CartView             
            :etablishment="etablishment" 
            :products="groupedByProducts"
            :totalAmount="totalAmount"
            @add="cartStore.addToCart" 
            @remove="cartStore.removeFromCart" 
        >
            <template #activeCartActions>
                <Button>Confirm cart</Button>
                <Button @click="router.replace({ name: 'Etablishment',  params: { id: etablishment.id, name: etablishment?.name }})">Add products</Button>
            </template>
        </CartView>
    </Page>
</template>

