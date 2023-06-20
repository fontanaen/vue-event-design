<script setup lang="ts">
import { provide, watch } from 'vue';
import { RouterView, useRouter } from 'vue-router/auto';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const app = useAppStore();
const { darkMode } = storeToRefs(app);

const router = useRouter();

router.push({ name: 'Shops'})

provide('darkMode', darkMode);

watch(darkMode, (state) => {
  if (state) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
});
</script>

<template>
  <RouterView />
</template>
