<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        name: string;
        type?: "button" | "submit" | "reset";
        shape?: "rect" | "rounded";
        mainColor?: string;
        addColor?: string;
        disabled?: boolean;
    }>(),
    {
        type: "button",
        name: "Some button",
        shape: "rounded",
        disabled: false,
    }
);

const mainColor = props.mainColor || "rgba(22,22,22,0.9)";
const addColor = props.addColor || "rgba(5,150,105,0.9)";
</script>

<template>
    <button
        :type="props.type"
        :disabled="props.disabled"
        class="transition-450 rounded-xl px-10 py-6 w-max flex justify-center items-center text-3xl font-bold"
    >
        {{ props.name }}
        <!-- <span i-carbon-add class="text-5xl"></span> -->
    </button>
</template>

<style lang="scss" scoped>
button {
    color: v-bind(mainColor);
    border: 3px solid v-bind(mainColor);
    &:hover {
        color: v-bind(addColor);
        transform: scale(1.1);
        border: 3px solid v-bind(addColor);
    }
}

button[disabled] {
    color: v-bind(mainColor);
    border: 3px solid v-bind(mainColor);
    opacity: 0.25;
    transform: scale(0.9);
    &:hover {
        transform: scale(0.9);
    }
}
</style>
