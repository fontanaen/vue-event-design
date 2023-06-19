<script lang=ts setup>
const props = defineProps<{
    btnClass?: string;
}>()
</script>

<template>
    <div class="w-full">
        <button class="p-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold text-center w-full" :class="props.btnClass">
            <slot></slot>
        </button>
    </div>
</template>
    