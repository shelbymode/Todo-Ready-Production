<script setup lang="ts">
const props = defineProps<{
    icon?: string;
}>();
</script>

<template>
    <button class="flex items-center gap-x-2 text-white text-xl bg-dark-900 hover:bg-dark-500 rounded-xl p-3">
        <span class="text-4xl" :class="props.icon"></span>
        <slot />
    </button>
</template>

<style lang="scss" scoped></style>
