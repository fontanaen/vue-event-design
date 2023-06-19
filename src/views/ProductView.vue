<script lang=ts setup>
import View from '@/layouts/View.vue';

const props = defineProps<{ 
    product: {
        id: number;
        name: string;
        price: string;
        currency: string;
    }
}>()
</script>

<template>
    <View class="flex flex-col gap-0">
        <div class="h-40 w-full bg-gray-500 lg:h-60"></div>
        <div class="container mx-auto">
            <div class="p-4 flex flex-col gap-4">
                <span class="text-xl font-semibold">{{ props.product.name }}</span>
                <span class="text-xl">{{ props.product.price + props.product.currency }}</span>
                <span class="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </span>
            </div>
        </div>

        <template #bottomActions>
            <slot name="bottomActions"></slot>
        </template>
    </View>
</template>