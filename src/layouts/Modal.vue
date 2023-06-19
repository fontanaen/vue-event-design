<script lang=ts setup>
import BottomActions from '@/components/shared/BottomActions.vue';
import { useScroll } from '@vueuse/core'
import { computed, ref } from 'vue';

const props = defineProps<{ title: string, headerType?: 'fixed' | 'sticky' }>()

const emit = defineEmits<{(e: 'close'): void}>()

const wrapper = ref<HTMLElement>();

const { y } = useScroll(wrapper);

const showHeader = computed(() => {
    const percent = y.value / 100;
    
    return percent >= 1 ? true : false;
})
</script>

<template>
    <div class="bg-white dark:bg-gray-950 text-black dark:text-white absolute top-0 left-0 w-screen h-screen flex flex-col">
        <div ref="wrapper" class="overflow-auto relative flex flex-col flex-1 gap-0 container mx-auto">
            <div 
                class="fixed top-0 transition-colors duration-300 ease-in flex items-center gap-4 p-4 w-full" 
                :class="[
                    showHeader ? 'bg-white/70 dark:bg-gray-950/70 backdrop-blur-sm' : 'bg-white/0 dark:bg-gray-600/0',
                    headerType ?? 'fixed'
                ]"
            >
                <div class="bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center" @click="emit('close')">
                    <FontAwesomeIcon :icon="['fas', 'times']" size="lg" />
                </div>
                <div class="text-xl font-semibold" :class="showHeader ? 'opacity-100' : 'opacity-0'">{{ props.title }}</div>
            </div>

            <slot></slot>            
        </div>
    </div>
</template>