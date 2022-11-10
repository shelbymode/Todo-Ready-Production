<script setup lang="ts">
import { useStoreUser } from "~~/stores/userStore";
import { v4 } from "uuid";

const userStore = useStoreUser();

const items = [
    {
        id: v4(),
        isDone: false,
        task: "acquire new pet for",
    },
    {
        id: v4(),
        isDone: true,
        task: "buy cat food",
    },
];

function createUser() {
    userStore.getOneUser("22");
}

definePageMeta({
    middleware: "authorize",
    alias: "/",
});
</script>

<template>
    <NuxtLayout name="main">
        <OrganismTodoList :items="items"></OrganismTodoList>
    </NuxtLayout>
</template>
