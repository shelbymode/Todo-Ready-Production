<script setup lang="ts">
import { TaskService } from "~~/service/Task/TaskService";
import { UserService } from "~~/service/User/UserService";

async function createUser() {
    const userService = new UserService();
    const taskService = new TaskService();

    const outputUser = await userService.getUserById("111");

    console.log("outputUser", outputUser);
    console.log("taskService", taskService);

    const outputTask = await taskService.getTaskById("111");

    console.log(outputTask);
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
