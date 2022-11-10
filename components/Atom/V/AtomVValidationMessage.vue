<script setup lang="ts">
const props = defineProps<{
    isError?: boolean;
    errorMessage?: string;
}>();
</script>

<template>
    <p v-if="isError" class="text-xl font-bold text-red-900">
        {{ errorMessage }}
    </p>
</template>

<style lang="scss" scoped></style>
