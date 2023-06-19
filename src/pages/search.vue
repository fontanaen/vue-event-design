<script lang=ts setup>
import { definePage, useRouter } from 'vue-router/auto';

import SearchView from '@/views/SearchView.vue';

definePage({
    name : 'Search',
})

const router = useRouter();
</script>

<template>
    <div class="bg-white dark:bg-gray-950 text-black dark:text-white">
        <SearchView @close="router.back()"></SearchView>
    </div>
</template>

