import { v4 } from "uuid";
import { INotification, ModeNotification } from "~~/app/shared/types";

export const useVNotification = ({
    autoHide = false,
    duration = 3000,
    mode = ModeNotification.INFO,
    storeNotification,
}: {
    autoHide?: boolean;
    duration?: number;
    mode?: ModeNotification;
    storeNotification: INotification[];
}) => {
    const createObjectNotification = (text: string) =>
        ({
            id: v4(),
            isDisplay: true,
            text: text,
            mode: mode,
        } as INotification);

    const removeNotification = (id: string) => {
        storeNotification.splice(
            storeNotification.findIndex((el) => el.id === id),
            1
        );
    };

    if (autoHide) {
        const createNotificationWithAutoClean = (text: string) => {
            const notification = createObjectNotification(text);
            storeNotification.push(notification);

            setTimeout(() => {
                removeNotification(notification.id);
            }, duration);
        };

        return { createNotification: createNotificationWithAutoClean };
    } else {
        const createNotification = (text: string) => {
            const notification = createObjectNotification(text);
            storeNotification.push(notification);
            return notification.id;
        };

        return {
            createNotification,
            removeNotification,
        };
    }
};
