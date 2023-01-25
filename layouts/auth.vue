<script setup lang="ts">
import { AuthPloc } from "~~/client/core/auth/presentation/AuthPloc";
import { useVPlocState } from "~~/composition/V/useVPlocState";

const authPloc = inject<AuthPloc>("authPloc") as AuthPloc;
const authState = useVPlocState(authPloc);

const logout = () => authPloc.logout();
</script>

<template>
    {{ authState }}
    <div class="container-outer min-h-screen fixed w-screen"></div>
    <main
        class="container-auth gap-x-6 flex max-h-4/5 h-full w-2/3 fixed left-1/2 top-1/2 rounded-3xl"
    >
        <div class="container-picture rounded-l-3xl basis-3/5">
            <NuxtLink class="h-20 w-full border-2 block" to="/"></NuxtLink>
            <div
                class="h-20 bg-red-500 w-full border-2 block"
                @click="logout"
            ></div>
        </div>
        <div class="container-form basis-2/5">
            <slot />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container-outer {
    background: url("/images/outer-bg.jpg") center/cover no-repeat;
    filter: grayscale(90%) opacity(60%);
    height: 1px;
}

.container-auth {
    transform: translate(-50%, -50%);
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
        rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
        rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
.container-picture {
    background: url("/images/auth-bg.webp") center/cover no-repeat;
    filter: grayscale(50%) opacity(70%);
}

.container-form {
}
</style>
