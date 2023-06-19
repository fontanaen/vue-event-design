<script lang=ts setup>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

</script>

<template>
<div class="bg-white dark:bg-gray-950 h-screen w-screen flex flex-col">
    <div class="flex flex-col gap-0 flex-1 overflow-auto container mx-auto">
        <Header
            class="sticky top-0">
        </Header>
        <slot></slot>    
    </div>

    <Footer></Footer>
</div>
</template>