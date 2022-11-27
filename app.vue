<script setup lang="ts">
import { v4 } from "uuid";
import { INotification, ModeNotification } from "./app/shared/types";

const notifications: INotification[] = reactive([]);

/*   setTimeout(() => {
        notifications.splice(
            notifications.findIndex((el) => el.id === "1"),
            1
        );
    }, 2000); */

function useGlobalBus({
    autoHide = true,
    duration = 5000,
    mode = ModeNotification.INFO,
}: {
    autoHide?: boolean;
    duration?: number;
    mode?: ModeNotification;
} = {}) {
    const notification: INotification = {
        id: v4(),
        isDisplay: false,
        text: "",
        mode,
    };

    notifications.push(notification);

    const displayNotification = (text: string) => {
        const currentNotification = notifications.find(
            (el) => el.id === notification.id
        );
        currentNotification.text = text;
        currentNotification.isDisplay = true;
    };

    const hideNotification = () => {
        const currentNotification = notifications.find(
            (el) => el.id === notification.id
        );
        currentNotification.isDisplay = false;
    };

    function runAutoNotification(text: string) {
        displayNotification(text);

        setTimeout(() => {
            hideNotification();
        }, duration);
    }

    return { runAutoNotification, displayNotification, hideNotification };
}

const { runAutoNotification: runAutoNotification1 } = useGlobalBus();
const { runAutoNotification: runAutoNotification2 } = useGlobalBus();
const { runAutoNotification: runAutoNotification3 } = useGlobalBus();

onMounted(() => {
    setTimeout(() => {
        runAutoNotification1("Notification Alert1");
    }, 1000);
    setTimeout(() => {
        runAutoNotification2("Notification Alert2");
    }, 2500);
    setTimeout(() => {
        runAutoNotification3("Notification Alert3");
    }, 4000);
});

const activeNotifications = computed(() =>
    notifications.filter((el) => el.isDisplay)
);
const isNotEmpty = computed(() => activeNotifications.value.length > 0);
</script>

<template>
    <Transition name="toggle-animation">
        <OrganismNotification
            v-if="isNotEmpty"
            :notifications="activeNotifications"
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
