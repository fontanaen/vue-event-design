<script lang=ts setup>
import { RouterLink } from 'vue-router/auto';

const props = defineProps<{
    shops: any
}>()
</script>

<template>
    <div class="flex flex-col gap-4 p-4 container mx-auto">
        <div class="flex flex-col mb-3">
            <span class="text-xl font-semibold">Hi John !</span>
            <span class="text-lg font-medium text-gray-500 dark:text-gray-300">What would make you happy today?</span>
        </div>
        <RouterLink 
            v-for="({ id, name }) in props.shops" 
            :key="id" 
            :to="{ name: 'Shop', params: { id, name } }"
            class="flex flex-col gap-2"
        >
           <div class="bg-gray-500 rounded-xl h-32 lg:w-96 sm:w-full"></div>
           <span class="font-medium text-lg">{{ name }}</span>
        </RouterLink>
    </div>
</template>
