<script lang=ts setup>
import { ref } from 'vue';

const isOpen = ref(false);

defineExpose({
    open: () => isOpen.value = true,
    close: () => isOpen.value = false
})
</script>

<template>
    <template v-if="isOpen">
        <div class="z-10 bg-gray-500/50 dark:bg-gray-400/25 absolute top-0 left-0 h-screen w-screen flex flex-col" @click="isOpen = false"></div>

        <div v-bind="$attrs" class="z-20 bg-white dark:bg-gray-950 text-black dark:text-white overflow-auto flex flex-col flex-1 gap-0 w-screen absolute bottom-0 left-0 rounded-t-xl">
            <div class="w-full">
                <div class="mx-auto w-16 h-1 bg-gray-500 rounded-full"></div>
            </div>
            <slot></slot>
        </div>
    </template>
</template>