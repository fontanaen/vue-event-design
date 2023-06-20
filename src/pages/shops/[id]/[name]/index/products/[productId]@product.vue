<script lang=ts setup>
import { definePage, useRouter } from 'vue-router/auto'
import { useShopsStore } from '@/stores/shops'

import Modal from '@/layouts/Modal.vue';
import ProductView from '@/views/ProductView.vue';
import { computed } from 'vue';
import Button from '@/components/shared/Button.vue';

definePage({
    name : 'Product', 
    /** @issue Cannot cast params with expression: (route) => ({ ... }) */
    props: true,
})

const router = useRouter();

const emit = defineEmits<{ (e: 'addToCart', productId: number): void }>()
const props = defineProps<{ id: string, productId: string }>()

const shopsStore = useShopsStore();
const product = computed(() => shopsStore.getProductById(parseInt(props.id), parseInt(props.productId)));
</script>

<template>
    <Modal @close="router.back()" :title="product?.name">
        <ProductView :product="product">
            <template #bottomActions>
                <Button @click="emit('addToCart', parseInt(props.productId))">Add to Cart</Button>
            </template>
        </ProductView>
    </Modal>
</template>

