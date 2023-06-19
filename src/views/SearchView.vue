<script lang=ts setup>
const emit = defineEmits<{ (e: 'close'): void}>()
</script>

<template>
    <div class="flex flex-col gap-0 p-4" style="height: 3000px">
        <div class="flex items-center gap-4 container mx-auto fixed top-0 left-0 p-4">
            <FontAwesomeIcon :icon="['fas', 'times']" size="lg" @click="emit('close')" />
            <div class="w-full bg-gray-200 dark:bg-gray-600 flex justify-between rounded-full px-4 py-2">
                Search...
                <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" size="lg" />
            </div>
        </div>
    </div>
</template>