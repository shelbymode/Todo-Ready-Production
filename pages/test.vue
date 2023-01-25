<script setup lang="ts">
import { UserPloc } from "~~/client/core/user/presentation/UserPloc";

const userPloc = inject<UserPloc>("userPloc") as UserPloc;
// const authState = useVPlocState(authPloc);

const id = "9aa8e1cd-8fa7-42fa-87c2-7cf117f3bea7";
// const getAllUsers = () => userPloc.getAllUsers();
const getUserById = () => userPloc.getUserById(id);
</script>

<template>
    <div class="h-screen h-full bg-dark-500 flex justify-center items-center">
        <div
            class="w-1/2 h-1/2 rounded-xl bg-neutral-100 flex items-center flex-wrap gap-x-5"
        >
            <button class="bg-emerald-200 text-black text-xl border-2 p-3 p-3">
                create user
            </button>
            <button
                class="bg-emerald-200 text-black text-xl border-2 p-3 p-3"
                @click="getUserById"
            >
                get user by id
            </button>
            <button class="bg-emerald-200 text-black text-xl border-2 p-3 p-3">
                get all users
            </button>
            <button class="bg-emerald-200 text-black text-xl border-2 p-3 p-3">
                get users by filter
            </button>
            <button class="bg-emerald-200 text-black text-xl border-2 p-3 p-3">
                edit user by id
            </button>
            <button class="bg-emerald-200 text-black text-xl border-2 p-3 p-3">
                remove user by id
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
