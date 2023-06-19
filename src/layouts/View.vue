<script lang=ts setup>
import BottomActions from '@/components/shared/BottomActions.vue';

</script>

<template>
    <div v-bind="$attrs" class="flex-1 container mx-auto">
        <slot></slot>
    </div>

    <BottomActions class="container mx-auto">
        <slot name="bottomActions"></slot>
    </BottomActions>
</template>
    