import { defineStore } from "pinia";
import { Login } from "~~/app/modules/auth/application/Login.usecase";
import { Signup } from "~~/app/modules/auth/application/Signup.usecase";
import { logError } from "~~/app/shared/utils/logError";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/src/Auth/infrastructure/Service/auth.service.types";

const useStoreAuth = defineStore("auth", {
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
                    },
                    respondWithClientError(clientError) {
                        logError(clientError, "Client error");
                    },
                    respondWithServerError(serverError) {
                        logError(serverError, "Server error");
                    },
                    respondWithValidationError(validationError) {
                        logError(validationError, "Validation error");
                    },
                    respondWithParseError(parseError) {
                        logError(parseError, "Parse error");
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
                    },
                    respondWithClientError(clientError) {
                        logError(clientError, "Client error");
                    },
                    respondWithServerError(serverError) {
                        logError(serverError, "Server error");
                    },
                    respondWithValidationError(validationError) {
                        logError(validationError, "Validation error");
                    },
                    respondWithParseError(parseError) {
                        logError(parseError, "Parse error");
                    },
                }
            );
        },
    },
});

export { useStoreAuth };
