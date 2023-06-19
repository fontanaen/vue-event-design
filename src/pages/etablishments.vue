<script lang=ts setup>
import { definePage, RouterView } from 'vue-router/auto'
import { useEtablishmentsStore } from '@/stores/etablishments'

import Page from '@/layouts/Page.vue';
import EtablishmentsView from '@/views/EtablishmentsView.vue';
import { storeToRefs } from 'pinia';

definePage({
    name : 'Etablishments',
})

const etablishmentsStore = useEtablishmentsStore();
const { etablishments } = storeToRefs(etablishmentsStore);
</script>

<template>
    <Page class="text-black dark:text-white">
        <EtablishmentsView :etablishments="etablishments"></EtablishmentsView>
    </Page>

    <RouterView name="etablishment" />
</template>

