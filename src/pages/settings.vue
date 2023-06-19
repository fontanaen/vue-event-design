<script lang=ts setup>
import { definePage } from 'vue-router/auto'

import Page from '@/layouts/Page.vue';
import SettingsView from '@/views/SettingsView.vue';

definePage({
    name : 'Settings',
    // props: (route) => ({
    //     ...route.params,
    //     id: parseInt(route.params.id)
    // })
})
</script>

<template>
    <Page class="text-black dark:text-white">
        <SettingsView></SettingsView>
    </Page>
</template>

