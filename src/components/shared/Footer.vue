<script lang=ts setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router/auto';

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore);

const routes = [
    { name: 'Etablishments', label: 'Home', icon: ['fas', 'house'] },
    { name: 'Search', label: 'Search', icon: ['fas', 'magnifying-glass'] },
    { name: 'Cart', label: 'Cart', icon: ['fas', 'cart-shopping'] },
    { name: 'Settings', label: 'Settings', icon: ['fas', 'user'] }
]
</script>

<template>
    <div class="bg-white dark:bg-gray-950 text-black dark:text-white h-16 w-screen flex items-center justify-between gap-5 px-5">
        <RouterLink 
            v-for="({ name, icon, label}) in routes" 
            :to="{ name }" 
            v-slot="{ isActive }" 
            :key="name"
            class="relative"
        >
            <div class="flex flex-col gap-1" :class="isActive ? 'text-black dark:text-white': 'text-gray-500'">
                <FontAwesomeIcon :icon="icon" size="lg" />
                <span class="text-xs">{{ label }}</span>
            </div>

            <div v-if="name === 'Cart' && cart.list.length > 0" class="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-green-600 flex items-end justify-center text-xs font-semibold text-white">
                <span>{{ cart.list.length }}</span>
            </div>
        </RouterLink>
    </div>
</template>
