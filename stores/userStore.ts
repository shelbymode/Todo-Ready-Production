import { defineStore } from "pinia";
import { GetOneUser } from "~~/client/modules/user/application/GetOneUser.usecase";
import { logError } from "~~/client/shared/utils/logError";

const useUserStore = defineStore("user", {
    state: () => ({
        users: [{ name: "Andrew" }, { name: "Vasya" }],
    }),
    getters: {
        getCurrentPageData: (state) => state.users,
    },
    actions: {
        getOneUser(id: string) {
            const getOneUser = new GetOneUser();
            getOneUser.execute(
                { id },
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

export { useUserStore };
