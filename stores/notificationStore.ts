import { INotification } from "../app/shared/types/index";
import { defineStore } from "pinia";
import { useVNotification } from "~~/composition/V/useVNotification";

export type TIDNotification = string;

export type TConfigNotification = { autoHide?: boolean; duration?: number };

const useNotificationStore = defineStore("notification-bus", {
    state: () => ({
        notifications: [] as INotification[],
    }),
    getters: {
        activeNotifications(state): INotification[] {
            return state.notifications;
        },
        isNotificationExists(): boolean {
            return this.activeNotifications.length > 0;
        },
    },

    actions: {
        displayNotification(
            text: string,
            options: TConfigNotification
        ): TIDNotification {
            const { createNotification } = useVNotification({
                storeNotification: this.$state.notifications,
                ...options,
            });

            if (!options.autoHide) return createNotification(text) as string;
            createNotification(text);
        },
        hideNotification(id: string) {
            const { removeNotification } = useVNotification({
                storeNotification: this.$state.notifications,
            });
            removeNotification(id);
        },
    },
});

export { useNotificationStore };
