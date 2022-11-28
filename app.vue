<script setup lang="ts">
import { useNotificationStore } from "./stores/notificationStore";

const notificationStore = useNotificationStore();

onMounted(() => {
    setTimeout(() => {
        notificationStore.displayNotification("Hello 1", { autoHide: true });
    }, 500);

    setTimeout(() => {
        notificationStore.displayNotification("Hello 2", { autoHide: true });
    }, 1500);

    setTimeout(() => {
        notificationStore.displayNotification("Hello 3", { autoHide: true });
    }, 2500);
});
</script>

<template>
    <Transition name="toggle-animation">
        <OrganismNotification
            v-if="notificationStore.isNotificationExists"
            :notifications="notificationStore.activeNotifications"
        />
    </Transition>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>
