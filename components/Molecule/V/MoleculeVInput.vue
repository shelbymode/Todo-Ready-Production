<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { useMoleculeVInput } from "~~/composition/V/useMoleculeVInput";

const props = withDefaults(
    defineProps<{
        id: string;
        modelValue: string;
        placeholder?: string;
        label?: string;
        type?: "text" | "password";
        statusValidation?:
            | "inactive"
            | "initial-error"
            | "dirty-error"
            | "correct";
    }>(),
    {
        statusValidation: "inactive",
        type: "text",
    }
);

const [isFocus, toggleFocus] = useToggle(false);
const { colorStatusValidation, inputIsNotEmpty } = useMoleculeVInput(
    props,
    isFocus
);
</script>

<template>
    <label
        v-if="label"
        :for="id"
        class="relative w-full text-2xl font-normal opacity-100"
        ><span
            class="label duration-300 text-dark-700"
            :class="{ 'label-start': isFocus || inputIsNotEmpty }"
            >{{ label }}</span
        >
        <input
            v-bind="$attrs"
            :id="id"
            :name="id"
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            class="w-full px-10 font-normal text-2xl py-6 focus:outline-none"
            @focus="toggleFocus()"
            @blur="toggleFocus()"
            @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
    /></label>
</template>

<style lang="scss" scoped>
input {
    background-color: transparent;
    border-bottom: 4px solid v-bind(colorStatusValidation);
}
.label {
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);
}
.label-start {
    position: absolute;
    left: 0%;
    top: 0%;
    transform: translateY(-100%);
}
</style>
