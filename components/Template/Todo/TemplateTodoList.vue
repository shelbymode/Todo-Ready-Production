<script setup lang="ts"></script>

<template>
    <NuxtLayout name="center">
        <main class="relative bg-light-900/70 flex rounded-xl shadow-2xl shadow-zinc-900 flex-col py-15 p-20 gap-y-5 items-center">
            <slot name="title"></slot>
            <slot name="search"></slot>

            <div class="container w-full flex flex-col gap-y-3">
                <slot name="items"></slot>
            </div>
            <slot name="status-bar"></slot>

            <div class="absolute bottom-0 left-0 translate-y-[150%] p-6 rounded-xl shadow-2xl bg-light-200/70 w-full">
                <slot name="pagination"></slot>
            </div>

            <div class="absolute top-1/2 left-0 flex flex-col gap-y-5 bg-dark-900 p-6 translate-x-[-100%] rounded-l-xl translate-y-[-50%]">
                <slot name="safe-mode"></slot>
                <slot name="show-mode"></slot>
            </div>

            <div class="absolute top-1/2 right-0 flex flex-col gap-y-5 bg-dark-900 p-6 translate-x-[100%] rounded-r-xl translate-y-[-50%]">
                <slot name="manual-safe-tool"></slot>
            </div>
        </main>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
main {
    font-family: "Orbitron", sans-serif;
}
.container {
    perspective: 2000px;
    transform-style: preserve-3d;
}
</style>
