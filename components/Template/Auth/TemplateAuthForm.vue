<script setup lang="ts">
const props = defineProps<{
    submitAuthHandler: (e: Event) => void;
}>();
</script>

<template>
    <form
        class="flex w-full flex-col h-full items-center justify-evenly"
        @submit.prevent="props.submitAuthHandler"
    >
        <slot />
    </form>
</template>

<style lang="scss" scoped></style>
