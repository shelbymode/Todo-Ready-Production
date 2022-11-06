<script setup lang="ts">
import { GetOneUser } from "~~/app/modules/user/application/GetOneUser.usecase";
import { logError } from "~~/app/shared/utils/logError";

async function createUser() {
    const getOneUser = new GetOneUser();
    getOneUser.execute(
        { id: "22" },
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
}
</script>

<template>
    <main
        class="w-screen h-screen bg-red-200/90 flex items-center justify-center"
    >
        <button
            class="p-5 bg-neutral color-white"
            rounded-md
            @click="createUser"
        >
            Create user
        </button>
    </main>
</template>
