<script setup lang="ts">
import { UserEntity } from "~~/entity/User/UserEntity";
import { UserParser } from "~~/parser/User/UserParser";

async function createUser() {
    const { data } = await useFetch("/api/users");

    const rawUser1 = new UserEntity(data.value[0] as unknown);

    console.log("Raw data:", rawUser1);

    const parsedUser1 = UserParser.parseTo(rawUser1.data);

    console.log("Parsed data:", parsedUser1);
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
