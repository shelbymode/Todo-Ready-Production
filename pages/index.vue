<script setup lang="ts">
import { UserService } from "~~/service/User/UserService";

async function createUser() {
    const userService = new UserService();
    const outputUser = await userService.getOne("111");

    console.log("outputUser", outputUser);
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
