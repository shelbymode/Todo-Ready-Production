import { defineStore } from "pinia";
import { Login } from "~~/client/modules/auth/application/Login.usecase";
import { Signup } from "~~/client/modules/auth/application/Signup.usecase";
import { logError } from "~~/client/shared/utils/logError";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { useNotificationStore } from "./notificationStore";

const notifiationStore = useNotificationStore();

const useAuthStore = defineStore("auth", {
    state: () => ({
        // users: [{ name: "Andrew" }, { name: "Vasya" }],
    }),
    getters: {
        // getCurrentPageData: (state) => state.users,
    },
    actions: {
        login(userOptions: TUserOptionsLogin) {
            const login = new Login();
            login.execute(
                { email: userOptions.email, password: userOptions.password },
                {
                    respondWithSuccess(data) {
                        console.log("Result: ", data);
                        notifiationStore.displayNotification(data.message, {
                            autoHide: true,
                        });
                    },
                    respondWithClientError(clientError) {
                        logError(clientError, "Client error");
                        notifiationStore.displayNotification(
                            clientError.message,
                            {
                                autoHide: true,
                            }
                        );
                    },
                    respondWithServerError(serverError) {
                        logError(serverError, "Server error");
                        notifiationStore.displayNotification(
                            serverError.message,
                            {
                                autoHide: true,
                            }
                        );
                    },
                }
            );
        },
        signup(userOptions: TUserOptionsSignup) {
            const signup = new Signup();
            const { email, name, password, confirmPassword } = userOptions;
            signup.execute(
                { email, name, password, confirmPassword },
                {
                    respondWithSuccess(data) {
                        console.log("Result: ", data);
                        notifiationStore.displayNotification(data.message, {
                            autoHide: true,
                        });
                    },
                    respondWithClientError(clientError) {
                        logError(clientError, "Client error");
                    },
                    respondWithServerError(serverError) {
                        logError(serverError, "Server error");
                    },
                }
            );
        },
    },
});

export { useAuthStore };
