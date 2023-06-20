<script lang=ts setup>
import View from '@/layouts/View.vue';
import { Product } from '@/models/domain/products';

const props = defineProps<{ 
    shop: any,
    cart: (Product & { quantity: number })[]
}>()

const getProductQuantityFromCart = (id: number) => {
    return props.cart.find((item) => item.id === id)?.quantity
}
</script>

<template>
    <View class="flex flex-col gap-0" style="height: 3000px">
        <div class="h-40 w-full bg-gray-500 lg:h-60"></div>
        <div class="container mx-auto">
            <div class="p-4 text-2xl font-semibold">{{ props.shop.name }}</div>
            <div class="p-4 flex flex-col gap-4">
                <RouterLink v-for="({id, name, price, currency}) in props.shop.products" :key="id" :to="{ name: 'Product', params: { productId: id }}" class="flex">
                    <div class="h-20 w-20 bg-gray-500 rounded-lg flex-none"></div>
                    <div class="px-4 flex flex-col">
                        <span class="font-semibold">{{ name }}</span>
                        <span>{{ `${price}${currency}` }}</span>
                        <span class="line-clamp text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                    </div>
                    <div v-if="getProductQuantityFromCart(id)" class="h-5 w-5 rounded-full bg-green-600 flex-none self-center text-white text-sm font-semibold flex items-center justify-center">
                        {{ getProductQuantityFromCart(id) }}
                    </div>
                </RouterLink>
            </div>
        </div>

        <template #bottomActions>
            <slot name="bottomActions"></slot>
        </template>
    </View>
</template>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>