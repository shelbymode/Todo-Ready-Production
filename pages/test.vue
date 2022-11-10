<script setup lang="ts"></script>

<template>
    <div flex="~ col" bg-emerald-200 class="w-1/2" gap-y-20 border-black border-3 p-20>
        <div flex="~ col">
            <input
                v-model="formLogin.email"
                class="bg-dark-500/70 px-3 py-2 rounded-xl text-white"
                placeholder="email"
                type="text"
                @input="v$.email.$touch"
            />
            <p v-if="isErrorAndDirty('email')" class="text-sm font-bold text-red-900">
                {{ getMessage("email") }}
            </p>
        </div>

        <div flex="~ col">
            <input
                v-model="formLogin.name"
                class="bg-dark-500/70 px-3 py-2 rounded-xl text-white"
                placeholder="name"
                type="text"
                @input="v$.name.$touch"
            />
            <p v-if="isErrorAndDirty('name')" class="text-sm font-bold text-red-900">
                {{ getMessage("name") }}
            </p>
        </div>
        <div flex="~ col" class="border-2 border-dark-500/50 p-3 text-sm">
            <p>invalid: {{ v$ }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
