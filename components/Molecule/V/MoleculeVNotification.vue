<script setup lang="ts">
import { useChainAddClass } from "~~/composition/V/useAddChainClass";

const containerNotification = ref<HTMLElement>(null);

const { animationController: animeController } = useChainAddClass(containerNotification, ["creep-in", "creep-out"] as const);
</script>

<template>
    <div
        ref="containerNotification"
        class="notification-container translate-y-[-110%] opacity-0 gap-y-4 w-full fixed top-[0.5%] left-1/2 translate-x-[-50%] flex flex-col justify-center items-center z-1"
    >
        <p class="text-3d title text-4xl min-w-fit text-center px-20 rounded py-5 font-extrabold bg-dark-900/60">[ ! Alert ! ]</p>
        <span class="bg-dark-900/90 text-center text-light-100/80 min-w-1/2 py-4 text-5xl font-medium"> Credentials are incorrect </span>
    </div>
</template>

<style lang="scss" scoped>
.notification-container p,
span {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 1) 0px 6px 6px;
}
.text-3d {
    text-transform: uppercase;
    color: #47f3ff;
    text-shadow: 1px 1px 1px #5ff6ff, 1px 2px 1px #008aff, 1px 3px 1px #008aff, -1px 3px 2px #008aff, -1px -1px 1px #0064b8,
        2px -1px 2px #0064b8, 1px 7px 4px rgba(0, 9, 35, 0.4), 1px 9px 10px rgba(0, 64, 255, 0.2), 1px 9px 35px rgba(0, 64, 255, 0.2),
        1px 9px 60px rgba(0, 64, 255, 0.4);
}
</style>
