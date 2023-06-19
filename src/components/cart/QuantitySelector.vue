<script lang=ts setup>
const emit = defineEmits<{ (e: 'add'): void, (e: 'remove'): void }>();
const props = defineProps<{ quantity: number }>();
</script>

<template>
    <div class="bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center gap-3 py-2 px-3">
        <FontAwesomeIcon :icon="['fas', props.quantity > 1 ? 'fa-minus' : 'fa-trash']" size="md" @click="emit('remove')" />
        <span>{{ props.quantity }}</span>
        <FontAwesomeIcon :icon="['fas', 'fa-plus']" size="md" @click="emit('add')" />
    </div>
</template>
    