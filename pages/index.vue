<script setup lang="ts">
import { UserEntity } from "~~/entity/User/UserEntity";

async function createUser() {
    const { data } = await useFetch("/api/users");

    const user1 = new UserEntity(data.value[0] as unknown);
    console.log(user1);
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
