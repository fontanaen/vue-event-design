<script lang=ts setup>
import QuantitySelector from '@/components/cart/QuantitySelector.vue';
import View from '@/layouts/View.vue';
import { Shop } from '@/models/domain/shops';
import { Product } from '@/models/domain/products';
import { computed } from 'vue';

const emit = defineEmits<{ (e: 'add', id: number): void, (e: 'remove', id: number): void }>();

const props = defineProps<{
    shop: Shop | null;
    products: (Product & { quantity: number })[]
    totalAmount: number;
}>()
</script>

<template>
    <View class="flex flex-col gap-4 p-4">
        <template v-if="props.shop">
            <div class="text-xl font-semibold">{{ props.shop.name }}</div>
        
            <div class="flex flex-col gap-3">
                <div v-for="(product, index) in props.products" :key="index" class="flex items-center gap-4 ">
                    <div class="flex items-center justify-between flex-1">
                        <span>{{ product.name }}</span>
                        <span>{{ (parseFloat(product.price) * product.quantity).toFixed(2) + product.currency }}</span>
                    </div>
                    <QuantitySelector :quantity="product.quantity" @add="emit('add', product.id)" @remove="emit('remove', product.id)" />
                </div>
            </div>

            <hr>

            <div class="text-xl font-semibold flex items-center justify-between">
                <span>Total amout</span>
                <span>{{ totalAmount.toFixed(2) }}€</span>
            </div>
        </template>
        <template v-else>
            <div>Cart is empty</div>
        </template>

        <template #bottomActions>
            <slot :name="props.shop ? 'activeCartActions': 'emptyCartActions'"></slot>
        </template>
    </View>  
</template>