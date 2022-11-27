<script setup lang="ts">
import { Ref } from "vue";
import { INotification } from "~~/app/shared/types";

const props = defineProps<{
    notification: INotification;
}>();
</script>

<template>
    <div class="notification-wrapper">
        <span class="message text-3d">[ ! Alert ! ]</span>

        <p class="title">{{ props.notification.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.notification-wrapper {
    @apply gap-y-4 w-full flex flex-col justify-center items-center;
}

.message {
    @apply text-4xl min-w-fit text-center px-20 rounded py-5 font-extrabold bg-dark-900/60;
}

.title {
    @apply bg-dark-900/90 text-center text-light-100/80 min-w-1/2 py-4 text-5xl font-medium;
}

.message,
.title {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 1) 0px 6px 6px;
}

.text-3d {
    text-transform: uppercase;

    color: #47f3ff;

    text-shadow: 1px 1px 1px #5ff6ff, 1px 2px 1px #008aff, 1px 3px 1px #008aff,
        -1px 3px 2px #008aff, -1px -1px 1px #0064b8, 2px -1px 2px #0064b8,
        1px 7px 4px rgba(0, 9, 35, 0.4), 1px 9px 10px rgba(0, 64, 255, 0.2),
        1px 9px 35px rgba(0, 64, 255, 0.2), 1px 9px 60px rgba(0, 64, 255, 0.4);
}
</style>
