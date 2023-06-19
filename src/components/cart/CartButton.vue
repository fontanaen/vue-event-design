<script lang=ts setup>
import Button from '@/components/shared/Button.vue'; 

const props = defineProps<{ quantity: number }>()
</script>

<template>
    <Button>View my cart ({{ props.quantity }})</Button>
</template>