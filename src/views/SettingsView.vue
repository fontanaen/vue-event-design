<script lang=ts setup>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const app = useAppStore();
const { darkMode} = storeToRefs(app);
</script>

<template>
    <div class="flex flex-col gap-3 p-4" style="height: 3000px">
        <div class="flex items-center    justify-between">
            <span class="text-lg font-semibold">Theme</span>
            <FontAwesomeIcon :icon="['fas', darkMode ? 'sun': 'moon']" size="lg" @click="darkMode = !darkMode" />
        </div>
    </div>
</template>
