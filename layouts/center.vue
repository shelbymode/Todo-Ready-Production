<template>
    <div class="center-container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.center-container {
    display: flex;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
