<script lang=ts setup>
import { definePage, RouterView } from 'vue-router/auto'
import { useShopsStore } from '@/stores/shops'

import Page from '@/layouts/Page.vue';
import ShopsView from '@/views/ShopsView.vue';
import { storeToRefs } from 'pinia';

definePage({
    name : 'Shops',
})

const shopsStore = useShopsStore();
const { shops } = storeToRefs(shopsStore);
</script>

<template>
    <Page class="text-black dark:text-white">
        <ShopsView :shops="shops"></ShopsView>
    </Page>

    <RouterView name="shop" />
</template>

