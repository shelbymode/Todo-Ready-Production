<script setup lang="ts"></script>

<template>
    <div class="main-container h-screen w-full"></div>
    <slot />
</template>

<style lang="scss" scoped>
.main-container {
    background: url("/images/main-bg.webp") center/cover no-repeat;
    filter: opacity(90%) sepia(30%);
}
</style>
