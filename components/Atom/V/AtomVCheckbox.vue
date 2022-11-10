<script setup lang="ts">
const props = defineProps<{
    isChecked: boolean;
    id: string;
}>();
</script>

<template>
    <input
        :id="`checkbox-${props.id}`"
        type="checkbox"
        class="checkbox-input"
        :checked="props.isChecked"
        @input="(e) => $emit('update:isChecked', (e.target as  HTMLInputElement).checked)"
    />
    <label class="flex gap-x-4 items-center" :for="`checkbox-${props.id}`">
        <span class="checkbox flex items-center"> </span>
        <slot name="content"></slot>
    </label>
</template>

<style lang="scss" scoped>
$border-width: 1px;
$size: 25px;
$color: black;
.checkbox-input {
    display: none;
    &:checked + label .checkbox {
        &:after {
            transform: translate(-50%, -50%) scale(1);
        }
    }
}

.checkbox {
    border-radius: 25%;
    border: $border-width solid $color;
    width: $size;
    height: $size;
    display: inline-block;
    position: relative;

    &:after {
        content: "";
        border-radius: 25%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: $size;
        height: $size;
        background-color: $color;
        transition: 0.2s;
    }
}
</style>
