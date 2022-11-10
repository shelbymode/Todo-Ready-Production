<script setup lang="ts">
const props = defineProps<{
    selected: boolean;
}>();
</script>

<template>
    <button
        :class="[
            'w-full py-5 tab font-extrabold transition-300 text-dark-900 focus:outline-none',
            selected ? 'bg-white shadow  scale-110 text-3xl ' : 'hover:bg-white/[0.45] text-2xl hover:scale-105 opacity-50',
        ]"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped></style>
